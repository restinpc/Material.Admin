/**
 * Material.App - компонент модального окна.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import "./Modal.css";
import {IModalProps, IModalState} from "./Modal.interface";

class ModalComponent extends React.PureComponent<IModalProps, IModalState>{
    renderId: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(props){
        super(props);
        document.handler.log("ModalComponent.constructor()");
        this.renderId = 0;
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount(){
        document.handler.log("ModalComponent.componentDidMount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("ModalComponent.componentWillUnmount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    render(){
        document.handler.log("ModalComponent.render() №"+(++this.renderId));
        return (
            <div className="Modal">
                <div className="modal-wrapper">
                    <div className="modal-container">
                        <div className="modal-data">
                            <i className="pe-7s-close icon"
                               onClick={() => {
                                   document.handler.info("ModalComponent.icon(Закрыть окно).click()")
                                   if(window.confirm("Вы уверены? Все несохраненные изменения будут утеряны")) {
                                       this.props.hideModal();
                                   }
                               }}
                               title="Закрыть окно"
                            />
                            <h1>{this.props.header}</h1>
                            <div>
                                {
                                    //TODO - Заменить компонентом отображения модальных данных
                                    JSON.stringify(this.props.data)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalComponent;