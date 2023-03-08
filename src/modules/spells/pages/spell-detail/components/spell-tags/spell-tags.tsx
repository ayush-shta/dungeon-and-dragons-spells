import React from 'react';
import { Chip, Stack, Typography, useTheme } from '@mui/material';

import { ISpell } from '../../../../spell.types';

interface ISpellAttributesProps {
  spell: ISpell;
}

interface ISpellTag {
  label: string;
  tags: string[];
}

const SpellTag = ({ label, tags }: ISpellTag) => {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" spacing={theme.spacing(1)} marginY={theme.spacing(4)}>
      <Typography variant="subtitle1" fontWeight={'bold'}>{`${label}: `}</Typography>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} variant="outlined" />
      ))}
    </Stack>
  );
};

const SpellAttributes = ({ spell }: ISpellAttributesProps) => {
  return (
    <>
      <SpellTag label="Available for classes" tags={spell.classes.map((spellClass) => spellClass.name)} />
      {spell.subclasses.length > 0 && (
        <SpellTag label="Available for sub-classes" tags={spell.subclasses.map((spellClass) => spellClass.name)} />
      )}
    </>
  );
};

export default SpellAttributes;
