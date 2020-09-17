/**
 * Material.App - ErrorsTable component.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "../Card/Card";
import {IErrorsTableProps} from "./ErrorTable.interface";
import "./ErrorsTable.css";

class ErrorsTableComponent extends React.Component<IErrorsTableProps>{
    renderId: number;
    tableHead: {};
    //------------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        document["handler"].log("ErrorsTableComponent.constructor()");
        this.renderId = 0;
        this.tableHead = {
            date: "Date",
            code: "Code",
            message: "Message",
            category: "Category"
        }
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        document["handler"].log("ErrorsTableComponent.componentDidMount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document["handler"].log("ErrorsTableComponent.componentWillUnmount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    print(){
        document["handler"].log("ErrorsTableComponent.print()");
        let fout = [];
        this.props.errors &&
        this.props.errors.length &&
        this.props.errors.forEach((prop, key) => {
            let date = new Date(prop.date);
            let error_date = date.toLocaleString();
            fout.push (
                <tr key={key}>
                    <td>{error_date}</td>
                    <td>{prop.code}</td>
                    <td>{prop.message}</td>
                    <td>{prop.category}</td>
                </tr>
            );
        });
        return fout;
    }
    //------------------------------------------------------------------------------------------------------------------
    render(){
        document["handler"].log("ErrorsTableComponent.render() №"+(++this.renderId));
        let tHead = [];
        let body = this.print();
        for (let thKey in this.tableHead) {
            let arrow = '';
            if(thKey === this.props.sortKey){
                if(this.props.sortMethod){
                    arrow = " \u2193";
                }else{
                    arrow = " \u2191";
                }
            }
            tHead.push(
                <th key={thKey}><span className="link" onClick={() => {
                    document["handler"].info("ErrorsTableComponent.th("+this.tableHead[thKey]+").click(method="+!(this.props.sortMethod)+")");
                    this.props.sort(thKey, !(this.props.sortMethod));
                }}>{this.tableHead[thKey]}</span>{arrow}</th>
            )
        }
        return(
            <Grid fluid className="ErrorsTable">
                <Row>
                    <Col md={10} mdOffset={1}>
                        <Card
                            plain
                            title="Errors"
                            category="Error view description"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="searchInput"
                                        value={ this.props.searchErrorsPhrase }
                                        onChange={(e) => {
                                            document["handler"].info("ErrorsTableComponent.input(Search).change("+e.target.value+")");
                                            this.props.search(e.target.value);
                                        }} />
                                    <br/>
                                    {
                                        body.length?
                                        (
                                            <Table hover>
                                                <thead>
                                                <tr>{ tHead }</tr>
                                                </thead>
                                                <tbody>{ body }</tbody>
                                            </Table>
                                        ):(
                                            <div className="notFound">
                                                <i className="pe-7s-attention emptyState"/>
                                                <br/>
                                                    Errors not found.
                                                <br/>
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ErrorsTableComponent;