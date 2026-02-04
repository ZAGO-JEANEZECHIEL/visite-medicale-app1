"use client";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen *:h-full ">
      {/* side bar */}

      <aside className="w-60  flex flex-col items-center gap-7  ">
        <div className="w-full flex items-center justify-center pt-5 ">
          <div className="w-55 h-17  overflow-hidden  relative ">
            <Image
              src="/visiteicon.png"
              alt="Picture of the doctor"
              fill
              className="h-15 w-10  object-fit"
            />
          </div>
        </div>
     <div className="flex flex-col w-full h-full gap-10 px-5">
        <div className=" h-0.5 flex ">
          <Link
            href="/tableau-de-bord"
            className=" text-black hover:text-white  bg-white hover:bg-orange-500   rounded-lg px-4  py-5  flex items-center gap-3"
          >
            
              <Image
                src="/dashboard.png"
                alt="Picture of the author"
                width={10}
                height={10}
                className="h-5 w-5 object-cover bg-orange-500 "
              />
          
            Tableau de bord 
          </Link>
        </div>
        <div className=" h-0.5 flex ">
          <Link
            href="/campagne"
            className=" text-black hover:text-white  bg-white hover:bg-orange-500  rounded-lg  px-4  py-5 flex items-center  gap-3"
          >
            <Image
              src="/campagne.png"
              alt="Picture of the author"
              width={10}
              height={10}
              className="h-5 w-5 object-cover  text-white"
            />
            Campagnes
          </Link>
        </div>
        <div className=" h-0.5 flex ">
          <Link
            href="/employees"
            className="  text-black hover:text-white  bg-white hover:bg-orange-500    rounded-lg  px-4  py-5  flex items-center  gap-3"
          >
            <Image
              src="/emp.png"
              alt="Picture of the author"
              width={10}
              height={10}
              className="h-5 w-5 object-cover  text-white"
            />
            Employées
          </Link>
        </div>
        <div className=" h-0.5 flex ">
          <Link
            href="/tache"
            className=" text-black hover:text-white    bg-white hover:bg-orange-500   rounded-lg  px-4  py-5  flex items-center  gap-3"
          >
            <Image
              src="/tache.png"
              alt="Picture of the author"
              width={10}
              height={10}
              className="h-5 w-5 object-cover  text-white"
            />
            Mes tâche
          </Link>
        </div>
        </div>
        <div className="w-full flex flex-col gap-5 pb-2">
          <div className="w-full flex flex-col gap-2">
          <div className="w-full flex items-center justify-center gap-3 px-5">
            <div className="w-5 h-6  overflow-hidden  relative">
              <Image
                src="/phone.png"
                alt="Picture of the doctor"
                fill
                className="h-7 w-5 object-fit"
              />
            </div>
            <h3 className="text-sm w-full ">Assistance technique</h3>
          </div>
          <div className="w-full pl-8">
          <div className="w-35 rounded-1 border-[1] text-green-500"></div>
          </div>
          </div>
         <div className="w-full  flex items-center justify-center ">
            <div className="w-20 h-8  overflow-hidden  relative">
              <Image
                src="/cie.png"
                alt="Picture of the doctor"
                fill
                className="h-10 w-10  object-fit"
              />
            </div>
          </div>
          </div>
      </aside>
      {/* side bar */}
       
      <main className="w-full h-screen flex flex-col">
       <div className="w-full h-15 bg-white-100 flex items-center justify-end">
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
        <div className="bg-gray-100 flex-1 p-7">
          {/* <div className="w-full h-15 bg-green-700 rounded-md">gnjgnlk</div> */}

          {children}
        </div>
      </main>
    </div>
  );
}
