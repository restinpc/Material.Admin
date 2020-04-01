/**
 * Material.App - компонент бокового модального окна.
 *
 * @ 13.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import {IRightModalProps, IRightModalState} from "./RightModal.interface";
import {CustomButton} from "../CustomButton/CustomButton";
import "./RightModal.css";
// @ts-ignore
import spinner from "../../assets/img/loading.gif";
import {RefObject} from "react";
import showError from "../../functions/showError";

class RightModal extends React.Component<IRightModalProps, IRightModalState> {
    renderId: number;
    state: IRightModalState;
    refObjects: {
        nameInput: RefObject<HTMLInputElement>,
        descriptionInput: RefObject<HTMLTextAreaElement>,
        categoryInput: RefObject<HTMLSelectElement>,
        scheduleInput: RefObject<HTMLInputElement>
    }
    //------------------------------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        document.handler.log("RightModal.constructor()");
        this.renderId = 0;
        this.state = {
            selected: "properties"
        }
        this.refObjects = {
            nameInput: React.createRef<HTMLInputElement>(),
            descriptionInput: React.createRef<HTMLTextAreaElement>(),
            categoryInput: React.createRef<HTMLSelectElement>(),
            scheduleInput: React.createRef<HTMLInputElement>()
        };
    }
    //------------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        document.handler.log("RightModal.componentDidMount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    componentWillUnmount() {
        document.handler.log("RightModal.componentWillUnmount()");
    }
    //------------------------------------------------------------------------------------------------------------------
    submitModal = () => {
        let new_object = Object.assign(this.props.content);
        let valid = true;
        let invalid;
        this.props.content &&
        this.props.content.groups &&
        this.props.content.groups.length &&
        this.props.content.groups.forEach((value, group_id) => {
            value.properties &&
            value.properties.length &&
            value.properties.forEach((res, prop_id) => {
                try {
                    // @ts-ignore
                    let target = document.getElementById(res.name).value;
                    new_object.groups[group_id].properties[prop_id].value = target;
                    if (
                        new_object.groups[group_id].properties[prop_id].mandatory &&
                        (!target && target==="")
                    ) {
                        if(!invalid)
                            invalid = res.name;
                        valid = false;
                        document.getElementById(res.name).style.borderColor = "#f00";
                    }
                    if (new_object.groups[group_id].properties[prop_id].regexp){
                        try{
                            let regexp = new RegExp(new_object.groups[group_id].properties[prop_id].regexp);
                            if(!regexp.test(target)){
                                if(!invalid)
                                    invalid = res.name;
                                valid = false;
                                document.getElementById(res.name).style.borderColor = "#f00";
                            }
                        }catch(e){
                            document.handler.error("TaskList.render().regexp("+res.name+") -> "+e.message);
                        }
                    }
                }catch(e){
                    document.handler.error("TaskList.render().save(click) -> "+e.message);
                }
            });
        });
        if (valid) {
            new_object.name = this.refObjects.nameInput.current.value;
            new_object.description = this.refObjects.descriptionInput.current.value;
            new_object.schedule = this.refObjects.scheduleInput.current.value;
            this.props.saveTaskDetails(this.props.action, new_object);
        }else{
            showError("Не все обязательные поля заполнены верно ("+invalid+")");
        }
    }
    //------------------------------------------------------------------------------------------------------------------
    render() {
        document.handler.log("RightModal.render() №"+(++this.renderId));
        const element = document.getElementById("main-panel");
        let padding = "300px";
        if(element) {
            padding = (document.getElementById("main-panel").clientHeight/2-230) + "px";
        }
        document.body.style.overflow = "hidden";
        let details;
        details = (
            <div className="spinner" style={{paddingTop: padding}}>
                <img src={spinner} alt="Загрузка" />
            </div>
        );
        let action;
        if(this.props.action === "new"){
            action = "Создание задачи";
        }else if(this.props.action === "edit"){
            action = "Редактирование задачи";
        }
        let top = (77-window.scrollY);
        if(top < 0) top = 0;
        let fout = [];
        fout.push(
            <div key="modalBackground" className="modalBackground">&nbsp;</div>
        );
        fout.push(
            <div key="RightModal" className="RightModal" style={{top:top+"px"}}>
                <div className="header">{action} "{this.props.content.name}"</div>
                <div className="modal_details">
                    <div className="modal_content">{ details } </div>
                </div>
                <CustomButton bsStyle="info" className="saveButton btn-fill pull-right" onClick={()=>{
                    document.handler.info("RightModal.CustomButton(Сохранить).click()");
                    this.submitModal();
                }}>
                    Сохранить
                </CustomButton>
                <CustomButton bsStyle="danger" pullRight fill onClick={() => {
                    document.handler.info("RightModal.CustomButton(Отмена).click()");
                    if(window.confirm("Вы уверены? Все несохраненные изменения будут утеряны")) {
                        this.props.hideRightModal();
                    }
                }}>
                    Отмена
                </CustomButton>
            </div>
        );
        return fout;
    }
}

export default RightModal;