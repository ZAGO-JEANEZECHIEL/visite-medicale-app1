import { JSX } from "react";

export interface LegendItem {
  label: string;
  color: string; // Tailwind class e.g. bg-green-500
}

export interface LegendProps {
  title?: string;
  items?: LegendItem[];
}

/**
 * Legend component with three colors and theme support (light/dark)
 */
export default function Legend({
  items = [
    { label: "Employée ciblé", color: " bg-yellow-400" },
    { label: "Employée non ciblé", color: "bg-green-500" },
    { label: "Employée non concernée", color: "bg-orange-400" },
  ],
}: LegendProps): JSX.Element {
  return (
    <div className="space-y-2 pl-10">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${item.color}`} />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
