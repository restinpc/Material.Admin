/**
 * Material.App - Primary reducer.
 *
 * @ 00.00.0000 # A<@>
 */

import {combineReducers, Reducer} from 'redux';
import {dashboard} from './dashboard';
import {errors} from './errors';
import {MainSummaryAction} from "../actions/index";
import {MainTypes, ModalTypes} from "../variables/Types";
//----------------------------------------------------------------------------------------------------------------------
interface IWideModalData{
    id: number;
    data: any;
}
//----------------------------------------------------------------------------------------------------------------------
interface IAppState {
    display: boolean;
    header: string;
    type: any;
    scrollTop: number;
    displayWideModal: boolean;
    wideModalData: IWideModalData
}
//----------------------------------------------------------------------------------------------------------------------
const initialState = (): IAppState => ({
    display: false,
    header: "",
    type: ModalTypes.EmptyState,
    scrollTop: 0,
    displayWideModal: false,
    wideModalData: null
});
//----------------------------------------------------------------------------------------------------------------------
const main = function (state: IAppState = initialState(), action: MainSummaryAction) {
    const payLoad = action.payLoad;
    switch (action.type) {
        case MainTypes.ShowModalAction:
            return {
                ...state,
                display: payLoad.display,
                header: payLoad.header,
                type: payLoad.type,
                data: payLoad.data
            };
        case MainTypes.OnScrollAction:
            return {
                ...state,
                scrollTop: payLoad.scrollTop
            };
        case MainTypes.AddNotificationSystem:
            return {
                ...state,
                addNotification: payLoad.addNotification
            };
        case MainTypes.ShowWideModalAction:
            return {
                ...state,
                wideModalData: payLoad.data,
                displayWideModal: true
            }
        case MainTypes.HideWideModalAction:
            return {
                ...state,
                wideModalData: null,
                displayWideModal: false
            }
        default:
            return state;
    }
};
//----------------------------------------------------------------------------------------------------------------------
const rootReducer: Reducer = combineReducers(
    {
        main,
        dashboard,
        errors,
    }
);
//----------------------------------------------------------------------------------------------------------------------
export {
    rootReducer as default,
    IAppState,
    IWideModalData
};