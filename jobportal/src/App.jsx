import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
        <div id="container">
            <div id="header">
                <img className='logo' src="/logo.png" alt="" />
                <div className='logoTxt'><span>Job</span> Portal</div>
                <img className='signinIcon' src='/user.png' alt=''/>
                <label className='signinText'>Sign In</label>
            </div>

            <div id="content">
                content
            </div>

            <div id="footer">
                footer
            </div>
        </div>
    )
  }
}
