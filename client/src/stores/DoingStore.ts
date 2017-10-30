/**
 * Created by FangJian on 2017/10/30.
 */
import {computed, observable} from "mobx";

//做实验的数据
export default class DoingStore {
    @observable type = "";

    @computed get graphProps(){
        const urls={
            "dianlu":"http://graph/dianlu",
            "fangdaqi":"http://graph/fangdaqi"
        };
        const url=urls[this.type];
        return {url};
    }

    @computed get cameraProps(){
        const urls={
            "dianlu":"http://camera/dianlu",
            "fangdaqi":"http://camera/fangdaqi"
        };
        const url=urls[this.type];
        return {url};

    }

    @computed get devicesProps(){
        const urls={
            "dianlu":{
                sg:"http://dianlu/sg",
                dg:"http://dianlu/dg",
            },
            "fangdaqi":{
                sg:"http://fangdqi/sg",
                dg:"http://fangdaqi/dg",
            }
        };
        const props=urls[this.type];
        return props;
    }
}