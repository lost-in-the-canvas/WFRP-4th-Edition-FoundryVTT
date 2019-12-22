const WFRP4E = {}

CONFIG.ChatMessage.template = "systems/wfrp4e/templates/chat/chat-message.html"

CONFIG.statusEffects =
["systems/wfrp4e/icons/conditions/bleeding1.png",
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
]

CONFIG.controlIcons.defeated = "systems/wfrp4e/icons/defeated.png";

 CONFIG.JournalEntry.noteIcons = {
   "Marker" : "systems/wfrp4e/icons/buildings/point_of_interest.png",
   "Apothecary" : "systems/wfrp4e/icons/buildings/apothecary.png",
   "Beastmen Herd 1" : "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
   "Beastmen Herd 2" : "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
   "Blacksmith" : "systems/wfrp4e/icons/buildings/blacksmith.png",
   "Bretonnian City 1" : "systems/wfrp4e/icons/buildings/bret_city1.png",
   "Bretonnian City 2" : "systems/wfrp4e/icons/buildings/bret_city2.png",
   "Bretonnian City 3" : "systems/wfrp4e/icons/buildings/bret_city3.png",
   "Bretonnian Worship" : "systems/wfrp4e/icons/buildings/bretonnia_worship.png",
   "Caste Hill 1" : "systems/wfrp4e/icons/buildings/castle_hill1.png",
   "Caste Hill 2" : "systems/wfrp4e/icons/buildings/castle_hill2.png",
   "Caste Hill 3" : "systems/wfrp4e/icons/buildings/castle_hill3.png",
   "Castle Wall" : "systems/wfrp4e/icons/buildings/castle_wall.png",
   "Cave 1" : "systems/wfrp4e/icons/buildings/cave1.png",
   "Cave 2" : "systems/wfrp4e/icons/buildings/cave2.png",
   "Cave 3" : "systems/wfrp4e/icons/buildings/cave3.png",
   "Cemetery" : "systems/wfrp4e/icons/buildings/cemetery.png",
   "Chaos Portal" : "systems/wfrp4e/icons/buildings/chaos_portal.png",
   "Chaos Worship" : "systems/wfrp4e/icons/buildings/chaos_worship.png",
   "Court" : "systems/wfrp4e/icons/buildings/court.png",
   "Dwarf Beer" : "systems/wfrp4e/icons/buildings/dwarf_beer.png",
   "Dwarf Hold 1" : "systems/wfrp4e/icons/buildings/dwarf_hold1.png",
   "Dwarf Hold 2" : "systems/wfrp4e/icons/buildings/dwarf_hold2.png",
   "Dwarf Hold 3" : "systems/wfrp4e/icons/buildings/dwarf_hold3.png",
   "Empire Barracks" : "systems/wfrp4e/icons/buildings/empire_barracks.png",
   "Empire City 1" : "systems/wfrp4e/icons/buildings/empire_city1.png",
   "Empire City 2" : "systems/wfrp4e/icons/buildings/empire_city2.png",
   "Empire City 3" : "systems/wfrp4e/icons/buildings/empire_city3.png",
   "Farm" : "systems/wfrp4e/icons/buildings/farms.png",
   "Food" : "systems/wfrp4e/icons/buildings/food.png",
   "Guard Post" : "systems/wfrp4e/icons/buildings/guards.png",
   "Haunted Hill" : "systems/wfrp4e/icons/buildings/haunted_hill.png",
   "Haunted Wood" : "systems/wfrp4e/icons/buildings/haunted_wood.png",
   "Inn 1" : "systems/wfrp4e/icons/buildings/inn1.png",
   "Inn 2" : "systems/wfrp4e/icons/buildings/inn2.png",
   "Kislev City 1" : "systems/wfrp4e/icons/buildings/kislev_city1.png",
   "Kislev City 2" : "systems/wfrp4e/icons/buildings/kislev_city2.png",
   "Kislev City 3" : "systems/wfrp4e/icons/buildings/kislev_city3.png",
   "Lumber" : "systems/wfrp4e/icons/buildings/lumber.png",
   "Magic" : "systems/wfrp4e/icons/buildings/magic.png",
   "Metal" : "systems/wfrp4e/icons/buildings/metal.png",
   "Mountain 1" : "systems/wfrp4e/icons/buildings/mountains1.png",
   "Mountain 2" : "systems/wfrp4e/icons/buildings/mountains2.png",
   "Orcs" : "systems/wfrp4e/icons/buildings/orcs.png",
   "Orc Camp" : "systems/wfrp4e/icons/buildings/orc_city.png",
   "Port" : "systems/wfrp4e/icons/buildings/port.png",
   "Road" : "systems/wfrp4e/icons/buildings/roads.png",
   "Ruins" : "systems/wfrp4e/icons/buildings/ruins.png",
   "Scroll" : "systems/wfrp4e/icons/buildings/scroll.png",
   "Sigmar" : "systems/wfrp4e/icons/buildings/sigmar_worship.png",
   "Stables" : "systems/wfrp4e/icons/buildings/stables.png",
   "Standing Stones" : "systems/wfrp4e/icons/buildings/standing_stones.png",
   "Swamp" : "systems/wfrp4e/icons/buildings/swamp.png",
   "Temple" : "systems/wfrp4e/icons/buildings/temple.png",
   "Textile" : "systems/wfrp4e/icons/buildings/textile.png",
   "Tower 1" : "systems/wfrp4e/icons/buildings/tower1.png",
   "Tower 2" : "systems/wfrp4e/icons/buildings/tower2.png",
   "Tower Hill" : "systems/wfrp4e/icons/buildings/tower_hill.png",
   "Wizard Tower" : "systems/wfrp4e/icons/buildings/wizard_tower.png",
   "Ulric" : "systems/wfrp4e/icons/buildings/ulric_worship.png",
   "Village 1" : "systems/wfrp4e/icons/buildings/village1.png",
   "Village 2" : "systems/wfrp4e/icons/buildings/village2.png",
   "Village 3" : "systems/wfrp4e/icons/buildings/village3.png",
   "Wood Elves 1" : "systems/wfrp4e/icons/buildings/welves1.png",
   "Wood Elves 2" : "systems/wfrp4e/icons/buildings/welves2.png",
   "Wood Elves 3" : "systems/wfrp4e/icons/buildings/welves3.png"
 }

// Species
WFRP4E.species = {
  "human": "Human",
  "dwarf": "Dwarf",
  "halfling": "Halfling",
  "helf": "High Elf",
  "welf": "Wood Elf",
  "gnome": "Gnome",  
};

WFRP4E.speciesCharacteristics = {
  "human" :
  {
   "ws" : "2d10+20",
   "bs" : "2d10+20",
   "s"  : "2d10+20",
   "t"  : "2d10+20",
   "i"  : "2d10+20",
   "ag" : "2d10+20",
   "dex": "2d10+20",
   "int": "2d10+20",
   "wp" : "2d10+20",
   "fel": "2d10+20"
  },
  "dwarf" :
  {
    "ws" : "2d10+30",
    "bs" : "2d10+20",
    "s"  : "2d10+20",
    "t"  : "2d10+30",
    "i"  : "2d10+20",
    "ag" : "2d10+10",
    "dex": "2d10+30",
    "int": "2d10+20",
    "wp" : "2d10+40",
    "fel": "2d10+10"
  },
  "halfling" :
  {
    "ws" : "2d10+10",
    "bs" : "2d10+30",
    "s"  : "2d10+10",
    "t"  : "2d10+20",
    "i"  : "2d10+20",
    "ag" : "2d10+20",
    "dex": "2d10+30",
    "int": "2d10+20",
    "wp" : "2d10+30",
    "fel": "2d10+30"
  },
  "helf" :
  {
    "ws" : "2d10+30",
    "bs" : "2d10+30",
    "s"  : "2d10+20",
    "t"  : "2d10+20",
    "i"  : "2d10+40",
    "ag" : "2d10+30",
    "dex": "2d10+30",
    "int": "2d10+30",
    "wp" : "2d10+30",
    "fel": "2d10+20"
  },
  "welf" :
  {
    "ws" : "2d10+30",
    "bs" : "2d10+30",
    "s"  : "2d10+20",
    "t"  : "2d10+20",
    "i"  : "2d10+40",
    "ag" : "2d10+30",
    "dex": "2d10+30",
    "int": "2d10+30",
    "wp" : "2d10+30",
    "fel": "2d10+20"
  },
  "gnome" :
  {
    "ws" : "2d10+20",
    "bs" : "2d10+10",
    "s"  : "2d10+10",
    "t"  : "2d10+15",
    "i"  : "2d10+30",
    "ag" : "2d10+30",
    "dex": "2d10+30",
    "int": "2d10+30",
    "wp" : "2d10+40",
    "fel": "2d10+15"
  },

}

WFRP4E.speciesSkills = {
  "human" : [
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
  "dwarf" : [
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
  "halfling" : [
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
  "helf" : [
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
  "welf" : [
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
  "gnome" : [
    "Channelling (Ulgu)",
    "Charm",
    "Consume Alcohol",
    "Dodge",
    "Entertain (Any)",
    "Gossip",
	"Haggle",
    "Language (Ghassally)",
    "Language (Magick)",
    "Language (Wastelander)",
    "Outdoor Survival",
    "Stealth (Any)"
  ],
}

WFRP4E.speciesTalents = {
  "human" : [
    "Doomed",
    "Savvy, Suave",
    3
  ],
  "dwarf" : [
    "Magic Resistance",
    "Night Vision",
    "Read/Write, Relentless",
    "Resolute, Strong-minded",
    "Sturdy",
    0
  ],
  "halfling" : [
    "Acute Sense (Taste)",
    "Night Vision",
    "Resistance (Chaos)",
    "Small",
    0
  ],
  "helf" : [
    "Acute Sense (Sight)",
    "Coolheaded, Savvy",
    "Night Vision",
    "Second Sight, Sixth Sense",
    "Read/Write",
    0
  ],
  "welf" : [
    "Acute Sense (Sight)",
    "Hardy, Second Sight",
    "Night Vision",
    "Second Sight, Sixth Sense",
    "Read/Write",
    0
  ],
  "gnome" : [
    "Beneath Notice, Suffused with Ulgu",
    "Luck, Mimic",
    "Night Vision",
    "Fisherman, Read/Write",
    "Second Sight, Sixth Sense",
	"Small",
    0
  ],
}

WFRP4E.speciesMovement = {
  "human" : 4,
  "dwarf" : 3,
  "halfling" : 3,
  "helf" : 5,
  "welf" : 5,
  "gnome" : 3
}

WFRP4E.speciesFate = {
  "human" : 2,
  "dwarf" : 0,
  "halfling" : 0,
  "helf" : 0,
  "welf" : 0,
  "gnome" : 2
}

WFRP4E.speciesRes = {
  "human" : 1,
  "dwarf" : 2,
  "halfling" : 2,
  "helf" : 0,
  "welf" : 0,
  "gnome" : 0
}

WFRP4E.speciesExtra = {
  "human" : 3,
  "dwarf" : 2,
  "halfling" : 3,
  "helf" : 2,
  "welf" : 2,
  "gnome" : 2
}

WFRP4E.classTrappings = {
  "Academics" : "Clothing, Dagger, Pouch, Sling Bag containing Writing Kit and 1d10 sheets of Parchment",
  "Burghers" : "Cloak, Clothing, Dagger, Hat, Pouch, Sling Bag containing Lunch",
  "Courtiers" : "Fine Clothing, Dagger, Pouch containing Tweezers, Ear Pick, and a Comb",
  "Peasants" : "Cloak, Clothing, Dagger, Pouch, Sling Bag containing Rations (1 day)",
  "Rangers" : "Cloak, Clothing, Dagger, Pouch, Backpack containing Tinderbox, Blanket, Rations (1 day)",
  "Riverfolk" : "Cloak, Clothing, Dagger, Pouch, Sling Bag containing a Flask of Spirits ",
  "Rogues" : "Clothing, Dagger, Pouch, Sling Bag containing 2 Candles, 1d10 Matches, a Hood or Mask",
  "Warriors" : "Clothing, Hand Weapon, Dagger, Pouch",
}



// Status Tiers
WFRP4E.statusTiers = {
  "g" : "Gold",
  "s" : "Silver",
  "b" : "Brass"
};

// Characteristic Names
WFRP4E.characteristics = {
  "ws": "Weapon Skill",
  "bs": "Ballistic Skill",
  "s": "Strength",
  "t": "Toughness",
  "i": "Initiative",
  "ag": "Agility",
  "dex": "Dexterity",
  "int": "Intelligence",
  "wp": "Willpower",
  "fel": "Fellowship"
};

// Characteristic Abbreviations
WFRP4E.characteristicsAbbrev = {
  "ws": "WS",
  "bs": "BS",
  "s": "S",
  "t": "T",
  "i": "I",
  "ag": "Ag",
  "dex": "Dex",
  "int": "Int",
  "wp": "WP",
  "fel": "Fel"
};

WFRP4E.skillTypes = {
  "bsc" : "Basic",
  "adv" : "Advanced"
};

WFRP4E.xpCost = {
  "characteristic" : [25, 30, 40, 50, 70, 90, 120, 150, 190, 230, 280, 330, 390, 450, 520],
  "skill" : [10, 15, 20, 30, 40, 60, 80, 110, 140, 180, 220, 270, 320, 380, 440]
}

WFRP4E.skillGroup = {
  "isSpec" : "Is Specialization",
  "noSpec" : "Not Specialization"
};

WFRP4E.talentMax = {
  "1":"1",
  "2":"2",
  "none":"None",
  "ws":" Weapon Skill Bonus",
  "bs":"Ballistic Skill Bonus",
  "s": "Strength Bonus",
  "t": "Toughness Bonus",
  "i": "Initiative Bonus",
  "ag": "Agility Bonus",
  "dex": "Dexterity Bonus",
  "int": "Intelligence Bonus",
  "wp": "Willpower Bonus",
  "fel": "Fellowship Bonus"
}


// Weapon Groups
WFRP4E.weaponGroups = {
  "basic": "Basic",
  "cavalry": "Cavalry",
  "fencing": "Fencing",
  "brawling": "Brawling",
  "flail": "Flail",
  "parry": "Parry",
  "polearm": "Polearm",
  "twohanded": "Two-Handed",
  "blackpowder": "Blackpowder",
  "bow": "Bow",
  "crossbow": "Crossbow",
  "entangling": "Entangling",
  "engineering": "Engineering",
  "explosives": "Explosives",
  "sling": "Sling",
  "throwing": "Throwing",
};

// Given a group, what's the primary type, melee or ranged
WFRP4E.groupToType = {
  "basic": "Melee",
  "cavalry": "Melee",
  "fencing": "Melee",
  "brawling": "Melee",
  "flail": "Melee",
  "parry": "Melee",
  "polearm": "Melee",
  "twohanded": "Melee",
  "blackpowder": "Ranged",
  "bow": "Ranged",
  "crossbow": "Ranged",
  "entangling": "Ranged",
  "engineering": "Ranged",
  "explosives": "Ranged",
  "sling": "Ranged",
  "throwing": "Ranged",
};

// Weapon Group Descriptions
WFRP4E.weaponGroupDescriptions = {
  "basic": "Basic",
  "cavalry": "Cavalry weapons are assumed to be used when mounted. When not used from horse-back, all two-handed weapons in the Cavalry Weapon Group also count as Two-Handed weapons. Single-handed Cavalry weapons are not normally used when unmounted.",
  "fencing": "Fencing",
  "brawling": "Brawling",
  "flail": "Unskilled characters add the Dangerous Weapon Flaw to their Flails, and the other listed Weapon Qualities are not used.",
  "parry": "Any one-handed weapon with the Defensive Quality can be used with Melee (Parry). When using Melee (Parry), a weapon can be used to Oppose an incoming attack without the normal –20 oﬀhand penalty.",
  "polearm": "Polearm",
  "twohanded": "Two-Handed",
  "blackpowder": "Those with Ranged (Engineering) can use Blackpowder weapons without penalty. If you are using a Blackpowder, Engineering, or Explosive weapon, and roll a Fumble that is also an even number — 00, 88, and so on — your weapon Misfires, exploding in your hand. You take full Damage to your primary arm location using the units die as an effective SL for the hit, and your weapon is destroyed.",
  "bow": "Bow",
  "crossbow": "Crossbows weapons are relatively simple to use. You can attempt a Ranged (Crossbow) Test using your Ballistic Skill, but the weapon loses all Qualities whilst retaining its Flaws.",
  "entangling": "Entangling",
  "engineering": "All Engineering weapons can be used by characters with Ranged (Blackpowder), but the weapons lose all Weapon Qualities whilst retaining their ﬂaws. If you are using a Blackpowder, Engineering, or Explosive weapon, and roll a Fumble that is also an even number — 00, 88, and so on — your weapon Misfires, exploding in your hand. You take full Damage to your primary arm location using the units die as an effective SL for the hit, and your weapon is destroyed.",
  "explosives": "Those with Ranged (Engineering) can use Explosive weapons without penalty. If you are using a Blackpowder, Engineering, or Explosive weapon, and roll a Fumble that is also an even number — 00, 88, and so on — your weapon Misfires, exploding in your hand. You take full Damage to your primary arm location using the units die as an effective SL for the hit, and your weapon is destroyed.",
  "sling": "Sling",
  "throwing": "Thrown weapons are relatively simple to use. You can attempt a Ranged (Throwing) Test using your Ballistic Skill, but the weapon loses all Qualities whilst retaining its Flaws.",
};

// Weapon Reach
WFRP4E.weaponReaches={
  "personal":"Personal",
  "vshort":"Very Short",
  "short":"Short",
  "average": "Average",
  "long":"Long",
  "vLong":"Very Long",
  "massive":"Massive",
 }

 // Weapon reach descriptions
 WFRP4E.reachDescription={
  "personal":"Your legs and fists, perhaps your head, and anything attached to those.",
  "vshort":"Less than a foot in length.",
  "short":"Up to 2 feet in length.",
  "average": "Up to 3 feet long.",
  "long":"Up to 6 feet long.",
  "vLong":"Up to 10 feet in length; can Engage enemies up to 4 yards away, rather than just 2.",
  "massive":"Anything over 10 feet long; can Engage enemies up to 6 yards away, rather than just 2",
 }

// Ammo Groups
WFRP4E.ammunitionGroups = {
  "BPandEng": "Blackpowder and Engineering",
  "bow": "Bow",
  "crossbow": "Crossbow",
  "sling": "Sling",
};

// Item Qualities
WFRP4E.itemQualities ={
  "durable": "Durable",
  "fine": "Fine",
  "lightweight": "Lightweight",
  "practical": "Practical",
};

// Item Flaws
WFRP4E.itemFlaws = {
  "ugly": "Ugly",
  "shoddy": "Shoddy",
  "unreliable": "Unreliable",
  "bulky": "Bulky",
}


// Weapon Qualities
WFRP4E.weaponQualities = {
  "accurate": "Accurate",
  "blackpowder": "Blackpowder",
  "blast": "Blast",
  "damaging": "Damaging",
  "defensive": "Defensive",
  "entangle": "Entangle",
  "fast": "Fast",
  "hack": "Hack",
  "impact": "Impact",
  "impale": "Impale",
  "penetrating": "Penetrating",
  "pistol": "Pistol",
  "precise": "Precise",
  "pummel": "Pummel",
  "repeater": "Repeater",
  "shield": "Shield",
  "trapblade": "Trap Blade",
  "unbreakable": "Unbreakable",
  "wrap": "Wrap"
};

// Weapon Flaws
WFRP4E.weaponFlaws = {
  "dangerous": "Dangerous",
  "imprecise": "Imprecise",
  "reload": "Reload",
  "slow": "Slow",
  "tiring": "Tiring",
  "undamaging": "Undamaging"
};


// Weapon Quality Descriptions (Used in dropdown info)
WFRP4E.qualityDescriptions = {
  "accurate": "The weapon is accurate and easy to hit with. Gain a bonus of +10 to any Test when firing this weapon",
  "blackpowder": "The crack of gunfire followed by gouts of smoke and confusion can be terrifying. If you are targeted by a Blackpowder weapon, you must pass an Average (+20) Cool Test or take a Broken Condition, even if the shot misses.",
  "blast": "All Characters within (Rating) yards of the struck target point take SL+Weapon Damage, and suffer any Conditions the weapon inflicts.",
  "damaging": "A Damaging weapon can use the higher score from either the units die or the SL to determine the Damage caused from a successful hit. For example, if you roll 34 in your attack Test and the target number was 52 you can choose to use the SL, which in this case is 2, or the units die result, which is 4. An Undamaging weapon can never also be Damaging (Undamaging takes precedent).",
  "defensive": "Defensive weapons are designed to parry incoming attacks. If you are wielding such a weapon, gain a bonus of +1 SL to any Melee Test when you oppose an incoming attack.",
  "distract": "Distracting weapons can be used to drive an opponent back due to their dangerous or whip-like natures. Instead of causing Damage, a successful attack with a Distracting weapon can force an opponent back 1 yard per SL by which you win the Opposed Test.",
  "entangle": "Your weapon wraps around your opponents, entangling them. Any opponent successfully hit by your weapon gains the Entangled Condition with a Strength value equal to your Strength Characteristic. When Entangling an opponent, you cannot otherwise use the weapon to hit. You can end the Entangling whenever you wish.",
  "fast": "Fast weapons are designed to strike out with such speed that parrying is not an option, leaving an opponent skewered before they can react. A wielder of a Fast weapon can choose to attack with the Fast weapon outside of the normal Initiative sequence, either striking first, last, or somewhere in between as desired. Further, all Melee Tests to defend against Fast weapons suffer a penalty of –10 if your opponent is using a weapon without the Fast Quality; other Skills defend as normal. Two opponents with Fast weapons fight in Initiative order (relative to each other) as normal. A Fast weapon may never also be Slow (Slow takes precedent).",
  "hack": "Hacking weapons have heavy blades that can hack through armor with horrific ease. If you hit an opponent, you Damage a struck piece of armor or shield by 1 point as well as wounding the target.",
  "impact": "Some weapons are just huge or cause terrible damage due to their weight or design. On a successful hit, add the result of the units die of the attack roll to any Damage caused by an Impact weapon. An Undamaging weapon can never also have Impact (Undamaging takes precedent).",
  "impale": "Impale weapons can kill with a single clean blow. Impale weapons cause a Critical Hit on any number divisible by 10 (i.e.: 10, 20, 30, etc.) as well as on doubles (i.e.: 11, 22, 33) rolled equal or under an appropriate Test in combat. If the impale comes from a ranged weapon, the ammunition used has firmly lodged itself in the target’s body. Arrows and bolts require a successful Challenging (+0) Heal Test to remove — bullets require a surgeon (see the Surgery Talent in Chapter 4: Skills and Talents). You cannot heal 1 of your Wounds for each unremoved arrow or bullet.",
  "penetrating": "The weapon is highly effective at penetrating armour. Non-metal APs are ignored, and the first point of all other armour is ignored.",
  "pistol": "You can use this weapon to attack in Close Combat.",
  "precise": "The weapon is easy to get on target. Gain a bonus of +1 SL to any successful Test when attacking with this weapon.",
  "pummel": "Pummel weapons are especially good at battering foes into submission. If you score a Head hit with a Pummel weapon, attempt an Opposed Strength/ Endurance test against the struck opponent. If you win the test, your opponent gains a Stunned Condition.",
  "repeater": "Your weapon holds (Rating) shots, automatically reloading after each time you fire. When you use all your shots, you must fully reload the weapon using the normal rules.",
  "shield": "If you use this weapon to oppose an incoming attack, you count as having (Rating) Armour Points on all locations of your body. If your weapon has a Shield Rating of 2 or higher (so: Shield 2 or Shield 3), you may also Oppose incoming missile shots in your Line of Sight.",
  "trapblade": "Some weapons are designed to trap other weapons, and sometimes even break them. If you score a Critical when defending against an attack from a bladed weapon you can choose to trap it instead of causing a Critical Hit. If you choose to do this, enact an Opposed Strength Test, adding your SL from the previous Melee Test. If you succeed, your opponent drops the blade as it is yanked free. If you score an Astounding Success, you not only disarm your opponent, but the force of your maneuver breaks their blade unless it has the Unbreakable quality. If you fail the Test, your opponent frees the blade and may fight on as normal.",
  "unbreakable": "The weapon is exquisitely well-made or constructed from an especially strong material. Under almost all circumstances, this weapon will not break, corrode, or lose its edge.",
  "wrap": "Wrap weapons typically have long chains with weights at the end, making it very difficult to parry them effectively. Melee Tests opposing an attack from a Wrap weapon suffer a penalty of –1 SL, as parried strikes wrap over the top of shields, or around blades.",
  "flexible": "Flexible armor can be worn under a layer of non-Flexible armor if you wish. If you do so, you gain the benefit of both.",
  "impenetrable": "The armor is especially resilient, meaning most attacks simply cannot penetrate it. All Critical Wounds caused by an odd number to hit you, such as 11 or 33, are ignored.",
  "durable": "Laboriously crafted using strong materials, the item can take +Durable Damage points before it suﬀers any negatives and gains a saving throw of 9+ on a <b><a class = 'chat-roll'>1d10</a></b> roll against instant breakage from sources like Trap Blade. This Quality can be taken multiple times. Each time it is taken, the saving throw improves by 1 (e.g. From 9+ to 8+).",
  "fine": "Meticulously crafted to please the eye. This Quality is a sign of social status and can be taken multiple times. The higher the quality, the more impressive it seems.",
  "lightweight": "Cleverly crafted for ease of carrying. Reduce Encumbrance points by 1.",
  "practical": "Expertly crafted with utility in mind. A failed test using this item receives +1 SL. If the item is a piece of armor, any penalties for wearing it are reduced by one level (for example from -30 to -20).",
};

// Weapon Flaw Descriptions (used in dropdown info)
WFRP4E.flawDescriptions = {
  "dangerous": "Some weapons are almost as likely to hurt you as your opponent. Any failed test including a 9 on either 10s or units die results in a Fumble.",
  "imprecise": "Imprecise weapons are difficult to bring to bear as they are unwieldy or hard to aim. Suffer a penalty of –1 SL when using the weapon to attack. An Imprecise Weapon can never be Precise (Imprecise takes precedent).",
  "reload": "The weapon is slow to reload. An unloaded weapon with this flaw requires an Extended Ranged Test for the appropriate Weapon Group scoring (Rating) SL to reload. If you are interrupted while reloading, you must start again from scratch.",
  "slow": "Slow weapons are unwieldy and heavy, making them difficult to use properly. Characters using Slow weapons always strike last in a Round, regardless of Initiative order. Further, opponents gain a bonus of +1 SL to any Test to defend against your attack",
  "tiring": "The weapon is fatiguing to use or difficult to bring to bear. You only gain the benefit of the Impact and Damaging Weapon Traits on a Turn you Charge.<br><br><b>Note:</b> This changes the Damage shown in the chat card:<br> 'Not Charging' | 'Charging' Damage.",
  "undamaging": "Some weapons are not very good at penetrating armour. All APs are doubled against Undamaging weapons. Further, you do not automatically inflict a minimum of 1 Wound on a successful hit in combat.",
  "partial": "The armor does not cover the entire hit location. An opponent that rolls an even number to hit, or rolls a Critical Hit, ignores the partial armor’s APs.",
  "weakpoints": "The armor has small weakpoints where a blade can slip in if your opponent is sufficiently skilled or lucky. If your opponent has a weapon with the Impale Quality and scores a Critical, the APs of your armor are ignored.",
  "ugly": "Crafted without any aesthetic awareness whatsoever, Ugly items attract negative attention, and related Fellowship Tests might even suﬀer a –10 penalty.",
  "shoddy": "Hastily crafted by an amateur or fraudster. The item breaks when used in any failed Test rolling a double. Similarly, Shoddy armor breaks if any Critical Hit is sustained to a Hit Location it protects.",
  "unreliable": "Crafted without attention to functionality, a failed test using this item receives –1 SL. Further, penalties for wearing Unreliable armor are doubled.",
  "bulky": "An awkward design crafted clumsily. Increase Encumbrance by +1 (small trinkets cannot normally have this ﬂaw). Bulky clothing and armor are Enc 1 even when worn, and Fatigue penalties for armor are doubled."
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
  "softLeather": "Soft Leather",
  "boiledLeather": "Boiled Leather",
  "mail": "Mail",
  "plate": "Plate",
  "other": "Other"
};

// Range Test Modifiers
WFRP4E.rangeModifiers={
  "Point Blank" : "Easy (+40)",
  "Short Range":"Average (+20)",
  "Normal" : "Challenging (+0)",
  "Long Range": "Difficult (-10)",
  "Extreme": "Very Hard (-30)",
 }

// Difficulty Modifiers
WFRP4E.difficultyModifiers = {
 "veasy" : 60,
 "easy" : 40 ,
 "average":20,
 "challenging":0,
 "difficult": -10,
 "hard" : -20,
 "vhard": -30
}

// Difficulty Labels
WFRP4E.difficultyLabels = {

 "veasy" :"Very Easy (+60)",
 "easy" :"Easy (+40)",
 "average":"Average (+20)",
 "challenging":"Challenging (+0)",
 "difficult":"Difficult (-10)",
 "hard" :"Hard (-20)",
 "vhard":"Very Hard (-30)"
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
   "common": "Common",
   "scarce": "Scarce",
   "rare": "Rare",
   "exotic": "Exotic",
 }


// Trapping Types
WFRP4E.trappingTypes = {
  "clothingAccessories":"Clothing and Accessories",
  "foodAndDrink":"Food and Drink",
  "toolsAndKits":"Tools and Kits",
  "booksAndDocuments":"Books and Documents",
  "tradeTools":"Trade Tools and Workshops", //unused, makes more sense to use Tools and Kits
  "drugsPoisonsHerbsDraughts":"Drugs, Poisons, Herbs, and Draughts",
  "ingredient":"Ingredient",
  "misc":"Miscellaneous"
};

// These categories are used to label items in containers (Trapping tab)
WFRP4E.trappingCategories = {
  "weapon" : "Weapons",
  "armour" : "Armour",
  "money" : "Money",
  "ammunition" : "Ammunition",
  "container" : "Container",
  "clothingAccessories":"Clothing and Accessories",
  "foodAndDrink":"Food and Drink",
  "toolsAndKits":"Tools and Kits",
  "booksAndDocuments":"Books and Documents",
  "tradeTools":"Trade Tools and Workshops", //unused, makes more sense to use Tools and Kits
  "drugsPoisonsHerbsDraughts":"Drugs, Poisons, Herbs, and Draughts",
  "ingredient":"Ingredient",
  "misc":"Miscellaneous"
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
  "beasts": "Whenever you successfully cast a spell from the Lore of Beasts, you may also gain the Fear (1) Creature Trait for the next 1d10 Rounds.",
  "death": "Targets afflicted by spells from the Lore of Death are drained of life, enervated, and listless. You may assign +1 Fatigued Condition to any living target aﬀected by a spell from this lore. A target may only ever have a single Fatigued Condition gained in this manner at any one time.",
  "fire": "You may inﬂict +1 Ablaze Condition on anyone targeted by spells from the Lore of Fire, unless they also possess the Arcane Magic (Fire) Talent. Every Ablaze condition within Willpower Bonus yards adds +10 to attempts to Channel or Cast with Aqshy. ",
  "heavens": "Spells causing Damage ignore Armour Points from metal armour, and will arc to all other targets within 2 yards, except those with the Arcane Magic (Heavens) Talent, inﬂicting hits with a Damage equal to your Willpower Bonus, handled like a magical missile.",
  "metal": "Spells inﬂicting Damage ignore Armor Points from metal armor, and inﬂict bonus Damage equal to the number of Armor Points of metal armor being worn on any Hit Location struck. So, if your spell hit an Arm location protected by 2 Armor Points of metal armor, it would cause an additional +2 Damage and ignore the Armor Points.",
  "life": "Receive a +10 bonus to Casting and Channeling rolls when in a rural or wilderness environment. Living creatures — e.g. those without the Daemonic or Undead Creature Traits — targeted by Arcane Spells from the Lore of Life have all Fatigued and Bleeding Conditions removed after any other eﬀects have been applied as life magic ﬂoods through them. Creatures with the Undead Creature Trait, on the other hand, suffer additional Damage equal to your Willpower Bonus, ignoring Toughness Bonus and Armor Points, if aﬀected by any spell cast with the Lore of Life.",
  "light": "You may inﬂict one Blinded Condition on those targeted by Lore of Light spells, unless they possess the Arcane Magic (Light) Talent. If a target has the Daemonic or Undead Creature Traits, spells also inﬂict an additional hit with Damage equal to your Intelligence Bonus that ignores Toughness Bonus and Armor Points.",
  "shadow": "All spells cast from the Lore of Shadows inﬂicting Damage ignore all non-magical Armor Points.",
  "hedgecraft": "Hedgecraft spells cannot be cast without ingredients, which are an integral part of their spellcasting process.<br><br>Fortunately, the ingredients they use are easily found on the fringes of settlements and are usually herbs or plants. You receive 1 + SL ingredients on a successful foraging roll, using Lore (Herbs), as described under Gathering Food and Herbs, or you can buy them for 5 brass pennies each.",
  "witchcraft": "Each time practitioners of Witchcraft roll on a Miscast table, they also gain 1 Corruption point. Further, you may inﬂict one Bleeding Condition on anyone targeted by spells from the Lore of Witchcraft. Lastly, channeling or casting spells from this Lore automatically require a roll on the Minor Miscast table unless cast with an ingredient, where the ingredient provides no further protection should you roll a Miscast. Fortunately, ingredients for the Lore of Witchcraft are cheap and readily available: body parts of small animals for the most part. Ingredients cost a spell’s CN in brass pennies, instead of silver shillings, to purchase. Alternatively, a Witch may forage for parts, using the Outdoor Survival skill: a successful foraging roll receives 1 + SL ingredients, as described under Gathering Food and Herbs",
  "daemonology": "",
  "necromancy": "",
  "nurgle": "",
  "slaanesh": "",
  "tzeentch": "",
};

// Types of prayers
WFRP4E.prayerTypes = {
  "blessing" : "Blessing",
  "miracle" : "Miracle"
}

WFRP4E.mutationTypes = {
  "physical" : "Physical",
  "mental" : "Mental"
}

WFRP4E.encumbrancePenalties = {
"encumbered" : "–1 Movement (min: 3), –10 Agility, +1 Travel Fatigue",
"veryEncumbered" : "–2 Movement (min: 2), –20 Agility (min: 10), +2 Travel Fatigue",
"maxEncumbered" : "You're not moving.",
}

WFRP4E.conditions = {
  "ablaze" : "Ablaze",
  "bleeding" : "Bleeding",
  "blinded" : "Blinded",
  "broken" : "Broken",
  "deafened" : "Deafened",
  "entangled" : "Entangled",
  "fatigued" : "Fatigued",
  "poisoned" : "Poisoned",
  "prone" : "Prone",
  "stunned" : "Stunned",
  "surprised" : "Surprised",
  "unconscious" : "Unconscious",
  "grappling" : "Grappling",
  "fear" : "Fear"
}


WFRP4E.conditionDescriptions = {
  "ablaze" : "At the end of every Round, you suﬀer <b><a class = 'chat-roll'>1d10</a></b> Wounds, modified by Toughness Bonus and Armor Points on the least protected Hit Location, with a minimum of 1 Wound suﬀered. Each extra Ablaze Condition you have adds +1 to the Damage suﬀered; so, three Ablaze Conditions result in 1d10+2 Damage suﬀered.<br><br>One Ablaze Condition can be removed with a successful Athletics Test, with each SL removing an extra Ablaze Condition. The Difficulty for this Test is modified by circumstances: it’s much easier to put out a fire rolling around on sand than it is in the middle of an oil-soaked kitchen",
  "bleeding" : "You are bleeding badly. Lose 1 Wound at the end of every Round, ignoring all modifiers. Further, suﬀer a penalty of –10 to any Tests to resist Festering Wounds, Minor Infection, or Blood Rot. If you reach 0 Wounds, you no longer lose Wounds and instead fall immediately unconscious (gain the <a class ='condition-chat'>Unconscious</a> Condition). At the end of Round, you have a 10% chance of dying per Bleeding Condition you have; so, if you had 3 Bleeding Conditions, you would die from blood loss on a roll of 0–30. If a double is scored on this roll, your wound clots a little: lose 1 Bleeding.You cannot regain consciousness until all Bleeding Conditions are removed (see Injury)<br><br>A Bleeding Condition can be removed with: a successful Heal Test, with each SL removing an extra Bleeding Condition; or with any spell or prayer that heals Wounds, with one Condition removed per Wound healed.<br><br>Once all Bleeding Conditions are removed, gain one <a class ='condition-chat'>Fatigued</a> Condition.",
  "blinded" : "Perhaps because of a ﬂash of light, or because of liquid sprayed in your face, you are unable to see properly. You suﬀer a –10 penalty to all Tests involving sight, and any opponent attacking you in close combat gains a bonus of +10 to hit you.<br><br>One Blinded Condition is removed at the end of every other Round",
  "broken" : "You are terrified, defeated, panicked, or otherwise convinced you are going to die. On your turn, your Move and Action must be used to run away as fast as possible until you are in a good hiding place beyond the sight of any enemy; then you can use your Action on a Skill that allows you to hide more eﬀectively. You also receive a penalty of –10 to all Tests not involving running and hiding.<br><br>You cannot Test to rally from being Broken if you are Engaged with an enemy. If you are unengaged, at the end of each Round, you may attempt a Cool Test to remove a Broken Condition, with each SL removing an extra Broken Condition, and the Difficulty determined by the circumstances you currently find yourself: it is much easier to rally when hiding behind a barrel down an alleyway far from danger (Average +20) than it is when three steps from a slavering Daemon screaming for your blood (Very Hard –30).<br><br>If you spend a full Round in hiding out of line-of-sight of any enemy, you remove 1 Broken Condition.<br><br>Once all Broken Conditions are removed, gain 1 <a class ='condition-chat'>Fatigued</a> Condition.",
  "deafened" : "Whether caused by a loud noise or a blow to the head, you are unable to hear properly. You suﬀer a –10 penalty to all Tests involving hearing, and any opponent attacking you in close combat from the ﬂank or rear gains an extra bonus of +10 to hit you (this bonus does not increase with multiple Deafened Conditions). One Deafened condition is removed at the end of every other Round and is often replaced with tinnitus.",
  "entangled" : "You are wrapped in something restricting your movement; it could be ropes, spider’s webbing, or an opponent’s bulging biceps. On your turn, you may not Move, and all your actions involving movement of any kind suﬀer a penalty of –10 (including Grappling). For your Action, you can remove an Entangled Condition if you win an Opposed Strength Test against the source of the entanglement, with each SL removing an extra Entangled Condition.",
  "fatigued" : "You are exhausted or stressed, and certainly in need of rest. You suﬀer a –10 penalty to all Tests. Removing a Fatigued Condition normally requires rest, a spell, or a divine eﬀect, though in some instances, such as when a <a class ='condition-chat'>Fatigued</a> Condition is caused by carrying too much (see Encumbrance), simply changing your circumstances (carrying fewer trappings, for example) can remove a Condition.",
  "poisoned" : "You have been poisoned or injected with venom. All Tests to remove poison have their difficulty determined by the poison or venom suﬀered. At the end of each Round, lose 1 Wound, ignoring all modifiers. Also, suﬀer a penalty of –10 to all Tests.<br><br>If you reach 0 Wounds when Poisoned, you cannot heal any Wounds until all Poisoned conditions are removed. If you fall Unconscious when Poisoned, make an Endurance Test after a number of Rounds equal to your Toughness Bonus or die horribly. See Injury.<br><br>At the end of each Round, you may attempt an Endurance Test. If successful, remove a Poisoned Condition, with each SL removing an extra Poisoned Condition. A Heal Test provides the same results. Once all Poisoned Conditions are removed, gain 1 Fatigued Condition.",
  "prone" : "You have fallen to the ground, possibly because you have run out of Wounds, you’ve tripped, or because you’ve been hit by something rather large. On your turn, your Move can only be used to stand up or crawl at half your Movement in yards (note: if you have 0 Wounds remaining, you can only crawl). You suﬀer a –20 penalty to all Tests involving movement of any kind, and any opponent trying to strike you in Melee Combat gains +20 to hit you.<br><br>Unlike most other conditions, Prone does not stack — you are either Prone, or you are not. You lose the Prone Condition when you stand up.",
  "stunned" : "You have been struck about the head or otherwise disorientated or confused; your ears are likely ringing, and little makes sense.<br><br>You are incapable of taking an Action on your turn but are capable of half your normal movement. You can defend yourself in opposed Tests — but not with Language (Magick). You also suﬀer a –10 penalty to all Tests. If you have any Stunned Conditions, any opponent trying to strike you in Melee Combat gains +1 Advantage before rolling the attack.<br><br>At the end of each Round, you may attempt a Challenging (+0) Endurance Test. If successful, remove a Stunned Condition, with each SL removing an extra Stunned Condition.<br><br>Once all Stunned Conditions are removed, gain 1 Fatigued Condition if you don’t already have one.",
  "surprised" : "You have been caught unawares and you aren’t at all ready for what’s about to hit you. You can take no Action or Move on your turn and cannot defend yourself in opposed Tests. Any opponent trying to strike you in Melee Combat gains a bonus of +20 to hit.<br><br>The Surprised Condition does not stack, so you do not collect multiple Surprised Conditions, even should you be technically surprised multiple times in a Round.<br><br>At the end of each Round, or after the first attempt to attack you, you lose the Surprised Condition.",
  "unconscious" : "You are knocked out, asleep, or otherwise insensible. You can do nothing on your turn and are completely unaware of your surroundings. Any Melee attack targeting you automatically hits on the location of the attacker’s choice with the maximum possible SL it could score, and also inﬂicts a Critical Wound; or, if the GM prefers, any close combat hit simply kills you. Any ranged combat hit automatically does the same if the shooter is at Point Blank range.<br><br>The Unconscious Condition does not stack — you are either Unconscious, or you are not — so you do not collect multiple Unconscious Conditions.<br><br>Recovering from unconsciousness requires diﬀerent circumstances depending upon why you fell unconscious. Refer to Injury for more on this. If you spend a Resolve point to remove an Unconscious condition, but have not resolved the cause of the incapacitation, you gain another Unconscious Condition at the end of the round. When you lose the Unconscious Condition, you gain the <a class ='condition-chat'>Prone</a> and <a class ='condition-chat'>Fatigued</a> Conditions",
  "grappling" : "If you begin your turn Grappling, you may break the Grapple if you have a higher Advantage than your opponent, and do not count as being Engaged for your Move; otherwise, you must make an Opposed Strength Test for your Action. If you win, you can do one of the following:<br><ul><li>Deal SB + SL Damage using your Strength roll to determine the Hit Location affected. You ignore any Armour Points as you wrench arms and pull muscles.</li><li>Either: 1) Give your opponent an <a class ='condition-chat'>Entangled</a> Condition, or 2) Remove an <a class ='condition-chat'>Entangled</a> Condition from yourself, plus lose an extra one for each SL by which you win</li></ul>",
  "fear" : "When subject to Fear, you suffer –1 SL on all Tests to affect the source of your fear. You may not move closer to whatever is causing Fear without passing a <b>Challenging (+0) Cool</b> Test. If it comes closer to you, you must pass a <b>Challenging (+0) Cool</b> Test, or gain a <a class ='condition-chat'>Broken</a> Condition"
}

WFRP4E.symptoms = {
  "blight" : "Blight",
  "buboes" : "Buboes",
  "convulsions" : "Convulsions",
  "coughsAndSneezes" : "Coughs and Sneezes",
  "fever" : "Fever",
  "flux" : "Flux",
  "gangrene" : "Gangrene",
  "lingering" : "Lingering",
  "malaise" : "Malaise",
  "nausea" : "Nausea",
  "pox" : "Pox",
  "wounded" : "Wounded",
  "delirium" : "Delirium"
}

WFRP4E.symptomDescriptions = {
  "blight" : "You are seriously ill and perhaps close to Morr’s Portal as deadly poisons ﬂood your body.\n\nPass a <b>Very Easy (+60) Endurance</b> daily (normally when you sleep) or die, passing away, perhaps in your sleep, perhaps lost in a fever, perhaps in agony. If Blight is marked as (Moderate), this Test is <b>Easy (+40)</b>; if marked as (Severe), this Test is <b>Average (+20)</b>.",
  "buboes" : "You have huge swellings of the lymph nodes, possibly in the groin, neck or armpits. These are enormously painful and may bleed or seep pus. They are disgusting, smelly, and some would argue a sure sign of the Lord of Pestilence’s favor, believing they hide tiny, growing Daemons. Common practice is to lance these terrible expressions of taint to remove whatever nestles within, though doing so often results in Festering Wounds.\n\nSuffer a penalty of –10 to all physical Tests, and to all Fellowship Tests if the buboes can be seen (or smelled!).",
  "convulsions" : "Your body periodically spasms or shakes as the infection seemingly uses you like a puppet.\n\nSuffer a penalty of –10 to all physical Tests as your body convulses beyond your control. If this symptom is marked as (Moderate), the penalty increases to –20. If it is marked as (Severe), you need to be tied down in order not to hurt yourself, leaving you eﬀectively incapacitated.",
  "coughsAndSneezes" : "You intermittently cough or sneeze, spreading your disease to all around you. Any characters in your environment are exposed to the disease you carry, and need Test for Contraction once per hour, or part thereof, of exposure.",
  "fever" : "Your temperature is high, you’re likely sweating, and you really don’t look at all well. Suffer a penalty of –10 to all physical and Fellowship Tests. If your Fever is marked as (Severe), it has completely incapacitated you, leaving you bed-ridden. Take the <a class ='condition-chat'>Unconscious</a> Condition, though expenditure of a Resolve point can bring consciousness for a few minutes.",
  "flux" : "There’s a rumble and a grumble, then you’re oﬀ for yet another sprint to the splattered outhouse. Pale and weary, you’ve had better days. Any given situation may be the moment you just have to go to the privy. You are expected to take every opportunity you can to pop oﬀ for an essential stop, and this is largely left in your hands. In addition, the GM can choose any point during the session’s play to claim you need to go. You have a number of rounds equal to your Toughness Bonus to get to an appropriate place to relieve yourself; whether you get there in time or not, your body will empty itself in a spectacular fashion. If the Flux is marked as (Moderate), the GM can make you go twice a session. If it is marked as (Severe), the GM can do it three times, and you will also lose 1 Wound per visit, as the bloody ﬂux leaves you utterly drained. ",
  "gangrene" : "Your ﬂesh is turning black, dying, infected with something awful, and it isn’t going to get better. Roll percentile dice to determine a <a class ='table-click' data-table='hitloc'>Hit Location</a>. If you roll Body, luckily the Gangrene did not settle in during this infection. If you roll Head, your nose is aﬀected. If you roll Arms, it’s your fingers. If you roll Leg, it’s your feet. Each day, roll an <b>Average (+20) Endurance</b> Test. If you pass, you hold oﬀ the Gangrene; if you fail, it grows worse. If you ever fail more times than you have Toughness Bonus, you completely lose all capability with the aﬀected location. If this occurs, use the same rules as Amputated Parts. For as long as you have Gangrene, suﬀer a penalty –10 to all Fellowship Tests, and suﬀer the Wounded symptom. Further, if not already suffering it, you also suﬀer from Blight until the aﬀected tissue is amputated; this remains even if you are cured of the disease that started the Gangrene. ",
  "lingering" : "You have an infection that just refuses to go away. Indeed, you fear it may be getting worse… After your disease reaches the end of its duration, attempt an Endurance Test with the Difficulty marked on the symptom like so: Lingering (Average) or Lingering (Easy). If this scores a Marginal Failure (0), the duration extends for an extra <b><a class = 'chat-roll'>1d10</a></b> days. If it scores a Failure (–2), develop a Festering Wound. On an Astounding Failure (–6), you instead develop Blood Rot. ",
  "malaise" : "You don’t feel at all well. You are tired, find it hard to concentrate, and just generally ill. Take a <a class ='condition-chat'>Fatigued</a> Condition that you can only remove when you have recovered from your illness. ",
  "nausea" : "You feel very sick and are prone to vomiting if you move around too quickly. Whenever you fail a Test involving physical movement, your nausea overwhelms you and you vomit. You gain the <a class = 'condition-chat'>Stunned</a> condition, which represents you being sick repeatedly or dry heaving, depending upon your current circumstances. ",
  "pox" : "You are covered in pustules, inﬂamed swellings, disgusting rashes, or itchy spots, which are unlikely to be your most attractive feature. Pox are largely a cosmetic issue, resulting in a penalty of –10 to Fellowship Tests. Additionally, remember to roleplay and describe all the scratching; if you want to withhold from this for a while, pass an <b>Average (+20) Cool</b> Test. When the Pox ends, attempt an <b>Average (+20) Cool</b> Test. If this fails, reverse the Test dice and apply permanent scarring to that Hit Location, showing an area where you scratched and the pox there healed badly. If the <a class='table-click' data-table = 'hitloc'>Hit Location</a> is the head, permanently lose 1 in Fellowship.",
  "wounded" : "You have a wound or open sore that does not heal properly because of an infection. For each Wounded symptom you have, you cannot heal one of your Wounds, which stays open and sore, possibly seeping foul-smelling pus. Every day, take an <b>Easy (+20) Endurance</b> Test or gain a Festering Wound if you do not already have one.",
  "delirium" : "Your sensibility comes and goes, with moments of clarity replaced suddenly by bouts of raving, hallucinations, and terror. Make a <b>Challenging (+0) Willpower Test</b> each hour, and consult the <b><a class='table-click' data-table='delirium'>Delirium</a></b> table."

}

WFRP4E.symptomTreatment = {
  "blight" : "None that work",
  "buboes" : "A successful Heal Test with Surgery can lance your buboes, removing the penalty. If the Test is failed, gain a Festering Wound. If your Buboes are lanced, make a <b>Difficult (–10) Endurance</b> Test once per day or more swell into place",
  "convulsions" : "Rare herbs and alchemical mixes can lessen this symptom for a day, bringing Severe down to Moderate, and Moderate down to standard convulsions. These can be created by any with the Trade (Apothecary) skill and access to the appropriate ingredients (which can cost upwards of 10 shillings or more per dose). The final medicine is Rare and usually genuine (80%), and can be bought for around 1 GC per dose from Apothecaries, putting it beyond the reach of most citizens of the Empire.",
  "coughsAndSneezes" : "None that work",
  "fever" : "There are many common, often disgusting, remedies for a fever, most of which don’t work (only 10% of commercial cures are genuine). A successful Heal Test does little more that inform you how long the fever will likely last. The cures range from a few pennies to many shillings in cost. If genuine, they will remove the symptoms of a Fever (not a severe one) if you pass a <b>Challenging (+0) Endurance</b> Test.",
  "flux" : "Real cures for the Flux are rare (10% of commercial remedies are genuine), but many apothecaries and herbalists swear theirs work every time. Costs vary widely according to where you buy the cures, from a few brass coins to small bag of silver. If genuine, the Flux can be held oﬀ for your Toughness Bonus in hours by taking a remedy.",
  "gangrene" : "Amputation of the gangrenous location is the only eﬀective treatment.",
  "lingering" : "Cures for lingering infections are commonplace and usually relatively cheap, rarely costing more than a shilling. However, almost all are fake or based on faulty lore. Any bought cure has only a 10% chance of being genuine, but if so will negate the need to roll the Endurance Test if taken on the correct day (which will require a successful Heal Test to determine).",
  "malaise" : "Medicine treating Malaise, costing anything from a few pence to a handful of silver, is usually genuine (75% chance); and, if so, pass a <b>Challenging (+0) Endurance</b> Test to ignore the symptom for the day.",
  "nausea" : "Remedies for Nausea are Common and usually genuine (60% chance), and typically cost around thirty pennies; if genuine, pass a <b>Challenging (+0) Endurance</b> Test, and the Nausea can be ignored for a number of hours equal to your Toughness Bonus.",
  "pox" : "Poxes are exceedingly common, and so are remedies, which are usually creams or oils. Larger temples of Shallya often keep a stock of the cream for free (though donations are expected) and apothecaries and herbalists of all kinds sell similar products for relatively low prices (rarely more than six or seven pence for a week’s worth of treatment, with a 90% chance of being genuine medicine). Using a cream increases all Cool Tests to resist scratching to <b>Very Easy (+60)</b>, but is usually unsightly.",
  "wounded" : "A daily successful Heal Test ensures the Wound is clean and does not require an Endurance Test to be further infected.",
  "delirium" : "Some authorities treat delirium as part of a fever, prescribing the same measures. Remedies cost from a few pennies to a few shillings, and 10% are genuine.<br><br>With the correct medicine, a successful <b>Challenging (+0) Heal</b> Test banishes the hallucinations for <b><a class = 'chat-roll'>1d10</a></b> hours.<br><br>It is also common to sedate delirious patients with a tranquillising drug, such as Moonflower or even Nightshade, to keep the patient comfortable until the condition has passed, sending them into a Fitful Sleep until they either recover or die."

}

WFRP4E.earningValues = {
  "b" : "2d10",
  "s" : "1d10",
  "g" : "1",
}

WFRP4E.randomExp = {
  speciesRand : 20,
  careerRand : 50,
  careerReroll : 25,
  statsRand : 50,
  statsReorder : 25
}

const DAMAGE_TYPE = {
  NORMAL : 0,
  IGNORE_AP : 1,
  IGNORE_TB : 2,
  IGNORE_ALL : 3
}