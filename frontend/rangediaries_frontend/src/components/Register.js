import React,{Component} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Input , Button} from 'reactstrap';
// import NavLogedin from './NavLogedin';
// import Navigation from './Navigation';

class Register extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
              Firstname : '',
              Lastname : '',
              email : '',
              password1 : '',
              password2 : '',
              city : '',
              Mobile : '',
        }
    }
    
    changeHandler = (e) => {
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()            
        if(this.state.password1 === this.state.password2){
            var data = {Email : this.state.email,FirstName : this.state.Firstname,LastName:this.state.LastName, password : this.state.password1,City:this.state.city,Mobile:this.state.mobile}
            // Register an New User.
            console.log(data)
            axios.post('http://127.0.0.1:8000/api/v1/register',data)
            .then(response =>{
                // console.log(response)
                alert('User Added Successfully')
                // Login to login page
                this.props.history.push('/login')
            })
            .catch(error => {
                console.log(error);
            }) 
    }
}

    render() {
        const {Firstname,Lastname,email,password1,password2,city,mobile} = this.state
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
                        Fill up the form now to register and get started with us ! 
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="myform form ">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <Input type="name" name="Firstname" value={Firstname}  autoComplete="off" className="form-control my-Input" placeholder="Firstname" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <Input type="name" name="Lastname" value={Lastname}  autoComplete="off" className="form-control my-Input" placeholder="Lastname" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <Input type="email" name="email" value={email}  className="form-control my-Input" autoComplete="off" placeholder="Email" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <Input type="password"  value={password1} name="password1" autoComplete="off"  className="form-control my-Input" placeholder="Password" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <Input type="password" value={password2} name="password2" autoComplete="off" className="form-control my-Input" placeholder="Confirm Password" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <Input type="text" value={city} name="city" autoComplete="off" className="form-control my-Input" placeholder="City" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <Input type="text" value={mobile} maxLength="10" name="mobile" autoComplete="off" className="form-control my-Input" placeholder="Mobile Number" onChange={this.changeHandler.bind(this)}/>
                            </div>
                            <div className="text-center ">
                                <Button type="submit" className="btn btn-primary" style={{ backgroundColor:'green',color:'white'}}>Register</Button>
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
export default Register;