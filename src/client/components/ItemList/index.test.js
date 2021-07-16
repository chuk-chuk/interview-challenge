import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuContext } from '../../menuProvider';
import ItemList from './';

const mockData = { items: [
    { id: 1, name: "Item Kale", dietaries: ["v"]},
    { id: 2, name: "Item Apple", dietaries: ["v"]},
]}

describe('ItemList', () => {
  it('renders a component in a loading state', () => {
    render(
      <MenuContext.Provider value={{ result: [], isLoading: true }}>
        <ItemList />
      </MenuContext.Provider>
    )

    expect(screen.getByText('Loading ...')).toBeInTheDocument()
  })

  it('renders 2 names of returned items', () => {
    render(
      <MenuContext.Provider value={{ result: mockData, isLoading: false }}>
        <ItemList />
      </MenuContext.Provider>
    )

    expect(screen.getByText('Item Kale')).toBeInTheDocument()
    expect(screen.getByText('Item Apple')).toBeInTheDocument()
  })
})
