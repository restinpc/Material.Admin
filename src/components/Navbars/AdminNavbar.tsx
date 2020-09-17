/**
 * Material.App - Компонент <Header> верхней панели навигации.
 *
 * @ 05.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { Navbar } from "react-bootstrap";
import AdminNavbarLinks from "./AdminNavbarLinks";
import "./AdminNavbar.css";

class AdminNavbar extends React.Component<{brandText:string}, {sidebarExists: boolean}> {
    //------------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }
    //------------------------------------------------------------------------------------------------------------------
    mobileSidebarToggle(e) {
        try {
            if (this.state.sidebarExists === false) {
                this.setState({
                    sidebarExists: true
                });
            }
            e.preventDefault();
            document.documentElement.classList.toggle("nav-open");
            var node = document.createElement("div");
            node.id = "bodyClick";
            node.onclick = function () {
                document["handler"].info("AdminNavbar.div(bodyClick).click()");
                // @ts-ignore
                this.parentElement.removeChild(this);
                document.documentElement.classList.toggle("nav-open");
            };
            document.body.appendChild(node);
        }catch(e){

        }
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        return (
            <Navbar className="AdminNavbar" fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        {this.props.brandText}
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={(e)=>{
                        document["handler"].info("AdminNavbar.Navbar(Toggle).click()");
                        this.mobileSidebarToggle(e);
                    }} />
                </Navbar.Header>
                <Navbar.Collapse>
                    <AdminNavbarLinks />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AdminNavbar;
