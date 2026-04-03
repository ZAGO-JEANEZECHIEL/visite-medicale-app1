export default function LegendDaTable() {
  return (
    <div className="flex flex-wrap items-center gap-4  w-fit">
      {/* En cours */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#407DF2]"></span>
        <p className="text-sm text-gray-700">En cours</p>
      </div>

      {/* À venir */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#EE7D00]"></span>
        <p className="text-sm text-gray-700">À venir</p>
      </div>

      {/* Terminé */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#009540]"></span>
        <p className="text-sm text-gray-700">Terminée</p>
      </div>
    </div>
  );
}
