import { NativeSelect } from "@/components/ui/native-select";
import Image from "next/image";


export default function Page() {
  return (
    <div className="text-2xl">
  
      <div className="w-full h-[70px] bg-[#005D28]  rounded-xl flex justify-between  items-center ">
      <NativeSelect className="ml-5 text-white">
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </NativeSelect>
      <div className="w-10 h-10 mr-5  overflow-hidden  relative">
                <Image
                  src="/charg.png"
                  alt="Picture of the doctor"
                  fill
                  className="h-10 w-10  object-fit rounded-full"
                />
                </div>
      </div>
      <div className="flex flex-col  mt-5 w-full h-full ">
     <div className="bg-gray-200  h-[115px]   flex "> 
<div className="  bg-white border-b-2 border-green-600 rounded-xl flex  items-center  ml-5 px-5 ">
 <div className="w-11 h-10 mr-5  overflow-hidden  relative">
                <Image
                  src="/heart.png"
                  alt="Picture of the doctor"
                  fill
                  className="h-8 w-8  object-fit rounded-full"
                />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-2xl">22</h1>
                  <p className="text-sm text-gray-400">Campagnes des tâches</p>
                </div>
  </div>
<div className=" bg-white border-b-2 border-green-600 rounded-xl flex items-center ml-5 px-5 ">
  <div className="w-11 h-10 mr-5  overflow-hidden  relative">
                <Image
                  src="/time.png"
                  alt="Picture of the doctor"
                  fill
                  className="h-8 w-8  object-fit rounded-full"
                />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-2xl">17</h1>
                  <p className="text-sm text-gray-400">Campagnes terminées</p>
                </div>
                </div>
<div className=" bg-white border-b-2 border-green-600 rounded-xl flex items-center ml-5 px-5 ">
<div className="w-11 h-10 mr-5  overflow-hidden  relative">
                <Image
                  src="/agenda.png"
                  alt="Picture of the doctor"
                  fill
                  className="h-7 w-7  object-fit rounded-full"
                />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-2xl">5</h1>
                  <p className="text-sm text-gray-400">Campagnes à vénir</p>
                </div>
  </div>
  <div className="ml-5 flex-1 ">
   <div className="flex1 h-full  overflow-hidden  relative">
          <Image
            src="/comprime.png"
            alt="Picture of the doctor"
            fill
            className="h-15 w-10  object-fit"
          />
        </div>
  </div>
  </div> 
        {/* <div className="bg-gray-300  flex gap-5 h-[460px] w-full ">
          <div className="flex flex-col grid-cols-2 gap-3">
            <div className="bg-orange-300 w- h-[110px] ">one</div>
            <div className="bg-green-300 w-4xl h-[350px]">two</div>
          </div>
          <div className="bg-blue-400 w-full rounded-md">autre</div>
        </div> */}
        </div>
    </div>
  );
}
