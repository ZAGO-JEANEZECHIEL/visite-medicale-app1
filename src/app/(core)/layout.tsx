"use client";
import { ChartNoAxesCombined, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* SIDEBAR */}
      <div
        className={`
        fixed z-50 top-0 left-0 h-full bg-white shadow-md transition-transform duration-300
        w-64 flex flex-col justify-between
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
        `}
      >
        {/* TOP */}
        <div className="flex flex-col items-center gap-7 p-4">
          {/* Logo */}
          <div className="w-full flex justify-center">
            <div className="relative w-40 h-12">
              <Image
                src="/visiteicon.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-3 w-full">
            {menuData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-black bg-white hover:bg-orange-400 hover:text-white transition"
              >
                <div className="relative w-5 h-5 text-orange-500">
                  {item.isComponent ? (
                    item.icon
                  ) : (
                    <Image
                      src={item.icon as string}
                      alt="icon"
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <span className="text-sm">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-center p-4">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/phone.png" alt="phone" width={20} height={20} />
            <p className="text-sm font-semibold">Assistance Technique</p>
          </div>

          <div className="w-[150] border mb-4 text-[#009540]"></div>

          <Image src="/cie.png" alt="cie" width={80} height={20} />
        </div>
      </div>

      {/* MAIN */}
      <main className="flex flex-col flex-1">
        {/* HEADER */}
        <div className="w-full bg-white p-3 flex items-center justify-between shadow-sm">
          {/* MENU BUTTON MOBILE */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>

          {/* RIGHT */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="relative w-6 h-6">
              <Image
                src="/setting.png"
                alt="setting"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative w-10 h-10">
              <Image
                src="/avatar.png"
                alt="avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <h5 className="text-sm font-medium text-gray-700">
                MELIANE APKA
              </h5>
              <p className="text-xs text-gray-500">Médecin</p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-[#F2F5F3] flex-1 overflow-y-auto p-3 sm:p-5">
          {children}
        </div>
      </main>
    </div>
  );
}
