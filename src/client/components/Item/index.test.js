import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './';

const props = {
  itemData: { id: 1, name: "Kale", dietaries: ['veg', 'gluten']},
  onClick: jest.fn(),
  removable: true
}

describe('Item', () => {
  it('renders a component', () => {
    render(
      <Item {...props}/>
    )

    expect(screen.getByText('Kale')).toBeInTheDocument()
    expect(screen.getByText('x')).toBeInTheDocument()
    expect(screen.getByText('veg')).toBeInTheDocument()
    expect(screen.getByText('gluten')).toBeInTheDocument()

  })

  it('renders with no dietaries', () => {
    render(
      <Item {...props} itemData={ { id: 1, name: "Kale", dietaries: []}}/>
    )

    expect(screen.getByText('No dietaries selected')).toBeInTheDocument()
  })

  it('show add button when removable is set to true', () => {
    render(
      <Item {...props} removable={false} />
    )

    expect(screen.getByText('add')).toBeInTheDocument()
  })
})
