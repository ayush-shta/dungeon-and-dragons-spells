import React from 'react';
import { Typography } from '@mui/material';

interface IPageTitleProps {
  title: string;
}

const PageTitle = (props: IPageTitleProps) => {
  return (
    <Typography variant={'h4'} color={'primary'}>
      {props.title}
    </Typography>
  );
};

export default PageTitle;
