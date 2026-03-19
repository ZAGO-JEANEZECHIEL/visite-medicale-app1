// import Link from "next/dist/client/link";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-7 h-screen w-full p-5">
      <div className="w-full h-12.5 bg-blue-100 grid  grid-flow-row grid-cols-5 gap-4">
        <div className="bg-orange-200 p-5 ">one</div>
        <div className="bg-blue-500 p-5  ">two</div>
        <div className="bg-amber-500  p-5">three</div>
        <div className="bg-amber-950 p-5 col-span-2 ">four</div>
      </div>
      <div className="grid grid-cols-6 gap-5 flex-1">
        <div className="p-5 col-span-4 bg-green-600 h-full w-full">1</div>
        <div className="col-span-2 bg-orange-600 p-5 h-full w-full">2</div>
      </div>
    </div>
  );
}
