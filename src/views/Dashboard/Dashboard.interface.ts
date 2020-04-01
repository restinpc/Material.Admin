/**
 * Material.App - Dashboard data, props and state interface.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ITaskListItem} from "../../actions";

interface IDashboardProps{
    tasks: ITaskListItem[],
    listCount: number,
    updateParent: (checkContentHeight: boolean) => void;
}

export {IDashboardProps}