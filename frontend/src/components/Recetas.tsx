import React, { JSX, useState } from "react";
import Natilla from "./Natilla";
import Buñuelos from "./Buñuelos";
import Lechona from "./Lechona";

interface SubItem {
  name: string;
  component: JSX.Element;
}

const Rituales: React.FC = () => {
  const subItems: SubItem[] = [
    { name: "Natilla", component: <Natilla /> },
    { name: "Buñuelos", component: <Buñuelos /> },
    { name: "Lechona Tolimense", component: <Lechona /> },
  ];

  const [selectedName, setSelectedName] = useState(subItems[0].name);
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(subItems[0].component);

  const handleNavigation = (name: string, component: JSX.Element) => {
    setSelectedName(name);
    setCurrentComponent(component);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <nav className="bg-red-600 text-white p-4 flex justify-center gap-4 shadow-lg w-full">
      {subItems.map((item) => (
        <button
        key={item.name}
        onClick={() => handleNavigation(item.name, item.component)}
        className={`px-4 py-2 rounded-full font-semibold transition-all
          ${selectedName === item.name 
          ? "bg-orange-500 text-white shadow-md scale-105"
          : "bg-white text-red-700 hover:bg-red-700 hover:text-white"
          }`}
        >
        {item.name}
        </button>
      ))}
      </nav>

      <main className="flex flex-1 w-full h-full overflow-y-auto">
      <div className="w-full h-full">{currentComponent}</div>
      </main>
    </div>
  );
};

export default Rituales;
