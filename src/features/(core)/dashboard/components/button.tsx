interface IButton {
  icons?: React.ReactNode;
  title: string;
}

export default function Button({ icons, title }: IButton) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-white hover:bg-green-700 cursor-pointer">
      <span>{icons}</span>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
