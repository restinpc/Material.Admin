/**
 * Material.App - контейнер компонента WideModal
 *
 * @ 28.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import WideModal from "./WideModal";
import * as actions from "../../actions";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        data: state.main.wideModalData
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        hideWideModal: () => {
            dispatch(
                actions.hideWideModal()
            );
            document.body.style.overflow = "auto";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WideModal));
