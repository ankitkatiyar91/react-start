import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Search App</h1>
      <FilterableProductTable></FilterableProductTable>
    </div>
  );
}

export default App;
