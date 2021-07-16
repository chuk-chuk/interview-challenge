import React from 'react';
import { render, screen } from '@testing-library/react';
import { SelectedMenuContext } from '../../selectedItemsProvider';
import MenuPreview from './';

describe('MenuPreview', () => {
  it('renders a component in a loading state', () => {
    render(
      <SelectedMenuContext.Provider value={{ result: [], isLoading: true }}>
        <MenuPreview />
      </SelectedMenuContext.Provider>
    )

    expect(screen.getByText('Loading ...')).toBeInTheDocument()
  })

  it('show a message when no items selected', () => {
    render(
      <SelectedMenuContext.Provider value={{ result: { items: [] }, isLoading: false }}>
        <MenuPreview />
      </SelectedMenuContext.Provider>
    )

    expect(screen.getByText('Menu preview')).toBeInTheDocument()
    expect(screen.getByText('No items selected')).toBeInTheDocument()
  })
})
