import './login.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleonChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-type": "application/json"
      }
    }

    try {
      const { data } = await axios.post("/api/userauth/loginUser", user, config);
      localStorage.setItem("bugauthtoken", data);
      navigate('/');

    } catch (err) {
      console.error(err);
    }


  }

  return (
    <>
      <div className="registerPage">
        <div className="headingr"><Link to='/' >Home</Link> | Login</div>
        <div className="mainreg">
          <div className="loginform">
            <div className="loginhead">Login</div>
            <form className="login">
              <div className="username">
                email
                <input type="text" placeholder='Enter Email' value={user.email} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Password
                <input type="password" placeholder='Enter Password' value={user.password} onChange={(e) => { handleonChange(e) }} />
              </div>
              <button className='loginbtn' onClick={(e) => { handleSubmit(e) }} >Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login