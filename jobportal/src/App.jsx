import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
    showSignIn(){
        let popup = document.getElementById("popup");
        let signin = document.getElementById("signIn");
        let signup = document.getElementById("signup");
        let popupHeader = document.getElementById("popupHeader");
        signup.style.display = "none";
        signin.style.display = "block";
        popupHeader.innerHTML = "LOGIN";
        popup.style.display = "block";
    }
    showSignUp(){
        let popup = document.getElementById("popup");
        let signin = document.getElementById("signIn");
        let signup = document.getElementById("signup");
        let popupHeader = document.getElementById("popupHeader");
        signup.style.display = "block";
        signin.style.display = "none";
        popupHeader.innerHTML = "Create new account";
        popup.style.display = "block";
    }

    closeSignIn(event){
        if(event.target.id==='popup'){
            let popup = document.getElementById("popup");
            popup.style.display = "none";
        }
    }

    render() {
        return (
            <div id="container">
                <div id='popup' onClick={this.closeSignIn}>
                    <div id='popupWindow'>
                        <div id='popupHeader'>Login</div>
                        <div id='signIn'>
                            <label className='usernameLabel'>Username</label>
                            <input type='text' id='username'/>
                            <label className='passwordLabel'>Password</label>
                            <input type='password' id='password'/>
                            <div className='forgotPassword'>Forgot <label>Password?</label></div>
                            <button className='signinButton'>Sign In</button>
                            <div className='div1'></div>
                            <div className='div2'>
                                Don't have an account?
                                <label onClick={this.showSignUp}>Sign Up Now</label>                            
                            </div>
                        </div>
                        <div id='signup'>
                            <label>Full Name </label>
                            <input type="text" id="fullname"/>
                            
                            <label>Email </label>
                            <input type="text" id="email"/>
                            
                            <label>Role</label>
                            <select id="role">
                                <option value=''></option>
                                <option value='1'>Admin</option>
                                <option value='2'>Employer</option>
                                <option value='3'>Job Seeker</option>
                            </select>
                            
                            <label>Password</label>
                            <input type="password" id="password" />
                            
                            <label>Confirm Password</label>
                            <input type="password" id="confirmpassword" />
                            
                            <button>Register</button>
                            <div>Already have an account? <span onClick={this.showSignIn}>Sign In</span></div>
                        </div>
                    </div>
                </div>
                <div id="header">
                    <img className='logo' src="/logo.png" alt="" />
                    <div className='logoTxt'><span>Job</span> Portal</div>
                    <img className='signinIcon' src='/user.png' alt='' onClick={this.showSignIn}/>
                    <label className='signinText' onClick={this.showSignIn}>Sign In</label>
                </div>

                <div id="content">
                    <div className='text1'>INDIA'S #1 JOB PLATFORM</div>
                    <div className='text2'>Your Job Search Ends Here</div>
                    <div className='text3'>Discover Career Opportunities</div>
                    <div className='searchBar'>
                        <input type='text' className='searchText' placeholder='Search by "skill"'/>
                        <input type='text' className='searchLocation' placeholder='Job Location'/>
                        <button className='searchButton'>Search Jobs</button>
                    </div>
                </div>

                <div id="footer">
                    <label className='copyrightText'>Copyright © 2024. All Rights Reserved</label>
                    <img className='socialmediaIcon' src='/facebook.png' alt=''/>
                    <img className='socialmediaIcon' src='/twitter.png' alt=''/>
                    <img className='socialmediaIcon' src='/linkedin.png' alt=''/>
                </div>
            </div>
        )
    }
}
