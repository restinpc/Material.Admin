/**
 * Material.App - контейнер компонента RuntimeTable
 *
 * @ 29.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        errors: state.errors.data
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return { }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
