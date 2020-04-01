/**
 * Material.App - Primary Unit tests.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import "core-js";
import * as React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import ReduxStore from "../reduxStore";
import ErrorHandler from "../errorHandler";
import AppLoader from "../appLoader";
import DataSource from "../dataSource";
import App from "../views/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/light-bootstrap-dashboard-react.css";
import "../assets/css/pe-icon-7-stroke.css";
import "../assets/css/main.css";
import renderer from 'react-test-renderer';
import appRoutes from '../routes';
//----------------------------------------------------------------------------------------------------------------------
var appLoader, history;
const div = document.createElement('div');
div.id = "root";
const rootComponent = "root";
// @ts-ignore
test("application", () => {
    // @ts-ignore
    expect(() => {
        new ErrorHandler(rootComponent);
        document.reduxStore = ReduxStore();
        history = createBrowserHistory();
        appLoader = new AppLoader();
        new DataSource(
            process.env.REACT_APP_API_URL,
            document.reduxStore,
            appLoader
        );
        window.addEventListener("load", () => {
            setTimeout(() => {
                appLoader.load("window");
            }, 1000);
        });
    }).not.toThrow();
});
//----------------------------------------------------------------------------------------------------------------------
// @ts-ignore
test("root render", () => {
    document.dataSource.initData().then((success) => {
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
            </div>, div
        );
    });
});
//----------------------------------------------------------------------------------------------------------------------
// @ts-ignore
test("rounts", () => {
    const snapshot = renderer.create(
        <div id="react">
            <Provider store={document.reduxStore}>
                <Router history={history}>
                    <Switch>
                        <Route path={process.env.REACT_APP_ROOT} render={props => <App {...props} />}/>
                        <Redirect from={process.env.REACT_APP_ROOT} to={process.env.REACT_APP_ROOT+"/dashboard"}/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
    appRoutes.forEach(item => {
        if(!item.error){
            let path = item.layout+item.path;
            let keyword = item.path.replace('/', '');
            // @ts-ignore
            expect(()=>{ snapshot.root.findByProps({className: "content "+keyword}) }).toThrow();
            history.push(path);
            // @ts-ignore
            expect(snapshot.root.findByProps({className: "content "+keyword}));
            history.push(process.env.REACT_APP_ROOT+'/errors');
            // @ts-ignore
            expect(()=>{ snapshot.root.findByProps({className: "content "+keyword}) }).toThrow();
        }
    });
});