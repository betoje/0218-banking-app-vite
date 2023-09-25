import { Button } from "react-bootstrap";

export default function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card text-center m-4 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header text-ligth">
          <h4><strong>{props.header1}{props.headerValue1}</strong></h4>
          <div>{props.header2}{props.header2Value}</div>
          {props.header3? <Button className="bg-light text-dark">{props.header3}{props.header3Value}</Button> : <></>}
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