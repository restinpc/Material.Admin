/**
 * Material.App - Компонент <Sidebar> боковой панели навигации
 *
 * @ 17.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { NavLink } from "react-router-dom";
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks";
import {ISidebarProps, ISidebarState} from "./Sidebar.interface";
import {sidebarIconColor, sidebarIconHoverColor} from "../../variables/colors";
import "./Sidebar.css";
import isString from "../../functions/isString";
import {RefObject} from "react";
// @ts-ignore
import logo from "../../assets/img/reactlogo.png";

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
    state: ISidebarState;
    navContainer: RefObject<HTMLUListElement>;
    scrollInterval: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        document.handler.log("Sidebar.constructor()");
        this.state = {
            width: window.innerWidth,
            hover: null,
            marginTop: 0
        };
        this.scrollInterval = 0;
        this.navContainer = React.createRef<HTMLUListElement>();
    }
    //------------------------------------------------------------------------------------------------------------------
    activeRoute(routeName) {
        return this.props.location &&
            this.props.location.pathname &&
            isString(this.props.location.pathname) &&
            this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    //------------------------------------------------------------------------------------------------------------------
    updateDimensions() {
        document.handler.log("Sidebar.updateDimensions()");
        this.setState({ width: window.innerWidth });
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        document.handler.log("Sidebar.componentDidMount()");
        this.updateDimensions();
        window.addEventListener("resize", ()=>{
            this.updateDimensions.bind(this);
            this.setState({
                marginTop: 0
            })
        });
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("Sidebar.componentWillUnmount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        const sidebarBackground = {
            backgroundImage: "url(" + this.props.image + ")"
        };
        return (
            <div
                id="sidebar"
                className="sidebar"
                data-color={this.props.color}
                data-image={this.props.image}
            >
                {this.props.hasImage ? (
                    <div className="sidebar-background" style={sidebarBackground} />
                ) : (
                    null
                )}
                <div className="logo">
                    <a
                        href={process.env.REACT_APP_ROOT}
                        className="simple-text logo-mini"
                    >
                        <div className="logo-img">
                            <img src={logo} alt="logo_image" />
                        </div>
                    </a>
                    <a
                        href={process.env.REACT_APP_ROOT}
                        className="simple-text logo-normal"
                    >
                        Material.App
                    </a>
                </div>
                <div className="sidebar-wrapper" ref={this.props.refObject} >
                    <ul className="nav">
                        {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
                        {this.props.routes.map((prop, key) => {
                            if (!prop.redirect &&
                                    (!prop.error ||
                                        ( prop.error &&
                                        this.props.errors &&
                                        Array.isArray(this.props.errors) &&
                                        this.props.errors.length > 0 )
                                    )
                                )
                                return (
                                    <li
                                        className={
                                            this.activeRoute(prop.layout + prop.path)
                                        }
                                        key={key}
                                    >
                                        <NavLink
                                            to={prop.layout + prop.path}
                                            className="nav-link"
                                            activeClassName="active"
                                        >
                                            <i className={prop.icon} />
                                            <p>{prop.name}</p>
                                        </NavLink>
                                    </li>
                                );
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
