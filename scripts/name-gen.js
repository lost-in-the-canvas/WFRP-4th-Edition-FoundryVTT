/**
 * Specialized class to consume and generate from a large list of human name options extracted from
 * http://www.windsofchaos.com/wp-content/uploads/encroachment/book-of-imperial-names.pdf
 * See the `names` folder in the system directory to examine the list of names and options.
 */

class NameGenWfrp
{
  static _loadNames()
  {
    console.log("wfrp4e | Loading Names...")

    // Surname option 1
    fetch("systems/wfrp4e/names/human_surnames.txt").then(r => r.text()).then(async nameText =>
    {
      this.surnames = []
      nameText.split("\n").forEach((nameGroup) => this.surnames.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })
    // Surname option 2 - prefix
    fetch("systems/wfrp4e/names/human_surnames_prefix.txt").then(r => r.text()).then(async nameText =>
    {
      this.surnamePrefixes = []
      nameText.split("\n").forEach((nameGroup) => this.surnamePrefixes.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })

    // Surname option 2 - suffix
    fetch("systems/wfrp4e/names/human_surnames_suffix.txt").then(r => r.text()).then(async nameText =>
    {
      this.surnameSuffixes = []
      nameText.split("\n").forEach((nameGroup) => this.surnameSuffixes.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })

    // Male forenames
    fetch("systems/wfrp4e/names/male_human_forenames.txt").then(r => r.text()).then(async nameText =>
    {
      this.maleForenames = []
      nameText.split("\n").forEach((nameGroup) => this.maleForenames.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })

    // Female forenames
    fetch("systems/wfrp4e/names/female_human_forenames.txt").then(r => r.text()).then(async nameText =>
    {
      this.femaleForenames = []
      nameText.split("\n").forEach((nameGroup) => this.femaleForenames.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })
  }

  /**
   * Generate a Forename + Surname
   * 
   * @param {Object} options species, gender
   */
  static generateName(options = {species: "human"})
  {
    if (!options.species)
    {
      options.species = "human"
    }
    if (options.species != "human")
      return ""
    if (options.species)
      options.species = options.species.toLowerCase()
    if (options.gender)
      options.gender = options.gender.toLowerCase();
    else // Generate male/female randomly
      options.gender = (new Roll("1d2").roll().total == 1 ? "male" : "female")

    return this.generateForename(options) + " " + this.generateSurname(options)
  }

  /**
   * Generate a forename
   * 
   * @param {Object} options species, gender
   */
  static generateForename({species,gender})
  {
    species = species || "human"
    gender = gender || "male"
    let names = this[`${gender}Forenames`];
    let size = names.length
    let roll = new Roll(`1d${size}-1`).roll().total
    let nameGroup = names[roll]

    let base = nameGroup[0]
    let option;
    roll = new Roll(`1d${nameGroup.length}-1`).roll().total
    if (roll != 0)
      option = nameGroup[roll].substr(1)

    return this.evaluateNamePartial(base) + (this.evaluateNamePartial(option || ""));
  }


  /**
   * Generate a Surname - use one of two options
   * 
   * Option 1. Choose and evaluate from a list of surnames
   * Option 2. Choose and evaluate from a list of prefixes and suffixes for surnames
   * 
   * @param {Object} options species, gender
   */
  static generateSurname(options = {species: "human"})
  {

    if (new Roll("1d2").roll().total == 1) // Don't use prefix - suffix
    {
      let size = this.surnames.length;
      let roll = new Roll(`1d${size}-1`).roll().total
      let nameGroup = this.surnames[roll]

      let base = nameGroup[0]
      let option;
      roll = new Roll(`1d${nameGroup.length}-1`).roll().total
      if (roll != 0)
        option = nameGroup[roll].substr(1)

      return this.evaluateNamePartial(base) + (this.evaluateNamePartial(option || ""));
    }
    else // Use prefix and suffix surname
    {
      let prefixSize = this.surnamePrefixes.length;
      let suffixSize = this.surnameSuffixes.length;
      let prefixChoice = this.surnamePrefixes[new Roll(`1d${prefixSize}-1`).roll().total][0]
      let suffixChoice = this.surnameSuffixes[new Roll(`1d${suffixSize}-1`).roll().total][0]

      return this.evaluateNamePartial(prefixChoice) + this.evaluateNamePartial(suffixChoice)
    }
  }

  /**
   * Parses down a name the partials given.
   * 
   * Name partial example: "Bar(f)sheim(er)" - randomly decide what to include within parentheses.
   * 
   * @param {String} namePartial A name partial is the inner choices
   */
  static evaluateNamePartial(namePartial)
  {
    let chooser = new Roll("1d2").roll();
    var options = Array.from(namePartial.matchAll(/\((.+?)\)/g))
    for (let option of options)
    {
      if (chooser.reroll().total == 1)
      {
        namePartial = namePartial.replace(option[0], this.evaluateChoices(option[1]))
      }
      else
      {
        namePartial = namePartial.replace(option[0], "")
      }
    }
    return this.evaluateChoices(namePartial)
  }

  /**
   * A name is typically followed by choices of suffixes to use, separated by a comma.
   * 
   * Example of choices - "Aver, -land(er), -lund(er)" - Aver is not a choice, the other two are choices, however at least one of them is required.
   * 
   * @param {String} choiceString String of name chocies
   */
  static evaluateChoices(choiceString)
  {
    if (!choiceString)
      return choiceString
    let choices = Array.from(choiceString.matchAll(/(\w+)[\/]*/g))
    let choice = new Roll(`1d${choices.length}-1`).roll().total;
    return choices[choice][1]
  }
}