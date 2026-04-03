"use client";

import { Eye } from "lucide-react";

const data = [
  {
    id: 1,
    nom: "Camp-01",
    direction: "DSTD ...",
    individu: "13",
    debut: "12 Oct",
    fin: "12 Dec",
    etat: "En cours",
  },
  {
    id: 2,
    nom: "Visite Médicale",
    direction: "DSTD ...",
    individu: "13",
    debut: "12 Oct",
    fin: "12 Dec",
    etat: "À venir",
  },
  {
    id: 3,
    nom: "Bilan Annuel",
    direction: "DSTD ...",
    individu: "13",
    debut: "12 Oct",
    fin: "12 Dec",
    etat: "Terminé",
  },
  {
    id: 4,
    nom: "Camp-02",
    direction: "DSTD ...",
    individu: "13",
    debut: "12 Oct",
    fin: "12 Dec",
    etat: "En cours",
  },
];

// Style des points colorés
const getStatusStyle = (etat: string) => {
  switch (etat) {
    case "En cours":
      return "bg-[#407DF2]";
    case "À venir":
      return "bg-[#009540]";
    case "Terminé":
      return "bg-[#EE7D00]";
    default:
      return "bg-[#407DF2]";
  }
};

export default function Table() {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-md shadow-sm p-2">
      <table className="w-full min-w-200 text-sm text-left">
        {/* HEADER */}
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Nom</th>
            <th className="px-4 py-3">Direction</th>
            <th className="px-4 py-3">Individus</th>
            <th className="px-4 py-3">Date début</th>
            <th className="px-4 py-3">Date fin</th>
            <th className="px-4 py-3">État</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-3 font-medium text-gray-800">
                {item.nom}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {item.direction}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {item.individu}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {item.debut}
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {item.fin}
              </td>

              {/* STATUS - POINT COLORÉ */}
              <td className="px-4 py-3">
                <div className="flex justify-center">
                  <span
                    title={item.etat}
                    className={`w-3 h-3 rounded-full shadow-md ${getStatusStyle(
                      item.etat,
                    )}`}
                  ></span>
                </div>
              </td>

              {/* ACTION */}
              <td className="px-4 py-3">
                <div className="flex justify-center">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Eye size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
