/**
 * Material.App - контейнер компонента Modal
 *
 * @ 28.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import ModalComponent from "./Modal.component";
import * as actions from "../../actions";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        header: state.main.header,
        type: state.main.type
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(
                actions.hideModal()
            );
            document.body.style.overflow = "auto";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalComponent));
