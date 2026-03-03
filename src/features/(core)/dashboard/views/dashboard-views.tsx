import { Plus } from "lucide-react";
import Image from "next/image";
import Button from "../components/button";
import Card from "../components/card";
import GroupCard from "../components/group-card";

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
  // {
  //   title: "Bilan l'entreprise",
  //   description: "Ausculté",
  //   pourcentage: "60%",
  //   annonce: " Non auscultés",
  //   nombre: "40%",
  // },
];

export const cardData = [
  {
    icons: (
      <Image
        src="/heart.png"
        alt="Picture of the doctor"
        width={30}
        height={30}
      />
    ),
    mark: 22,
    description: "Campagnes totales",
  },
  {
    icons: (
      <Image
        src="/time.png"
        alt="Picture of the patient"
        width={30}
        height={30}
      />
    ),
    mark: 17,
    description: "Campagnes terminées",
  },
  {
    icons: (
      <Image
        src="/agenda.png"
        alt="Picture of the appointment"
        width={25}
        height={25}
      />
    ),
    mark: 5,
    description: "Campagnes à vénir",
  },
];

const DashboardViews = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-between h-[55px] bg-green-900 rounded-md pl-3 pr-10">
        <div className="relative inline-block">
          <select className="block appearance-none text-white text-[14px] bg-green-800 border border-green-900 rounded-md py-1.5 px-4 pr-8 shadow-md focus:outline-none">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M4.293 7.793a1 1 0 0 1 1.414 0L12 14.086l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 15.5a2 2 0 0 1-2.828 0L4.293 9.207a1 1 0 0 1 0-1.414"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="text-white w-[100px] flex flex-end items-center justify-end">
          <Image src="/charg.png" alt="charg" width={30} height={30} />
        </div>
      </div>
      <div className="flex items-center  gap-5 mt-5 mb-5 bg-white-100">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icons={card.icons}
            mark={card.mark}
            description={card.description}
          />
        ))}
        <div className="bg-[url('/comprime.png')] bg-cover bg-center flex items-center justify-center gap-3 px-7 py-11 rounded-md w-[465px]  border-t-none border-l-none border-r-none border-b-2  border-gray-300 rounded-md ">
          <Button icons={<Plus />} title={"Nouvelle campagne"} />
        </div>
      </div>
      <div className="flex  w-full   rounded-md">
        <div className=" w-full flex gap-3">
          <div className="flex flex-col ">
            <div className="w-full flex">
              {groupData.map((group, index) => (
                <GroupCard
                  key={index}
                  title={group.title}
                  description={group.description}
                  pourcentage={group.pourcentage}
                  annonce={group.annonce}
                  nombre={group.nombre}
                  tem={""}
                />
              ))}
            </div>
            <table className="bg-gray-300 flex-1 mr-2">table</table>
          </div>
          <div className="w-[300px] h-[400px] bg-gray-200">diagramme</div>
        </div>
      </div>
    </div>
  );
};
export default DashboardViews;
