import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
export default function RouteView(props) {
    return (
        <Switch>
            {
                props.routes.map((item,index)=> item.path ?<Route key={index}  path={item.path} 
                render={(pro)=><item.component routes={item.children?item.children:[]} {...pro} >
                    <RouteView routes={item.children?item.children:[]}/>
                </item.component>} /> 
                :<Redirect {...item} key={index}  />)
            }
        </Switch>
    )
}
