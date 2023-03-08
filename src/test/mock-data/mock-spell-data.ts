export const mockSpellData = {
  index: 'sacred-flame',
  name: 'Sacred Flame',
  url: '/api/spells/sacred-flame',
  casting_time: '1 action',
  attack_type: 'ranged',
  classes: [
    {
      index: 'cleric',
      name: 'Cleric',
      url: '/api/classes/cleric'
    },
    {
      index: 'mage',
      name: 'Mage',
      url: '/api/classes/mage'
    },
    {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/classes/wizard'
    }
  ],
  components: ['V', 'S', 'M'],
  concentration: false,
  damage: {
    damage_at_character_level: {
      '1': '1d8',
      '5': '2d8',
      '11': '3d8',
      '17': '4d8'
    },
    damage_type: {
      index: 'radiant',
      name: 'Radiant',
      url: '/api/damage-types/radiant'
    }
  },
  desc: [
    'Flame-like radiance descends on a creature that you can see within range. The target must succeed on a dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.',
    "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
  ],
  duration: 'Instantaneous',
  higher_level: [],
  level: 0,
  range: '60 feet',
  ritual: false,
  school: {
    index: 'evocation',
    name: 'Evocation',
    url: '/api/magic-schools/evocation'
  },
  material: "Powdered rhubarb leaf and an adder's stomach.",
  subclasses: [
    {
      index: 'lore',
      name: 'Lore',
      url: '/api/subclasses/lore'
    }
  ]
};
