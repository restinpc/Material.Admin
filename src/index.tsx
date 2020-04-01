/**
 * Material.App - Application index file.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import "core-js";
import * as React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import ReduxStore from "./reduxStore";
import ErrorHandler from "./errorHandler";
import AppLoader from "./appLoader";
import DataSource from "./dataSource";
import App from "./views/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/light-bootstrap-dashboard-react.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/glyphicons-halflings-regular.css";
import "./assets/css/main.css";
//----------------------------------------------------------------------------------------------------------------------
/* @load */
const rootComponent = "root";
new ErrorHandler(rootComponent);
try {
    let pos = window.location.toString().indexOf(process.env.REACT_APP_ROOT);
    let path = window.location.pathname.toString().substr(pos+process.env.REACT_APP_ROOT.length);
    if(path === "/" || path === "") {
        window.history.pushState({}, "", process.env.REACT_APP_ROOT+"/dashboard");
    }
}catch(e){
    document.handler.error("Index.@load -> "+e.message);
}
//----------------------------------------------------------------------------------------------------------------------
/* @init */
var appLoader, history;
try{
    document.reduxStore = ReduxStore();
    history = createBrowserHistory();
    appLoader = new AppLoader();
    new DataSource(
        process.env.REACT_APP_API_URL,
        document.reduxStore,
        appLoader
    );
    /* @listen */
    try {
        window.addEventListener("load", () => {
            setTimeout(() => {
                appLoader.load("window");
            }, 1000);
        });
    }catch(e){
        document.handler.error("Index.@listen -> "+e.message);
    }
    /* @react */
    try {
        document.dataSource.initData().then((success) => {
            if(success) {
                ReactDOM.render(
                    <div id="react">
                        <Provider store={document.reduxStore}>
                            <Router history={history}>
                                <Switch>
                                    <Route path={process.env.REACT_APP_ROOT} render={props => <App {...props} />}/>
                                    <Redirect from={process.env.REACT_APP_ROOT} to={process.env.REACT_APP_ROOT+"/dashboard"}/>
                                </Switch>
                            </Router>
                        </Provider>
                    </div>,
                    document.getElementById(rootComponent)
                );
            }else{
                document.handler.throw();
            }
        });
    }catch(e){
        document.handler.error("Index.@react -> "+e.message);
    }
}catch(e){
    document.handler.error("Index.@init -> "+e.message);
}