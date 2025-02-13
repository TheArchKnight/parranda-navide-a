import React, { JSX, useState } from 'react';
import { Menu, LogOut, User } from 'lucide-react';

interface NavItem {
  name: string;
  component: JSX.Element;
}

interface NavbarProps {
  nickname: string;
  navItems: NavItem[];
  defaultComponent?: JSX.Element;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  nickname, 
  navItems, 
  defaultComponent,
  onLogout
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedName, setSelectedName] = useState<string>(navItems[0].name);
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(
    defaultComponent || navItems[0].component
  );

  const handleNavigation = (name: string, component: JSX.Element) => {
    setSelectedName(name);
    setCurrentComponent(component);
  };

  return (
    <div className="flex h-screen w-full">
      <nav className={`flex flex-col h-full bg-red-500 text-white transition-all duration-300 relative ${
        isExpanded ? 'w-64' : 'w-20'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-red-500">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:bg-red-600 p-2 rounded-lg transition-colors"
            title={isExpanded ? "Contraer menú" : "Expandir menú"}
          >
            <Menu size={24} />
          </button>
        </div>

        <div className="p-4 flex flex-col items-center border-b border-red-500">
          <div className="bg-white rounded-full p-3 mb-2">
            <User className="text-red-600" size={24} />
          </div>
          {isExpanded && (
            <span className="text-sm font-medium truncate">{nickname}</span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name, item.component)}
              className={`w-full text-left px-4 py-3 transition-colors
                ${isExpanded ? 'text-base' : 'text-center'}
                ${selectedName === item.name 
                  ? 'bg-red-700 font-medium' 
                  : 'hover:bg-red-600'
                }
              `}
            >
              {isExpanded ? item.name : item.name.charAt(0)}
            </button>
          ))}
        </div>

        <button
          onClick={onLogout}
          className="p-4 border-t border-red-500 hover:bg-red-600 transition-colors flex items-center justify-center"
        >
          <LogOut size={20} />
          {isExpanded && <span className="ml-2">Log Out</span>}
        </button>
      </nav>

      <main className="flex-1">
        {currentComponent}
      </main>
    </div>
  );
};

export default Navbar;