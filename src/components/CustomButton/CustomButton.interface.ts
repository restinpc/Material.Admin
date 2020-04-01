/**
 * Material.App - CustomButton props interface.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ReactElement} from "react";

interface ICustomButtonProps {
    fill?: boolean,
    simple?: boolean,
    pullRight?: boolean,
    block?: boolean,
    round?: boolean,
    bsStyle?: string,
    bsSize?: string,
    title?: string,
    className?: string,
    onClick?: (e:Event) => void,
    children?: ReactElement | string,
    style?: React.CSSProperties
};

export {ICustomButtonProps}