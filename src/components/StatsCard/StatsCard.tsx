/**
 * Material.App - Компонент блока со статистическими данными
 *
 * @ 17.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import { Row, Col } from "react-bootstrap";
import {IStatsCardProps} from "../../interfaces/components/StatsCard";
import "./StatsCard.css";
import {dashboardCardCaption, dashboardIconBackground} from "../../variables/colors";

const StatsCard: React.FunctionComponent<IStatsCardProps> = (props) => {
    document.handler.log("StatsCard.render()");
    return (
        <div className={"card card-stats" + (props.hasBorder ? " has-border" : "")}>
            <div className="content">
                <Row>
                    <Col xs={3}>
                        <div className="icon-big text-center" style={{
                            background: dashboardIconBackground
                        }}>
                            {props.bigIcon}
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className="numbers" style={{color:dashboardCardCaption}}>
                            <p>{props.statsText}</p>
                            {props.statsValue}
                        </div>
                    </Col>
                </Row>
                {
                    props.statsIconText &&
                    <div className="footer">
                        <hr />
                        <div className="stats">
                            {props.statsIcon} {props.statsIconText}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default StatsCard;
