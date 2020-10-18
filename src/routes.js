import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import About from './pages/about'

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={About}/>
            
        </Switch>
        </BrowserRouter>
    )
}