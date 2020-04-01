/**
 * Material.App - Card Props interface.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import {ReactElement} from "react";

interface ICardProps {
    id?: string,
    plain?: boolean,
    hCenter?: boolean,
    title?: string,
    category?: ReactElement|string,
    ctAllIcons?: boolean,
    ctTableFullWidth?: boolean,
    ctTableResponsive?: boolean,
    ctTableUpgrade?: boolean,
    content: ReactElement,
    legend?: ReactElement,
    stats?: ReactElement|string,
    statsIcon?: string,
    style?: React.CSSProperties,
    className?: string
}

export {ICardProps}
