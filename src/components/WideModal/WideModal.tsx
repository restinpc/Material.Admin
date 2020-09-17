/**
 * Material.App - компонент широкого модального окна.
 *
 * @ 10.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import "./WideModal.css";
import {IWideModalProps} from "./WideModal.interface";
// @ts-ignore
import spinner from "../../assets/img/loading.gif";

class WideModal extends React.PureComponent<IWideModalProps>{
    renderId: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props){
        super(props);
        document["handler"].log("WideModal.constructor()");
        this.renderId = 0;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        document["handler"].log("WideModal.componentDidMount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document["handler"].log("WideModal.componentWillUnmount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    render(){
        document["handler"].log("WideModal.render() №"+(++this.renderId));
        return (
            <div className="WideModal">
                <div className="WideModal-wrapper">
                    <i className="pe-7s-close icon" title="Закрыть окно"
                       onClick={() => {
                           document["handler"].info("WideModal.icon(Закрыть окно).click()");
                           this.props.hideWideModal();
                       }}
                    />
                    <div className="WideModal-data">
                        <div style={{
                            margin: "0px auto",
                            height: "100%",
                            border: "#c00 0px solid",
                            display: "table"
                        }}>
                            <div style={{
                                display: "table-cell",
                                height: "100%",
                                verticalAlign:"middle",
                                textAlign: "center"
                            }}>
                                <img src={spinner} alt="Загрузка" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WideModal;