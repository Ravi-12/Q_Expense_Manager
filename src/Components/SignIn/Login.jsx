import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

import "..//..//Styles/styles.css";
import image1 from '..//..//Assets/loginback.jpg'
import image2 from '../../Assets/login.jpg'

function Login() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
   

  
  const loginSubmit = async (e) =>{
      e.preventDefault()
      try {
          //await axios.post('/user/login', {email, password})
           console.log(email, password)

         // localStorage.setItem('firstLogin', true)
          window.location.href = "/dashboard"
      } catch (err) {
          alert(err.response.data.msg)
      }
  }


    return (
        <div className="wrapper" style={{backgroundImage: `URL(${image1})`}}>
            
        <div className="inner">
            
                <div className="image-holder">
                    <h3>Expense Book</h3>
                    <img src={image2}/>
                </div>
                    

                <form onSubmit={loginSubmit}>
                        <h3>Login</h3>
                        
                        <div className="form-wrapper">
                            <input 
                              value={email}  
                              onChange={e => setEmail(e.target.value)}
                              type="email" required placeholder="Email Address"  className="form-control"
                              />
                        </div>
                        <div className="form-wrapper">
                            <input 
                              value={password}  
                              onChange={e => setPassword(e.target.value)}
                              type="password" placeholder="Password" className="form-control"
                              />
                        </div>
                        
                        
                        <div class="form-group container-login100-form-btn">
                          <button type="submit" >
                            Login
                          </button>
                        </div>

                        
            
                        <div className="w-full text-center">
                             <Link to="/signup">
                                 Don't have an account?
                             </Link>
                        </div>
                    </form>
        </div>

    </div>
     
    )
}

export default Login;