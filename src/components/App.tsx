import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import '../styles/App.scss';

import { Header } from './Header';
import { DataDisplay } from './DataDisplay';
import { MapsFrame } from './MapsFrame';
import { Attribution } from './Attribution';

import { IpResponse } from "./IpResponse.model";

const API_KEY = 'AIzaSyBrsnBRlSG9TfiQQif6GbwzTp7AQtdeyCA'

export const App: React.FC = () => {
    //TODO: ipResponse type in state
    const [ipResponse, setIpResponse]: [IpResponse, Function] = useState({
        ip: '',
        lat: '',
        lng: '',
        timezone: '',
        isp: '',
    });

    function animateLoading(displaySpinner: boolean) {
        let appResponseData: HTMLElement = document.getElementById('response-data')!;
        let infoHeading: HTMLElement = document.getElementById('info-heading')!;
        let spinner: HTMLElement = document.getElementById('spinner')!;

        // Check if element exists
        if (!!appResponseData && displaySpinner) appResponseData.style.display = 'none';
        if (!!appResponseData && !displaySpinner) appResponseData.style.display = 'block';
        if (!!infoHeading) infoHeading.style.display = 'none';

        // Switch spinner display
        spinner.style.display = displaySpinner ? 'block' : 'none';
    }

    return (
        <div className="app">
            <Header setIpResponse={setIpResponse} animateLoading={animateLoading} />
            <div className="app__response">
                {ipResponse ? (
                    <div id="response-data" className="app__response-data">
                        <DataDisplay ipResponse={ipResponse} />
                        <MapsFrame ipResponse={ipResponse} API_KEY={API_KEY} />
                    </div>
                ) : (
                    <h2 id="info-heading" 
                    className='app__info-heading'>Input any IP address or domain in the bar above...</h2>
                )}
                <FontAwesomeIcon id="spinner" className="app__spinner" icon={faSpinner} />
            </div>
            <Attribution />
        </div >
    );
}
