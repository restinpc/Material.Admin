/**
 * Material.App - Dashboard actions.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {DashboardTypes} from "../variables/Types";
import {Action} from 'redux';
//----------------------------------------------------------------------------------------------------------------------
/* Loading task list */
interface ITaskListItem{
    text: string,
    checked: boolean
}
interface ILoadListAction extends Action {
    payLoad: {
        tasks: ITaskListItem[]
    }
}
const loadTaskList = (data: ITaskListItem[]):ILoadListAction => ({
    type: DashboardTypes.UpdateListAction,
    payLoad: {
        tasks: data
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Update tasks list size */
interface IUpdateListCountAction extends Action {
    payLoad: {
        count: number
    }
}
const updateListCount = (number:number):IUpdateListCountAction => ({
    type: DashboardTypes.ShowListCountAction,
    payLoad: {
        count: number
    }
});
//----------------------------------------------------------------------------------------------------------------------
type IDashboardSummaryAction =
    IUpdateListCountAction &
    ILoadListAction;
//----------------------------------------------------------------------------------------------------------------------
export {
    ITaskListItem,
    IUpdateListCountAction,
    ILoadListAction,
    IDashboardSummaryAction,
    loadTaskList,
    updateListCount
};