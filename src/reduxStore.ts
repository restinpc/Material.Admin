/**
 * Material.App - Redux container.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import StateHandler from "./stateHandler";
import Reducer from "./reducers/main";

const reduxStore = () => {
    return createStore(Reducer, composeWithDevTools(applyMiddleware(StateHandler)));
}

export default reduxStore;