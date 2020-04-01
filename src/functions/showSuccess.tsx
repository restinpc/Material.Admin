/**
 * Material.App - функция отображения всплывающего сообщения об успешной операции.
 *
 * @ 27.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";

const showSuccess = (text:string) => {
    document.handler.log("showSuccess()");
    try {
        document.reduxStore.getState().main.addNotification({
            title: <span data-notify="icon" className="pe-7s-info" />,
            message: <div> {text} </div>,
            level: "success",
            position: "tr",
            autoDismiss: 3
        });
    }catch(e){
        document.handler.error("showSuccess() -> "+e.message);
    }
}

export default showSuccess;