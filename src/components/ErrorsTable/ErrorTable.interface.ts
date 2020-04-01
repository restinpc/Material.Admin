/**
 * Material.App - ErrorsTable data and props interface.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ISortErrorsAction} from "../../actions/errors";
import {IError} from "../../views/ErrorList/ErrorList.interface";

interface IErrorsTableProps{
    errors: IError[],
    searchErrorsPhrase: string,
    search: (value:string) => void,
    sort: (value:string, method:boolean) => ISortErrorsAction,
    sortMethod: boolean,
    sortKey: string
}

export {IErrorsTableProps}