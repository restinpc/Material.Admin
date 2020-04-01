/**
 * Material.App - Errors actions.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ErrorTypes} from "../variables/Types";
import {IError} from "../views/ErrorList/ErrorList.interface";
import {Action} from "redux";
//----------------------------------------------------------------------------------------------------------------------
/* Errors sorting action */
interface ISortErrorsAction extends Action {
    payLoad: {
        sortKey: string,
        sortMethod: boolean
    }
}
const sortErrors = (sortKey:string, sortMethod:boolean):ISortErrorsAction => ({
    type: ErrorTypes.SortErrorsAction,
    payLoad: {
        sortKey: sortKey,
        sortMethod: sortMethod
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Add an error action */
interface IAddErrorAction extends Action {
    payLoad: {
        error: IError
    };
}
const addError = (error:IError):IAddErrorAction => ({
    type: ErrorTypes.AddError,
    payLoad: {
        error: error
    }
});

//----------------------------------------------------------------------------------------------------------------------
/* Errors search action */
interface ISearchErrorsPhraseAction extends Action {
    payLoad: {
        searchErrorsPhrase: string;
    };
}
const searchErrorsPhrase = (searchErrorsPhrase:string):ISearchErrorsPhraseAction => ({
    type: ErrorTypes.UpdateErrorsSearchPhraseAction,
    payLoad: {
        searchErrorsPhrase: searchErrorsPhrase
    }
});
//----------------------------------------------------------------------------------------------------------------------
/* Summary action interface */
type IErrorsSummaryAction =
    & ISortErrorsAction
    & ISearchErrorsPhraseAction
    & IAddErrorAction;
//----------------------------------------------------------------------------------------------------------------------
export {
    ISortErrorsAction,
    IAddErrorAction,
    ISearchErrorsPhraseAction,
    IErrorsSummaryAction,
    sortErrors,
    addError,
    searchErrorsPhrase,
};