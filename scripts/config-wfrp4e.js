const WFRP4E = {}

CONFIG.ChatMessage.template = "systems/wfrp4e/templates/chat/chat-message.html"

CONFIG.statusEffects = ["systems/wfrp4e/icons/conditions/bleeding1.png",
	"systems/wfrp4e/icons/conditions/bleeding2.png",
	"systems/wfrp4e/icons/conditions/bleeding3.png",
	"systems/wfrp4e/icons/conditions/bleeding4.png",
	"systems/wfrp4e/icons/conditions/poisoned1.png",
	"systems/wfrp4e/icons/conditions/poisoned2.png",
	"systems/wfrp4e/icons/conditions/poisoned3.png",
	"systems/wfrp4e/icons/conditions/poisoned4.png",
	"systems/wfrp4e/icons/conditions/ablaze1.png",
	"systems/wfrp4e/icons/conditions/ablaze2.png",
	"systems/wfrp4e/icons/conditions/ablaze3.png",
	"systems/wfrp4e/icons/conditions/ablaze4.png",
	"systems/wfrp4e/icons/conditions/deafened1.png",
	"systems/wfrp4e/icons/conditions/deafened2.png",
	"systems/wfrp4e/icons/conditions/deafened3.png",
	"systems/wfrp4e/icons/conditions/deafened4.png",
	"systems/wfrp4e/icons/conditions/stunned1.png",
	"systems/wfrp4e/icons/conditions/stunned2.png",
	"systems/wfrp4e/icons/conditions/stunned3.png",
	"systems/wfrp4e/icons/conditions/stunned4.png",
	"systems/wfrp4e/icons/conditions/entangled1.png",
	"systems/wfrp4e/icons/conditions/entangled2.png",
	"systems/wfrp4e/icons/conditions/entangled3.png",
	"systems/wfrp4e/icons/conditions/entangled4.png",
	"systems/wfrp4e/icons/conditions/fatigued1.png",
	"systems/wfrp4e/icons/conditions/fatigued2.png",
	"systems/wfrp4e/icons/conditions/fatigued3.png",
	"systems/wfrp4e/icons/conditions/fatigued4.png",
	"systems/wfrp4e/icons/conditions/blinded1.png",
	"systems/wfrp4e/icons/conditions/blinded2.png",
	"systems/wfrp4e/icons/conditions/blinded3.png",
	"systems/wfrp4e/icons/conditions/blinded4.png",
	"systems/wfrp4e/icons/conditions/broken1.png",
	"systems/wfrp4e/icons/conditions/broken2.png",
	"systems/wfrp4e/icons/conditions/broken3.png",
	"systems/wfrp4e/icons/conditions/broken4.png",
	"systems/wfrp4e/icons/conditions/prone.png",
	"systems/wfrp4e/icons/conditions/fear.png",
	"systems/wfrp4e/icons/conditions/surprised.png",
	"systems/wfrp4e/icons/conditions/unconscious.png",
	"systems/wfrp4e/icons/conditions/grappling.png",
	"systems/wfrp4e/icons/defeated.png",
]

CONFIG.controlIcons.defeated = "systems/wfrp4e/icons/defeated.png";

CONFIG.JournalEntry.noteIcons = {
	"Marker": "systems/wfrp4e/icons/buildings/point_of_interest.png",
	"Apothecary": "systems/wfrp4e/icons/buildings/apothecary.png",
	"Beastmen Herd 1": "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
	"Beastmen Herd 2": "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
	"Blacksmith": "systems/wfrp4e/icons/buildings/blacksmith.png",
	"Bretonnian City 1": "systems/wfrp4e/icons/buildings/bret_city1.png",
	"Bretonnian City 2": "systems/wfrp4e/icons/buildings/bret_city2.png",
	"Bretonnian City 3": "systems/wfrp4e/icons/buildings/bret_city3.png",
	"Bretonnian Worship": "systems/wfrp4e/icons/buildings/bretonnia_worship.png",
	"Caste Hill 1": "systems/wfrp4e/icons/buildings/castle_hill1.png",
	"Caste Hill 2": "systems/wfrp4e/icons/buildings/castle_hill2.png",
	"Caste Hill 3": "systems/wfrp4e/icons/buildings/castle_hill3.png",
	"Castle Wall": "systems/wfrp4e/icons/buildings/castle_wall.png",
	"Cave 1": "systems/wfrp4e/icons/buildings/cave1.png",
	"Cave 2": "systems/wfrp4e/icons/buildings/cave2.png",
	"Cave 3": "systems/wfrp4e/icons/buildings/cave3.png",
	"Cemetery": "systems/wfrp4e/icons/buildings/cemetery.png",
	"Chaos Portal": "systems/wfrp4e/icons/buildings/chaos_portal.png",
	"Chaos Worship": "systems/wfrp4e/icons/buildings/chaos_worship.png",
	"Court": "systems/wfrp4e/icons/buildings/court.png",
	"Dwarf Beer": "systems/wfrp4e/icons/buildings/dwarf_beer.png",
	"Dwarf Hold 1": "systems/wfrp4e/icons/buildings/dwarf_hold1.png",
	"Dwarf Hold 2": "systems/wfrp4e/icons/buildings/dwarf_hold2.png",
	"Dwarf Hold 3": "systems/wfrp4e/icons/buildings/dwarf_hold3.png",
	"Empire Barracks": "systems/wfrp4e/icons/buildings/empire_barracks.png",
	"Empire City 1": "systems/wfrp4e/icons/buildings/empire_city1.png",
	"Empire City 2": "systems/wfrp4e/icons/buildings/empire_city2.png",
	"Empire City 3": "systems/wfrp4e/icons/buildings/empire_city3.png",
	"Farm": "systems/wfrp4e/icons/buildings/farms.png",
	"Food": "systems/wfrp4e/icons/buildings/food.png",
	"Guard Post": "systems/wfrp4e/icons/buildings/guards.png",
	"Haunted Hill": "systems/wfrp4e/icons/buildings/haunted_hill.png",
	"Haunted Wood": "systems/wfrp4e/icons/buildings/haunted_wood.png",
	"Inn 1": "systems/wfrp4e/icons/buildings/inn1.png",
	"Inn 2": "systems/wfrp4e/icons/buildings/inn2.png",
	"Kislev City 1": "systems/wfrp4e/icons/buildings/kislev_city1.png",
	"Kislev City 2": "systems/wfrp4e/icons/buildings/kislev_city2.png",
	"Kislev City 3": "systems/wfrp4e/icons/buildings/kislev_city3.png",
	"Lumber": "systems/wfrp4e/icons/buildings/lumber.png",
	"Magic": "systems/wfrp4e/icons/buildings/magic.png",
	"Metal": "systems/wfrp4e/icons/buildings/metal.png",
	"Mountain 1": "systems/wfrp4e/icons/buildings/mountains1.png",
	"Mountain 2": "systems/wfrp4e/icons/buildings/mountains2.png",
	"Orcs": "systems/wfrp4e/icons/buildings/orcs.png",
	"Orc Camp": "systems/wfrp4e/icons/buildings/orc_city.png",
	"Port": "systems/wfrp4e/icons/buildings/port.png",
	"Road": "systems/wfrp4e/icons/buildings/roads.png",
	"Ruins": "systems/wfrp4e/icons/buildings/ruins.png",
	"Scroll": "systems/wfrp4e/icons/buildings/scroll.png",
	"Sigmar": "systems/wfrp4e/icons/buildings/sigmar_worship.png",
	"Stables": "systems/wfrp4e/icons/buildings/stables.png",
	"Standing Stones": "systems/wfrp4e/icons/buildings/standing_stones.png",
	"Swamp": "systems/wfrp4e/icons/buildings/swamp.png",
	"Temple": "systems/wfrp4e/icons/buildings/temple.png",
	"Textile": "systems/wfrp4e/icons/buildings/textile.png",
	"Tower 1": "systems/wfrp4e/icons/buildings/tower1.png",
	"Tower 2": "systems/wfrp4e/icons/buildings/tower2.png",
	"Tower Hill": "systems/wfrp4e/icons/buildings/tower_hill.png",
	"Wizard Tower": "systems/wfrp4e/icons/buildings/wizard_tower.png",
	"Ulric": "systems/wfrp4e/icons/buildings/ulric_worship.png",
	"Village 1": "systems/wfrp4e/icons/buildings/village1.png",
	"Village 2": "systems/wfrp4e/icons/buildings/village2.png",
	"Village 3": "systems/wfrp4e/icons/buildings/village3.png",
	"Wood Elves 1": "systems/wfrp4e/icons/buildings/welves1.png",
	"Wood Elves 2": "systems/wfrp4e/icons/buildings/welves2.png",
	"Wood Elves 3": "systems/wfrp4e/icons/buildings/welves3.png"
}

// Species
WFRP4E.species = {
	"human": "Human",
	"dwarf": "Dwarf",
	"halfling": "Halfling",
	"helf": "High Elf",
	"welf": "Wood Elf",
};

WFRP4E.speciesCharacteristics = {
	"human": {
		"ws": "2d10+20",
		"bs": "2d10+20",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+20",
		"ag": "2d10+20",
		"dex": "2d10+20",
		"int": "2d10+20",
		"wp": "2d10+20",
		"fel": "2d10+20"
	},
	"dwarf": {
		"ws": "2d10+30",
		"bs": "2d10+20",
		"s": "2d10+20",
		"t": "2d10+30",
		"i": "2d10+20",
		"ag": "2d10+10",
		"dex": "2d10+30",
		"int": "2d10+20",
		"wp": "2d10+40",
		"fel": "2d10+10"
	},
	"halfling": {
		"ws": "2d10+10",
		"bs": "2d10+30",
		"s": "2d10+10",
		"t": "2d10+20",
		"i": "2d10+20",
		"ag": "2d10+20",
		"dex": "2d10+30",
		"int": "2d10+20",
		"wp": "2d10+30",
		"fel": "2d10+30"
	},
	"helf": {
		"ws": "2d10+30",
		"bs": "2d10+30",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+40",
		"ag": "2d10+30",
		"dex": "2d10+30",
		"int": "2d10+30",
		"wp": "2d10+30",
		"fel": "2d10+20"
	},
	"welf": {
		"ws": "2d10+30",
		"bs": "2d10+30",
		"s": "2d10+20",
		"t": "2d10+20",
		"i": "2d10+40",
		"ag": "2d10+30",
		"dex": "2d10+30",
		"int": "2d10+30",
		"wp": "2d10+30",
		"fel": "2d10+20"
	},

}

WFRP4E.speciesSkills = {
	"human": [
		"Animal Care",
		"Charm",
		"Cool",
		"Evaluate",
		"Gossip",
		"Haggle",
		"Language (Bretonnian)",
		"Language (Wastelander)",
		"Leadership",
		"Lore (Reikland)",
		"Melee (Basic)",
		"Ranged (Bow)"
	],
	"dwarf": [
		"Consume Alcohol",
		"Cool",
		"Endurance",
		"Entertain (Storytelling)",
		"Evaluate",
		"Intimidate",
		"Language (Khazalid)",
		"Lore (Dwarfs)",
		"Lore (Geology)",
		"Lore (Metallurgy)",
		"Melee (Basic)",
		"Trade (any one)"
	],
	"halfling": [
		"Charm",
		"Consume Alcohol",
		"Dodge",
		"Gamble",
		"Haggle",
		"Intuition",
		"Language (Mootish)",
		"Lore (Reikland)",
		"Perception",
		"Sleight of Hand",
		"Stealth (Any)",
		"Trade (Cook)"
	],
	"helf": [
		"Cool",
		"Entertain (Sing)",
		"Evaluate",
		"Language (Eltharin)",
		"Leadership",
		"Melee (Basic)",
		"Navigation",
		"Perception",
		"Play (any one)",
		"Ranged (Bow)",
		"Sail",
		"Swim"
	],
	"welf": [
		"Athletics",
		"Climb",
		"Endurance",
		"Entertain (Sing)",
		"Intimidate",
		"Language (Eltharin)",
		"Melee (Basic)",
		"Outdoor Survival",
		"Perception",
		"Ranged (Bow)",
		"Stealth (Rural)",
		"Track"
	],
}

WFRP4E.speciesTalents = {
	"human": [
		"Doomed",
		"Savvy, Suave",
		3
	],
	"dwarf": [
		"Magic Resistance",
		"Night Vision",
		"Read/Write, Relentless",
		"Resolute, Strong-minded",
		"Sturdy",
		0
	],
	"halfling": [
		"Acute Sense (Taste)",
		"Night Vision",
		"Resistance (Chaos)",
		"Small",
		0
	],
	"helf": [
		"Acute Sense (Sight)",
		"Coolheaded, Savvy",
		"Night Vision",
		"Second Sight, Sixth Sense",
		"Read/Write",
		0
	],
	"welf": [
		"Acute Sense (Sight)",
		"Hardy, Second Sight",
		"Night Vision",
		"Second Sight, Sixth Sense",
		"Read/Write",
		0
	],
}

WFRP4E.speciesMovement = {
	"human": 4,
	"dwarf": 3,
	"halfling": 3,
	"helf": 5,
	"welf": 5
}

WFRP4E.speciesFate = {
	"human": 2,
	"dwarf": 0,
	"halfling": 0,
	"helf": 0,
	"welf": 0
}

WFRP4E.speciesRes = {
	"human": 1,
	"dwarf": 2,
	"halfling": 2,
	"helf": 0,
	"welf": 0
}

WFRP4E.speciesExtra = {
	"human": 3,
	"dwarf": 2,
	"halfling": 3,
	"helf": 2,
	"welf": 2
}

WFRP4E.speciesAge = {
	"human": "15+1d10",
	"dwarf": "15+10d10",
	"halfling": "15+5d10",
	"helf": "30+10d10",
	"welf": "30+10d10"
}

WFRP4E.speciesHeight = {
	"human": {
		feet: 4,
		inches: 9,
		die: "2d10"
	},
	"dwarf": {
		feet: 4,
		inches: 3,
		die: "1d10"
	},
	"halfling": {
		feet: 3,
		inches: 1,
		die: "1d10"
	},
	"helf": {
		feet: 5,
		inches: 11,
		die: "1d10"
	},
	"welf": {
		feet: 5,
		inches: 11,
		die: "1d10"
	}
}

WFRP4E.classTrappings = {
	"Academics": "ClassTrappings.Academics",
	"Burghers": "ClassTrappings.Burghers",
	"Courtiers": "ClassTrappings.Courtiers",
	"Peasants": "ClassTrappings.Peasants",
	"Rangers": "ClassTrappings.Rangers",
	"Riverfolk": "ClassTrappings.Riverfolk",
	"Rogues": "ClassTrappings.Rogues",
	"Warriors": "ClassTrappings.Warriors",
}


// Status Tiers
WFRP4E.statusTiers = {
	"g": "TIER.Gold",
	"s": "TIER.Silver",
	"b": "TIER.Brass"
};

// Characteristic Names
WFRP4E.characteristics = {
	"ws": "CHAR.WS",
	"bs": "CHAR.BS",
	"s": "CHAR.S",
	"t": "CHAR.T",
	"i": "CHAR.I",
	"ag": "CHAR.Ag",
	"dex": "CHAR.Dex",
	"int": "CHAR.Int",
	"wp": "CHAR.WP",
	"fel": "CHAR.Fel"
};

// Characteristic Abbreviations
WFRP4E.characteristicsAbbrev = {
	"ws": "CHARAbbrev.WS",
	"bs": "CHARAbbrev.BS",
	"s": "CHARAbbrev.S",
	"t": "CHARAbbrev.T",
	"i": "CHARAbbrev.I",
	"ag": "CHARAbbrev.Ag",
	"dex": "CHARAbbrev.Dex",
	"int": "CHARAbbrev.Int",
	"wp": "CHARAbbrev.WP",
	"fel": "CHARAbbrev.Fel"
};

WFRP4E.skillTypes = {
	"bsc": "Basic",
	"adv": "Advanced"
};

WFRP4E.xpCost = {
	"characteristic": [25, 30, 40, 50, 70, 90, 120, 150, 190, 230, 280, 330, 390, 450, 520],
	"skill": [10, 15, 20, 30, 40, 60, 80, 110, 140, 180, 220, 270, 320, 380, 440]
}

WFRP4E.skillGroup = {
	"isSpec": "ITEM.IsSpec",
	"noSpec": "ITEM.NoSpec"
};

WFRP4E.talentMax = {
	"1": "1",
	"2": "2",
	"none": "None",
	"ws": "CHARBonus.WS",
	"bs": "CHARBonus.BS",
	"s": "CHARBonus.S",
	"t": "CHARBonus.T",
	"i": "CHARBonus.I",
	"ag": "CHABonus.Ag",
	"dex": "CHARBonus.Dex",
	"int": "CHARBonus.Int",
	"wp": "CHARBonus.WP",
	"fel": "CHARBonus.Fel"
}


// Weapon Groups
WFRP4E.weaponGroups = {
	"basic": "SPEC.Basic",
	"cavalry": "SPEC.Cavalry",
	"fencing": "SPEC.Fencing",
	"brawling": "SPEC.Brawling",
	"flail": "SPEC.Flail",
	"parry": "SPEC.Parry",
	"polearm": "SPEC.Polearm",
	"twohanded": "Two-SPEC.Handed",
	"blackpowder": "SPEC.Blackpowder",
	"bow": "SPEC.Bow",
	"crossbow": "SPEC.Crossbow",
	"entangling": "SPEC.Entangling",
	"engineering": "SPEC.Engineering",
	"explosives": "SPEC.Explosives",
	"sling": "SPEC.Sling",
	"throwing": "SPEC.Throwing",
};

// Given a group, what's the primary type, melee or ranged
WFRP4E.groupToType = {
	"basic": "melee",
	"cavalry": "melee",
	"fencing": "melee",
	"brawling": "melee",
	"flail": "melee",
	"parry": "melee",
	"polearm": "melee",
	"twohanded": "melee",
	"blackpowder": "ranged",
	"bow": "ranged",
	"crossbow": "ranged",
	"entangling": "ranged",
	"engineering": "ranged",
	"explosives": "ranged",
	"sling": "ranged",
	"throwing": "ranged",
};

WFRP4E.weaponTypes = {
	"melee" : "Melee",
	"ranged" : "Ranged"
}

// Weapon Group Descriptions
WFRP4E.weaponGroupDescriptions = {
	"basic": "Basic",
	"cavalry": "WFRP4E.GroupDescription.Cavalry",
	"fencing": "Fencing",
	"brawling": "Brawling",
	"flail": "WFRP4E.GroupDescription.Flail",
	"parry": "WFRP4E.GroupDescription.Parry",
	"polearm": "Polearm",
	"twohanded": "Two-Handed",
	"blackpowder": "WFRP4E.GroupDescription.Blackpowder",
	"bow": "Bow",
	"crossbow": "WFRP4E.GroupDescription.Crossbow",
	"entangling": "Entangling",
	"engineering": "WFRP4E.GroupDescription.Engineering",
	"explosives": "WFRP4E.GroupDescription.Explosives",
	"sling": "Sling",
	"throwing": "WFRP4E.GroupDescription.Throwing",
};

// Weapon Reach
WFRP4E.weaponReaches = {
	"personal": "WFRP4E.Reach.Personal",
	"vshort": "WFRP4E.Reach.VShort",
	"short": "WFRP4E.Reach.Short",
	"average": "WFRP4E.Reach.Average",
	"long": "WFRP4E.Reach.Long",
	"vLong": "WFRP4E.Reach.VLong",
	"massive": "WFRP4E.Reach.Massive",
}

// Weapon reach descriptions
WFRP4E.reachDescription = {
	"personal": "WFRP4E.Reach.PersonalDescription",
	"vshort": "WFRP4E.Reach.VShortDescription",
	"short": "WFRP4E.Reach.ShortDescription",
	"average": "WFRP4E.Reach.AverageDescription",
	"long": "WFRP4E.Reach.LongDescription",
	"vLong": "WFRP4E.Reach.VLongDescription",
	"massive": "WFRP4E.Reach.MassiveDescription",
}

// Ammo Groups
WFRP4E.ammunitionGroups = {
	"BPandEng": "WFRP4E.BPandEng",
	"bow": "WFRP4E.Bow",
	"crossbow": "WFRP4E.Crossbow",
	"sling": "WFRP4E.Sling",
};

// Item Qualities
WFRP4E.itemQualities = {
	"durable": "PROPERTY.Durable",
	"fine": "PROPERTY.Fine",
	"lightweight": "PROPERTY.Lightweight",
	"practical": "PROPERTY.Practical",
};

// Item Flaws
WFRP4E.itemFlaws = {
	"ugly": "PROPERTY.Ugly",
	"shoddy": "PROPERTY.Shoddy",
	"unreliable": "PROPERTY.Unreliable",
	"bulky": "PROPERTY.Bulky",
}


// Weapon Qualities
WFRP4E.weaponQualities = {
	"accurate": "PROPERTY.Accurate",
	"blackpowder": "PROPERTY.Blackpowder",
	"blast": "PROPERTY.Blast",
	"damaging": "PROPERTY.Damaging",
	"defensive": "PROPERTY.Defensive",
	"entangle": "PROPERTY.Entangle",
	"fast": "PROPERTY.Fast",
	"hack": "PROPERTY.Hack",
	"impact": "PROPERTY.Impact",
	"impale": "PROPERTY.Impale",
	"penetrating": "PROPERTY.Penetrating",
	"pistol": "PROPERTY.Pistol",
	"precise": "PROPERTY.Precise",
	"pummel": "PROPERTY.Pummel",
	"repeater": "PROPERTY.Repeater",
	"shield": "PROPERTY.Shield",
	"trapblade": "PROPERTY.TrapBlade",
	"unbreakable": "PROPERTY.Unbreakable",
	"wrap": "PROPERTY.Wrap"
};

// Weapon Flaws
WFRP4E.weaponFlaws = {
	"dangerous": "PROPERTY.Dangerous",
	"imprecise": "PROPERTY.Imprecise",
	"reload": "PROPERTY.Reload",
	"slow": "PROPERTY.Slow",
	"tiring": "PROPERTY.Tiring",
	"undamaging": "PROPERTY.Undamaging"
};


// Weapon Quality Descriptions (Used in dropdown info)
WFRP4E.qualityDescriptions = {
	"accurate": "WFRP4E.Properties.Accurate",
	"blackpowder": "WFRP4E.Properties.Blackpowder",
	"blast": "WFRP4E.Properties.Blast",
	"damaging": "WFRP4E.Properties.Damage",
	"defensive": "WFRP4E.Properties.Defensive",
	"distract": "WFRP4E.Properties.Distract",
	"entangle": "WFRP4E.Properties.Entangle",
	"fast": "WFRP4E.Properties.Fast",
	"hack": "WFRP4E.Properties.Hack",
	"impact": "WFRP4E.Properties.Impact",
	"impale": "WFRP4E.Properties.Impale",
	"penetrating": "WFRP4E.Properties.Penetrating",
	"pistol": "WFRP4E.Properties.Pistol",
	"precise": "WFRP4E.Properties.Precise",
	"pummel": "WFRP4E.Properties.Pummel",
	"repeater": "WFRP4E.Properties.Repeater",
	"shield": "WFRP4E.Properties.Shield",
	"trapblade": "WFRP4E.Properties.Trapblade",
	"unbreakable": "WFRP4E.Properties.Unbreakable",
	"wrap": "WFRP4E.Properties.Wrap",
	"flexible": "WFRP4E.Properties.Flexible",
	"impenetrable": "WFRP4E.Properties.Impenetrable",
	"durable": "WFRP4E.Properties.Durable",
	"fine": "WFRP4E.Properties.Fine",
	"lightweight": "WFRP4E.Properties.Lightweight",
	"practical": "WFRP4E.Properties.Practical",
};

// Weapon Flaw Descriptions (used in dropdown info)
WFRP4E.flawDescriptions = {
	"dangerous": "WFRP4E.Properties.Dangerous",
	"imprecise": "WFRP4E.Properties.Imprecise",
	"reload": "WFRP4E.Properties.Reload",
	"slow": "WFRP4E.Properties.Slow",
	"tiring": "WFRP4E.Properties.Tiring",
	"undamaging": "WFRP4E.Properties.Undamaging",
	"partial": "WFRP4E.Properties.Partial",
	"weakpoints": "WFRP4E.Properties.Weakpoints",
	"ugly": "WFRP4E.Properties.Ugly",
	"shoddy": "WFRP4E.Properties.Shoddy",
	"unreliable": "WFRP4E.Properties.Unreliable",
	"bulky": "WFRP4E.Properties.Bulky"
};

// Armor Qualities
WFRP4E.armorQualities = {
	"flexible": "Flexible",
	"impenetrable": "Impenetrable",
};

// Armor Flaws
WFRP4E.armorFlaws = {
	"partial": "Partial",
	"weakpoints": "Weakpoints",
};

// Equipment Types
WFRP4E.armorTypes = {
	"softLeather": "WFRP4E.ArmourType.SLeather",
	"boiledLeather": "WFRP4E.ArmourType.BLeather",
	"mail": "WFRP4E.ArmourType.Mail",
	"plate": "WFRP4E.ArmourType.Plate",
	"other": "WFRP4E.ArmourType.Other"
};

// Range Test Modifiers
WFRP4E.rangeModifiers = {
	"Point Blank": "Easy (+40)",
	"Short Range": "Average (+20)",
	"Normal": "Challenging (+0)",
	"Long Range": "Difficult (-10)",
	"Extreme": "Very Hard (-30)",
}

// Difficulty Modifiers
WFRP4E.difficultyModifiers = {
	"veasy": 60,
	"easy": 40,
	"average": 20,
	"challenging": 0,
	"difficult": -10,
	"hard": -20,
	"vhard": -30
}

// Difficulty Labels
WFRP4E.difficultyLabels = {

	"veasy": "Very Easy (+60)",
	"easy": "Easy (+40)",
	"average": "Average (+20)",
	"challenging": "Challenging (+0)",
	"difficult": "Difficult (-10)",
	"hard": "Hard (-20)",
	"vhard": "Very Hard (-30)"
}

WFRP4E.locations = {
	"head": "Head",
	"body": "Body",
	"rArm": "Right Arm",
	"lArm": "Left Arm",
	"rLeg": "Right Leg",
	"lLeg": "Left Leg",
}

// Trapping Availability
WFRP4E.availability = {
	"None": "-",
	"common": "WFRP4E.Availability.Common",
	"scarce": "WFRP4E.Availability.Scarce",
	"rare": "WFRP4E.Availability.Rare",
	"exotic": "WFRP4E.Availability.Exotic",
}


// Trapping Types
WFRP4E.trappingTypes = {
	"clothingAccessories": "WFRP4E.TrappingType.ClothingAccessories",
	"foodAndDrink": "WFRP4E.TrappingType.FoodDrink",
	"toolsAndKits": "WFRP4E.TrappingType.ToolsKits",
	"booksAndDocuments": "WFRP4E.TrappingType.BooksDocuments",
	"tradeTools": "WFRP4E.TrappingType.TradeTools", // Unused - combined with tools and kits
	"drugsPoisonsHerbsDraughts": "WFRP4E.TrappingType.DrugsPoisonsHerbsDraughts",
	"ingredient": "WFRP4E.TrappingType.Ingredient",
	"misc": "WFRP4E.TrappingType.Misc",
};

// These categories are used to label items in containers (Trapping tab)
WFRP4E.trappingCategories = {
	"weapon": "WFRP4E.TrappingType.Weapon",
	"armour": "WFRP4E.TrappingType.Armour",
	"money": "WFRP4E.TrappingType.Money",
	"ammunition": "WFRP4E.TrappingType.Ammunition",
	"container": "WFRP4E.TrappingType.Container",
	"clothingAccessories": "WFRP4E.TrappingType.ClothingAccessories",
	"foodAndDrink": "WFRP4E.TrappingType.FoodDrink",
	"toolsAndKits": "WFRP4E.TrappingType.ToolsKits",
	"booksAndDocuments": "WFRP4E.TrappingType.BooksDocuments",
	"tradeTools": "WFRP4E.TrappingType.TradeTools",
	"drugsPoisonsHerbsDraughts": "WFRP4E.TrappingType.DrugsPoisonsHerbsDraughts",
	"ingredient": "WFRP4E.TrappingType.Ingredient",
	"misc": "WFRP4E.TrappingType.Misc",
};

// Creature Sizes
WFRP4E.actorSizes = {
	"tiny": "Tiny",
	"ltl": "Little",
	"sml": "Small",
	"avg": "Average",
	"lrg": "Large",
	"enor": "Enormous",
	"mnst": "Monstrous"
};

WFRP4E.actorSizeNums = {
	"tiny": 0,
	"ltl": 1,
	"sml": 2,
	"avg": 3,
	"lrg": 4,
	"enor": 5,
	"mnst": 6
};

WFRP4E.tokenSizes = {
	"tiny": 0.3,
	"ltl": 0.5,
	"sml": 0.8,
	"avg": 1,
	"lrg": 2,
	"enor": 3,
	"mnst": 4
};

// Condition Types
WFRP4E.magicLores = {
	"petty": "Petty",
	"beasts": "Beasts",
	"death": "Death",
	"fire": "Fire",
	"heavens": "Heavens",
	"metal": "Metal",
	"life": "Life",
	"light": "Light",
	"shadow": "Shadow",
	"hedgecraft": "Hedgecraft",
	"witchcraft": "Witchcraft",
	"daemonology": "Daemonology",
	"necromancy": "Necromancy",
	"nurgle": "Nurgle",
	"slaanesh": "Slaanesh",
	"tzeentch": "Tzeentch",
};

// Given a Lore, what is the Wind
WFRP4E.magicWind = {
	"petty": "None",
	"beasts": "Ghur",
	"death": "Shyish",
	"fire": "Aqshy",
	"heavens": "Azyr",
	"metal": "Chamon",
	"life": "Ghyran",
	"light": "Hysh",
	"shadow": "Ulgu",
	"hedgecraft": "None",
	"witchcraft": "None",
	"daemonology": "Dhar",
	"necromancy": "Dhar",
	"nurgle": "Dhar",
	"slaanesh": "Dhar",
	"tzeentch": "Dhar",
};

WFRP4E.loreEffect = {
	"petty": "None",
	"beasts": "WFRP4E.LoreDescription.Beasts",
	"death": "WFRP4E.LoreDescription.Death",
	"fire": "WFRP4E.LoreDescription.Fire",
	"heavens": "WFRP4E.LoreDescription.Heavens",
	"metal": "WFRP4E.LoreDescription.Metal",
	"life": "WFRP4E.LoreDescription.Life",
	"light": "WFRP4E.LoreDescription.Light",
	"shadow": "WFRP4E.LoreDescription.Shadow",
	"hedgecraft": "WFRP4E.LoreDescription.Hedgecraft",
	"witchcraft": "WFRP4E.LoreDescription.Witchcraft",
	"daemonology": "",
	"necromancy": "",
	"nurgle": "",
	"slaanesh": "",
	"tzeentch": "",
};

// Types of prayers
WFRP4E.prayerTypes = {
	"blessing": "Blessing",
	"miracle": "Miracle"
}

WFRP4E.mutationTypes = {
	"physical": "Physical",
	"mental": "Mental"
}

WFRP4E.encumbrancePenalties = {
	"encumbered": "WFRP4E.EncumbrancePenalties.Encumbered",
	"veryEncumbered": "WFRP4E.EncumbrancePenalties.VeryEnc",
	"maxEncumbered": "WFRP4E.EncumbrancePenalties.MaxEnc",
}

WFRP4E.conditions = {
	"ablaze": "Ablaze",
	"bleeding": "Bleeding",
	"blinded": "Blinded",
	"broken": "Broken",
	"deafened": "Deafened",
	"entangled": "Entangled",
	"fatigued": "Fatigued",
	"poisoned": "Poisoned",
	"prone": "Prone",
	"stunned": "Stunned",
	"surprised": "Surprised",
	"unconscious": "Unconscious",
	"grappling": "Grappling",
	"fear": "Fear",
	"defeated": "Defeated"
}


WFRP4E.conditionDescriptions = {
	"ablaze": "WFRP4E.Conditions.Ablaze",
	"bleeding": "WFRP4E.Conditions.Bleeding",
	"blinded": "WFRP4E.Conditions.Blinded",
	"broken": "WFRP4E.Conditions.Broken",
	"deafened": "WFRP4E.Conditions.Deafened",
	"entangled": "WFRP4E.Conditions.Entangled",
	"fatigued": "WFRP4E.Conditions.Fatigued",
	"poisoned": "WFRP4E.Conditions.Poisoned",
	"prone": "WFRP4E.Conditions.Prone",
	"stunned": "WFRP4E.Conditions.Stunned",
	"surprised": "WFRP4E.Conditions.Surprised",
	"unconscious": "WFRP4E.Conditions.Unconscious",
	"grappling": "WFRP4E.Conditions.Grappling",
	"fear": "WFRP4E.Conditions.Fear",
}

WFRP4E.symptoms = {
	"blight": "Blight",
	"buboes": "Buboes",
	"convulsions": "Convulsions",
	"coughsAndSneezes": "Coughs and Sneezes",
	"fever": "Fever",
	"flux": "Flux",
	"gangrene": "Gangrene",
	"lingering": "Lingering",
	"malaise": "Malaise",
	"nausea": "Nausea",
	"pox": "Pox",
	"wounded": "Wounded",
	"delirium": "Delirium",
	"swelling": "Swelling"
}

WFRP4E.symptomDescriptions = {
	"blight": "WFRP4E.SymptomDescriptions.Blight",
	"buboes": "WFRP4E.SymptomDescriptions.Buboes",
	"convulsions": "WFRP4E.SymptomDescriptions.Convulsions",
	"coughsAndSneezes": "WFRP4E.SymptomDescriptions.CoughsandSneezes",
	"fever": "WFRP4E.SymptomDescriptions.Fever",
	"flux": "WFRP4E.SymptomDescriptions.Flux",
	"gangrene": "WFRP4E.SymptomDescriptions.Gangrene",
	"lingering": "WFRP4E.SymptomDescriptions.Lingering",
	"malaise": "WFRP4E.SymptomDescriptions.Malaise",
	"nausea": "WFRP4E.SymptomDescriptions.Nausea",
	"pox": "WFRP4E.SymptomDescriptions.Pox",
	"wounded": "WFRP4E.SymptomDescriptions.Wounded",
	"delirium": "WFRP4E.SymptomDescriptions.Delirium",
	"swelling": "WFRP4E.SymptomDescriptions.Swelling",
}

WFRP4E.symptomTreatment = {
	"blight": "WFRP4E.SymptomTreatment.Blight",
	"buboes": "WFRP4E.SymptomTreatment.Buboes",
	"convulsions": "WFRP4E.SymptomTreatment.Convulsions",
	"coughsAndSneezes": "WFRP4E.SymptomTreatment.CoughsandSneezes",
	"fever": "WFRP4E.SymptomTreatment.Fever",
	"flux": "WFRP4E.SymptomTreatment.Flux",
	"gangrene": "WFRP4E.SymptomTreatment.Gangrene",
	"lingering": "WFRP4E.SymptomTreatment.Lingering",
	"malaise": "WFRP4E.SymptomTreatment.Malaise",
	"nausea": "WFRP4E.SymptomTreatment.Nausea",
	"pox": "WFRP4E.SymptomTreatment.Pox",
	"wounded": "WFRP4E.SymptomTreatment.Wounded",
	"delirium": "WFRP4E.SymptomTreatment.Delirium",
	"swelling": "WFRP4E.SymptomTreatment.Swelling",
}

WFRP4E.earningValues = {
	"b": "2d10",
	"s": "1d10",
	"g": "1",
}

WFRP4E.randomExp = {
	speciesRand: 20,
	careerRand: 50,
	careerReroll: 25,
	statsRand: 50,
	statsReorder: 25
}

WFRP4E.traitBonuses = {
	"big": {
		"s": 10,
		"t": 10,
		"ag": -5
	},
	"brute": {
		"m": -1,
		"t": 10,
		"s": 10,
		"ag": -10
	},
	"clever": {
		"int": 20,
		"i": 10
	},
	"cunning": {
		"int": 10,
		"fel": 10,
		"i": 10
	},
	"elite": {
		"ws": 20,
		"bs": 20,
		"wp": 20
	},
	"fast": {
		"ag": 10,
		"m": 1
	},
	"leader": {
		"fel": 10,
		"wp": 10
	},
	"tough": {
		"t": 10,
		"wp": 10
	},
	"swarm": {
		"ws": 10
	}
}

WFRP4E.talentBonuses = {
	"savvy": "int",
	"suave": "fel",
	"marksman": "bs",
	"very strong": "s",
	"sharp": "i",
	"lightning reflexes": "ag",
	"coolheaded": "wp",
	"very resilient": "t",
	"nimble fingered": "dex",
	"warrior born": "ws"
}

const DAMAGE_TYPE = {
	NORMAL: 0,
	IGNORE_AP: 1,
	IGNORE_TB: 2,
	IGNORE_ALL: 3
}

const PSEUDO_ENTITIES = [
	"Table",
	"Condition",
	"Symptom",
	"Roll"
]