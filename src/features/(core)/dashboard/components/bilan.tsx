interface Props {
  title: string;
  descriptions: string;
  pourcentage: string;
  annonce: string;
  nombre: string;
}

export default function Bilan({
  title,
  descriptions,
  pourcentage,
  // annonce,
  // nombre,
}: Props) {
  return (
    <div className="w-full flex flex-col bg-white  border border-white  gap-2 rounded-md p-1">
      <h1 className="font-bold text-black">{title}</h1>
      <div className="w-full px-1 flex items-center justify-center gap-10 rounded-md">
        <div className="w-full px-25 h-25 bg-gray-100 rounded-md  flex items-center justify-center gap-5">
          <div className="bg-white border-l-green-500 px-15 py-4.5 rounded-xl border-l-4 ">
            <h3>{descriptions}</h3>
            <p>{pourcentage}</p>
          </div>
          <div className="bg-white border-l-yellow-500 px-15 py-4.5 rounded-xl border-l-4 ">
            <h3>{descriptions}</h3>
            <p>{pourcentage}</p>
          </div>
        </div>
        {/* <div className="w-1/2 h-40 bg-gray-100 rounded-md border-l-[#DCE001]flex items-center justify-center flex-col ">
          <h3>{annonce}</h3>
          <p>{nombre}</p>
        </div> */}
      </div>
    </div>
  );
}
