import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='nav'>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/contacts">Contacts</NavLink>
    </nav>
  );
}; 

export default Navigation;
