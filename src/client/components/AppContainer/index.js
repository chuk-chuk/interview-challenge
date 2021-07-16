import React, { useState } from 'react';
import MenuProvider from '../../menuProvider';
import Header from '../Header';
import ItemList from '../ItemList';
import MenuPreview from '../MenuPreview';
import '../../App.css';
import SelectedMenuProvider from '../../selectedItemsProvider';

export default function AppContainer() {
  const [filterBy, setFilterBy] = useState("");

  const handleOnChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <MenuProvider query={filterBy}>
      <SelectedMenuProvider>
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
          <Header />
          </div>
        </div>
        <div className="container menu-builder">
          <div className="row">
            <div className="col-4">
              <div className="filters">
                <input
                  id="form-control"
                  type="text"
                  value={filterBy}
                  placeholder="Type to filter ..."
                  onChange={handleOnChange}
                />
              </div>
              <ItemList />
            </div>
            <div className="col-8">
            <MenuPreview />
            </div>
          </div>
        </div>
      </div>
      </SelectedMenuProvider>
    </MenuProvider>
  );
}
