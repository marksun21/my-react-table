import './App.css';
import Table from './Table';
import React, { useMemo } from 'react';

function App() {
  // Define our mock data
  const data = [
    {
      col1: 'Joe Boyle',
      col2: 'AGENT',
      col3: 'On',
      col4: 'Activated on 08/22/2020',
    },
    {
      col1: 'James Christian',
      col2: 'AGENT',
      col3: 'Off',
      col4: 'Not Active',
    },
    {
      col1: 'Kingston Harris',
      col2: 'AGENT',
      col3: 'Off',
      col4: 'Not Active',
    },
    {
      col1: 'Daniel Smith',
      col2: 'BROKER',
      col3: 'On',
      col4: 'Activated on 08/22/2020',
    },
  ];

  return (
    <Table data={data}/>
  );
}

export default App;
