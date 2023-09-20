import { createContext } from "react";
import {createHashRouter, 
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const UserContext = createContext(null);

export default function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card m-4 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header text-warning"><strong>{props.header}</strong></div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus' className="text-warning">{props.status}</div>)}
        </div>
      </div>      
    );    
  }