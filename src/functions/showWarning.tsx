/**
 * Material.App - функция отображения всплывающего сообщения с предупреждением.
 *
 * @ 27.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { NavLink } from "react-router-dom";

const showWarning = (text:string) => {
    document.handler.log("showWarning()");
    try {
        document.reduxStore.getState().main.addNotification({
            title: <span data-notify="icon" className="pe-7s-attention" />,
            message: (
                <div>
                    {text} <br/>
                    <NavLink to="/extractor/errors" style={{color:"#a63"}}>Посмотреть список ошибок</NavLink>
                </div>
            ),
            level: "warning",
            position: "tr",
            autoDismiss: 0,
        });
    }catch(e){
        document.handler.error("showWarning() -> "+e.message);
    }
}

export default showWarning;