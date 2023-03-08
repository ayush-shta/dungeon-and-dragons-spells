import React from 'react';
import { Divider, Grid, Paper, Stack, styled, Typography, useTheme } from '@mui/material';

import { ISpell } from '../../../../spell.types';
interface ISpellInfoItemProps {
  title: string;
  description: string;
}

const InfoItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}));

const InfoDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  borderBottomWidth: 2,
  backgroundColor: theme.palette.secondary.main
}));

const SpellInfoItem = ({ title, description }: ISpellInfoItemProps) => {
  return (
    <Grid item xs={3}>
      <InfoItem elevation={0}>
        <Typography variant="subtitle1" fontWeight={'bold'} textTransform={'uppercase'}>{`${title}`}</Typography>
        <Typography variant="body1" textTransform={'capitalize'}>
          {description || 'N/A'}
        </Typography>
      </InfoItem>
    </Grid>
  );
};

interface ISpellExtraInfoProps {
  spell: ISpell;
}

const SpellExtraInfo = ({ spell }: ISpellExtraInfoProps) => {
  const theme = useTheme();

  return (
    <>
      <InfoDivider />

      <Grid container spacing={theme.spacing(4)}>
        <SpellInfoItem title={'Level'} description={spell.level.toString()} />
        <SpellInfoItem title={'school'} description={spell.school.name} />
        <SpellInfoItem title={'Attack Type'} description={spell.attack_type} />
        <SpellInfoItem title={'Duration'} description={spell.duration} />
        <SpellInfoItem title={'Casting Time'} description={spell.casting_time} />
        <SpellInfoItem title={'Range'} description={spell.range} />
        {spell.damage && <SpellInfoItem title={'Damage Type'} description={spell.damage.damage_type.name} />}
        <SpellInfoItem title={'Components'} description={spell.components.map((component) => component).join(', ')} />
      </Grid>

      {spell.material && (
        <Stack direction="row" alignItems="center" spacing={1} mt={4}>
          <Typography variant="subtitle1" textTransform={'uppercase'}>
            {'Material: '}
          </Typography>
          <Typography variant="body1">{spell.material}</Typography>
        </Stack>
      )}
      <InfoDivider />
    </>
  );
};

export default SpellExtraInfo;
