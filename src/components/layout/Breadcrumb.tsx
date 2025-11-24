import { Home, ChevronRight } from "lucide-react";

export function Breadcrumb() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Home size={14} className="text-knbs-500" />
          <ChevronRight size={14} />
          <a href="#" className="text-knbs-600 hover:underline">
            Home
          </a>
          <ChevronRight size={14} />
          <span>Quality Reports</span>
        </div>
      </div>
    </div>
  );
}
