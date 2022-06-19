import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

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
    <div className="app">
      <Header setIpResponse={setIpResponse} />



      {ipResponse ? (
        <div className="app--response">
          <DataDisplay ipResponse={ipResponse} />
          <MapsFrame ipResponse={ipResponse} API_KEY={API_KEY} />
        </div >
      ) : (
        <>
          <FontAwesomeIcon className="app--spinner" icon={faSpinner} />
        </>
      )
      }
    </div>
  );
}

export default App;
