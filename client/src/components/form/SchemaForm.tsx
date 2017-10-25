/**
 * Created by FangJian on 2017/10/25.
 */
import * as React from "react";
import {observer} from "mobx-react";
import Form from "react-jsonschema-form";

//import * as styles from './SchemaForm.less';

interface ISchemaForm {
    // store: Store
}
const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};

const log = (type) => console.log.bind(console, type);


@observer
export default class SchemaForm extends React.Component<ISchemaForm, {}> {

    //  static defaultProps: ISchemaForm = {
    // store: new Store()
    //  };

    render() {
        // const store = this.props.store;
        return (<div>
            <Form schema={schema}
                           onChange={log("changed")}
                           onSubmit={log("submitted")}
                           onError={log("errors")} />
        </div>)
    }
}