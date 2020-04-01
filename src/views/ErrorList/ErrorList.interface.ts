/**
 * Material.App - ErrorList data and props interface.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

interface IError{
    code: number;
    message: string;
    category: string;
    date: number;
}
//----------------------------------------------------------------------------------------------------------------------
interface IErrorsState{
    searchErrorsPhrase: string;
    sortKey: string;
    sortMethod: boolean;
    data: IError[];
    records: IError[];
}
//----------------------------------------------------------------------------------------------------------------------
interface IErrorListProps{
    showRightModal: number;
    loaded: boolean;
    load: () => void;
    updateParent: (checkContentHeight: boolean) => void;
}

export {
    IError,
    IErrorListProps
}