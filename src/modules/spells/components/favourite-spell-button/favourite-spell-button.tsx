import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { ISpellListItem } from 'src/modules/spells/spell.types';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { spellsActions } from 'src/modules/spells/spells.reducer';
import { favouriteButtonStyle } from './favourite-spell-button.style';

interface IFavouriteSpellButtonProps {
  spellItem: ISpellListItem;
}

const FavouriteSpellButton = (props: IFavouriteSpellButtonProps) => {
  const { spellItem } = props;
  const { favouriteSpells } = useAppSelector((state) => state.spellsReducer);

  const isFavourite = favouriteSpells.some((favouriteSpell) => favouriteSpell.index === spellItem.index);

  const dispatch = useAppDispatch();

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(spellsActions.removeFavouriteSpell(spellItem));
      return;
    }

    dispatch(spellsActions.setFavouriteSpell(spellItem));
  };

  const tooltipTitle = isFavourite ? 'Remove favourite' : 'Add to favorites';

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton onClick={toggleFavourite}>
        {isFavourite ? (
          <StarIcon fontSize="large" sx={favouriteButtonStyle} />
        ) : (
          <StarBorderIcon fontSize="large" sx={favouriteButtonStyle} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default FavouriteSpellButton;
