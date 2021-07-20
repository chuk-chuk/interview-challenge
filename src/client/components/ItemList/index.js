import React from 'react';
import Item from '../Item';
import { useMenuApi } from '../../hooks/use-menu-api';
import '../../App.css';

export default function ItemList({ increaseVersion }) {
  const { result, isLoading } = useMenuApi();

  if (isLoading) return <p>Loading ...</p>

  const handleOnClick = (item) => {
    return () => fetch(`api/selectedItems`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: item.id })
    })
    .then(res => res.json())
    .then((data) => {
      console.log('Success:', data)
      increaseVersion()
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
  
  return (
    <div>
    {result && result.items.length ? (
    <ul className="item-picker">
      {result.items.map(item => {
        return (
          <li data-testid="item" key={item.id} className="item">
            <Item itemData={item} onClick={handleOnClick(item)} removable={false} />
          </li>
        )
      })}
    </ul>
    ) : (
      <p>No items found</p>
    )}
    </div>
  )
}
