import React from 'react';
import register from '../container/register'
// import App from '../src/App'
import '../css/Mobilesigninup.css'
import {Link} from "react-router-dom";
import login from "../container/login"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 export default class Mobilesigninup extends React.Component {
      constructor(props)
      {
        super(props);
        this.state={
          background:""
        }
      }
      login=()=>{
        console.log("login background",this.state.background)
        this.setState({background:"blue"});
      }
      register=()=>{
        console.log("register background",this.state.background)
        this.setState({background:"blue"});
      }
      componentDidMount(){
     
      }
  render() {
    return (
        <div>
   <div className="mobilesigninSinup">
   <Link to="/" component={login}><button onClick={this.login} 
   className="Signin-button"
   style={{background:this.props.background,color:this.props.color}}
   >SIGNIN</button></Link>
   <Link to="/register" component={register}><button onClick={this.register}
      style={{background:this.props.background2,color:this.props.color2}}
   className="Signup-button">SIGNUP</button></Link>
     </div>
    
     </div>  
    
    );
  }
}
