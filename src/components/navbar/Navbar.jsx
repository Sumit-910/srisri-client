import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item" >
                                <NavLink className={`nav-link ${({ isActive }) => (isActive ? "active" : 'none')}`} style={{ padding: "1rem" }} aria-selected="true" to="/"  >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={`nav-link dropdown-toggle ${({ isActive }) => (isActive ? "active" : 'none')}`} to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: "1rem" }} >
                                    Services
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" aria-selected="true" to="/services/register">Register</NavLink></li>
                                    <li><NavLink className="dropdown-item" aria-selected="true" to="/services/newRegister">New Registration</NavLink></li>
                                    <li><NavLink className="dropdown-item" aria-selected="true" to="/services/payments">payments</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" aria-selected="true" to="/services/trackApplication">Track Application Status</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => (isActive ? "active" : 'none')}`} to="/createChallan" aria-selected="true" style={{ padding: "1rem" }} >Create Challan</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
