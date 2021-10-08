import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";
import "..//..//Styles/styles.css";
import image3 from '..//..//Assets/registerback.jpg'
import image4 from '..//..//Assets/registration-form-1.jpg'


function Signup() {
    const [name, setName] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
  

  const registerSubmit = async (e) =>{
      e.preventDefault()
      try {
          await axios.post('/user/register', {name, email, password})
          localStorage.setItem('firstLogin', true)
          window.location.href = "/dashboard"
      } catch (err) {
          alert(err.response.data.msg)
      }
  }
   

    return (
        <div className="wrapper" style={{backgroundImage: `url(${image3})`}}>
            
            <div className="inner">
                    <div className="image-holder">
                        <h3>Expense Book</h3>
                        <img src={image4}/>
                    </div>
                    

                    <form onSubmit={registerSubmit}>
                            <h3>Register</h3>
                            <div className="form-wrapper">
                                <input 
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                                  type="text" placeholder="Enter Name" className="form-control"
                                />
                            </div>
                            <div className="form-wrapper">
                                <input
                                  value ={email} 
                                  onChange={e => setEmail(e.target.value)}
                                  type="email" placeholder="Email Address" class="form-control"
                                />
                            </div>
                            <div className="form-wrapper">
                                    <input 
                                       value={password} 
                                       onChange={e => setPassword(e.target.value)}
                                       type="password" placeholder="Password" class="form-control"
                                    />
                                    </div>
                            <div className="form-group container-login100-form-btn">
                                <button type="submit">
                                    Signup
                                </button>
                            </div>
                
                            <div class="w-full text-center">
                               <Link to="/">
                                  Already have an account?
                               </Link>
                            </div>
                        </form>
            </div>

        </div>
    )
}

export default Signup;