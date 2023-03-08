import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { ISpellListItem } from './spell.types';

interface IState {
  favouriteSpells: ISpellListItem[];
}

const initialState: IState = {
  favouriteSpells: []
};

export const spellsSlice = createSlice({
  name: 'favourite-spells',
  initialState: initialState,
  reducers: {
    setFavouriteSpell: (state, action: PayloadAction<ISpellListItem>) => {
      const { payload: spellItem } = action;

      state.favouriteSpells.push(spellItem);
    },
    removeFavouriteSpell: (state, action: PayloadAction<ISpellListItem>) => {
      const { payload: spellItem } = action;

      state.favouriteSpells = state.favouriteSpells.filter((spell) => spell.index !== spellItem.index);
    }
  }
});

export const spellsActions = spellsSlice.actions;

export default spellsSlice.reducer;
