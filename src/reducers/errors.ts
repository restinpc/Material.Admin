/**
 * Material.App - Error screen reducer.
 *
 * @ 00.00.0000 # A<@>
 */

import {IErrorsSummaryAction} from '../actions/errors';
import {ErrorTypes} from "../variables/Types";
import matchString from "../functions/matchStrings";
import isString from "../functions/isString";
import {IError} from "../views/ErrorList/ErrorList.interface";
//----------------------------------------------------------------------------------------------------------------------
interface IErrorsState{
    searchErrorsPhrase: string;
    sortKey: string;
    sortMethod: boolean;
    data: IError[];
    records: IError[];
}
//----------------------------------------------------------------------------------------------------------------------
const initialState = (): IErrorsState => ({
    searchErrorsPhrase: "",
    sortKey: "date",
    sortMethod: true,
    data: [],
    records: []
});
//----------------------------------------------------------------------------------------------------------------------
const sortRecords = (
    records:IError[],
    sortKey:string,
    sortMethod:boolean,
    searchErrorsPhrase:string
): IError[] => {
    let fout = [];
    records &&
    records.length &&
    records.forEach((prop) => {
        if (
            (
                searchErrorsPhrase !== "" && (
                    (
                        prop.message &&
                        isString(prop.message) &&
                        prop.message.toLowerCase().indexOf(searchErrorsPhrase.toLowerCase()) >= 0
                    )
                        ||
                    (
                        prop.category &&
                        isString(prop.category) &&
                        prop.category.toLowerCase().indexOf(searchErrorsPhrase.toLowerCase()) >= 0
                    )
                )
            ) || searchErrorsPhrase === ""
        ) {
            if (!fout.length) {
                fout.push(prop);
            } else if (sortKey === "message") {
                if (sortMethod) {
                    if (matchString(fout[fout.length - 1].message, prop.message)) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(matchString(fout[i].message, prop.message)) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                } else {
                    if (!matchString(fout[fout.length - 1].message, prop.message)) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(!matchString(fout[i].message, prop.message)) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                }
            } else if (sortKey === "category") {
                if (sortMethod) {
                    if (matchString(fout[fout.length - 1].category, prop.category)) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(matchString(fout[i].category, prop.category)) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                } else {
                    if (!matchString(fout[fout.length - 1].category, prop.category)) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(!matchString(fout[i].category, prop.category)) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                }
            } else if (sortKey === "date") {
                if (sortMethod) {
                    if (fout[fout.length - 1].date < prop.date) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(fout[i].date < prop.date) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                } else {
                    if (fout[fout.length - 1].date > prop.date) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(fout[i].date > prop.date) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                }
            } else if (sortKey === "code") {
                if (sortMethod) {
                    if (fout[fout.length - 1].code < prop.code) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(fout[i].code < prop.code) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                } else {
                    if (fout[fout.length - 1].code > prop.code) {
                        fout.push(prop);
                    } else {
                        let temp_arr = [];
                        for(let i = 0; i < fout.length; i++) {
                            if(fout[i].code > prop.code) {
                                temp_arr.push(fout[i]);
                            }else {
                                temp_arr.push(prop);
                                for(let j = i; j < fout.length; j++){
                                    temp_arr.push(fout[j]);
                                }
                                fout = temp_arr;
                                break;
                            }
                        }
                    }
                }
            }
        }
    });
    return fout;
}
//----------------------------------------------------------------------------------------------------------------------
const errors = (state: IErrorsState = initialState(), action: IErrorsSummaryAction): IErrorsState => {
    switch (action.type) {
        case ErrorTypes.InitErrorsAction:
            return initialState();
        case ErrorTypes.UpdateErrorsSearchPhraseAction:
            return {
                ...state,
                searchErrorsPhrase: action.payLoad.searchErrorsPhrase,
                records: sortRecords(state.data, state.sortKey, state.sortMethod, action.payLoad.searchErrorsPhrase)
            }
        case ErrorTypes.SortErrorsAction:
            return {
                ...state,
                sortKey: action.payLoad.sortKey,
                sortMethod: action.payLoad.sortMethod,
                records: sortRecords(state.data, action.payLoad.sortKey, action.payLoad.sortMethod, state.searchErrorsPhrase)
            };

        case ErrorTypes.AddError:
            let data = state.data.concat(action.payLoad.error);
            return {
                ...state,
                data: data,
                records: sortRecords(data, state.sortKey, state.sortMethod, state.searchErrorsPhrase)
            }
        default:
            return state;
    }
};
//----------------------------------------------------------------------------------------------------------------------
export {
    errors,
    IError
};