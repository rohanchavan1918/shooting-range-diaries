import React,{Component} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Input , Button} from 'reactstrap';
import { NavLink  } from 'react-router-dom';
import Cookies from 'js-cookie';
// import Navigation from './Navigation'
class Login extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
              loginStatus : 'Please enter your credentials',
              email : '',
              password : '',
              token : '',
              refresh : '',
              userdetails : []
        }
    }
    
    changeHandler = (e) => {
        
        this.setState({[e.target.name]: e.target.value})
    }



    submitHandler = (e) =>{
        e.preventDefault()            
      
            var data = {email : this.state.email, password : this.state.password}
            // Register an New User.
            console.log(data)
            axios.post('http://127.0.0.1:8000/api/v1/login',data)
            .then(response =>{
                if(response.status === 200){
                    this.setState({
                        loginStatus : 'Login Successful'
                    });
                    console.log(response)
                    var JWTtoken = response.data.token
                    localStorage.setItem("JWTtoken",JWTtoken)
                    // 
                    // Get current user info
                    // var headers = {'Authorization': "Bearer "+JWTtoken}
                    axios.get('http://127.0.0.1:8000/auth/api/v1/whoami/', {
                        headers: {
                        Authorization: 'Bearer ' + JWTtoken //the token is a variable which holds the token
                        }
                        })
                    .then(response =>{
                        if(response.status === 200){
                            console.log(response)
                        }
                    })
                    .catch(err =>{
                        console.log(err)
                    }) 
                }
            })
            .catch(error => {
                console.log(error);
                if(error.response.status===401){
                    this.setState({
                        loginStatus : 'Incorrect Username or Password'
                    });
                }
            }) 
    
}

    render() {
        const {email,password} = this.state
        return(
            <div>
            {/* <Navigation /> */}
            <div className="container">
                <div className="col-md-6 mx-auto text-center">
                    <div className="header-title">
                        <h1 className="wv-heading--title">
                        Range Diaries
                        </h1>
                        <h5 className="wv-heading--subtitle">
                        Your Online Shooting Diary
                        </h5>
                        <hr/>
                        <h3>
                       Login To Your Account
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="myform form ">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <Input type="email" name="email" value={email}  autoComplete="off" className="form-control my-Input" placeholder="Email" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <Input type="password"  value={password} name="password" autoComplete="off"  className="form-control my-Input" placeholder="Password" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="text-center">
                                <Button type="submit" className="btn btn-primary" style={{ backgroundColor:'green',color:'white'}}>Login</Button>
                               
                               {/* ERROR MESSAGE FOR INVALID LOGIN */}
                                <div  style={{color:'red'}}>{this.state.loginStatus}</div>
                                
                               
                                <h5>Not having an Account yet ?<br/>
                                <NavLink to="/register"> Signup Now </NavLink></h5>
                            </div>
                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or"/>
                                  
                                </div>
                            </div>

                            <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="login" className="ps-hero__content__link">Terms of Use</a> and <a href="login">Privacy Policy</a>.
                            </p>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
            }
}
export default Login;