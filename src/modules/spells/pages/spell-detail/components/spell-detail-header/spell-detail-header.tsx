import React from 'react';
import { Stack } from '@mui/material';

import { ISpell } from '../../../../spell.types';
import PageTitle from 'src/components/page-title';
import FavouriteSpellButton from '../../../../components/favourite-spell-button';

interface ISpellDetailHeaderProps {
  spell: ISpell;
}

const SpellDetailHeader = ({ spell }: ISpellDetailHeaderProps) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Stack direction="row" alignItems="center">
          <PageTitle title={spell.name} />
        </Stack>
        <FavouriteSpellButton spellItem={spell} />
      </Stack>
    </>
  );
};

export default SpellDetailHeader;
