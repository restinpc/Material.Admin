/**
 * Material.App - Интерфейс c описанием свойств и состояния компонента Modal
 *
 * @ 22.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ModalTypes} from "../../variables/Types";

interface IModalProps {
    hideModal: () => void;
    header: string;
    type: ModalTypes;
}

interface IModalState{ }

export {IModalProps, IModalState}


