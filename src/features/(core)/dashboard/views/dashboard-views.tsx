import { Plus } from "lucide-react";
import Image from "next/image";
import Bilan from "../components/bilan";
import Button from "../components/button";
import Card from "../components/card";
import { Chart } from "../components/chart";

export const groupData = [
  {
    title: "Bilan campagne",
    description: "Ausculté",
    pourcentage: "75%",
    annonce: " Non auscultés",
    nombre: "30%",
  },
  {
    title: "Bilan l'entreprise",
    description: "Ausculté",
    pourcentage: "60%",
    annonce: " Non auscultés",
    nombre: "40%",
  },
];

export const cardData = [
  {
    icons: <Image src="/heart.png" alt="icon" width={30} height={30} />,
    mark: 22,
    description: "Campagnes totales",
  },
  {
    icons: <Image src="/time.png" alt="icon" width={30} height={30} />,
    mark: 17,
    description: "Campagnes terminées",
  },
  {
    icons: <Image src="/agenda.png" alt="icon" width={25} height={25} />,
    mark: 5,
    description: "Campagnes à venir",
  },
];

export const Bilandata = [
  {
    title: "Bilan campagne",
    description: "Auscultés",
    pourcentage: "70%",
    annonce: "Non auscultés",
    nombre: "30%",
  },
  {
    title: "Bilan l'entreprise",
    description: "Auscultés",
    pourcentage: "70%",
    annonce: "Non auscultés",
    nombre: "30%",
  },
];

const DashboardViews = () => {
  return (
    <div className=" w-full  flex flex-col gap-5 p-4 sm:p-6 lg:p-8">
      {/* HEADER */}
      <div className="w-full flex items-center justify-between bg-green-900 rounded-md px-4 py-2 pr-10">
        {/* Select */}
        <div className="relative">
          <select className="appearance-none text-white text-sm bg-green-800 border border-green-900 rounded-md py-2 px-4 pr-8 shadow-md focus:outline-none">
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M4.293 7.793a1 1 0 0 1 1.414 0L12 14.086l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 15.5a2 2 0 0 1-2.828 0L4.293 9.207a1 1 0 0 1 0-1.414"
              />
            </svg>
          </div>
        </div>

        {/* Icon */}
        <Image src="/charg.png" alt="charg" width={35} height={35} />
      </div>

      {/* CARDS */}
      <div
        className="grid gap-4 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-5"
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            icons={card.icons}
            mark={card.mark}
            description={card.description}
          />
        ))}

        {/* Bouton */}
        <div className="sm:col-span-2 lg:col-span-2 bg-[url('/comprime.png')] bg-cover bg-center flex items-center justify-center px-5 py-10 rounded-md border-b-2 border-gray-300">
          <Button icons={<Plus />} title={"Nouvelle campagne"} />
        </div>
      </div>

      {/* CHART + CONTENU */}
      <div
        className="grid gap-15
        grid-cols-1 
        lg:grid-cols-4"
      >
        {/* Main content */}
        <div className=" rounded-md lg:col-span-3">
          <div className="">
            <div className=" w-full flex p-2 gap-5 rounded-xl">
              {Bilandata.map((item, index) => (
                <Bilan
                  key={index}
                  title={item.title}
                  descriptions={item.description}
                  pourcentage={item.pourcentage}
                  annonce={item.annonce}
                  nombre={item.nombre}
                />
              ))}
            </div>
            {/* <div className="w-full bg-green-500 col-span-3">2</div> */}
          </div>
        </div>

        {/* Chart */}
        <div className="">
          <Chart data={[]} />
        </div>
      </div>
    </div>
  );
};

export default DashboardViews;
