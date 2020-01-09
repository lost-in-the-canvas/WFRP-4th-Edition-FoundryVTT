/**
 * Provides the specific interaction handlers for Character Sheets.
 *
 * ActorSheetWfrp4eCharacter are assigned to character type actors, and the specific interactions
 * character type actors need are defined here, specifically for careers and spending exp.
 * 
 */
class ActorSheetWfrp4eCharacter extends ActorSheetWfrp4e
{
	static get defaultOptions()
	{
		const options = super.defaultOptions;
		mergeObject(options,
		{
			classes: options.classes.concat(["wfrp4e", "actor", "character-sheet"]),
			width: 610,
			height: 740,
		});
		return options;
	}


	/**
	 * Get the correct HTML template path to use for rendering this particular sheet
	 * @type {String}
	 */
	get template()
	{
		if (!game.user.isGM && this.actor.limited) return "systems/wfrp4e/templates/actors/actor-limited.html";
		return "systems/wfrp4e/templates/actors/actor-sheet.html";

	}


	/* --------------------------------------------------------------------------------------------------------- */
	/* ------------------------------------ Event Listeners and Handlers --------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------- */
	/**
	 * This list of event handlers is focused on character interactions, such has spending exp and handling careers.
	 * 
	 *
	/* --------------------------------------------------------------------------------------------------------- */

	/**
	 * Activate event listeners using the prepared sheet HTML
	 * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
	 */
	activateListeners(html)
	{
		super.activateListeners(html);

    // Career toggle click (current or complete)
		html.find('.career-toggle').click(async ev =>
		{
			let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
			let type = $(ev.currentTarget).attr("toggle-type")
			let item = this.actor.getOwnedItem(itemId).data;
			item.data[type].value = !item.data[type].value; // Toggle the value

      // "Current" is the toggle that actually means something, so needs more processing
			if (type == "current")
			{
        // Assign characteristics to be available or not based on the current career
				let availableCharacteristics = item.data.characteristics
				let characteristics = this.actor.data.data.characteristics;
				if (item.data.current.value)
				{
					for (let char in characteristics)
					{
						characteristics[char].career = false;
						if (availableCharacteristics.includes(char))
							characteristics[char].career = true;
					}
				}
				else
				{
					for (let char in characteristics)
					{
						characteristics[char].career = false;
					}
				}
				this.actor.update(
				{
					"data.characteristics": characteristics
				})
			}

			// Only one career can be current - make all other careers not current
			if (type == "current" && item.data.current.value == true)
			{
				let updateCareers = duplicate(this.actor.data.items.filter(c => c.type == "career" && c.id != item.id))
				updateCareers.map(x => x.data.current.value = false)
				await this.actor.updateManyOwnedItem(updateCareers)
			}
			this.actor.updateOwnedItem(item);
		});

    // Grayed-out skill click - prompt to add the skill
		html.find(".untrained-skill").mousedown(async ev =>
		{

			let skill = await WFRP_Utility.findSkill(event.target.text);

      // Right click - show sheet
			if (ev.button == 2)
			{
				skill.sheet.render(true);
			}
			else
			{
				try
				{
					new Dialog(
					{
						title: "Add Career Skill",
						content: '<p>Do you want to add this skill?</p>',
						buttons:
						{
							yes:
							{
								label: "Yes",
								callback: dlg =>
								{
									this.actor.createOwnedItem(skill.data);
								}
							},
							cancel:
							{
								label: "Cancel",
								callback: dlg =>
								{
									return
								}
							},
						},
						default: 'yes'
					}).render(true);
				}
				catch
				{
					console.error(error)
					ui.notifications.error(error)
				}
			}
		})

    // Grayed-out talent click - prompt to add the talent
		html.find(".untrained-talent").mousedown(async ev =>
		{
			let talent = await WFRP_Utility.findTalent(event.target.text);

      // Right click - show sheet
			if (ev.button == 2)
			{
				talent.sheet.render(true);
			}

			else
			{
				try
				{
					new Dialog(
					{
						title: "Add Career Talent",
						content: '<p>Do you want to add this Talent? (Costs 100 Exp)</p>',
						buttons:
						{
							yes:
							{
								label: "Yes",
								callback: dlg =>
								{
									this.actor.createOwnedItem(talent.data);
									this.actor.update( // Subtract experience if added
									{
										"data.details.experience.spent": this.actor.data.data.details.experience.spent + 100
									})
								}
							},
							cancel:
							{
								label: "Cancel",
								callback: dlg =>
								{
									return
								}
							},
						},
						default: 'yes'
					}).render(true);
				}
				catch
				{
					console.error(error)
					ui.notifications(error)
				}
			}
		})

    // Advancement indicators appear next to characteristic, skills, and talents available to spend exp on
    // Left click spends exp - right click reverses
		html.find('.advancement-indicator').mousedown(async ev =>
		{
			let data = duplicate(this.actor.data.data);
			let type = $(ev.target).attr("data-target");

      // Skills
			if (type == "skill")
			{
				let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
				let item = this.actor.getOwnedItem(itemId);

				if (ev.button == 0)
				{
          // Calculate the advancement cost based on the current number of advances, subtract that amount, advance by 1
					let cost = WFRP_Utility._calculateAdvCost(item.data.data.advances.value, type)
					data.details.experience.spent = Number(data.details.experience.spent) + cost;
					item.data.data.advances.value++;
					this.actor.updateOwnedItem(
					{
						id: itemId,
						"data.advances.value": item.data.data.advances.value
					});
					this.actor.update(
					{
						"data.details.experience.spent": data.details.experience.spent
					});
				}
				else if (ev.button = 2)
				{
          // Do the reverse, calculate the advancement cost (after subtracting 1 advancement), add that exp back
					if (item.data.data.advances.value == 0)
						return;
					item.data.data.advances.value--;
					let cost = WFRP_Utility._calculateAdvCost(item.data.data.advances.value, type)
					data.details.experience.spent = Number(data.details.experience.spent) - cost;
					this.actor.updateOwnedItem(
					{
						id: itemId,
						"data.advances.value": item.data.data.advances.value
					});
					this.actor.update(
					{
						"data.details.experience.spent": data.details.experience.spent
					});
				}
      }
      // Talents
			else if (type == "talent")
			{
				if (ev.button == 0)
				{
          // All career talents are stored in flags, retrieve the one clicked - use to calculate exp
					let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
					let item = this.actor.getOwnedItem(itemId);
					let preparedTalent = this.actor.data.flags.careerTalents.find(t => t.name == item.data.name)
					let spent = 0;
					if (preparedTalent.data.advances.value < preparedTalent.numMax)
					{
						spent = this.actor.data.data.details.experience.spent + (preparedTalent.data.advances.value + 1) * 100
					}
					else
						return
					this.actor.createOwnedItem(item.data)
					this.actor.update(
					{
						"data.details.experience.spent": spent
					})
				}
				else if (ev.button == 2)
				{
          // Reverse the cost, add to exp, and remove the talent
					let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
					let item = this.actor.getOwnedItem(itemId);
					let preparedTalent = this.actor.data.flags.careerTalents.find(t => t.name == item.data.name)
					let spent = 0;
					spent = this.actor.data.data.details.experience.spent - (preparedTalent.data.advances.value) * 100
					this.actor.deleteOwnedItem(itemId)
					this.actor.update(
					{
						"data.details.experience.spent": spent
					})
				}

      }
      // Characteristics
			else
			{
				let characteristic = type;
				let currentChar = this.actor.data.data.characteristics[characteristic];

				if (ev.button == 0)
				{
          // Calculate the advancement cost based on the current number of advances, subtract that amount, advance by 1
					let cost = WFRP_Utility._calculateAdvCost(currentChar.advances, "characteristic");

					data.characteristics[characteristic].advances++;
					data.details.experience.spent = Number(data.details.experience.spent) + cost;
					await this.actor.update(
					{
						"data.characteristics": data.characteristics,
						"data.details.experience": data.details.experience
					});
				}
				else if (ev.button == 2)
				{
          // Calculate the advancement cost based on advances -1, add that amount back into exp
					if (currentChar.advances == 0)
						return
					let cost = WFRP_Utility._calculateAdvCost(currentChar.advances - 1, "characteristic");

					data.characteristics[characteristic].advances--;
					data.details.experience.spent = Number(data.details.experience.spent) - cost;
					await this.actor.update(
					{
						"data.characteristics": data.characteristics,
						"data.details.experience": data.details.experience
					});
				}
			}
		});
	}
}

// Register Character Sheet
Actors.registerSheet("wfrp4e", ActorSheetWfrp4eCharacter,
{
	types: ["character"],
	makeDefault: true
});