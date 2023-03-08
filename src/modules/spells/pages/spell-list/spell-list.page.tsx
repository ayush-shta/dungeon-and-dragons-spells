import React, { useEffect, useState } from 'react';

import { ISpellListItem } from '../../spell.types';
import SpellSearch from './components/spell-search';
import SpellListData from './components/spell-list-data';
import LoadingIndicator from 'src/components/loading-indicator';
import { useFetchSpellList } from './hooks/use-spell-list-request';

const SpellList = () => {
  const { data, isLoading, error } = useFetchSpellList();

  const [spellList, setSpellList] = useState<ISpellListItem[] | undefined>(data);

  useEffect(() => {
    data && setSpellList(data);
  }, [data]);

  const onSpellSearch = (searchText: string) => {
    if (!searchText.trim()) {
      data && setSpellList(data);
    }

    data && setSpellList(data.filter((spell) => spell.name.toLowerCase().includes(searchText.toLowerCase())));
  };

  if (isLoading || !spellList) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <SpellSearch onSpellSearch={onSpellSearch} />
      <SpellListData spellList={spellList} error={error} />
    </>
  );
};

export default SpellList;
