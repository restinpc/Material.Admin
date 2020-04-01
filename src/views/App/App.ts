/**
 * Material.App - App container.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import App from "./App.component";
import * as actions from "../../actions";
import {INotification} from "./App.interface";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        displayModal: state.main.display,
        displayWideModal: state.main.displayWideModal,
        wideModalData: state.main.wideModalData
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        initNotificationSystem: (addNotification:INotification) => {
            dispatch(
                actions.addNotificationSystem(addNotification)
            )
        },
        scroll: (scroll:number): void => {
            dispatch(
                actions.scrollWindow(scroll)
            )
        },
        hideModals: (): void =>{
            dispatch(
                actions.hideModal()
            );
            dispatch(
                actions.hideWideModal()
            );
            document.body.style.overflow = "auto";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
