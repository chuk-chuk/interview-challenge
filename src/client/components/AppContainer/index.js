import React, { useState } from 'react';
import MenuProvider from '../../menuProvider';
import Header from '../Header';
import ItemList from '../ItemList';
import MenuPreview from '../MenuPreview';
import '../../App.css';

export default function AppContainer() {
  const [filterBy, setFilterBy] = useState("");

  const handleOnChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <MenuProvider>
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
                <label htmlFor="filter">
                  Filter by name...
                    <input
                      id="form-control"
                      type="text"
                      value={filterBy}
                      onChange={handleOnChange}
                    />
                </label>
              </div>
              <ItemList />
            </div>
            <div className="col-8">
            <MenuPreview />
            </div>
          </div>
        </div>
      </div>
    </MenuProvider>
  );
}
