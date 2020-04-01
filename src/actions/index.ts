/**
 * Material.App - Application actions.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {MainTypes, ModalTypes} from "../variables/Types";
import {IWideModalData} from "../reducers/main";
import {INotification} from "../views/App/App.interface";
import {Action} from "redux";

export * from "./dashboard";
export * from "./errors";
//----------------------------------------------------------------------------------------------------------------------
/* Notification system initialization */
interface IAddNotificationSystemAction extends Action {
    payLoad: {
        addNotification: INotification
    };
}
const addNotificationSystem = (addNotification:INotification):IAddNotificationSystemAction => ({
    type: MainTypes.AddNotificationSystem,
    payLoad: {
        addNotification: addNotification
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Scrolling */
interface IOnScrollAction extends Action {
    payLoad: {
        scrollTop: number
    };
}
const scrollWindow = (scroll:number):IOnScrollAction => ({
    type: MainTypes.OnScrollAction,
    payLoad: {
        scrollTop: scroll
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Displaying of modal window */
interface IShowModalAction extends Action {
    payLoad: {
        display: boolean;
        header: string;
        type: any;
        data: any
    }
}
const showModal = (
    header:string,
    type:any,
    data:any
):IShowModalAction => ({
    type: MainTypes.ShowModalAction,
    payLoad: {
        display: true,
        header: header,
        type: type,
        data: data
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Displaying of wide modal window */
interface IShowWideModalAction extends Action {
    payLoad: {
        data: IWideModalData
    };
}
const showWideModal = (data:IWideModalData):IShowWideModalAction => ({
    type: MainTypes.ShowWideModalAction,
    payLoad: {
        data: data
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Displaying of right modal window */
interface IShowRightModalAction extends  Action {
    payLoad: {
        showRightModal: any,
        action?: string
    }
}
const showRightModal = (modal:any):IShowRightModalAction => ({
    type: MainTypes.ShowModalAction,
    payLoad: {
        showRightModal: modal,
        action: "new"
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Hiding of modal window */
const hideModal = ():IShowModalAction => ({
    type: MainTypes.ShowModalAction,
    payLoad: {
        display: false,
        header: "",
        type: ModalTypes.EmptyState,
        data: null
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Hiding of wide modal window */
interface IHideWideModalAction extends Action {
    payLoad: {
        data: null
    };
}
const hideWideModal = ():IHideWideModalAction => ({
    type: MainTypes.HideWideModalAction,
    payLoad: {
        data: null
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Hiding of right modal window */
const hideRightModal = ():IShowRightModalAction => ({
    type: MainTypes.ShowModalAction,
    payLoad: {
        showRightModal: null
    }
});
//----------------------------------------------------------------------------------------------------------------------
type MainSummaryAction =
    IShowModalAction &
    IOnScrollAction &
    IAddNotificationSystemAction &
    IShowWideModalAction &
    IHideWideModalAction &
    IShowRightModalAction;
//----------------------------------------------------------------------------------------------------------------------
export {
    IShowModalAction,
    IOnScrollAction,
    IAddNotificationSystemAction,
    IHideWideModalAction,
    IShowWideModalAction,
    IShowRightModalAction,
    MainSummaryAction,
    addNotificationSystem,
    scrollWindow,
    showModal,
    showWideModal,
    hideModal,
    hideWideModal,
    showRightModal,
    hideRightModal
};