import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { getAllSpells } from '../../../spells.service';
import { ISpellListItem, ISpellListResponse } from '../../../spell.types';

export const useFetchSpellList = () => {
  return useQuery<ISpellListResponse, AxiosError, ISpellListItem[]>('spell-list', getAllSpells, {
    select: (spellListResponse) => spellListResponse.results
  });
};
