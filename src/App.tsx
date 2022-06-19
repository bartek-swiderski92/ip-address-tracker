import { useState } from 'react';

import './App.scss';
// @ts-ignore
import Header from './Header.tsx';
// @ts-ignore
import DataDisplay from './DataDisplay.tsx';
// @ts-ignore
import MapsFrame from './MapsFrame.tsx';

const API_KEY = 'AIzaSyBrsnBRlSG9TfiQQif6GbwzTp7AQtdeyCA'

function App() {

  const [ipResponse, setIpResponse] = useState()

  return (
    <div className="App">
      <Header setIpResponse={setIpResponse} />
      <DataDisplay ipResponse={ipResponse} />
      <MapsFrame API_KEY={API_KEY} />
    </div>
  );
}

export default App;
