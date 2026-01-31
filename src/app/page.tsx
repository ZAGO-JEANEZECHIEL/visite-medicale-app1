import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <Link href="/connexion">
      <div className="w-full h-screen   overflow-hidden  relative">
        <Image
          src="/aigle.png"
          alt="Picture of the doctor"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}
