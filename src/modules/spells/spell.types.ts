export interface ISpellListItem {
  index: string;
  name: string;
  url: string;
}

export interface ISpellListResponse {
  count: number;
  results: ISpellListItem[];
}

export interface ISpell {
  index: string;
  name: string;
  url: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  attack_type: string;
  casting_time: string;
  level: number;
  damage?: ICharacterLevelDamage | ISlotLevelDamage;
  school: ISpellSchool;
  classes: ISpellClass[];
  subclasses: ISpellClass[];
}

export interface ISpellResponse extends ISpell {}

interface IBaseSpellDamage {
  damage_type: {
    index: string;
    name: string;
    url: string;
  };
}

interface ICharacterLevelDamage extends IBaseSpellDamage {
  damage_at_character_level: {
    [key: string]: any;
  };
}

interface ISlotLevelDamage extends IBaseSpellDamage {
  damage_at_slot_level: {
    [key: string]: any;
  };
}

interface ISpellSchool {
  index: string;
  name: string;
  url: string;
}

interface ISpellClass {
  index: string;
  name: string;
  url: string;
}
