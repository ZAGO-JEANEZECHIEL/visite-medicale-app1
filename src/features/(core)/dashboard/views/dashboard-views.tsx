import { Plus } from "lucide-react";
import Image from "next/image";
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
      <div className="w-full flex items-center justify-between h-13.75 bg-green-900 rounded-md pl-3 pr-10">
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
        <div className="text-white `w-[100px]`flex flex-end items-center justify-end">
          <Image src="/charg.png" alt="charg" width={30} height={30} />
        </div>
      </div>
      <div className="w-full h-23.75 mt-5  grid  grid-flow-row grid-cols-5 gap-4 mb-15">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icons={card.icons}
            mark={card.mark}
            description={card.description}
          />
        ))}
        <div className="col-span-2 bg-[url('/comprime.png')] bg-cover bg-center flex items-center justify-center gap-3 px-7 py-11 rounded-md  border-t-none border-l-none border-r-none border-b-2  border-gray-300">
          <Button icons={<Plus />} title={"Nouvelle campagne"} />
        </div>
      </div>
      <div className=" w-full grid  grid-flow-row grid-cols-4 gap-4">
        <div className="bg-gray-200 col-span-3 p-5">12</div>
        <Chart data={[]} />
      </div>
    </div>
  );
};
export default DashboardViews;
