const styles = require("./LoginForm.less");
import {Button, Form, Icon, Input} from "antd";
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                this.props.onSubmit(values)
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={styles.loginFormContainer}>
                <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入你的学号!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="学号"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入你的密码!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                            登录
                        </Button>
                        或 <a href="#/signup">注册</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
NormalLoginForm.defaultProps = {
    onSubmit: () => {
    }
};
NormalLoginForm.propTypes = {
    onSubmit: React.PropTypes.func
};

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;