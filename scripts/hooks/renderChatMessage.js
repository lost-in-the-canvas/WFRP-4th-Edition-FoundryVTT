Hooks.on("renderChatMessage", async (app, html, msg) => {
  
  if (game.settings.get("wfrp4e", "hideTestData") && !game.user.isGM && html.find(".chat-card").attr("data-hide") == "true")
  {
    html.find(".hide-option").remove();
  }

  if (!game.user.isGM)
  {
    html.find(".chat-buttons").remove();
  }


  if (html.hasClass("blind") && !game.user.isGM)
    html.html("").css("display", "none");

  let postedItem = html.find(".post-item")[0]
  if (postedItem)
  {
    postedItem.setAttribute("draggable", true);

    postedItem.addEventListener('dragstart', ev => {
      ev.dataTransfer.setData("text/plain", app.data.flags.transfer);
    })
  }
  let generation = html.find(".char-gen")[0]
  if (generation)
  {
    generation.setAttribute("draggable", true);
    generation.addEventListener('dragstart', ev => {
      ev.dataTransfer.setData("text/plain", app.data.flags.transfer);
    })
  }

  html.find(".skill-drag").each(function() {
  let skill = $(this)[0]
  skill.setAttribute("draggable", true)
  skill.addEventListener('dragstart', ev => {
      let dataTransfer = {
        name : ev.target.text,
        lookupType : "skill"
      }
      ev.dataTransfer.setData("text/plain", JSON.stringify(dataTransfer));
    })
  })

  
  html.find(".talent-drag").each(function() {
    let talent = $(this)[0]
    talent.setAttribute("draggable", true)
    talent.addEventListener('dragstart', ev => {
        let dataTransfer = {
          name : ev.target.text,
          lookupType : "talent"
        }
        ev.dataTransfer.setData("text/plain", JSON.stringify(dataTransfer));
      })
    })


  
  html.find(".exp-drag").each(function() {
    let exp = $(this)[0]
    exp.setAttribute("draggable", true)
    exp.addEventListener('dragstart', ev => {
        let dataTransfer = {
          exp : parseInt($(exp).attr("data-exp"))
        }
        ev.dataTransfer.setData("text/plain", JSON.stringify(dataTransfer));
      })
    })

    html.find(".money-drag").each(function() {
      let amount = $(this)[0]
      amount.setAttribute("draggable", true)
      amount.addEventListener('dragstart', ev => {
          let dataTransfer = {
            money : $(amount).attr("data-amt")
          }
          ev.dataTransfer.setData("text/plain", JSON.stringify(dataTransfer));
          console.log($(amount).attr("data-amt"))
        })
      })

})