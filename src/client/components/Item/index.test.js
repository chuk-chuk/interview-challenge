import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './';

const props = {
  itemData: { id: 1, name: "Kale", dietaries: ['v']},
  onClick: () => {},
  removable: false
}

describe('Item', () => {
  it('renders a component', () => {
    render(
      <Item {...props}/>
    )

    expect(screen.getByText('Kale')).toBeInTheDocument()
  })
})
