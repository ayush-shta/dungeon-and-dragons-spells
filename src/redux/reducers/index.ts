import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import spellsReducer from 'src/modules/spells/spells.reducer';

const persistConfig = {
  key: 'root',
  storage
};

const appReducer = combineReducers({ spellsReducer });

export type RootState = ReturnType<typeof appReducer>;

export default persistReducer(persistConfig, appReducer);
