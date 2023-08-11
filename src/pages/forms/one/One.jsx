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
    navigate('/two');

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
            <div className="loginhead">Details of your Business</div>
            <form className="login">
              <div className="username">
                Trade Name
                <input type="text" name='ima'  onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="username">
                Constitution of Business
                <input type="text" name='state'  onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="phoneno">
                District
                <input type="text" name='dist'  onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="aadharno">
                Secctor / Circle / Ward / Charge / Unit
                <input type="text" name='aadhar'  onChange={(e) => { handleonChange(e) }} />
              </div>
              
              <div className="password">
                Commissionerate Code
                <input type="email" name='password' placeholder='Enter Email Address' onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Division Code
                <input type="number" name='password' placeholder='Enter Mobile Number'  onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Range Code
                <input type="number" name='password' placeholder='Enter Mobile Number'  onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Reason to Obtain Registration
                <input type="text" name='password' onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Date of Commencement of Business
                <input type="date" name='password'  onChange={(e) => { handleonChange(e) }} />
              </div>
              <div className="password">
                Date on which liability to register arises
                <input type="date" name='password' onChange={(e) => { handleonChange(e) }} />
              </div>
              <button className='loginbtn' onClick={(e) => { signup(e) }} >SAVE & CONTINUE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewReister
