/**
 * Material.App - CustomRadio component.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import {ICustomRadioProps} from "./CustomRadio.interface";

const CustomRadio: React.FunctionComponent<ICustomRadioProps> = (props) => {
    document.handler.log("CustomRadio.render()");
    const { number, label, option, name, ...rest } = props;
    return (
        <div className="radio">
            <input id={number} name={name} type="radio" value={option} {...rest} />
            <label htmlFor={number}>{label}</label>
        </div>
    );
}

export {CustomRadio};
