import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useFetchSpellDetail } from './hooks/use-spell-detail-request';
import LoadingIndicator from 'src/components/loading-indicator';
import ErrorMessage from 'src/components/error-message';
import NoDataMessage from 'src/components/no-data-message';
import SpellDetailHeader from './components/spell-detail-header';
import SpellTags from './components/spell-tags';
import SpellDescription from './components/spell-description';
import SpellExtraInfo from './components/spell-extra-info';

type ParamTypes = {
  spellIndex: string;
};

const SpellDetail = () => {
  const params = useParams<ParamTypes>();
  const theme = useTheme();

  const { data: spellData, isLoading, error } = useFetchSpellDetail(params.spellIndex);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!spellData) {
    return <NoDataMessage title="Spell data not found" />;
  }

  return (
    <Box paddingX={theme.spacing(4)} paddingY={theme.spacing(2)}>
      <SpellDetailHeader spell={spellData} />
      <SpellExtraInfo spell={spellData} />
      <SpellDescription spell={spellData} />
      <SpellTags spell={spellData} />
    </Box>
  );
};

export default SpellDetail;
