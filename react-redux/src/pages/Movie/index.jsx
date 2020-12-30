import React, { Component } from 'react'
import {Input} from "antd"
export default class Movie extends Component {
    render() {
        return (
            <div className="movie">
           <div className="search">
               <Input/>
           </div>
            </div>
        )
    }
}
