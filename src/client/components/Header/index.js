import React from 'react';
import { useMenuApi } from '../../hooks/use-menu-api';
import '../../App.css';

export default function Header() {
  const { result, isLoading } = useMenuApi();

  if (isLoading) return <p>Loading ...</p>

  const totalItems = result.items.length

  const dietariesTotal = result && result.items.reduce((obj, el) => {
    el.dietaries.map(item => {
      obj[item] = (obj[item] || 0) + 1;
    })
    return obj;
  }, {});

  return (
    <div className="row">
      <div className="col-6 menu-summary-left">
        <span>{`${totalItems} items`}</span>
      </div>
      <div className="col-6 menu-summary-right">
        {Object.entries(dietariesTotal).map((t,k) => <><span>{}</span> <span className="dietary">{`${t[1]}x`} {t[0]}</span></>)} 
      </div>
    </div>
  )
}
