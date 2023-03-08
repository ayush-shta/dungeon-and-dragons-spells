import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

import { ISpell } from '../../../../spell.types';

interface ISpellDescriptionProps {
  spell: ISpell;
}

const SpellDescription = ({ spell }: ISpellDescriptionProps) => {
  return (
    <List>
      {spell.desc.map((description, index) => {
        return (
          // using index as key as we have no stable ids for this
          <ListItem key={index} disableGutters>
            <ListItemText primary={description} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default SpellDescription;
