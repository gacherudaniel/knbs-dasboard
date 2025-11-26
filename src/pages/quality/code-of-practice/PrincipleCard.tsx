import { CheckCircle2 } from "lucide-react";

interface PrincipleCardProps {
  number: number;
  title: string;
  description?: string;
  commitments: string[];
}

export function PrincipleCard({
  number,
  title,
  description,
  commitments,
}: PrincipleCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-knbs-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-gray-700 mb-4">{description}</p>
          )}
        </div>
      </div>

      <div className="ml-14">
        <h4 className="text-sm font-semibold text-knbs-600 mb-3">
          We commit to:
        </h4>
        <ul className="space-y-2">
          {commitments.map((commitment, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <span className="text-gray-700">{commitment}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
