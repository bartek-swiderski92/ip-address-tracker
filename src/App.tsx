import { useState } from 'react';

import './App.scss';
// @ts-ignore
import Header from './Header.tsx';
// @ts-ignore
import DataDisplay from './DataDisplay.tsx';

function App() {

  const [ipResponse, setIpResponse] = useState()

  return (
    <div className="App">
      <Header setIpResponse={setIpResponse} />
      <DataDisplay ipResponse={ipResponse} />
    </div>
  );
}

export default App;
