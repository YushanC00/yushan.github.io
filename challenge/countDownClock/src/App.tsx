import {CreateCountdownForm, CountdownClockProvider, CountdownCards} from './CountdownClock/index';
import './App.css'
import * as React from 'react';

import {CloseButton} from "./UI/Button/index"


function App() {
  return (
    <CountdownClockProvider>
      <div className="flex flex-col justify-center items-center">
        <CountdownCards />
        <CloseButton icon="+"/>
        <CreateCountdownForm />
      </div>
    </CountdownClockProvider>
  )
}

export default App
