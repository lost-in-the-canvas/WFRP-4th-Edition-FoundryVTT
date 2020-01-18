class DiceWFRP {
    /**
     * Prepare Test is called by the setup functions for the actors (see setupCharacteristic() for info on their usage)
     * The setup functions give 3 main objects to this function, which it expands with data used by all different
     * types of tests. It renders the dialog and creates the Roll object (rolled in the callback function, located
     * in the "setup" functions). It then calls renderRollCard() to post the results of the test to chat
     *
     * @param {Object} dialogOptions      Dialog template, buttons, everything associated with the dialog
     * @param {Object} testData           Test info: target number, SL bonus, success bonus, etc
     * @param {Object} cardOptions        Chat card template and info
     */
    static prepareTest({dialogOptions, testData, cardOptions}) {
      let rollMode = game.settings.get("core", "rollMode");

      // Merge input with generic properties constant between all tests
      mergeObject(testData,
      {
        testDifficulty : "challenging",
        testModifier : 0,
        slBonus : 0,
        successBonus : 0,
      });
      mergeObject(dialogOptions.data,
        {
          testDifficulty : dialogOptions.data.testDifficulty || "challenging",
          difficultyLabels : WFRP4E.difficultyLabels,
          testModifier : (dialogOptions.data.modifier || 0) + dialogOptions.data.advantage * 10 || 0,
          slBonus : dialogOptions.data.slBonus || 0,
          successBonus : dialogOptions.data.successBonus || 0,
        });
      mergeObject(cardOptions,
        {
          user : game.user._id,
          sound : CONFIG.sounds.dice,
          type: CONST.CHAT_MESSAGE_TYPES.ROLL
        })

      var roll;
      // If dialogOptions has a rollOverride, use it (spells, weapons, prayers)
      if (dialogOptions.rollOverride)
        roll = dialogOptions.rollOverride;
      else // Otherwise use a generic test
        roll = ActorWfrp4e.defaultRoll;

      dialogOptions.data.rollMode = rollMode;
      dialogOptions.data.rollModes = CONFIG.rollModes;

      // Render Test Dialog
      renderTemplate(dialogOptions.template, dialogOptions.data).then(dlg => {
        new Dialog({
            title: dialogOptions.title,
            content: dlg,
            buttons : {
              rollButton : {
                label: "Roll",
                callback : html => dialogOptions.callback(html, roll)
              }
            },
            default: "rollButton"
          }).render(true);
      });
    }


    // Roll a standard Test and determine success
    static rollTest(testData){
      let roll;
      testData.function = "rollTest"
      if (testData.roll)
        roll = {total : testData.roll}
      else
        roll = new Roll("1d100").roll(); // Use input roll if exists, otherwise, roll randomly
      let successBonus = testData.successBonus;
      let slBonus = testData.slBonus;
      let targetNum = testData.target;
      let SL
      if (testData.SL == 0)
        SL = testData.SL
      else
        SL = testData.SL  || ((Math.floor(targetNum/10) - Math.floor(roll.total/10)) + slBonus); // Use custom SL if input, otherwise, calculate
      let description = "";

      // Test determination logic can be complicated due to SLBonus
      // SLBonus is always applied, but doesn't change a failure to a success or vice versa
      // Therefore, in this case, a positive SL can be a failure and a negative SL can be a success
      // Additionally, the auto-success/failure range can complicate things even more.

      // Failure
      if (roll.total >= 96 || roll.total > targetNum && roll.total > 5)
      {
        description = "Failure"
        if (roll.total >= 96 && SL > -1)
          SL = -1;

        switch(Math.abs(Number(SL)))
        {
          case 6:
            description = "Astounding " + description;
            break;

          case 5:
          case 4:
            description = "Impressive " + description;
            break;

          case 3:
          case 2:
            break;

          case 1:
          case 0:
            description = "Marginal " + description;
            break;

          default:
            if (Math.abs(Number(SL)) > 6)
              description = "Astounding " + description;
        }
        if (SL > 0)
        {
          description = "Marginal Failure";
          SL = "+" + SL.toString();
        }
        if (SL == 0)
          SL = "-" + SL.toString()

      }
      // Success
      else if (roll.total <= 5 || roll.total <= targetNum)
      {
        description = "Success"
        if (game.settings.get("wfrp4e", "fastSL"))
        {
          let rollString = roll.total.toString();
          if (rollString.length == 2)
            SL = Number(rollString.split('')[0])
          else
            SL = 0;
          SL += slBonus
        }
        SL += successBonus;
        if (roll.total <= 5 && SL < 1)
          SL = 1;

        switch(Math.abs(Number(SL)))
        {
          case 6:
            description = "Astounding " + description;
            break;

          case 5:
          case 4:
            description = "Impressive " + description;
            break;

          case 3:
          case 2:
            break;

          case 1:
          case 0:
            description = "Marginal " + description;
            break;

          default:
            if (Math.abs(Number(SL)) > 6)
              description = "Astounding " + description;
        }
        if (SL < 0)
          description = "Marginal Success";


        if (game.settings.get("wfrp4e", "testAbove100"))
        {
          if (targetNum > 100)
          {
            let addSL = Math.floor((targetNum - 100) / 10)
            SL += addSL;
          }
        }

        if (SL >= 0)
          SL = "+" + SL.toString()

      }

      let rollResults={
        target: targetNum,
        roll: roll.total,
        SL: SL,
        description: description,
        preData : testData,
        extra : {}
      }

      mergeObject(rollResults, testData.extra)

      if (testData.hitLocation)
      {
        if (testData.hitloc)
          rollResults.hitloc = WFRP_Tables.rollTable("hitloc", {lookup : testData.hitloc});
        else
          rollResults.hitloc = WFRP_Tables.rollTable("hitloc");

        rollResults.hitloc.roll = eval(rollResults.hitloc.roll) // Cleaner number when editing chat card
      }


      if (testData.hitLocation)
      {
        if (roll.total > targetNum && roll.total % 11 == 0 || roll.total == 100)
        {
          rollResults.extra.color_red = true;
          rollResults.extra.fumble = "Fumble";
        }
        else if (roll.total <= targetNum && roll.total % 11 == 0)
        {
          rollResults.extra.color_green = true;
          rollResults.extra.critical = "Critical";
        }
      }

      if (game.settings.get("wfrp4e", "criticalsFumblesOnAllTests") && !testData.hitLocation)
      {
        if (roll.total > targetNum && roll.total % 11 == 0 || roll.total == 100)
        {
          rollResults.extra.color_red = true;
          rollResults.description = "Astounding Failure"
        }
        else if (roll.total <= targetNum && roll.total % 11 == 0)
        {
          rollResults.extra.color_green = true;
          rollResults.description = "Astounding Success"
        }
      }


      return rollResults
     }

     // Extend rollTest to account for weapon specifics (criticals, fumbles, etc)
     static rollWeaponTest(testData){

      let testResults = this.rollTest(testData);
      let weapon = testResults.weapon;

      testData.function = "rollWeaponTest"

       if (testResults.description.includes("Failure"))
       {
         if (testResults.roll % 11 == 0 || testResults.roll == 100 || (weapon.properties.flaws.includes("Dangerous") && testResults.roll.toString().includes("9")))
         {
           testResults.extra.fumble = "Fumble"
           if ((weapon.data.weaponGroup.value == "Blackpowder" ||
               weapon.data.weaponGroup.value== "Engineering" ||
               weapon.data.weaponGroup.value== "Explosives") && testResults.roll % 2 == 0)
            {
            testResults.extra.misfire = "Misfire"
            testResults.extra.misfireDamage = eval(testResults.roll.toString().split('').pop() + weapon.data.damage.value)
            }
         }

         if (weapon.data.weaponGroup.value == "Throwing")
          testResults.extra.scatter = "Scatter";

       }
       else
       {
         if (testResults.roll % 11 == 0)
           testResults.extra.critical = "Critical"

         if (weapon.properties.qualities.includes("Impale") && testResults.roll % 10 == 0)
           testResults.extra.critical = "Critical"
       }

       if (testResults.extra.critical)
        testResults.extra.color_green = true;
       if (testResults.extra.fumble)
        testResults.extra.color_red = true;

        // *** Weapon Damage Calculation ***

        let damageToUse = testResults.SL;
        let unitValue = Number(testResults.roll.toString().split("").pop())
        unitValue = unitValue == 0 ? 10 : unitValue; // If unit value == 0, use 10


        if (weapon.properties.qualities.includes("Damaging") && unitValue > Number(testResults.SL))
          damageToUse = unitValue;

        if (testData.extra.attackType == "melee")
          testResults.damage = eval(weapon.data.damage.meleeValue + damageToUse);
        if (testData.extra.attackType == "ranged")
          testResults.damage = eval(weapon.data.damage.rangedValue + damageToUse);

        if (weapon.properties.qualities.includes("Impact"))
          testResults.damage += unitValue;

        if (weapon.properties.flaws.includes("Tiring") && (damageToUse != testResults.SL || weapon.properties.qualities.includes("Impact")))
        {
          if (testData.extra.attackType == "melee")
            testResults.damage = `<a class = "damage-select">${eval(weapon.data.damage.meleeValue + testResults.SL)}</a> | <a class = "damage-select">${testResults.damage}</a>` ;
          if (testData.extra.attackType == "ranged")
            testResults.damage = `<a class = "damage-select">${eval(weapon.data.damage.rangedValue + testResults.SL)}</a> | <a class = "damage-select">${testResults.damage}</a>` ;
        }

       return testResults;
    }

    // Extend rollTest for casting specifics (miscasts, CN, etc)
     static rollCastTest(testData){
      let spell = testData.extra.spell;
      let testResults = this.rollTest(testData);

      let miscastCounter = 0;
      testData.function = "rollCastTest"

      if (game.settings.get("wfrp4e", "partialChannelling"))
      {
        spell.data.cn.value -= spell.data.cn.SL;
      }
      else if (spell.data.cn.SL >= spell.data.cn.value)
      {
        spell.data.cn.value = 0;
      }
      if (testData.extra.malignantInfluence)
        if (Number(testResults.roll.toString().split('').pop()) == 8)
          miscastCounter++;

      if (spell.data.lore.value == "witchcraft")
        miscastCounter++;

      let slOver = (Number(testResults.SL) - spell.data.cn.value)

      if (testResults.description.includes("Failure")) // Failed Test
      {
        testResults.description = "Casting Failed"
        if (testResults.roll % 11 == 0 || testResults.roll == 100)
        {
          testResults.extra.color_red = true;
          miscastCounter++;
        }
      }
      else if (slOver < 0) // Successful test, but unable to cast
      {
        testResults.description = "Casting Failed"

        if (testResults.roll % 11 == 0)
        {
          testResults.extra.color_green = true;
          testResults.description = "Casting Succeeded"
          testResults.extra.critical = "Total Power"

          if (!testData.extra.ID)
            miscastCounter++;
        }
      }
      else // Successful test, casted
      {
        testResults.description = "Casting Succeeded"
        let overcasts = Math.floor(slOver / 2);
        testResults.overcasts = overcasts;

        // If no ID
        if (testResults.roll % 11 == 0)
        {
          testResults.extra.critical = "Critical Cast"
          testResults.extra.color_green = true;

          if (!testData.extra.ID)
            miscastCounter++;
        }

      }

      switch (miscastCounter)
      {
        case 1:
          if (testData.extra.ingredient)
            testResults.extra.nullminormis = "Minor Miscast"
          else
            testResults.extra.minormis = "Minor Miscast"
        break;
        case 2:
            if (testData.extra.ingredient)
            {
              testResults.extra.nullmajormis = "Major Miscast"
              testResults.extra.minormis = "Minor Miscast"
            }
           else
             testResults.extra.majormis = "Major Miscast"
             break;
        case 3:
        testResults.extra.majormis = "Major Miscast"
        break;
      }

      if (testData.extra.ingredient)
        miscastCounter--;
      if (miscastCounter < 0)
        miscastCounter = 0;
      if (miscastCounter > 2)
        miscastCounter = 2

        try
        {
          if (testData.extra.spell.damage && testResults.description.includes("Succeeded"))
            testResults.damage = Number(testResults.SL) +
                                 Number(testData.extra.spell.damage)
        }
        catch (error)
        {
          ui.notifications.error("Error calculating damage: " + error)
        } // If something went wrong calculating damage, do nothing and continue


      return testResults;
    }

    // Extend rollTest for channelling specifics (miscasts, CN, etc)
     static rollChannellTest(testData, actor){
      let spell = testData.extra.spell;
      let miscastCounter = 0;

      let testResults = this.rollTest(testData);
      testData.function = "rollChannellTest"

       let SL = testResults.SL;

       if (testData.extra.malignantInfluence)
         if (Number(testResults.roll.toString().split('').pop()) == 8)
           miscastCounter++;

        if (spell.data.lore.value == "witchcraft")
          miscastCounter++;

        if (testResults.description.includes("Failure")) // Failed Test
        {
          // Optional Rule: If SL in extended test is -/+0, counts as -/+1
          if (Number(SL) == 0 && game.settings.get("wfrp4e", "extendedTests"))
            SL = -1;

         testResults.description = "Channell Failed"
         if (testResults.roll % 11 == 0 || testResults.roll % 10 == 0 || testResults.roll == 100)
         {
           testResults.extra.color_red = true;
           miscastCounter += 2;
         }
        }
       else
       {
         testResults.description = "Channell Succeeded"

          // Optional Rule: If SL in extended test is -/+0, counts as -/+1
         if (Number(SL) == 0 && game.settings.get("wfrp4e", "extendedTests"))
          SL = 1;

          if (testResults.roll % 11 == 0)
         {
           testResults.extra.color_green = true;
           spell.data.cn.SL = spell.data.cn.value;
           testResults.extra.criticalchannell = "Critical Channell"
           if (!testData.extra.AA)
             miscastCounter++;
         }
       }

       // Add SL to CN and update actor
       spell.data.cn.SL += Number(SL);
       if (spell.data.cn.SL > spell.data.cn.value)
        spell.data.cn.SL = spell.data.cn.value;
      else if (spell.data.cn.SL < 0)
       spell.data.cn.SL = 0;

       actor.updateEmbeddedEntity("OwnedItem", {_id: spell._id , 'data.cn.SL' : spell.data.cn.SL});

       switch (miscastCounter)
       {
         case 1:
           if (testData.extra.ingredient)
             testResults.extra.nullminormis = "Minor Miscast"
           else
             testResults.extra.minormis = "Minor Miscast"
         break;
         case 2:
             if (testData.extra.ingredient)
             {
               testResults.extra.nullmajormis = "Major Miscast"
               testResults.extra.minormis = "Minor Miscast"
             }
            else
              testResults.extra.majormis = "Major Miscast"
              break;
         case 3:
            testResults.extra.majormis = "Major Miscast"
         break;
       }

       if (testData.extra.ingredient)
         miscastCounter--;
       if (miscastCounter < 0)
         miscastCounter = 0;
       if (miscastCounter > 2)
         miscastCounter = 2
       return testResults;
   }

    // Extend rollTest for pray specifics (sin, wrath of the gods, etc)
   static rollPrayTest(testData, actor){
    let prayer = testData.extra.prayer;

    let testResults = this.rollTest(testData);
    testData.function = "rollPrayTest"

    let SL = testResults.SL;
    let extensions = 0;
    let currentSin = actor.data.data.status.sin.value;
    testData.extra.sin = currentSin;


     if (testResults.description.includes("Failure"))
     {
       testResults.description = "Prayer Refused"
       let unitResult = Number(testResults.roll.toString().split('').pop())
       if (unitResult == 0)
        unitResult = 10;
       if (testResults.roll % 11 == 0 || unitResult <= currentSin)
         {
           if (testResults.roll % 11 == 0)
            testResults.extra.color_red = true;
           testResults.extra.wrath = "Wrath of the Gods"
           currentSin--;
           if (currentSin < 0)
            currentSin = 0;
          actor.update({"data.status.sin.value" : currentSin});
          }

     }
     else
     {
       testResults.description = "Prayer Granted"
       let unitResult = Number(testResults.roll.toString().split('').pop())
       if (unitResult == 0)
        unitResult = 10;
       if (unitResult <= currentSin)
       {
         testResults.extra.wrath = "Wrath of the Gods"
         currentSin--;
         if (currentSin < 0)
          currentSin = 0;
        actor.update({"data.status.sin.value" : currentSin});
       }
      extensions = Math.floor(SL/2);
     }


     try
     {
       if (testData.extra.prayer.damage && testResults.description.includes("Granted"))
       testData.extra.damage = Number(testResults.SL) +
                               Number(testData.extra.prayer.damage)
     }
     catch (error)
     {
       ui.notifications.error("Error calculating damage: " + error)
     } // If something went wrong calculating damage, do nothing and still render the card

     testResults.extensions = extensions;
     return testResults;
  }

  /** Take roll data and display it in a chat card template
  * @param {Object} chatOptions - Object concerning display of the card like the template or which actor is testing
  * @param {Object} testData - Test results, values to display, etc.
  */
   static renderRollCard(chatOptions, testData, rerenderMessage) {

    if (game.settings.get("wfrp4e", "manualChatCards") && !rerenderMessage)
    {
      testData.roll = testData.SL = null;
    }

     let chatData = {
       title : chatOptions.title,
       testData : testData,
       hideData : game.user.isGM,
     }

     if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
     if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;
     //else if ( chatOptions.rollMode === "selfroll" ) chatOptions["whisper"] = [game.user._id];

     // All the data need to recreate the test when chat card is edited
     chatOptions["flags.data"] = {
      preData : chatData.testData.preData,
      postData : chatData.testData,
      template : chatOptions.template,
      rollMode : chatOptions.rollMode,
      title : chatOptions.title,
      hideData : chatData.hideData
    };

    if (!rerenderMessage)
    {
      // Generate HTML from the requested chat template
      return renderTemplate(chatOptions.template, chatData).then(html => {
        // Emit the HTML as a chat message
        if (game.settings.get("wfrp4e", "manualChatCards"))
        {
          let blank = $(html)
          let elementsToToggle = blank.find(".display-toggle")

          for (let elem of elementsToToggle)
          {
            if (elem.style.display == "none")
              elem.style.display = ""
            else
              elem.style.display = "none"
          }
          html = blank.html();
        }

        chatOptions["content"] = html;

        return ChatMessage.create(chatOptions, false);
      });
    }
    else
    {
      // Generate HTML from the requested chat template
      return renderTemplate(chatOptions.template, chatData).then(html => {

        // Emit the HTML as a chat message
        chatOptions["content"] = html;
        return rerenderMessage.update(
        {
          content: html,
          ["flags.data"] : chatOptions["flags.data"]
        }, true).then(newMsg => {
          ui.chat.updateMessage(newMsg);
        });
      });
    }
  }

    static chatListeners(html) {


      html.on("click", ".item-lookup", async ev => {
        let itemType = $(ev.currentTarget).attr("data-type");
        let location = $(ev.currentTarget).attr("data-location");
        let name = $(ev.currentTarget).attr("data-name");
        let item;
        if (name)
          item = await WFRP_Utility.findItem(name, itemType, location);
        else if (location)
          item = await WFRP_Utility.findItem(ev.currentTarget.text, itemType, location);

        if (!item)
          WFRP_Utility.findItem(ev.currentTarget.text, itemType).then(item => item.postItem());
        else
          item.postItem()
      })

      html.on("click", ".talent-lookup", async ev => {
        WFRP_Utility.findTalent(ev.target.text).then(talent => talent.sheet.render(true));
      })

      html.on("click", ".skill-lookup", async ev => {
        WFRP_Utility.findSkill(ev.target.text).then(skill => skill.sheet.render(true));
      })

      html.on("mousedown", ".talent-drag", async ev => {
        if (ev.button == 2)
          WFRP_Utility.findTalent(ev.target.text).then(talent => talent.sheet.render(true));
      })

      html.on("mousedown", ".skill-drag", async ev => {
        if (ev.button == 2)
          WFRP_Utility.findSkill(ev.target.text).then(skill => skill.sheet.render(true));
      })

      html.on("click", ".chat-roll", ev => {
        let roll = ev.target.text;
        let rollMode = game.settings.get("core", "rollMode");
        new Roll(roll).roll().toMessage({user : game.user._id, rollMode})
      })

      html.on("click", ".symptom-tag", ev => {
        WFRP_Utility.postSymptom(ev.target.text)
      })

      html.on("click", ".condition-chat", ev => {
        let cond = ev.target.text;
        cond = cond.split(" ")[0]
        let condkey = WFRP_Utility.findKey(cond, WFRP4E.conditions);
        let condDescr = WFRP4E.conditionDescriptions[condkey];
        let messageContent = `<b>${cond}</b><br>${condDescr}`

        let chatData = WFRP_Utility.chatDataSetup(messageContent)
        ChatMessage.create(chatData);
      })


      html.on('mousedown', '.table-click', ev => {
        ev.preventDefault();
        let sin = Number($(ev.currentTarget).attr("data-sin"));
        let modifier = sin * 10 || 0;
        let html;
        let messageId = $(ev.currentTarget).parents('.message').attr("data-message-id");
        let senderId = game.messages.get(messageId).user._id;
        let chatOptions = {user : senderId, rollMode : game.settings.get("core", "rollMode")};


        if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
        if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;

        if (ev.button == 0)
        {
          if (ev.target.text == "Critical Cast")
          {
            html = WFRP_Tables.criticalCastMenu($(ev.currentTarget).attr("data-table"));
          }

          else if (ev.target.text == "Total Power")
            html = WFRP_Tables.restrictedCriticalCastMenu();

          else if ($(ev.currentTarget).attr("data-table") == "misfire")
          {
            let damage = $(ev.currentTarget).attr("data-damage")
            html = "<b>Misfire</b>: Your weapon explodes! Take " + damage + " damage to your primary arm.";
          }
          else if (sin)
            html = WFRP_Tables.formatChatRoll($(ev.currentTarget).attr("data-table"), {modifier: modifier, maxSize: false});
          else
            html = WFRP_Tables.formatChatRoll($(ev.currentTarget).attr("data-table"), {modifier: modifier}, $(ev.currentTarget).attr("data-column"));

           chatOptions["content"] = html;
          chatOptions["type"] = 0;
          ChatMessage.create(chatOptions);

        }
        else if (ev.button == 2)
        {
          renderTemplate('systems/wfrp4e/templates/chat/table-dialog.html').then(html => {
            new Dialog({
              title: "Table Modifier",
              content: html,
              buttons: {
                roll: {
                  label: "Roll",
                  callback: (html) => {
                    let tableModifier = html.find('[name="tableModifier"]').val();
                    let minOne = html.find('[name="minOne"]').is(':checked');
                    html = WFRP_Tables.formatChatRoll($(ev.currentTarget).attr("data-table"), {modifier: tableModifier, minOne : minOne});
                    chatOptions["content"] = html;
                    chatOptions["type"] = 0;
                    ChatMessage.create(chatOptions);
                  }
                },
              },
              default: 'roll'
            }).render(true);
          })
        }
      })

      html.on('focusout', '.card-edit', ev => {
        let button = $(ev.currentTarget),
        messageId = button.parents('.message').attr("data-message-id"),
        message = game.messages.get(messageId);
        let data = message.data.flags.data
        let actor = WFRP_Utility.getSpeaker(message.data.speaker);
        let newTestData = data.preData;
        newTestData[button.attr("data-edit-type")] = parseInt(ev.target.value)

        if (button.attr("data-edit-type") == "hitloc") // If changing hitloc, keep old value for roll
          newTestData["roll"] = $(message.data.content).find(".card-content.test-data").attr("data-roll")
        else // If not changing hitloc, use old value for hitloc
          newTestData["hitloc"] = $(message.data.content).find(".card-content.test-data").attr("data-loc")

        if (button.attr("data-edit-type") == "SL") // If changing SL, keep both roll and hitloc
        {
          newTestData["roll"] = $(message.data.content).find(".card-content.test-data").attr("data-roll")
          newTestData.slBonus = 0;
          newTestData.successBonus = 0;
        }

        if (button.attr("data-edit-type") == "target") // If changing target, keep both roll and hitloc
          newTestData["roll"] = $(message.data.content).find(".card-content.test-data").attr("data-roll")


        let chatOptions = {
          template : data.template,
          rollMode : data.rollMode,
          title : data.title,
          speaker : message.data.speaker,
          user : message.user.data._id
        }

        if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
        if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;

        ActorWfrp4e[`${data.postData.postFunction}`](newTestData, chatOptions, message);
      })

      // Chat card actions
      html.on('click', '.edit-toggle', ev => {
        ev.preventDefault();
        this.toggleEditable(ev.currentTarget)
      });

      html.on('click', '.opposed-toggle', ev => {
        ev.preventDefault();
        OpposedWFRP.opposedClicked(ev)
      });

      html.on("click", '.item-property', event => {
        event.preventDefault();

        WFRP_Utility.postProperty(event.target.text);

      });

    html.on("click", '.species-select', event => {
      event.preventDefault();

      GeneratorWfrp4e.rollSpecies(
        $(event.currentTarget).parents('.message').attr("data-message-id"),
        $(event.currentTarget).attr("data-species")); // Choose selected species
    });
    html.on("click", '.chargen-button', event => {
      event.preventDefault();
      switch ($(event.currentTarget).attr("data-button"))
      {
        case "rollSpecies" : GeneratorWfrp4e.rollSpecies($(event.currentTarget).parents('.message').attr("data-message-id"))
          break;
        case "rollCareer" : GeneratorWfrp4e.rollCareer($(event.currentTarget).attr("data-species"), WFRP4E.randomExp.careerRand)
          break;
        case "rerollCareer" : GeneratorWfrp4e.rollCareer($(event.currentTarget).attr("data-species"), WFRP4E.randomExp.careerReroll, true)
                              GeneratorWfrp4e.rollCareer($(event.currentTarget).attr("data-species"), WFRP4E.randomExp.careerReroll, true)
          break;
        case "chooseCareer" : GeneratorWfrp4e.chooseCareer($(event.currentTarget).attr("data-species"))
          break;
        case "rollAttributes" : GeneratorWfrp4e.rollAttributes($(event.currentTarget).attr("data-species"),WFRP4E.randomExp.statsRand)
          break;
        case "rollDetails" : GeneratorWfrp4e.rollDetails($(event.currentTarget).attr("data-species"))
          break;
      }
    });

    html.on("click", '.career-select', event => {
      event.preventDefault();
      let careerSelected = $(event.currentTarget).attr("data-career")
      let species = $(event.currentTarget).attr("data-species")
      GeneratorWfrp4e.displayCareer(careerSelected, species, 0, false, true)
    });
      
    html.on("click", '.random-talents', event => {
      event.preventDefault();
      $(event.currentTarget).attr("data-num")
    });

    html.on("click", '.unopposed-button', event =>{
      event.preventDefault()
      let messageId = $(event.currentTarget).parents('.message').attr("data-message-id")
      OpposedWFRP.resolveUnopposed(messageId)
    })

    html.on("click", '.damage-select', event =>{
      event.preventDefault()
      let messageId = $(event.currentTarget).parents('.message').attr("data-message-id")
      let message = game.messages.get(messageId)
      let msgContent = $(message.data.content)
      msgContent.find(".card-damage").replaceWith(`(${event.target.text} Damage)`)
      let newContent = msgContent.html()

      message.update({content: newContent , "flags.data.postData.damage" : Number(event.target.text)})
    })

    html.on("click", '.hidden-table', event =>{
      event.preventDefault()
      let html = WFRP_Tables.tableMenu(true);
      let chatData = WFRP_Utility.chatDataSetup(html)
      ChatMessage.create(chatData);
    })
  }
  
    static toggleEditable(html)
    {
      let elementsToToggle = $(html).parents(".chat-card").find(".display-toggle")
      if (!elementsToToggle.length)
        elementsToToggle = $(html).find(".display-toggle")

      for (let elem of elementsToToggle)
      {
        if (elem.style.display == "none")
          elem.style.display = ""
        else
          elem.style.display = "none"
      }
    }
  }