/**
 * Material.App - Data container.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import AppLoader from "./appLoader";
import {Store} from "redux";
import {
    addError, loadTaskList,
    updateListCount,
} from "./actions";
import showError from "./functions/showError";
import showWarning from "./functions/showWarning";

export default class DataSource {
    url: string;
    store: Store;
    loader: AppLoader;
    data: any;
    request: string;
    errorState: number;
    requeryCount: number;
    timeout: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor(url: string, store: Store, loader: AppLoader) {
        document.handler.log("DataSource.constructor()");
        this.url = url;
        this.store = store;
        this.loader = loader;
        this.data = {};
        this.request = "";
        this.errorState = 0;
        this.requeryCount = parseInt(process.env.REACT_APP_REQUERY_COUNT);
        if(!this.requeryCount) this.requeryCount = 1;
        this.timeout = parseInt(process.env.REACT_APP_REQUEST_TIMEOUT)*1000;
        document.dataSource = this;
    }
    //------------------------------------------------------------------------------------------------------------------
    submitRequest(url:string, method:string, body:any, func:(func:any)=>void): Promise<string|void>{
        return new Promise((callback) => {
            document.handler.log("DataSource.submitRequest()");
            try {
                let xhr = new XMLHttpRequest();
                xhr.open(method, this.url + url, true);
                xhr.timeout = this.timeout;
                xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                xhr.send(body);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState !== 4) {
                        return false;
                    }
                    if (xhr.status !== 200) {
                        document.handler.error("dataSource.submitRequest().xhr(" + this.errorState + ") -> " + xhr.statusText);
                        if (++this.errorState < this.requeryCount) {
                            this.submitRequest(url, method, body, func).then(() => callback(null));
                        } else {
                            document.handler.error(xhr.responseText);
                            document.handler.throw();
                        }
                    } else {
                        this.errorState = 0;
                        callback(xhr.responseText);
                    }
                };
            }catch(e){
                document.handler.error("DataSource.submitRequest() -> "+e.message);
            }
        }).then(xhr=>func(xhr));
    }
    //------------------------------------------------------------------------------------------------------------------
    initData(): Promise<boolean> {
        document.handler.info("Connecting to "+this.url);
        return new Promise((callback) => {
            document.handler.log("dataSource.initData()");
            try {
                this.submitRequest("data.json", "GET", null, (response) => {
                    document.handler.info("Connected!");
                    if (response != null) {
                        document.handler.log("dataSource.initData().submitRequest <<");
                        document.handler.log(response);
                        this.data = JSON.parse(response);
                        if( this.data &&
                            this.data.payLoad &&
                            this.data.payLoad.list &&
                            Array.isArray(this.data.payLoad.list) &&
                            this.data.success ) {
                            if(this.data.error != null){
                                this.data.error.date = this.data.timeStamp;
                                this.store.dispatch(addError(this.data.error));
                                showWarning(this.data.error.message);
                            }
                            this.store.dispatch(loadTaskList(this.data.payLoad.list));
                            this.loader.load("DataSource");
                            callback(true);
                        }else{
                            this.data.error.date = this.data.timeStamp;
                            this.store.dispatch(addError(this.data.error));
                            showError(this.data.error.message);
                            callback(false);
                        }
                    }else{
                        document.handler.log("dataSource.initData().submitRequest << null");
                        this.store.dispatch(addError({
                            code: 0,
                            message: "При инициализации приложения произошла ошибка",
                            category: "Неизвестная ошибка",
                            date: Date.now()
                        }));
                        showError("При инициализации приложения произошла неизвестная ошибка.");
                        callback(false);
                    }
                });
            }catch(e){
                document.handler.error("DataSource.initData() -> "+e.message);
            }
        });
    }
}