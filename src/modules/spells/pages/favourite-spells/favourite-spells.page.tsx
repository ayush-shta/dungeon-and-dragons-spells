import React from 'react';
import { Box, List, useTheme } from '@mui/material';

import { useAppSelector } from 'src/redux/hooks';
import SpellListItem from '../../components/spell-list-item';
import PageTitle from 'src/components/page-title';
import NoDataMessage from 'src/components/no-data-message';

const FavouriteSpells = () => {
  const theme = useTheme();
  const { favouriteSpells } = useAppSelector((state) => state.spellsReducer);

  if (favouriteSpells.length === 0) {
    return (
      <NoDataMessage
        title={'You do not have any favourite spells'}
        message={'Add your faviourate spells by clicking the star icon'}
      />
    );
  }

  return (
    <>
      <Box mt={theme.spacing(2)} marginX={theme.spacing(4)}>
        <PageTitle title={'Favourite Spells'} />
      </Box>
      <List>
        {favouriteSpells?.map((spell) => (
          <SpellListItem spell={spell} key={spell.index} />
        ))}
      </List>
    </>
  );
};

export default FavouriteSpells;
