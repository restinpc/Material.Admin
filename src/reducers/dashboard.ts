/**
 * Material.App - Dashboard reducer.
 *
 * @ 00.00.0000 # A<@>
 */

import {IDashboardSummaryAction, ITaskListItem} from '../actions/dashboard';
import {DashboardTypes} from "../variables/Types";

interface IDashboardState{
    listCount: number;
    list: ITaskListItem[];
}

const initialState = (): IDashboardState => ({
    list: [],
    listCount: 0
});

const dashboard = (state: IDashboardState = initialState(), action: IDashboardSummaryAction): IDashboardState => {
    switch (action.type) {
        case DashboardTypes.UpdateListAction:
            return {
                ...state,
                list: (action.payLoad.tasks? action.payLoad.tasks : []),
                listCount: (action.payLoad.tasks && Array.isArray(action.payLoad.tasks) && action.payLoad.tasks.length > 0) ?
                    action.payLoad.tasks.length : 0
            };
        case DashboardTypes.ShowListCountAction:
            return {
                ...state,
                listCount: action.payLoad.count
            };
        default:
            return state;
    }
};

export { dashboard };