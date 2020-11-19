import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import MakeDesmobilizationPanel from '../../system/desmobilization-panel/MakeDesmobilizationPanel'
import DesmobilizationPanel from '../../system/desmobilization-panel/DesmobilizationPanel'
import DesmoList from '../../system/desmobilization-panel/DesmoList'
import PageNotFound from '../../pageNotFound/PageNotFound'

const MainRouteChild = ({codeOfficer}) => {

    let match = useRouteMatch()

    console.log("el match de las rutas : ", match)

    return (
        <>
            <Switch>
                <Route exact path={`${match.path}/`} >
                    <h2>Este es el dashboard!!!</h2>
                </Route>

                <Route exact path={`${match.path}/desmobilization-panel/:codeOfficer`} component={DesmobilizationPanel} />

                <Route exact path={`${match.path}/desmobilization-panel/:codeOfficer/list`} component={DesmoList} />

                <Route exact path={`${match.path}/make-desmobilization-panel`} component={MakeDesmobilizationPanel} />


                <Route component={PageNotFound} />

            </Switch>
        </>
    )
}


export default MainRouteChild