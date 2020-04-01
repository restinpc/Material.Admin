/**
 * Material.App - Icons screen component.
 *
 * @ 23.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import {Col, Grid, Row} from "react-bootstrap";
import { Card } from "../../components/Card/Card";
import {IIconsProps} from "./Icons.interface";
import { iconsArray } from "../../variables/Variables";
import "./Icons.css";

class Icons extends React.PureComponent<IIconsProps> {
    renderId: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props){
        super(props);
        document.handler.log("Icons.constructor()");
        this.renderId = 0;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        document.handler.log("Icons.componentDidMount()");
        setTimeout(()=>{this.props.updateParent(true)}, 0);
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("Icons.componentWillUnmount()");
        this.props.updateParent(false);
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        document.handler.log("Icons.render() №"+(++this.renderId));
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="202 Awesome Stroke Icons"
                                className="Icons"
                                ctAllIcons
                                category={
                                    <span>
                    Handcrafted by our friends from{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="http://themes-pixeden.com/font-demos/7-stroke/index.html"
                                        >
                      Pixeden
                    </a>
                  </span>
                                }
                                content={
                                    <Row>
                                        {iconsArray.map((prop, key) => {
                                            return (
                                                <Col
                                                    lg={2}
                                                    md={3}
                                                    sm={4}
                                                    xs={6}
                                                    className="font-icon-list"
                                                    key={key}
                                                >
                                                    <div className="font-icon-detail">
                                                        <i className={prop} />
                                                        <input type="text" defaultValue={prop} />
                                                    </div>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Icons;
