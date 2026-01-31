import Image from "next/image";
import Logintitle from "./logintitle";
import Formulaire from "./formulaire";

export default function LoginForm() {
  return (
    <div className="h-screen   ">
      <div className="w-full flex items-center justify-center pt-10">
        <Image
          src="/visiteicon.png"
          alt="Picture of the author"
          width={500}
          height={500}
          className="h-15 w-15 object-cover "
        />
      </div>
      <div className="w-full items-center justify-center pt-7">
        <Logintitle />
        <Formulaire />
      </div>
    </div>
  );
}
