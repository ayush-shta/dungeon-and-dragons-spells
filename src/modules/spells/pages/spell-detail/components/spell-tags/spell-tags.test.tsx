import React from 'react';
import { screen } from '@testing-library/react';

import SpellTags from './spell-tags';
import { renderWithClient } from 'src/test/test-utils';
import { mockSpellData } from 'src/test/mock-data/mock-spell-data';

const renderSpellTags = () => renderWithClient(<SpellTags spell={mockSpellData} />);

describe('spell-tags', () => {
  it('renders classes string', () => {
    renderSpellTags();

    const spellClasses = mockSpellData.classes;
    spellClasses.forEach((spellClass) => expect(screen.getByText(spellClass.name)).toBeInTheDocument());
  });

  it('renders sub-classes string', () => {
    renderSpellTags();

    const spellSubClasses = mockSpellData.subclasses;
    spellSubClasses.forEach((spellClass) => expect(screen.getByText(spellClass.name)).toBeInTheDocument());
  });
});
