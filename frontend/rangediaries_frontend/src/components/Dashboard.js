import React,{Component} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Logout from './Logout'
// import { Input , Button} from 'reactstrap';
// import { NavLink } from 'react-router-dom'
// this.props.location.state.id

class Dashboard extends Component{ 
    
    constructor(props) {
        super(props)
        
        this.state = {
            id : '',
            email : '',
            username : '',
            
        }
    }
    render() {
        const state = this.props.location.state.detail // available props -> id,email,username
        console.log("LOCALSTORAGE login STate at ",localStorage.getItem('logedInstatus'))
        localStorage.setItem("logedInstatus", true);
        return(
            <div>
                {/* <NavLogedin /> */}
            <div className="container">
               
               <div className="jumbotron jumbotron-fluid">
                   <div className="container">
    <h1 className="display-3">Welcome {state.email}</h1>
    <p className="lead">your id is {state.id}</p>
                       <hr className="my-2"/>
                        
                       <p className="lead">
                           <h3>Complete Profile</h3>
                           {/* <TakeImages id={this.props.location.state.detail.id} name={this.props.location.state.detail.username} /> */}
                           {/* <Logout /> */}
                       </p>
                   </div>
               </div>
            </div>
            </div>
        )
       
            }
}
export default Dashboard;