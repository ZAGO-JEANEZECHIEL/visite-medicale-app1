interface IMenu {
  icon: React.ReactNode;

  title: string;
}

export default function Menu({ icon, title }: IMenu) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="menu-icon">{icon}</div>
        <div className="menu-title">{title}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="menu-icon">{icon}</div>
        <div className="menu-title">{title}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="menu-icon">{icon}</div>
        <div className="menu-title">{title}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="menu-icon">{icon}</div>
        <div className="menu-title">{title}</div>
      </div>
    </div>
  );
}
