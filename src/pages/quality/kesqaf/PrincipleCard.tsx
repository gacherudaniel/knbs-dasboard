import { CheckCircle2 } from "lucide-react";

interface PrincipleCardProps {
  number: number;
  title: string;
  requirements: string[];
}

export function PrincipleCard({
  number,
  title,
  requirements,
}: PrincipleCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
          {number}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
        </div>
      </div>
      <div className="ml-11">
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Requirements:
        </h4>
        <ul className="space-y-2">
          {requirements.map((req, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-600 flex items-start gap-2"
            >
              <CheckCircle2
                size={16}
                className="text-knbs-500 mt-0.5 flex-shrink-0"
              />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
