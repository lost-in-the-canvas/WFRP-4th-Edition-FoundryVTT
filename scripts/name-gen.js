class NameGenWfrp
{
  static _loadNames()
  {
    console.log("wfrp4e | Loading Names...")
    fetch("systems/wfrp4e/names/human_surnames.txt").then(r => r.text()).then(async nameText =>
    {
      this.surnames = []
      nameText.split("\n").forEach((nameGroup) => this.surnames.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })
    fetch("systems/wfrp4e/names/human_surnames_prefix.txt").then(r => r.text()).then(async nameText =>
    {
      this.surnamePrefixes = []
      nameText.split("\n").forEach((nameGroup) => this.surnamePrefixes.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })
    fetch("systems/wfrp4e/names/human_surnames_suffix.txt").then(r => r.text()).then(async nameText =>
    {
      this.surnameSuffixes = []
      nameText.split("\n").forEach((nameGroup) => this.surnameSuffixes.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })
    fetch("systems/wfrp4e/names/male_human_forenames.txt").then(r => r.text()).then(async nameText =>
    {
      this.maleForenames = []
      nameText.split("\n").forEach((nameGroup) => this.maleForenames.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })
    fetch("systems/wfrp4e/names/female_human_forenames.txt").then(r => r.text()).then(async nameText =>
    {
      this.femaleForenames = []
      nameText.split("\n").forEach((nameGroup) => this.femaleForenames.push(nameGroup.split(",").map(function (item)
      {
        return item.trim()
      })))
    })
  }

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
    else
      options.gender = (new Roll("1d2").roll().total == 1 ? "male" : "female")

    return this.generateForename(options) + " " + this.generateSurname(options)
  }

  static generateForename(
  {
    species,
    gender
  })
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
    else
    {
      let prefixSize = this.surnamePrefixes.length;
      let suffixSize = this.surnameSuffixes.length;
      let prefixChoice = this.surnamePrefixes[new Roll(`1d${prefixSize}-1`).roll().total][0]
      let suffixChoice = this.surnameSuffixes[new Roll(`1d${suffixSize}-1`).roll().total][0]

      return this.evaluateNamePartial(prefixChoice) + this.evaluateNamePartial(suffixChoice)
    }
  }

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


  static evaluateChoices(choiceString)
  {
    if (!choiceString)
      return choiceString
    let choices = Array.from(choiceString.matchAll(/(\w+)[\/]*/g))
    let choice = new Roll(`1d${choices.length}-1`).roll().total;
    return choices[choice][1]
  }
}