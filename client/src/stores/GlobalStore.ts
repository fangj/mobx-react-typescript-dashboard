/**
 * Created by FangJian on 2017/10/24.
 */
import {computed, observable} from "mobx";

export default class GlobalStore {
    @observable menukey = "dashboard";
    @observable sidebarFold = false;
    @observable siderRespons=document.body.clientWidth < 1201;
    @observable menuResponsVisible=false;

    onMenuClick=(menukey: string)=> {
        this.menukey=menukey.key;
    }
    onSwitchSidebar=()=>{
        this.sidebarFold=!this.sidebarFold;
    }
    onSwitchMenuPopover=()=>{
        // debugger;
        this.menuResponsVisible=!this.menuResponsVisible;
    }

}

export const globalStore=new GlobalStore;

//onresize
//https://developer.mozilla.org/en-US/docs/Web/Events/resize
(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    console.log("Resource conscious resize callback!");
    globalStore.siderRespons=document.body.clientWidth < 1201;
});