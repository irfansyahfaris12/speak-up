import { NavLink } from 'react-router-dom';
import NavIconLabel from '../atoms/NavIconLabel';

const BottomNavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `flex-1 flex justify-center ${isActive ? 'text-blue-600' : 'text-gray-500'}`}
    >
      {({ isActive }) => <NavIconLabel icon={icon} label={label} active={isActive} />}
    </NavLink>
  );
};

export default BottomNavItem;
