import React from 'react';
import '../App.css';
import { Menu, Icon } from 'antd';
import Info from '../views/Info';
import Questionnaire from '../views/Questionnaire';

const { SubMenu } = Menu;   

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <Questionnaire />
        }
    }

    handleClick = e => {
        console.log('click ', e);
        if(e.key === 'info') {
            this.setState({
                page: <Info />
            })
        }
        if(e.key === 'questionnaire') {
            this.setState({
                page: <Questionnaire />
            })
        }
    };

    
    render() {
        return (
            <div className='Form'>
                <div className='menu'>
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['questionnaire']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <Icon type="appstore" />
                                <span>个人信息</span>
                            </span>
                            }
                        >
                            <Menu.Item key="questionnaire">问卷调查</Menu.Item>
                            <Menu.Item key="info">表格展示</Menu.Item>
                            <SubMenu key="sub2" title="Submenu">
                                <Menu.Item key="3">Option 7</Menu.Item>
                                <Menu.Item key="4">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                            <span>
                                <Icon type="setting" />
                                <span>Navigation Three</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 9</Menu.Item>
                            <Menu.Item key="6">Option 10</Menu.Item>
                            <Menu.Item key="7">Option 11</Menu.Item>
                            <Menu.Item key="8">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className='content'>
                    {this.state.page}
                </div>
            </div>
        );
    }
}

export default Form;