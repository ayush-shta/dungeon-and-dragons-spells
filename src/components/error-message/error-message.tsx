import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import { messagePromptIcon } from 'src/styles/icons.style';
interface IErrorMessageProps {
  message?: string;
}

const ErrorMessage = (props: IErrorMessageProps) => {
  const theme = useTheme();

  return (
    <Box pt={theme.spacing(32)} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <ErrorIcon sx={messagePromptIcon} color={'error'} />
      <Typography variant={'h4'} color={'error'}>
        {props.message || 'Error fetching data'}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
