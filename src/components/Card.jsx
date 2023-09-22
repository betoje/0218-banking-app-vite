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
      return 'card text-center m-4 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header text-warning">
          <h4><strong>{props.header1}{props.headerValue1}</strong></h4>
          <div>{props.header2}{props.header2Value}</div>
          <div>{props.header3}{props.header3Value}</div>
        </div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus' className="text-warning">{props.status}</div>)}
        </div>
      </div>      
    );    
  }