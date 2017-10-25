/**
 * Created by FangJian on 2017/10/25.
 */
import {computed, observable} from "mobx";

class LoginStore {
    @observable loginLoading = false;

    showLoginLoading() {
        this.loginLoading=true;
    }

    login({username,password}){
        console.log("login",username,password);
    }
}

export const loginStore=new LoginStore();
