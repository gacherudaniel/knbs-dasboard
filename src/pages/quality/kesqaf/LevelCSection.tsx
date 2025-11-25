import { PrincipleCard } from "./PrincipleCard";

export function LevelCSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        Level C: Managing Statistical Processes
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          Sound methodology underpins quality statistics. This requires adequate
          tools, procedures, and expertise to organize, assemble, process, and
          disseminate data. These principles address methodological soundness,
          cost-effectiveness, appropriate procedures, and minimizing respondent
          burden.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={10}
          title="Assuring Methodological Soundness"
          requirements={[
            "Statistics based on appropriate international/national standards",
            "Sound concepts, definitions, and classifications",
            "Best current knowledge and professional expertise applied",
            "Procedures for evaluating and improving methodology",
          ]}
        />

        <PrincipleCard
          number={11}
          title="Assuring Cost-effectiveness"
          requirements={[
            "Value of statistics balanced against cost of production",
            "Optimal use of available data sources",
            "Best combinations of sources and methods",
            "Administrative data used when appropriate",
            "Periodic review of program efficiency",
          ]}
        />

        <PrincipleCard
          number={12}
          title="Assuring Appropriate Statistical Procedures"
          requirements={[
            "Sound procedures for data collection, processing, and storage",
            "Regular assessment and documentation of processes",
            "Quality controls at data collection, entry, and other stages",
            "Editing procedures to detect and correct errors",
            "Revision policies, procedures, and practices documented",
          ]}
        />

        <PrincipleCard
          number={13}
          title="Managing the Burden on Respondents"
          requirements={[
            "Respondent burden monitored and limited",
            "Data collected only when needed",
            "Sharing information among producers to minimize duplication",
            "Administrative data used when possible",
            "Electronic reporting encouraged when appropriate",
          ]}
        />
      </div>
    </div>
  );
}
