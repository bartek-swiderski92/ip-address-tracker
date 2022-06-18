import { useState } from 'react';

import './App.scss';
// @ts-ignore
import Header from './Header.tsx';
// @ts-ignore
import DataDisplay from './DataDisplay.tsx';

function App() {

  const [IpResponse, setIpResponse] = useState({})

  return (
    <div className="App">
      <Header setIpResponse={setIpResponse} />
      <DataDisplay />
    </div>
  );
}

export default App;
