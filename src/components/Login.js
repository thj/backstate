import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            infos: [
                {id: 111, usename: '13574229541', password: '123456'},
                {id: 111, usename: '124002350@qq.com', password: '123456789'}
            ]
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.state.infos.map((info) => {
                // 判断输入的账号密码是否与数据中的账号密码一致，如果一致 登录成功跳转页面，如果不一致 则显示提示信息
                if (values.usename === info.usename && values.password === info.password) {
                    this.refs.error.innerHTML = '';
                    this.props.history.push('/form');
                } else {
                    this.refs.error.innerHTML = '用户名或密码错误，请重新输入';
                }
            })
          }
        });
      };
    
    // 账号验证
    checkAccount(rule, value, callback) {
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

       if (value.length==11 || re.test(value)) {
           callback();
       } else {
           callback('用户名为邮箱或手机号');
       }
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };

        return (
            <div className='Login'>
                <div className='login'>
                    <div className='login-container'>
                        <h2>后台管理系统</h2>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{width: '100%', textAlign: 'center'}}>
                            <Form.Item style={{width: '250px', display: 'inline-block'}}>
                                {getFieldDecorator('usename', {
                                    rules: [
                                        { required: true, message: '用户名有误，请重新输入', whitespace: true },
                                        {
                                            validator: this.checkAccount,
                                        }
                                    ],
                                })(<Input placeholder="请输入手机号/邮箱" style={{width: '100%'}} />)}
                            </Form.Item>
                            <Form.Item style={{width: '300px', display: 'inline-block'}}>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码错误，请重新输入',
                                        }
                                    ],
                                })(<Input.Password autoComplete="off" placeholder="请输入密码" style={{width: '100%'}} />)}
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    登 录
                                </Button>
                            </Form.Item>
                        </Form>

                        <div ref='error' style={{width: '100%', textAlign: 'center', color: 'red'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}


const WrappedRegistrationForm = Form.create()(Login);

export default WrappedRegistrationForm;