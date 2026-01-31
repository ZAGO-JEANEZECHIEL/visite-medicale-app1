"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Logintitle from "./logintitle";

type Inputs = {
  Email: string;
  Motdepasse: string;
};

export default function Formulaire() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full  flex flex-col items-center  pt-15 ">
      <div className="w-md h-25  overflow-hidden  relative">
        <Image
          src="/visiteicon.png"
          alt="Picture of the doctor"
          fill
          className="h-15 w-10  object-fit"
        />
      </div>
      <div className="w-full pt-15 ">
        <Logintitle />
      </div>
      <div className="w-full pt-20  flex flex-col items-center justify-center">
        <form
          action=""
          className="flex flex-col gap-5  w-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full ">
            <div className="flex items-center ">
              <div className="w-fit">
                <Image
                  src="/contact.png"
                  alt="Picture of the author"
                  width={10}
                  height={10}
                  className="h-5 w-5 object-cover "
                />
              </div>
              <Input
                type="text"
                placeholder="Email"
                className=" border-none  w-80 "
                {...register("Email")}
              />
            </div>
            <div className="w-full h-0.5 bg-orange-400"></div>
          </div>
          <div className="w-full ">
            <div className="flex items-center ">
              <div className="w-fit">
                <Image
                  src="/password.png"
                  alt="Picture of the author"
                  width={10}
                  height={10}
                  className="h-5 w-5 object-cover "
                />
              </div>
              <Input
                type="text"
                placeholder="Mot de passe"
                className=" border-none  w-80"
                {...register("Motdepasse")}
              />
            </div>
            <div className="w-full h-0.5 bg-orange-400"></div>
          </div>
          <div className="flex items-center justify-center w-full pt-13">
            <Link href="/tableau-de-bord" className="w-full">
              <Button
                type="submit"
                className="bg-orange-400 text-white/70 w-full h-10 rounded-none"
              >
                Se Connecter
              </Button>
            </Link>
          </div>
          <div className=" flex flex-col gap-1 pt-20  w-full items-center justify-center">
            <h2 className="text-xl text-gray-700">Mot de passe oublié ?</h2>
            <div className="w-45 h-0.5  bg-green-500  rounded-1"></div>
          </div>
        </form>
      </div>
      <div className="w-full  flex items-center justify-center pt-31">
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
  );
}
