import { useState } from "react";
import { Breadcrumb } from "./layout/Breadcrumb";
import { TopHeader } from "./layout/TopHeader";
import { MainHeader } from "./layout/MainHeader";
import { Footer } from "./layout/Footer";
import { MainNavigation } from "./layout/MainNavigation";
import { CodeOfPractice } from "../pages/quality/CodeOfPractice";
import { Kesqaf } from "../pages/quality/Kesqaf";
import { Kspm } from "../pages/quality/Kspm";
import { QualityReports } from "../pages/metadata/QualityReports";
import { ClassificationNational } from "../pages/metadata/ClassificationNational";
import { ClassificationInternational } from "../pages/metadata/ClassificationInternational";
import { Codelists } from "../pages/metadata/Codelists";
import { Dictionary } from "../pages/metadata/Dictionary";

export default function Dashboard() {
  const [currentPath, setCurrentPath] = useState("/metadata/quality-reports");

  // Shrink navigation for quality reports AND dictionary
  const isCompactView =
    currentPath === "/metadata/quality-reports" ||
    currentPath === "/metadata/dictionary" ||
    currentPath === "/quality/kesqaf" ||
    currentPath === "/quality/code-of-practice";

  const renderContent = () => {
    switch (currentPath) {
      case "/quality/code-of-practice":
        return <CodeOfPractice />;
      case "/quality/kesqaf":
        return <Kesqaf />;
      case "/quality/kspm":
        return <Kspm />;
      case "/metadata/quality-reports":
        return <QualityReports />;
      case "/metadata/classification/national":
        return <ClassificationNational />;
      case "/metadata/classification/international":
        return <ClassificationInternational />;
      case "/metadata/codelists":
        return <Codelists />;
      case "/metadata/dictionary":
        return <Dictionary />;
      default:
        return <QualityReports />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopHeader />

      <MainHeader />
      <Breadcrumb />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className={isCompactView ? "col-span-2" : "col-span-3"}>
            <MainNavigation
              onNavigate={setCurrentPath}
              currentPath={currentPath}
              isCompact={isCompactView}
            />
          </div>

          <div className={isCompactView ? "col-span-9" : "col-span-9"}>
            {renderContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
