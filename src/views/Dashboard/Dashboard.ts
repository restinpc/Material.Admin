/**
 * Material.App - Dashboard container.
 *
 * @ 00.00.0000 # A<@>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import Dashboard from "./Dashboard.component";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        tasks: state.dashboard.list
    }
};
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = () => {
    return {}
};
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
