interface ICard {
  icons?: React.ReactNode;
  mark?: number;
  description?: string;
}

const Card = ({ icons, description, mark }: ICard) => {
  return (
    <div className="flex items-cenetr gap-3 w-[250px] px-4 py-10 rounded-md bg-white  border-t-none border-l-none border-r-none border-b-2 border-b-green-600 rounded-md shadow-md">
      <div className="card-icon  flex items-center">{icons}</div>
      <div className=" flex flex-col items-center">
        <div className="card-mark flex flex-start w-full text-xl font-bold">
          {mark}
        </div>
        <div className="card-description text-[13px] text-gray-500">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
