import { ISpellListItem } from './spell.types';
import spellsReducer, { spellsActions } from './spells.reducer';
import { mockSpellListData } from '../../test/mock-data/mock-spell-items';
import { mockFavouriteSpellsData } from '../../test/mock-data/mock-favourite-spells';

describe('favourite-spells.spellsReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      favouriteSpells: []
    };

    expect(spellsReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle adding spell to the empty favourite list', () => {
    const initialData: ISpellListItem[] = [];

    const dataToBeAdded = mockSpellListData[0];

    const previousState = {
      favouriteSpells: initialData
    };

    const expectedData: ISpellListItem[] = [dataToBeAdded];

    expect(spellsReducer(previousState, spellsActions.setFavouriteSpell(dataToBeAdded))).toEqual({
      favouriteSpells: expectedData
    });
  });

  it('should handle adding spell to existing favourite list', () => {
    const initialData = mockFavouriteSpellsData.slice(0, 2);

    const dataToBeAdded = mockSpellListData[0];

    const previousState = {
      favouriteSpells: initialData
    };

    const expectedData: ISpellListItem[] = [...initialData, dataToBeAdded];

    expect(spellsReducer(previousState, spellsActions.setFavouriteSpell(dataToBeAdded))).toEqual({
      favouriteSpells: expectedData
    });
  });

  it('should remove spell from the favourite list', () => {
    const dataToBeRemoved = mockSpellListData[0];

    const initialData = [...mockFavouriteSpellsData.slice(0, 2), mockSpellListData[0]];

    const previousState = {
      favouriteSpells: initialData
    };

    const expectedData: ISpellListItem[] = mockFavouriteSpellsData.slice(0, 2);

    expect(spellsReducer(previousState, spellsActions.removeFavouriteSpell(dataToBeRemoved))).toEqual({
      favouriteSpells: expectedData
    });
  });
});
