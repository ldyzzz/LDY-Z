import React, { Component } from 'react'
import "./style.css"
import {NavLink} from "react-router-dom"
export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="header">
                    <div className="theme"><h2>光与影</h2></div>
                </div>
                <div className="main">
                    {this.props.children}
                </div>
                <div className="footer">
<NavLink to="/layout/yuedu">阅读</NavLink>
<NavLink to="/layout/movie">电影</NavLink>
                </div>
            </div>
        )
    }
}
