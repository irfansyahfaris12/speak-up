const NavIconLabel = ({ icon, label, active }) => {
    const Icon = icon;
    return (
      <div className={`flex flex-col items-center text-sm ${active ? 'text-blue-600' : 'text-gray-500'}`}>
        <Icon size={20} />
        <span>{label}</span>
      </div>
    );
  };
  
  export default NavIconLabel;
  