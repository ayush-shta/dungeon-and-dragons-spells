import React from 'react';
import { AxiosError } from 'axios';
import { List } from '@mui/material';

import ErrorMessage from 'src/components/error-message';
import NoDataMessage from 'src/components/no-data-message';
import SpellListItem from 'src/modules/spells/components/spell-list-item';
import { ISpellListItem } from 'src/modules/spells/spell.types';

interface ISpellListDataProps {
  spellList: ISpellListItem[];
  error: AxiosError | null;
}

const SpellListData = (props: ISpellListDataProps) => {
  const { error, spellList } = props;

  if (error) {
    return <ErrorMessage />;
  }

  if (spellList.length === 0) {
    return <NoDataMessage title="No spells to display" />;
  }

  return (
    <List>
      {spellList.map((spell) => (
        <SpellListItem spell={spell} key={spell.index} />
      ))}
    </List>
  );
};

export default SpellListData;
