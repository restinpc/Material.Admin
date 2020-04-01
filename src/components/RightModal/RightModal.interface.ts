/**
 * Material.App - RightModal props and state interface.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

interface IRightModalProps{
    content: any,
    saveTaskDetails: (action:string, obj:any) => void,
    hideRightModal: () => void,
    categories: any[];
    action: string;
}

interface IRightModalState{
    selected: string;
}

export {IRightModalProps, IRightModalState}