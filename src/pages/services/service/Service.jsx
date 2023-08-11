import '../register/register.css';

import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
          <div className="registerPage">
            <div className="headingr"><Link to='/' >Home</Link></div>
          <div className="mainreg">
            <div className="prevlinks">
            <Link to='/' >Home</Link> | Services
            </div>
          <h3>Services</h3>
          <ul>
            <li><Link to="/services/register">Registration</Link></li>
            <li><Link to="/services">Payments</Link></li>
            <li><Link to="/services">User Services</Link></li>
            <li><Link to="/services">Track Application Status</Link></li>
          </ul>
          </div>
          </div>
        </>
      )
}

export default Service
