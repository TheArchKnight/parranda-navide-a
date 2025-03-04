import React, { JSX, useState } from "react";
import OracionDiaria from "./novenaComponents/OracionDiaria";
import OracionMaria from "./novenaComponents/OracionMaria";
import OracionJose from "./novenaComponents/OracionJose";
import OracionJesus from "./novenaComponents/OracionJesus";
import Gozos from "./novenaComponents/Gozos";
import ConsideracionesDia1 from "./novenaComponents/ConsideracionesDia1";
import ConsideracionesDia2 from "./novenaComponents/ConsideracionesDia2";
import ConsideracionesDia3 from "./novenaComponents/ConsideracionesDia3";
import ConsideracionesDia4 from "./novenaComponents/ConsideracionesDia4";
import ConsideracionesDia5 from "./novenaComponents/ConsideracionesDia5";
import ConsideracionesDia6 from "./novenaComponents/ConsideracionesDia6";
import ConsideracionesDia7 from "./novenaComponents/ConsideracionesDia7";
import ConsideracionesDia8 from "./novenaComponents/ConsideracionesDia8";
import ConsideracionesDia9 from "./novenaComponents/ConsideracionesDia9";
import VillancicoBurrito from "./novenaComponents/VillancicoBurrito";
import VillancicoNanita from "./novenaComponents/VillancicoNanita";
import VillancicoPeces from "./novenaComponents/VillancicoPeces";
import VillancicoTutaina from "./novenaComponents/VillancicoTutaina";
import VillancicoCampana from "./novenaComponents/VillancicoCampana";

interface NovenaItems {
  name: string;
  component?: JSX.Element;
}

const Novenas: React.FC = () => {
  const items: NovenaItems[] = [
    { name: "Oración de Todos los Días", component: <OracionDiaria /> },
    { name: "Consideraciones" },
    { name: "Oración a la Virgen María", component: <OracionMaria /> },
    { name: "Oración a San José", component: <OracionJose /> },
    { name: "Oración al Niño Jesús", component: <OracionJesus /> },
    { name: "Gozos al Niño Jesús", component: <Gozos /> },
    { name: "Villancicos" },
  ];

  const consideracionesItems: NovenaItems[] = [
    { name: "Día 1", component: <ConsideracionesDia1 /> },
    { name: "Día 2", component: <ConsideracionesDia2 /> },
    { name: "Día 3", component: <ConsideracionesDia3 /> },
    { name: "Día 4", component: <ConsideracionesDia4 /> },
    { name: "Día 5", component: <ConsideracionesDia5 /> },
    { name: "Día 6", component: <ConsideracionesDia6 /> },
    { name: "Día 7", component: <ConsideracionesDia7 /> },
    { name: "Día 8", component: <ConsideracionesDia8 /> },
    { name: "Día 9", component: <ConsideracionesDia9 /> },
  ];

  const villancicosItems: NovenaItems[] = [
    { name: "El Burrito de Belén", component: <VillancicoBurrito /> },
    { name: "La Nanita Nana", component: <VillancicoNanita /> },
    { name: "Los Peces en el Rio", component: <VillancicoPeces /> },
    { name: "Tutaina", component: <VillancicoTutaina /> },
    { name: "Campana sobre Campana", component: <VillancicoCampana /> },
  ];

  const [selectedName, setSelectedName] = useState(items[0].name);
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(items[0].component!);
  const [isConsideracionesActive, setIsConsideracionesActive] = useState(false);
  const [isVillancicosActive, setIsVillancicosActive] = useState(false);

  const handleNavigation = (name: string, component?: JSX.Element) => {
    setSelectedName(name);

    if (component) {
      setCurrentComponent(component);
    }

    if (name === "Consideraciones") {
      setIsConsideracionesActive(true);
      setIsVillancicosActive(false);
    } else if (name === "Villancicos") {
      setIsVillancicosActive(true);
      setIsConsideracionesActive(false);
    } else if (name === "Volver a la Novena") {
      setIsConsideracionesActive(false);
      setIsVillancicosActive(false);
      setSelectedName(items[0].name);
      setCurrentComponent(items[0].component!);
    }
  };

  return (
    <div className="flex flex-col w-full h-full min-h-screen bg-green-50">
      {!isConsideracionesActive && !isVillancicosActive ? (
        <nav className="bg-red-700 text-white p-4 flex flex-wrap justify-center gap-2 shadow-lg w-full">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name, item.component)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 border-yellow-500
                ${selectedName === item.name 
                  ? "bg-yellow-500 text-red-800 shadow-md scale-105"
                  : "bg-white text-red-700 hover:bg-green-600 hover:text-white"
                }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      ) : isConsideracionesActive ? (
        <nav className="bg-blue-700 text-white p-4 flex flex-wrap justify-center gap-2 shadow-lg w-full">
          {consideracionesItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name, item.component)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 border-white
                ${selectedName === item.name 
                  ? "bg-yellow-400 text-blue-900 shadow-md scale-105"
                  : "bg-white text-blue-700 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNavigation("Volver a la Novena")}
            className="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-700 transition-all"
          >
            Volver a la Novena
          </button>
        </nav>
      ) : (
        <nav className="bg-purple-700 text-white p-4 flex flex-wrap justify-center gap-2 shadow-lg w-full">
          {villancicosItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name, item.component)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 border-white
                ${selectedName === item.name 
                  ? "bg-yellow-400 text-purple-900 shadow-md scale-105"
                  : "bg-white text-purple-700 hover:bg-purple-500 hover:text-white"
                }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNavigation("Volver a la Novena")}
            className="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-700 transition-all"
          >
            Volver a la Novena
          </button>
        </nav>
      )}

      <main className="flex-1 w-full h-screen overflow-auto bg-green-50 p-6">
        <div className="max-w-4xl mx-auto">{currentComponent}</div>
      </main>
    </div>
  );
};

export default Novenas;