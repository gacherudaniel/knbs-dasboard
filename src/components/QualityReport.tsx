import { useState } from "react";

import { Breadcrumb } from "./layout/Breadcrumb";
import { Sidebar } from "./layout/Sidebar";
import { ReportTitleCard } from "./common/ReportTitleCard";
import { GeneralInfo } from "./sections/GeneralInfo";
import { Relevance } from "./sections/Relevance";
import { MethodologicalSoundness } from "./sections/MethodologicalSoundness";
import { Accuracy } from "./sections/Accuracy";
import { Timeliness } from "./sections/Timeliness";
import { Accessibility } from "./sections/Accessibility";
import { Coherence } from "./sections/Coherence";
import { References } from "./sections/References";

export type SectionKey =
  | "general"
  | "quality"
  | "relevance"
  | "methodology"
  | "accuracy"
  | "timeliness"
  | "accessibility"
  | "coherence"
  | "references";

export default function KNBSQualityReport() {
  const [selectedProductId, setSelectedProductId] =
    useState("poverty-inequality");
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    general: true,
    quality: true,
    relevance: false,
    methodology: false,
    accuracy: false,
    timeliness: false,
    accessibility: false,
    coherence: false,
    references: false,
  });

  const toggleSection = (id: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Breadcrumb />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar
            expandedSections={expandedSections}
            onToggle={toggleSection}
          />

          <div className="col-span-9">
            <ReportTitleCard onProductChange={handleProductChange} />

            {selectedProductId === "poverty-inequality" ? (
              <>
                <GeneralInfo
                  isOpen={expandedSections.general}
                  onToggle={toggleSection}
                />
                <Relevance
                  isOpen={expandedSections.relevance}
                  onToggle={toggleSection}
                />
                <MethodologicalSoundness
                  isOpen={expandedSections.methodology}
                  onToggle={toggleSection}
                />
                <Accuracy
                  isOpen={expandedSections.accuracy}
                  onToggle={toggleSection}
                />
                <Timeliness
                  isOpen={expandedSections.timeliness}
                  onToggle={toggleSection}
                />
                <Accessibility
                  isOpen={expandedSections.accessibility}
                  onToggle={toggleSection}
                />
                <Coherence
                  isOpen={expandedSections.coherence}
                  onToggle={toggleSection}
                />
                <References
                  isOpen={expandedSections.references}
                  onToggle={toggleSection}
                />
              </>
            ) : selectedProductId === "cpi" ? (
              <>
                {/* CPI Quality Report Content */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-bold text-knbs-600 mb-4">
                    CPI Consumer Price Index - Quality Report
                  </h2>
                  <p className="text-gray-700 mb-4">
                    This is the quality report for the Consumer Price Index
                    (CPI).
                  </p>

                  <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                    <h3 className="font-semibold text-knbs-700 mb-2">
                      Overview
                    </h3>
                    <p className="text-sm text-gray-700">
                      The Consumer Price Index measures the average change over
                      time in the prices paid by urban consumers for a market
                      basket of consumer goods and services.
                    </p>
                  </div>
                </div>

                {/* You can add CPI-specific sections here */}
                <GeneralInfo
                  isOpen={expandedSections.general}
                  onToggle={toggleSection}
                />
                <Relevance
                  isOpen={expandedSections.relevance}
                  onToggle={toggleSection}
                />
                {/* Add more CPI-specific sections as needed */}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
