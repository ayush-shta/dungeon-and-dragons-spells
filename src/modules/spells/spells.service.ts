import { httpInstance } from 'src/services/http';

const BASE_SPELL_URL = './spells';

export const getAllSpells = async () => {
  const response = await httpInstance.get(BASE_SPELL_URL);

  return response.data;
};

export const getSpellByIndex = async (spellIndex?: string) => {
  if (!spellIndex) {
    return;
  }

  const response = await httpInstance.get(`${BASE_SPELL_URL}/${spellIndex}`);

  return response.data;
};
