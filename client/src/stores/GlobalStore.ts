/**
 * Created by FangJian on 2017/10/24.
 */
import {computed, observable} from "mobx";
import {hashHistory} from 'react-router';

const menuData= [
    {
        "key": "dashboard",
        "icon": "appstore-o",
        "title": "Dashboard",
        "url": "/dashboard"
    },
    {
        "key": "profile",
        "icon": "user",
        "title": "User Profile",
        "url": "/profile"
    },
    {
        "key": "component",
        "icon": "bars",
        "title": "Component",
        "children": [
            {
                "key": "alert",
                "title": "Alert",
                "url": "/alert"
            },
            {
                "key": "charts",
                "title": "Charts",
                "url": "/charts"
            },
            {
                "key": "editor",
                "title": "Editor",
                "url": "/editor"
            },
            {
                "key": "grid",
                "title": "Grid",
                "url": "/grid"
            },
            {
                "key": "table",
                "title": "Table",
                "url": "/table"
            },
            {
                "key": "form",
                "title": "react-jsonschema-form",
                "url": "/form"
            },
            {
                "key": "table2",
                "title": "react-bootstrap-table",
                "url": "/table2"
            },

        ]

    }, {
        "key": "setting",
        "icon": "setting",
        "title": "Setting",
        "url": "/setting"
    }, {
        "key": "acknowledge",
        "icon": "copyright",
        "title": "Acknowledge",
        "url": "/acknowledge"
    }
];

export default class GlobalStore {
    @observable menukey = "dashboard";
    @observable sidebarFold = false;
    @observable siderRespons=document.body.clientWidth < 1201;
    @observable menuResponsVisible=false;
    @observable fullScreen = false,
    @observable sidebarBgColor = 'red',
    @observable sidebarBgImg = '1',
    @observable isShowSidebarBgImg = true,

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
    lock=()=>{
        hashHistory.push('/lock');
    }
    unlock=()=>{
        hashHistory.push('/dashboard')
    }
    switchFullScreen=()=>{
        this.fullScreen=!this.fullScreen;
    }
    switchSidebarBgColor=(color)=>{
        this.sidebarBgColor=color;
    }
    switchSidebarBgImg=(img)=>{
        this.sidebarBgImg=img;
    }
    switchIsShowSidebarBgImg=()=>{
        this.isShowSidebarBgImg=!this.isShowSidebarBgImg;
    }

    @computed get menuData(){
        return menuData;
    }
}

export const globalStore=new GlobalStore();

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