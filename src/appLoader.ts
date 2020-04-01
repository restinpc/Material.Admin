/**
 * Material.App - Application loader.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

class AppLoader {
    load_state: number;
    target_state: number;
    root_opacity: number;
    load_interval: number;
    timeout: number;
    //------------------------------------------------------------------------------------------------------------------
    constructor() {
        document.handler.log("AppLoader.constructor()");
        this.load_state = 0;
        this.target_state = 2;
        this.root_opacity = 0.0;
        this.load_interval = null;
        this.timeout = window.setTimeout(() => {
            document.handler.error("AppLoader.constructor() -> Connection timeout");
            document.handler.throw();
        }, 10000);
    }
    //------------------------------------------------------------------------------------------------------------------
    load(sender) {
        document.handler.log("AppLoader.load("+sender+")");
        try {
            if (this.load_state < this.target_state) {
                this.load_state++;
                if (this.load_state === this.target_state) {
                    clearTimeout(this.timeout);
                    this.load_interval = window.setInterval(() => {
                        this.root_opacity += 0.01;
                        document.getElementById("root").style.opacity = ""+(this.root_opacity);
                        if (this.root_opacity >= 1) {
                            if(document.getElementById("root").childNodes.length > 0 &&
                                // @ts-ignore
                                document.getElementById("root").childNodes[0].className === "wrapper") {
                                document.body.style.background = "#fff";
                                document.getElementById("root").style.background = "#fff";
                            }
                            clearInterval(this.load_interval);
                        }
                    }, 1);
                }
            }
        }catch(e){
            document.handler.error("AppLoader.load() -> "+e.message);
        }
    }
}

export default AppLoader;