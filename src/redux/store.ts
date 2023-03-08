import { persistStore } from 'redux-persist';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';

import rootReducer, { RootState } from './reducers';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // Ignore serializable checks for persist actions
        // Reference: https://github.com/rt2zz/redux-persist/issues/988#issuecomment-552242978
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  });

export const store = setupStore();

export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof setupStore>;

/**
 * Type to describe store.dispatch
 */
export type AppDispatch = typeof store.dispatch;
