import React from 'react';
import { useSelectedMenuApi } from '../../hooks/use-selected-menu-api';
import '../../App.css';

export default function Header() {
  const { result, isLoading } = useSelectedMenuApi()

  if (isLoading) return <p>Loading ...</p>

  const totalItems = result?.items.length > 0 ? <span>{`${result.items.length} items`}</span> : <span>No items selected</span>

  const dietariesTotal = result && result.items.reduce((obj, el) => {
    el.dietaries.map(item => {
      obj[item] = (obj[item] || 0) + 1;
    })
    return obj;
  }, { "v": 0, "ve": 0, "df": 0, "gf": 0, "n!": 0 });

  return (
    <div className="row">
      <div className="col-6 menu-summary-left">
        {totalItems}
      </div>
      <div className="col-6 menu-summary-right">
        {Object.entries(dietariesTotal).map((t,k) => <><span>{`${t[1]}x`}</span><span className="dietary">{t[0]}</span></>)} 
      </div>
    </div>
  )
}
