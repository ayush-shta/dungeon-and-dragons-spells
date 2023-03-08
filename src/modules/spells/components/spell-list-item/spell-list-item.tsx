import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

import { ISpellListItem } from '../../spell.types';
import { appRoutes } from 'src/constants/app-routes';
import FavouriteSpellButton from '../favourite-spell-button';

interface ISpellListItemProps {
  spell: ISpellListItem;
}

const SpellListItem = (props: ISpellListItemProps) => {
  const { spell } = props;

  const navigate = useNavigate();

  const handleListItemClick = () => {
    const route = `${appRoutes.spell}/${spell.index}`;

    navigate(route);
  };

  return (
    <ListItem divider>
      <ListItemButton onClick={handleListItemClick}>
        <ListItemText primary={spell.name} />
      </ListItemButton>
      <FavouriteSpellButton spellItem={spell} />
    </ListItem>
  );
};

export default SpellListItem;
