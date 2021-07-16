import React from 'react';
import { render, screen } from '@testing-library/react';
import { MenuContext } from '../../menuProvider';
import Header from './';

const mockData = { items: [
    { id: 1, name: "Item Kale", dietaries: ["v"]},
    { id: 2, name: "Item Apple", dietaries: ["v"]},
]}

describe('Header', () => {
  it('renders a component in a loading state', () => {
    render(
      <MenuContext.Provider value={{ result: [], isLoading: true }}>
        <Header />
      </MenuContext.Provider>
    )

    expect(screen.getByText('Loading ...')).toBeInTheDocument()
  })

  it('renders total number of items', () => {
    render(
      <MenuContext.Provider value={{ result: mockData, isLoading: false }}>
        <Header />
      </MenuContext.Provider>
    )

    expect(screen.getByText('2 items')).toBeInTheDocument()
  })

  it('renders total number of each dietary', () => {
    render(
      <MenuContext.Provider value={{ result: mockData, isLoading: false }}>
        <Header />
      </MenuContext.Provider>
    )

    expect(screen.getByText('2x v')).toBeInTheDocument()
  })
})
