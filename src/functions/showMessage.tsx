/**
 * Material.App - функция отображения всплывающего сообщения.
 *
 * @ 27.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";

const showMessage = (text:string) => {
    document.handler.log("showMessage()");
    try {
        document.reduxStore.getState().main.addNotification({
            title: <span data-notify="icon" className="pe-7s-info" />,
            message: <div> {text} </div>,
            level: "info",
            position: "tr",
            autoDismiss: 3,
        });
    }catch(e){
        document.handler.error("showMessage() -> "+e.message);
    }
}

export default showMessage;