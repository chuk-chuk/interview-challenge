import React from 'react';
import { useSelectedMenuApi } from "../../hooks/use-selected-menu-api";
import Item from "../Item";
import '../../App.css';

export default function MenuPreview() {
  const { result, isLoading } = useSelectedMenuApi()

  if (isLoading) return <p>Loading ...</p>

  const handleRemove = (id) => { 
    fetch(`api/selectedItems/${id}`)
    .then(res => res.json())
    .then(() => {
      console.log("item removed!")
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }

  return (
    <div>
    <h2>Menu preview</h2>
    {result && result.items.length ? (
      <ul className="menu-preview">
      {result.items.map((item, index) => (
        <li key={index} className="item"> 
          <Item itemData={item} onClick={handleRemove(item.id)} removable={true} />
        </li>
      ))}
    </ul>
    ) : (
      <p>No items selected</p>
    )}
    </div>
  )
}
              