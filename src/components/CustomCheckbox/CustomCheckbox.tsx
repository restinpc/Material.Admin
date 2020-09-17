/**
 * Material.App - CustomCheckbox component.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import {ICustomCheckboxProps} from "./CustomCheckbox.interface";

const CustomCheckbox: React.FunctionComponent<ICustomCheckboxProps> = (props) => {
    document["handler"].log("CustomCheckbox.render()");
    const { isChecked, number, label, inline, className, ...rest } = props;
    const classes = inline !== undefined ? "checkbox checkbox-inline "+className : "checkbox "+className;
    return (
        <div className={classes}>
            <input
                id={number}
                type="checkbox"
                checked={props.isChecked}
                readOnly={true}
                {...rest}
            />
            <label htmlFor={number}>{label}</label>
        </div>
    );
}

export { CustomCheckbox };