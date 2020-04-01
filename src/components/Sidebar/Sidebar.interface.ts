import {ReactElement, RefObject} from "react";
import {IError} from "../../views/ErrorList/ErrorList.interface";

interface ISidebarRoute{
    image?: any;
    path: string;
    display: boolean,
    name: string,
    icon: string,
    component: ReactElement,
    layout: string,
    redirect: string,
    error: true
}

interface ISidebarProps{
    routes: ISidebarRoute[],
    color: string,
    image?: string,
    hasImage: boolean,
    errors: IError[],
    location: Location
    refObject: RefObject<HTMLDivElement>;
}

interface ISidebarState {
    width: number,
    hover: string,
    marginTop: number
}

export {
    ISidebarRoute,
    ISidebarProps,
    ISidebarState
}