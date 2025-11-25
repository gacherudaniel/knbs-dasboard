import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  NAVIGATION_STRUCTURE,
  type NavigationItem,
} from "../../types/navigation";

interface MainNavigationProps {
  onNavigate: (path: string) => void;
  currentPath?: string;
  isCompact?: boolean;
}

export function MainNavigation({
  onNavigate,
  currentPath,
  isCompact = false,
}: MainNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["quality", "metadata"])
  );

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderNavItem = (item: NavigationItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isActive = currentPath === item.path;

    return (
      <div
        key={item.id}
        className={`${level > 0 ? (isCompact ? "ml-2" : "ml-4") : ""}`}
      >
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            } else if (item.path) {
              onNavigate(item.path);
            }
          }}
          className={`w-full flex items-center justify-between transition-all duration-200 rounded-lg ${
            isCompact ? "px-2 py-1.5 text-xs" : "px-4 py-2.5 text-sm"
          } ${
            isActive
              ? "bg-knbs-500 text-white font-medium"
              : level === 0
              ? "bg-knbs-50 text-knbs-700 hover:bg-knbs-100 font-medium"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className={isCompact ? "leading-tight" : ""}>{item.label}</span>
          {hasChildren && (
            <span className={isCompact ? "ml-1" : "ml-2"}>
              {isExpanded ? (
                <ChevronDown size={isCompact ? 14 : 16} />
              ) : (
                <ChevronRight size={isCompact ? 14 : 16} />
              )}
            </span>
          )}
        </button>

        {hasChildren && isExpanded && (
          <div className={isCompact ? "mt-0.5 space-y-0.5" : "mt-1 space-y-1"}>
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className={`bg-white rounded-lg shadow-sm border sticky top-4 transition-all duration-200 ${
        isCompact ? "p-2" : "p-4"
      }`}
    >
      <h2
        className={`font-bold text-knbs-600 transition-all duration-200 ${
          isCompact ? "text-sm mb-2" : "text-lg mb-4"
        }`}
      >
        Statistical Quality & Metadata
      </h2>
      <div className={isCompact ? "space-y-1" : "space-y-2"}>
        {NAVIGATION_STRUCTURE.map((item) => renderNavItem(item))}
      </div>
    </nav>
  );
}
