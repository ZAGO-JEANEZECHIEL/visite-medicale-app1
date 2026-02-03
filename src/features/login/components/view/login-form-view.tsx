import Image from "next/image";

import Formulaire from "../formulaire";

export default function LoginFormView() {
  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-2 w-full h-screen  ">
      <div className="w-full h-80vh bg-amber-700 overflow-hidden  relative">
        <Image
          src="/doctor.png"
          alt="Picture of the doctor"
          fill
          className="h-full w-full object-fit "
        />
      </div>
      <div className=" h-screen w-full  flex items-center justify-center">
        <Formulaire />
      </div>
    </div>
  );
}
