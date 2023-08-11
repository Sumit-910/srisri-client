import './register.css';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div className="registerPage">
        <div className="headingr"><Link to='/' >Home</Link></div>
      <div className="mainreg">
        <div className="prevlinks">
        <Link to='/' >Home</Link> | <Link to='/services' >Services</Link> | Registration
        </div>
      <h3>Registration Quick Links</h3>
      <ul>
        <li><Link to="/services/newRegister">New Registration</Link></li>
        <li><Link to="/services/register">Track Application Status</Link></li>
        <li><Link to="/services/register">Application for Filing Clarifications</Link></li>
      </ul>
      </div>
      </div>
    </>
  )
}

export default Register
