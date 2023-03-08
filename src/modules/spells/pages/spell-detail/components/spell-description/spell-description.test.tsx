import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import { mockSpellData } from 'src/test/mock-data/mock-spell-data';
import SpellDescription from './spell-description';

const renderSpellDescription = () => renderWithClient(<SpellDescription spell={mockSpellData} />);

describe('spell-description', () => {
  it('renders spell description text', () => {
    renderSpellDescription();

    mockSpellData.desc.forEach((description) => {
      const descriptionText = screen.getByText(description);
      expect(descriptionText).toBeInTheDocument();
    });
  });
});
