import * as React from 'react';
import {useAppEvent} from 'remax/macro';
import './app.css';

const App: React.FC = props => {

    useAppEvent("onLaunch",()=>{
        console.log("onLaunch");
    })

    return props.children as React.ReactElement;
};

export default App;
