import React from 'react'
import Header from './components/Header'

import { Route, Switch } from 'react-router-dom'
import HomePage from './components/user/HomePage'
const MainRouter = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
            {/* <Sticky /> */}
        </>
    )
}

export default MainRouter
