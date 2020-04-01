/**
 * Material.App - Компонент блока ссылок верхней панели навигации.
 *
 * @ 10.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

const AdminNavbarLinks: React.FunctionComponent = () => {
    document.handler.log("AdminNavbarLinks.render()");
    const notification = (
        <div>
            <i className="fa fa-globe" />
            <b className="caret" />
            <span className="notification">2</span>
            <p className="hidden-lg hidden-md">Уведомление</p>
        </div>
    );
    return (
        <div>
        <Nav>
          <NavItem eventKey={1}>
            <i className="" />
            <p className="hidden-lg hidden-md"></p>
          </NavItem>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={2} href="#">
                <i className="fa fa-search" />
                <p className="hidden-lg hidden-md">Search</p>
            </NavItem>
            <NavDropdown
                eventKey={3}
                title={notification}
                noCaret
                id="basic-nav-dropdown"
            >
                <MenuItem eventKey={4.1}>Уведомление 1</MenuItem>
                <MenuItem eventKey={4.2}>Уведомление 2</MenuItem>
            </NavDropdown>
        </Nav>
        </div>
    );
}

export default AdminNavbarLinks;
