/**
 * Material.App - CustomButton component.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { Button } from "react-bootstrap";
import cx from "classnames";
import {ICustomButtonProps} from "./CustomButton.interface";

const CustomButton: React.FunctionComponent<ICustomButtonProps> = (props) => {
    document.handler.log("CustomButton.render()");
    const { fill, simple, pullRight, round, block, ...rest } = props;
    const btnClasses = cx({
        "btn-fill": fill,
        "btn-simple": simple,
        "pull-right": pullRight,
        "btn-block": block,
        "btn-round": round
    });
    return <Button className={btnClasses} {...rest} />;
}

export { CustomButton };
