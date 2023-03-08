import React from 'react';
import { Typography } from '@mui/material';

import { appNavBarStyle } from '../../app-nav-bar.style';

interface INavLinkProps {
  label: string;
  link: string;
}

const NavLink = ({ label, link }: INavLinkProps) => (
  <Typography variant="h6" noWrap component="a" href={link} sx={appNavBarStyle.appBarOption}>
    {label}
  </Typography>
);

export default NavLink;
