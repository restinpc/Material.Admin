/**
 * Material.App - Dashboard root component.
 *
 * @ 00.00.0000 # A<@>
 */

import * as React from "react";
import {Col, Grid, Row, Tooltip, OverlayTrigger} from "react-bootstrap";
import StatsCard from "../../components/StatsCard/StatsCard";
import {IDashboardProps} from "./Dashboard.interface";
import {Card} from "../../components/Card/Card";
import ChartistGraph from "react-chartist";
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from "../../variables/Variables";
import {CustomCheckbox} from "../../components/CustomCheckbox/CustomCheckbox";
import {CustomButton} from "../../components/CustomButton/CustomButton";

class DashboardComponent extends React.PureComponent<IDashboardProps>{
    renderId: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props){
        super(props);
        document.handler.log("DashboardComponent.constructor()");
        this.renderId = 0;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        document.handler.log("DashboardComponent.componentDidMount()");
        setTimeout(()=>{this.props.updateParent(true)}, 0);
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("DashboardComponent.componentWillUnmount()");
        this.props.updateParent(false);
    }
    //------------------------------------------------------------------------------------------------------------------
    createLegend(json) {
        let legend = [];
        for (var i = 0; i < json["names"].length; i++) {
            var type = "fa fa-circle text-" + json["types"][i];
            legend.push(<i className={type} key={i} />);
            legend.push(" ");
            legend.push(json["names"][i]);
        }
        return legend;
    }
    //------------------------------------------------------------------------------------------------------------------
    taskList() {
        const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
        const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
        var tasks = [];
        var number;
        if (this.props.tasks && Array.isArray(this.props.tasks) && this.props.tasks.length) {
            for (var i = 0; i < this.props.tasks.length; i++) {
                number = "checkbox" + i;
                tasks.push(
                    <tr key={i}>
                        <td>
                            <CustomCheckbox
                                number={number}
                                isChecked={this.props.tasks[i].checked}
                            />
                        </td>
                        <td>{this.props.tasks[i].text}</td>
                        <td className="td-actions text-right">
                            <OverlayTrigger placement="top" overlay={edit}>
                                <CustomButton bsStyle="info" simple bsSize="xs">
                                    <i className="fa fa-edit"/>
                                </CustomButton>
                            </OverlayTrigger>

                            <OverlayTrigger placement="top" overlay={remove}>
                                <CustomButton bsStyle="danger" simple bsSize="xs">
                                    <i className="fa fa-times"/>
                                </CustomButton>
                            </OverlayTrigger>
                        </td>
                    </tr>
                );
            }
        }
        return tasks;
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        document.handler.log("DashboardComponent.render() №"+(++this.renderId));
        return (
            <div className="content dashboard">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-server" />}
                                statsText="Capacity"
                                statsValue="105GB"
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet" />}
                                statsText="Revenue"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o" />}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph1" />}
                                statsText="Errors"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o" />}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-like2" />}
                                statsText="Likes"
                                statsValue="45"
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText="Updated now"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataSales}
                                            type="Line"
                                            options={optionsSales}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">{this.createLegend(legendSales)}</div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="Email Statistics"
                                category="Last Campaign Performance"
                                stats="Campaign sent 2 days ago"
                                content={
                                    <div
                                        id="chartPreferences"
                                        className="ct-chart ct-perfect-fourth"
                                    >
                                        <ChartistGraph data={dataPie} type="Pie" />
                                    </div>
                                }
                                legend={
                                    <div className="legend">{this.createLegend(legendPie)}</div>
                                }
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Card
                                id="chartActivity"
                                title="2014 Sales"
                                category="All products including Taxes"
                                stats="Data information certified"
                                statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataBar}
                                            type="Bar"
                                            options={optionsBar}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">{this.createLegend(legendBar)}</div>
                                }
                            />
                        </Col>

                        <Col md={6}>
                            <Card
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <tbody>{this.taskList()}</tbody>
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default DashboardComponent;
