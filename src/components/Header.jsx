import React, {Component} from 'react'
import {Menu} from 'element-react';

export default class Header extends Component {
    render() {
        return (
            <Menu
                theme="dark"
                defaultActive="1"
                className="el-menu-demo"
                mode="horizontal">
                <Menu.Item index="1">Home</Menu.Item>                    
            </Menu>
        )
    }

    onSelect() {}
}