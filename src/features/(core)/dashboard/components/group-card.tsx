interface GroupCardProps {
  title: string;
  description: string;
  pourcentage: string;
  tem: string;
  annonce: string;
  nombre: string;
}

const GroupCard = ({
  title,
  description,
  pourcentage,
  annonce,
  nombre,
}: GroupCardProps) => {
  return (
    <div className=" flex mr-3 mb-5 px-1  border border-gray-200 rounded-xl w-[470px] h-[120px] shadow-sm">
      <div className="w-full flex flex-col">
        <h3 className="text-sm font-bold text-gray-800 mb-1">{title}</h3>
        <div className="w-full flex px-2 py-3 text-center bg-gray-200 rounded-md ">
          <div className="w-full  py-4 bg-white flex flex-col  gap-3 rounded-md mr-5">
            <p className="text-sm">{description}</p>
            <p className="text-sm font-bold">{pourcentage}</p>
          </div>
          <div className=" w-full  flex flex-col gap-3 bg-white rounded-md ">
            <p className="text-sm ">{annonce}</p>
            <p className="text-sm font-bold">{nombre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GroupCard;
