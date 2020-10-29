import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import MakeDesmobilizationPanel from '../../system/desmobilization-panel/MakeDesmobilizationPanel'
import DesmobilizationPanel from '../../system/desmobilization-panel/DesmobilizationPanel'
import PageNotFound from '../../pageNotFound/PageNotFound'

const MainRouteChild = () => {
    let match = useRouteMatch()
    console.log("la url : ", match)
    return (
        <>
            <Switch>
                <Route exact path={`${match.path}/`} >
                    <h2>Este es el dashboard!!!</h2>
                </Route>

                <Route exact path={`${match.path}/desmobilization-panel`} component={DesmobilizationPanel} />

                <Route exact path={`${match.path}/make-desmobilization-panel`} component={MakeDesmobilizationPanel} />

                <Route component={PageNotFound} />

            </Switch>
        </>
    )
}


export default MainRouteChild