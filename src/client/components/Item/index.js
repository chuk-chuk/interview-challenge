import React from 'react';
import '../../App.css';

export default function Item({ itemData, onClick, removable}) {
  return (
    <div>
      <h2>{itemData.name}</h2>
      <p>
        {itemData.dietaries.length ? (
        itemData.dietaries.map((dietary, index) => <span key={index} className="dietary">{dietary}</span>)
        ) : (
          <span >No dietaries selected</span>
        )}
      </p>
      {removable ? <button className="remove-item" onClick={onClick}>x</button> : <button className="add-item" onClick={onClick}>add</button>}
    </div>
  )
}
