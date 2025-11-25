import { useState } from "react";
import {
  BookOpen,
  ChevronRight,
  FileText,
  Settings,
  Building2,
  Repeat,
  BarChart3,
  Rocket,
  Target,
} from "lucide-react";
import { IntroSection } from "./kesqaf/IntroSection";
import { ContextSection } from "./kesqaf/ContextSection";
import { SystemSection } from "./kesqaf/SystemSection";
import { LevelASection } from "./kesqaf/LevelASection";
import { LevelBSection } from "./kesqaf/LevelBSection";
import { LevelCSection } from "./kesqaf/LevelCSection";
import { LevelDSection } from "./kesqaf/LevelDSection";
import { ImplementationSection } from "./kesqaf/ImplementationSection";

export function Kesqaf() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: "Introduction & Key Terms", icon: FileText },
    { id: "context", title: "1. Quality Context and Concepts", icon: Target },
    { id: "system", title: "2. Statistical System in Kenya", icon: Building2 },
    { id: "level-a", title: "3A. Managing Statistical System", icon: Settings },
    {
      id: "level-b",
      title: "3B. Managing Institutional Environment",
      icon: Building2,
    },
    {
      id: "level-c",
      title: "3C. Managing Statistical Processes",
      icon: Repeat,
    },
    {
      id: "level-d",
      title: "3D. Managing Statistical Outputs",
      icon: BarChart3,
    },
    { id: "implementation", title: "4. Implementation", icon: Rocket },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "context":
        return <ContextSection />;
      case "system":
        return <SystemSection />;
      case "level-a":
        return <LevelASection />;
      case "level-b":
        return <LevelBSection />;
      case "level-c":
        return <LevelCSection />;
      case "level-d":
        return <LevelDSection />;
      case "implementation":
        return <ImplementationSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Sidebar Navigation */}
      <div className="col-span-3">
        <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b">
            <BookOpen className="text-knbs-600" size={24} />
            <div>
              <h3 className="font-bold text-knbs-600 text-sm">KeSQAF</h3>
              <p className="text-xs text-gray-600">Quality Framework</p>
            </div>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ${
                    activeSection === section.id
                      ? "bg-knbs-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon size={16} className="flex-shrink-0" />
                  <span className="flex-1 text-xs leading-tight">
                    {section.title}
                  </span>
                  <ChevronRight size={14} className="flex-shrink-0" />
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="col-span-9">
        <div className="bg-white rounded-lg shadow-sm border">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
