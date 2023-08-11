import '../../services/newRegister/newr.css';

import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const NewReister = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    aadhar: ""
  })

  const handleonChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const signup = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-type": "application/json"
      }
    }

    try {

      const data = await axios.post(
        "/api/userauth/createUser",
        user,
        config
      )
      console.log(data);

      if (data.status === 200) {
        window.alert("Registration Successful");
        navigate('/');
      }
      else {
        window.alert("Invalid Registration");
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="registerPage">
        <div className="headingr"><Link to='/' >Home</Link></div>
        <div className="mainreg">
          <div className="loginform">
            <div className="loginhead">Personal Information</div>
            <form className="login">
              <div className="username">
                Firstname
                <input type="text" name='ima' value={user.name} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="username">
                Middlename
                <input type="text" name='ima' value={user.name} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="username">
                Lastname
                <input type="text" name='ima' value={user.name} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="username">
                State / UT
                <input type="text" name='state' value={user.email} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="phoneno">
                District
                <input type="text" name='dist' value={user.phone} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="aadharno">
                Legal Name of the Business (As mentioned in PAN)
                <input type="text" name='aadhar' placeholder='Enter Legal Name of the Business' value={user.aadhar} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Permanent Account Number (PAN)
                <input type="number" name='password' placeholder='Enter Permanent Account Number (PAN)' value={user.password} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Email Address
                <input type="email" name='password' placeholder='Enter Email Address' value={user.password} onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Mobile Number
                <input type="number" name='password' placeholder='Enter Mobile Number' value={user.password} onChange={(e) => { handleonChange(e) }} />
              </div>
              <button className='loginbtn' onClick={(e) => { signup(e) }} >PROCEED</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewReister
