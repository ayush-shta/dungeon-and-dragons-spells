import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { messagePromptIcon } from 'src/styles/icons.style';

interface IErrorMessageProps {
  title?: string;
  message?: string;
}

const NoDataMessage = (props: IErrorMessageProps) => {
  const { title, message } = props;
  const theme = useTheme();

  return (
    <Box pt={theme.spacing(32)} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <ErrorIcon sx={messagePromptIcon} color={'warning'} />
      <Typography variant={'h4'} color={'warning'}>
        {title || 'No data'}
      </Typography>
      {message && (
        <Typography variant={'body1'} color={'warning'}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default NoDataMessage;
