import { NavLink } from 'react-router-dom';
import './AuthNav.css'

const AuthNav = () => {
  return (
    <div className='authnav-container'>
      <NavLink className="navlink-part" to="/register">Register</NavLink>
      <NavLink className="navlink-part" to="/login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
