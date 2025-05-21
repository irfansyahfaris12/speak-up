import BottomNavItem from '../molecules/BottomNavItem';
import { Home, Clock } from 'lucide-react';

const BottomNavigationBar = () => {
  return (
    <nav className="bg-white shadow-inner px-4 py-2 flex justify-around border-t sticky bottom-0 z-10">
      <BottomNavItem to="/" icon={Home} label="Home" />
      <BottomNavItem to="/history" icon={Clock} label="History" />
    </nav>
  );
};

export default BottomNavigationBar;
