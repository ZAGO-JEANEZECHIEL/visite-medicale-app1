interface Props {
  title: string;
  descriptions: string; // Auscultés
  pourcentage: string; // %
  annonce: string; // Non auscultés
  nombre: string; // %
}

export default function Bilan({
  title,
  descriptions,
  pourcentage,
  annonce,
  nombre,
}: Props) {
  return (
    <div className="w-full flex flex-col bg-white border border-white gap-3 rounded-md p-3 shadow-sm">
      {/* Titre */}
      <h1 className="font-bold text-black">{title}</h1>

      {/* Contenu */}
      <div className="w-full flex flex-col sm:flex-row gap-4 bg-gray-100 px-10 py-2 rounded-md">
        {/* Auscultés */}
        <div className=" w-full bg-gray-100 rounded-md flex items-center justify-center">
          <div className="bg-white border-l-4 border-l-[#2EB166] px-6 py-5 rounded-xl w-full text-center">
            <h3 className="text-sm text-gray-500">{descriptions}</h3>
            <p className="text-xl font-bold text-black">{pourcentage}</p>
          </div>
        </div>

        {/* Non auscultés */}
        <div className="w-full bg-gray-100 rounded-md flex items-center justify-center">
          <div className="bg-white px-10 border-l-4 border-l-[#DCE001] py-5 rounded-xl w-full text-center">
            <h3 className="text-sm text-gray-500">{annonce}</h3>
            <p className="text-xl font-bold text-black">{nombre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
