import { Button as ButtonUI } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Plus, Search } from "lucide-react";
import Image from "next/image";
import Bilan from "../components/bilan";
import Button from "../components/button";
import Card from "../components/card";
import { Chart } from "../components/chart";
import LegendDaTable from "../components/legend-data-table";
import Table from "../components/table";

const cardData = [
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

const Bilandata = [
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
    pourcentage: "60%",
    annonce: "Non auscultés",
    nombre: "40%",
  },
];

const DashboardViews = () => {
  return (
    <div className="w-full flex flex-col gap-5 p-3 sm:p-5 lg:p-8">
      {/* HEADER */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#005D28] rounded-md px-4 py-3">
        {/* Select */}
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-auto appearance-none text-white text-sm bg-green-800 border border-green-900 rounded-md py-2 px-4 pr-8 shadow-md focus:outline-none">
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>

          <div className="text-white absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown size={20} />
          </div>
        </div>

        {/* Icon */}
        <div className="w-full sm:w-auto flex justify-end">
          <Image src="/charg.png" alt="charg" width={30} height={30} />
        </div>
      </div>

      {/* CARDS */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icons={card.icons}
            mark={card.mark}
            description={card.description}
          />
        ))}

        {/* Bouton */}
        <div className="sm:col-span-2 lg:col-span-2 bg-[url('/comprime.png')] bg-cover bg-center flex items-center justify-center px-5 py-8 sm:py-10 rounded-md border-b-2 border-gray-300">
          <Button icons={<Plus />} title={"Nouvelle campagne"} />
        </div>
      </div>

      {/* CHART + CONTENU */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        {/* Main content */}
        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row gap-4">
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

          <div className="w-full bg-white mt-4  border rounded-xl flex flex-col gap-5  text-white">
            <div className="text-black w-full bg-white flex items-center justify-between rounded-xl pl-2">
              <div className="text-black flex flex-col  gap-2">
                <h1 className="text-black font-bold">Dernières campagnes</h1>
                <div className="flex w-full items-center gap-7">
                  <p className="text-[13px] font-semibold">Etat:</p>
                  <LegendDaTable />
                </div>
              </div>
              <div className="text-black items-center flex gap-3 pr-8">
                <div className="flex items-center gap-7 relative border border-green-500 rounded-md px-1 ">
                  <Input
                    className=" border-none focus:ring-0 focus:outline-none"
                    placeholder="Recherche une campgnae "
                  />
                  <div className="rounded-md border bg-[#2EB166] text-white p-1">
                    <Search size={22} />
                  </div>
                </div>
                <ButtonUI
                  variant="outline"
                  size="sm"
                  className="border border-gray-300 bg-gray-50 p-5 text-gray-500"
                >
                  Voir tout
                </ButtonUI>
              </div>
            </div>
            <div>
              <Table />
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-62.5 sm:h-75 lg:h-full">
          <Chart data={[]} />
        </div>
      </div>
    </div>
  );
};

export default DashboardViews;
