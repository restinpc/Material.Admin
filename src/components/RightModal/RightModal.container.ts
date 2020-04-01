/**
 * Material.App - контейнер компонента RightModal
 *
 * @ 04.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {withRouter} from "react-router";
import {connect} from "react-redux";
import RightModal from "./RightModal";
import * as actions from "../../actions";
import showSuccess from "../../functions/showSuccess";
//----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        categories: state.tasks.categories,
        action: state.tasks.action,
        content: state.tasks.showRightModal
    }
}
//----------------------------------------------------------------------------------------------------------------------
const mapDispatchToProps = (dispatch) => {
    return {
        saveTaskDetails: (action:string, obj:any) => {
            return document.dataSource.saveTaskDetails(action, obj).then( (success) => {
                if (success) {
                    document.dataSource.getTasks().then((result) => {
                        if(result) {
                            dispatch(
                                actions.hideRightModal()
                            );
                            showSuccess("Задача успешно отредактирована!");
                            document.body.style.overflow = "auto";
                        }
                    });
                }
            });
        },
        hideRightModal: () => {
            dispatch(
                actions.hideRightModal()
            )
            document.body.style.overflow = "auto";
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightModal));
