/**
 * Created by FangJian on 2017/10/24.
 */
import {computed, observable} from "mobx";
import {hashHistory} from 'react-router';
import * as Parse from "parse";
import {ClickParam} from "antd/es/menu";
import { Button, notification } from 'antd';

import * as demoMenu from "./menu/demo.js";
import * as adminMenu from "./menu/admin.js";
import * as studentMenu from "./menu/student.js";
import * as teacherMenu from "./menu/teacher.js";

function p2p<T>(p:Parse.IPromise<T>):Promise<T>{
    return new Promise((resolve, reject) => {
        return p.then(resolve, reject);
    });
}

export default class GlobalStore {
    @observable menukey = "";
    @observable sidebarFold = false;
    @observable siderRespons=document.body.clientWidth < 1201;
    @observable menuResponsVisible=false;
    @observable fullScreen = false;
    @observable sidebarBgColor = 'red';
    @observable sidebarBgImg = '1';
    @observable isShowSidebarBgImg = true;
    //login
    @observable loginLoading = false;
    @observable demo_isLogin=false;//演示是否登陆
    @observable demo_isAdmin=false;//演示管理员身份
    @observable demo_isTeacher=false;//演示教师身份
    @observable demo_isStudent=false;//演示学生身份

    @computed get isLogin(){
        const parse_isLogin=!!Parse.User.current();//parse登陆
        return this.demo_isLogin||parse_isLogin;
    }

    @computed get isAdmin(){
        return this.demo_isAdmin;
    }

    @computed get isTeacher(){
        return this.demo_isTeacher;
    }

    @computed get isStudent(){
        if(this.demo_isStudent){
            return this.demo_isStudent;
        }
        if(Parse.User.current()){
            return !Parse.User.current().get("isTeacher");
        }
        return false;
    }

    showLoginLoading() {
        this.loginLoading=true;
    }

    hideLoginLoading(){
        this.loginLoading=false;
    }

    login=({username,password})=>{
        // console.log("login",username,password);
        //清除用户状态
        this.logout();
        //演示用户设置为登陆状态
        const demo_users = ["demo", "admin", "teacher", "student"];
        if(demo_users.indexOf(username)>=0){
            this.demo_isLogin=true;
        }
        //演示用户设置角色
        switch (username){
            case "admin":  {this.demo_isAdmin=true;  break;}
            case "teacher":{this.demo_isTeacher=true;break;}
            case "student":{this.demo_isStudent=true;break;}
            default:{
                //登陆到parse数据库
                p2p(Parse.User.logIn(username,password))
                    .then(parseUser=>{
                    hashHistory.push('/dashboard');
                }).catch((error)=>{
                    debugger;
                    notification.warn({message:"登录失败",description:error.message})
                })
            }
        }
        //登陆后跳转到主页面
        if(this.isLogin){
            hashHistory.push('/dashboard');
        }
        //关闭loading圈圈
        this.hideLoginLoading();
    };

    logout(){
        this.demo_isLogin=false;
        this.demo_isAdmin=false;
        this.demo_isTeacher=false;
        this.demo_isStudent=false;
        Parse.User.logOut();
    }

    onMenuClick=(menukey: ClickParam)=> {
        this.menukey=menukey.key;
    };
    onSwitchSidebar=()=>{
        this.sidebarFold=!this.sidebarFold;
    };
    onSwitchMenuPopover=()=>{
        this.menuResponsVisible=!this.menuResponsVisible;
    };
    lock=()=>{
        hashHistory.push('/lock');
    };
    unlock=()=>{
        hashHistory.push('/dashboard')
    };
    switchFullScreen=()=>{
        this.fullScreen=!this.fullScreen;
    };
    switchSidebarBgColor=(color)=>{
        this.sidebarBgColor=color;
    };
    switchSidebarBgImg=(img)=>{
        this.sidebarBgImg=img;
    };
    switchIsShowSidebarBgImg=()=>{
        this.isShowSidebarBgImg=!this.isShowSidebarBgImg;
    };

    @computed get menuData(){
        if(this.isAdmin){
            return adminMenu;
        }
        if(this.isTeacher){
            return teacherMenu;
        }
        if(this.isStudent){
            return studentMenu;
        }
        return demoMenu;
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
    throttle("resize", "optimizedResize",window);
})();

// handle event
window.addEventListener("optimizedResize", function() {
    // console.log("Resource conscious resize callback!");
    globalStore.siderRespons=document.body.clientWidth < 1201;
});