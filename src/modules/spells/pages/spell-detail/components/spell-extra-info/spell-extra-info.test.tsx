import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithClient } from 'src/test/test-utils';
import { mockSpellData } from 'src/test/mock-data/mock-spell-data';
import SpellExtraInfo from './spell-extra-info';

const renderSpellExtraInfo = () => renderWithClient(<SpellExtraInfo spell={mockSpellData} />);

describe('spell-extra-info', () => {
  it('renders spell material', () => {
    renderSpellExtraInfo();

    const materialText = screen.getByText(mockSpellData.material);
    expect(materialText).toBeInTheDocument();
  });

  it('renders spell level', () => {
    renderSpellExtraInfo();

    const levelText = mockSpellData.level;
    expect(screen.getByText(levelText)).toBeInTheDocument();
  });

  it('renders spell duration', () => {
    renderSpellExtraInfo();

    const durationText = mockSpellData.duration;
    expect(screen.getByText(durationText)).toBeInTheDocument();
  });

  it('renders spell casting time', () => {
    renderSpellExtraInfo();

    const castingTimeText = mockSpellData.casting_time;
    expect(screen.getByText(castingTimeText)).toBeInTheDocument();
  });

  it('renders spell range', () => {
    renderSpellExtraInfo();

    const rangeText = mockSpellData.range;
    expect(screen.getByText(rangeText)).toBeInTheDocument();
  });

  it('renders spell damage type', () => {
    renderSpellExtraInfo();

    const damageTypeText = mockSpellData.damage.damage_type.name;
    expect(screen.getByText(damageTypeText)).toBeInTheDocument();
  });

  it('renders components as comma separated string', () => {
    renderSpellExtraInfo();

    const spellComponents = mockSpellData.components;
    const spellComponentsText = `${spellComponents[0]}, ${spellComponents[1]}, ${spellComponents[2]}`;
    expect(screen.getByText(spellComponentsText)).toBeInTheDocument();
  });
});
