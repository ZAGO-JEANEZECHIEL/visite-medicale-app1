import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen *:h-full">
      {/* side bar */}

      <nav className="w-70   flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center pt-5">
          <div className="w-55 h-17  overflow-hidden  relative ">
            <Image
              src="/visiteicon.png"
              alt="Picture of the doctor"
              fill
              className="h-15 w-10  object-fit"
            />
          </div>
        </div>

        <div className=" h-0.5 flex items-center justify-center ">
          <Link
            href="/tableau-de-bord"
            className=" text-black hover:text-white  bg-white hover:bg-orange-500   rounded-lg  py-4 px-12 flex items-center  gap-3"
          >
            <div className="w-fit bg-amber-500">
              <Image
                src="/dashboard.png"
                alt="Picture of the author"
                width={10}
                height={10}
                className="h-5 w-5 object-cover "
              />
            </div>
            Dashboard
          </Link>
        </div>
        <div className=" h-0.5 flex items-center justify-center">
          <Link
            href="/campagne"
            className=" text-black hover:text-white  bg-white hover:bg-orange-500    rounded-lg px-12 py-4 flex items-center  gap-3"
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
        <div className=" h-0.5 flex items-center justify-center ">
          <Link
            href="/employees"
            className="  text-black hover:text-white  bg-white hover:bg-orange-500    rounded-lg px-12 py-4 flex items-center  gap-3"
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
        <div className=" h-0.5 flex items-center justify-center ">
          <Link
            href="/tache"
            className=" text-black hover:text-white    bg-white hover:bg-orange-500   rounded-lg px-13 py-4 flex items-center  gap-3"
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
      </nav>
      {/* side bar */}
      <main className="w-full h-screen flex flex-col">
        <div className="w-full bg-white h-17">header</div>
        <div className="bg-gray-100 flex-1 p-7">
          {/* <div className="w-full h-15 bg-green-700 rounded-md">gnjgnlk</div> */}

          {children}
        </div>
      </main>
    </div>
  );
}
