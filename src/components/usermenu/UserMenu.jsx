import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome, {name.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
