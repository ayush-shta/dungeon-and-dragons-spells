import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { AppBar, Stack, Toolbar, Typography, useTheme } from '@mui/material';

import NavLink from './components/nav-link';
import { appNavBarStyle } from './app-nav-bar.style';
import { appRoutes } from 'src/constants/app-routes';

const AppNavBar = () => {
  const theme = useTheme();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <AcUnitIcon />
        <Typography variant="h5" noWrap component="a" href={appRoutes.root} sx={appNavBarStyle.appTitle}>
          D&D Spells
        </Typography>
        <Stack direction={'row'} spacing={theme.spacing(2)}>
          <NavLink label={'All Spells'} link={appRoutes.root} />
          <NavLink label={'Favourite Spells'} link={appRoutes.favourites} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavBar;
