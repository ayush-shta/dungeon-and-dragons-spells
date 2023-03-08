import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { appRouteParams, appRoutes } from 'src/constants/app-routes';
import SpellList from 'src/modules/spells/pages/spell-list';
import FavouriteSpells from 'src/modules/spells/pages/favourite-spells';
import AppNavBar from './components/app-nav-bar';
import SpellDetail from './modules/spells/pages/spell-detail';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppNavBar />
      <Routes>
        <Route path={appRoutes.root} element={<SpellList />} />
        <Route path={appRoutes.favourites} element={<FavouriteSpells />} />
        <Route path={`${appRoutes.spell}/:${appRouteParams.spellIndex}`} element={<SpellDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
