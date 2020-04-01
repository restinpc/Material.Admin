/**
 * Material.App - Actions and reducers enums.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

const MainTypes = {
    ShowModalAction: "ShowModalAction",
    OnScrollAction: "OnScrollAction",
    AddNotificationSystem: "AddNotificationSystem",
    AddError: "AddError",
    ShowWideModalAction: "ShowWideModalAction",
    HideWideModalAction: "HideWideModalAction",
    ShowRightModalAction: "ShowRightModalAction"
}
//----------------------------------------------------------------------------------------------------------------------
const DashboardTypes = {
    UpdateListAction: "UpdateListAction",
    ShowListCountAction: "ShowListCountAction"
}
//----------------------------------------------------------------------------------------------------------------------
const ModalTypes = {
    EmptyState: "EmptyState",
}
//----------------------------------------------------------------------------------------------------------------------
const ErrorTypes = {
    AddError: "AddError",
    InitErrorsAction: "InitErrorsAction",
    UpdateErrorsSearchPhraseAction: "UpdateErrorsSearchPhraseAction",
    SortErrorsAction: "SortErrorsAction",
    getErrorsAction: "getErrorsAction"
}
//----------------------------------------------------------------------------------------------------------------------
export {
    MainTypes,
    DashboardTypes,
    ModalTypes,
    ErrorTypes
};