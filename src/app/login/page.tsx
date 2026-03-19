"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2">
        <Image
          src="/doctor.png"
          alt="Office Doctor"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="w-1/2 px-40">
        <div className="pt-15 flex item-center justify-center">
          <Image
            src="/visiteicon.png"
            alt="logo"
            width={300}
            height={300}
            className="overflow-hidden"
          />
        </div>
        <div className="w-full pb-10">
          <h3 className=" w-full flex items-center justify-center pt-10 font-semibold mb-7">
            Bienvenue sur la plateforme de suivi des visites médicales
          </h3>
          <p className="w-full text-center text-[12px]">
            vous devez saisir vos identifiants afin <br /> d’accéder aux fiches
            médicales du personnel
          </p>
        </div>
        <form action="" className="pb-10">
          {/* email */}
          <div className="w-full">
            <div className="w-full flex items-center  mt-5">
              <Image src="/contact.png" alt="user" height={20} width={20} />
              <Input type="text" placeholder="Email" className=" border-none" />
            </div>
            <div className="w-full border text-orange-400"></div>
          </div>
          {/* password */}
          <div className="w-full pb-7">
            <div className="w-full flex items-center mt-10">
              <Image src="/password.png" alt="user" height={20} width={20} />
              <Input
                type="text"
                placeholder="Mot de passe"
                className=" border-none"
              />
            </div>
            <div className="w-full border text-orange-400 mb-5"></div>
          </div>
          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2  mt-5 hover:bg-orange-500 transition-colors"
            >
              Se connecter
            </button>
          </Link>
        </form>
        <div className="w-full flex flex-col items-center justify-center mt-25 mb-25">
          <p className="w-full text-center text-[12px] ">
            Mot de passe oublié ?
          </p>
          <div className="w-[120px] border text-green-500"></div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image src="/cie.png" alt="logo" width={70} height={30} />
        </div>
      </div>
    </div>
  );
}
