/**
 * Created by FangJian on 2017/10/24.
 */
import {computed, observable} from "mobx";

export default class GlobalStore {
    @observable menukey = "dashboard";
    @observable sidebarFold = true;

    onMenuClick=(menukey: string)=> {
        this.menukey=menukey.key;
    }
    onSwitchSidebar=()=>{
        this.sidebarFold=!this.sidebarFold;
    }

}

export const globalStore=new GlobalStore;
