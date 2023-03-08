import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { getSpellByIndex } from '../../../spells.service';
import { ISpellResponse } from '../../../spell.types';

export const useFetchSpellDetail = (spellIndex?: string) => {
  return useQuery<ISpellResponse, AxiosError>(['spell-list', spellIndex], () => getSpellByIndex(spellIndex), {
    enabled: !!spellIndex
  });
};
