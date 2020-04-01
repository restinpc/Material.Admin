/**
 * Material.App - ErrorsTable container.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import ErrorsTableComponent from "./ErrorsTable.component";
import * as actions from "../../actions";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        searchErrorsPhrase: state.errors.searchErrorsPhrase,
        errors: state.errors.records,
        sortMethod: state.errors.sortMethod,
        sortKey: state.errors.sortKey
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        search: (value:string) => {
            dispatch(
                actions.searchErrorsPhrase(value)
            )
        },
        sort: (sortKey:string, sortMethod:boolean) => {
            dispatch(
                actions.sortErrors(sortKey, sortMethod)
            );
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorsTableComponent));
