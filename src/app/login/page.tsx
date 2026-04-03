// "use client";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import Link from "next/link";

// export default function Page() {
//   return (
//     <div className="w-full min-h-screen flex flex-col lg:flex-row">
//       {/* Image (cachée sur mobile) */}
//       <div className="hidden lg:block lg:w-1/2 h-screen">
//         <Image
//           src="/doctor.png"
//           alt="Office Doctor"
//           width={500}
//           height={500}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Formulaire */}
//       <div className="w-full lg:w-1/2  sm:px-10 lg:px-20 flex flex-col h-full">
//         {/* Logo */}
//         <div className="flex items-center justify-center mb-13 pt-15">
//           <Image
//             src="/visiteicon.png"
//             alt="logo"
//             width={200}
//             height={200}
//             className="w-32 sm:w-40 lg:w-52 h-auto"
//           />
//         </div>

//         {/* Texte */}
//         <div className="text-center mb-20">
//           <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-3">
//             Bienvenue sur la plateforme de suivi des visites médicales
//           </h3>
//           <p className="text-xs sm:text-sm text-gray-600">
//             Vous devez saisir vos identifiants afin <br />
//             d’accéder aux fiches médicales du personnel
//           </p>
//         </div>

//         {/* Form */}
//         <form className="flex flex-col gap-10 px-30">
//           {/* Email */}
//           <div>
//             <div className="flex items-center gap-2">
//               <Image src="/contact.png" alt="user" height={20} width={20} />
//               <Input
//                 type="text"
//                 placeholder="Email"
//                 className="border-none focus-visible:ring-0"
//               />
//             </div>
//             <div className="border border-orange-400 mt-1"></div>
//           </div>

//           {/* Password */}
//           <div>
//             <div className="flex items-center gap-2">
//               <Image
//                 src="/password.png"
//                 alt="password"
//                 height={20}
//                 width={20}
//               />
//               <Input
//                 type="password"
//                 placeholder="Mot de passe"
//                 className="border-none focus-visible:ring-0"
//               />
//             </div>
//             <div className="border border-orange-400 mt-1"></div>
//           </div>

//           {/* Bouton */}
//           <Link href="/dashboard" className="mt-10 mb-15">
//             <button
//               type="submit"
//               className="w-full bg-orange-400 text-white py-2  hover:bg-orange-500 transition"
//             >
//               Se connecter
//             </button>
//           </Link>
//         </form>
//         {/* Footer */}
//         <div className="flex flex-col items-center h-full mt-6 md:gap-83 gap-46 lg:gap-50">
//           <div className="text-center flex flex-col items-center">
//             <p className="text-xs sm:text-sm">Mot de passe oublié ?</p>
//             <div className="w-30 border border-green-500 mx-auto mt-1"></div>
//           </div>
//           <Image src="/cie.png" alt="logo" width={70} height={30} />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* IMAGE */}
      <div className="hidden lg:block lg:w-1/2 h-screen">
        <Image
          src="/doctor.png"
          alt="Office Doctor"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between px-5 sm:px-10 lg:px-20 py-6">
        {/* TOP CONTENT */}
        <div className="h-full w-full">
          {/* LOGO */}
          <div className="flex justify-center mb-10">
            <Image
              src="/visiteicon.png"
              alt="logo"
              width={200}
              height={200}
              className="w-32 sm:w-40 lg:w-52 h-auto"
            />
          </div>

          {/* TEXTE */}
          <div className="text-center mb-25">
            <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-3">
              Bienvenue sur la plateforme de suivi des visites médicales
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Vous devez saisir vos identifiants afin <br />
              d’accéder aux fiches médicales du personnel
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-8 w-full max-w-md mx-auto">
            {/* EMAIL */}
            <div className="w-full">
              <div className="flex items-center gap-2">
                <Image src="/contact.png" alt="user" width={20} height={20} />
                <Input
                  type="text"
                  placeholder="Email"
                  className="border-none focus-visible:ring-0"
                />
              </div>
              <div className="border border-orange-400 mt-1"></div>
            </div>

            {/* PASSWORD */}
            <div className="w-full">
              <div className="flex items-center gap-2">
                <Image
                  src="/password.png"
                  alt="password"
                  width={20}
                  height={20}
                />
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  className="border-none focus-visible:ring-0"
                />
              </div>
              <div className="border border-orange-400 mt-1"></div>
            </div>

            {/* BUTTON */}
            <Link href="/dashboard">
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500 transition mt-10"
              >
                Se connecter
              </button>
            </Link>
          </form>

          {/* FORGOT PASSWORD */}
          <div className="text-center mt-50">
            <p className="text-xs sm:text-sm">Mot de passe oublié ?</p>
            <div className="w-24 border border-green-500 mx-auto mt-1"></div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-center mt-10">
          <Image src="/cie.png" alt="logo" width={70} height={30} />
        </div>
      </div>
    </div>
  );
}
