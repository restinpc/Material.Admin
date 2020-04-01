/**
 * Material.App - Errors screen component.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import {Col, Grid, Row} from "react-bootstrap";
import { Card } from "../../components/Card/Card";
import {IErrorListProps} from "./ErrorList.interface";
import ErrorsTable from "../../components/ErrorsTable/ErrorsTable";
import "./ErrorList.css";

class ErrorList extends React.PureComponent<IErrorListProps> {
    renderId: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props){
        super(props);
        document.handler.log("ErrorList.constructor()");
        this.renderId = 0;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        document.handler.log("ErrorList.componentDidMount()");
        setTimeout(()=>{this.props.updateParent(true)}, 0);
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("ErrorList.componentWillUnmount()");
        this.props.updateParent(false);
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        document.handler.log("ErrorList.render() №"+(++this.renderId));
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <Card
                                hCenter
                                ctTableResponsive
                                ctTableUpgrade
                                className="ErrorList"
                                content={
                                    <ErrorsTable/>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ErrorList;
