import React from 'react';
import { Box, FormControl, TextField, useTheme } from '@mui/material';

interface ISpellSearchProps {
  onSpellSearch: (searchString: string) => void;
}

const SpellSearch = (props: ISpellSearchProps) => {
  const { onSpellSearch } = props;
  const theme = useTheme();

  const handleOnTextChange = (event: React.ChangeEvent<HTMLInputElement>) => onSpellSearch(event.target.value);

  return (
    <Box mt={theme.spacing(2)} marginX={theme.spacing(2)}>
      <FormControl fullWidth variant="standard">
        <TextField label="Search spells" variant="outlined" onChange={handleOnTextChange} />
      </FormControl>
    </Box>
  );
};

export default SpellSearch;
