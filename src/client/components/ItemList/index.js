import React from 'react';
import Item from '../Item';
import { useMenuApi } from '../../hooks/use-menu-api';
import '../../App.css';

export default function ItemList() {
  const { result, isLoading } = useMenuApi();

  if (isLoading) return <p>Loading ...</p>
  
  return (
    <div>
    {result && result.items.length ? (
    <ul className="item-picker">
      {result.items.map(item => {
        return (
          <li key={item.id} className="item">
            <Item itemData={item} onClick={() => {}} removable={false} />
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
