"use client";
import { ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const menuData = [
  {
    icon: <ChartNoAxesCombined />,
    title: "Tableau de bord",
    link: "/dashboard",
    isComponent: true,
  },
  {
    icon: "/campagne.png",
    title: "Campagnes",
    link: "/campaign",
    isComponent: false,
  },
  {
    icon: "/emp.png",
    title: "Employées",
    link: "/employees",
    isComponent: false,
  },
  {
    icon: "/tache.png",
    title: "Mes tâche",
    link: "/task",
    isComponent: false,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen *:h-full w-ull">
      {/* side bar */}
      <div className="flex flex-col h-full justify-between">
        <div className="w-50  flex flex-col items-center gap-7">
          <div className="w-full flex items-center justify-center pt-5 ">
            <div className="w-45 h-12  overflow-hidden  relative ">
              <Image
                src="/visiteicon.png"
                alt="Picture of the doctor"
                fill
                className="h-15 w-10  object-fit"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {menuData.map((item, index) => (
              <div key={index} className="w-full  flex ">
                <Link
                  href={item.link}
                  className=" text-black hover:text-white  bg-white hover:bg-orange-400   rounded-lg px-4  py-2  flex items-center gap-2"
                >
                  <div className="w-5 h-5  overflow-hidden  relative text-orange-500  hover:text-white">
                    {item.isComponent ? (
                      item.icon
                    ) : (
                      <Image
                        src={item.icon as string}
                        alt="Picture of the doctor"
                        fill
                        className="h-5 w-5 object-cover"
                      />
                    )}
                  </div>
                  <div className="menu-title">{item.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-50 items-center justify-center ">
          <div className="w-full flex items-center justify-center gap-2 mb-2">
            <Image
              src="/phone.png"
              alt="Picture of the doctor"
              width={20}
              height={20}
            />
            <p className="text-[13px] text-gray-900 font-semibold hover:text-gray-700">
              Assistance Technique
            </p>
          </div>
          <div className="w-37.5 text-green-600 border mb-10"></div>
          <div className="w-full flex items-center justify-center mb-2">
            <Image src="/cie.png" alt="cie" width={80} height={7} />
          </div>
        </div>
      </div>
      <main className="w-full  flex flex-col">
        <div className="w-full h-15 bg-white p-2 flex items-center justify-end">
          <div className="w-6 h-6 mr-5  overflow-hidden  relative">
            <Image
              src="/setting.png"
              alt="Picture of the doctor"
              fill
              className="h-10 w-10  object-fit rounded-full"
            />
          </div>
          <div className="w-10 h-10 mr-5  overflow-hidden  relative">
            <Image
              src="/avatar.png"
              alt="Picture of the doctor"
              fill
              className="h-10 w-10  object-fit rounded-full"
            />
          </div>
          <div className="w-fit mr-5 flex flex-col items-start justify-center">
            <div className="w-fit flex gap-2 items-center">
              <h5 className="text-sm font-md text-gray-700">MELIANE APKA</h5>
              <div className="w-2 h-1 mr-5 font-bold overflow-hidden  relative">
                <Image
                  src="/select.png"
                  alt="Picture of the doctor"
                  fill
                  className="h-10 w-10  object-fit rounded-full"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500">Médecin</p>
          </div>
        </div>
        <div className="bg-[#F2F5F3] flex-1 ">{children}</div>
      </main>
    </div>
  );
}
