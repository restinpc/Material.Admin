/**
 * Material.App - функция отображения всплывающего сообщения об ошибке.
 *
 * @ 27.11.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { NavLink } from "react-router-dom";

const showError = (text:string) => {
    document.handler.log("showError()");
    try {
        document.reduxStore.getState().main.addNotification({
            title: <span data-notify="icon" className="pe-7s-attention" />,
            message: (
                <div>
                    {text} <br/>
                    <NavLink to="/extractor/errors" style={{color:"#a00"}}>Перейти к ошибкам</NavLink>
                </div>
            ),
            level: "error",
            position: "tr",
            autoDismiss: 0,
        });
    }catch(e){
        document.handler.error("showError() -> "+e.message);
    }
}

export default showError;