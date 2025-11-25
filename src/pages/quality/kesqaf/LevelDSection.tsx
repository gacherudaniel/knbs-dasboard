import { PrincipleCard } from "./PrincipleCard";

export function LevelDSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        Level D: Managing Statistical Outputs
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          The characteristics of the final statistical products. These
          principles address relevance, accuracy and reliability, timeliness and
          punctuality, accessibility and clarity, coherence and comparability,
          and management of metadata.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={14}
          title="Assuring Relevance"
          requirements={[
            "Processes to identify users and their needs",
            "Consultation with users in development and discontinuation",
            "Priority setting mechanisms in place",
            "User satisfaction measured regularly",
          ]}
        />

        <PrincipleCard
          number={15}
          title="Assuring Accuracy and Reliability"
          requirements={[
            "Source data, data processing, and outputs regularly assessed",
            "Coverage, sampling, and non-sampling errors measured and documented",
            "Revisions tracked and analyzed for patterns",
            "Studies conducted to assess statistical data",
          ]}
        />

        <PrincipleCard
          number={16}
          title="Assuring Timeliness and Punctuality"
          requirements={[
            "Timeliness meets internationally accepted standards",
            "Balance between accuracy and timeliness",
            "Periodicity determined by users' requirements",
            "Preliminary statistics released when appropriate",
            "Statistics disseminated according to advance release calendar",
            "Reasons for delays explained and new dates announced",
          ]}
        />

        <PrincipleCard
          number={17}
          title="Assuring Accessibility and Clarity"
          requirements={[
            "Statistics presented clearly and understandably",
            "Suitable dissemination formats and media",
            "Additional assistance available to users",
            "Catalogs of statistical products maintained",
            "Metadata presented and updated regularly",
            "Microdata access available under appropriate conditions",
          ]}
        />

        <PrincipleCard
          number={18}
          title="Assuring Coherence and Comparability"
          requirements={[
            "Statistics internally consistent",
            "Coherence with related statistics from same and other sources",
            "Reasons for inconsistencies explained",
            "Statistics comparable over time",
            "Statistics follow internationally accepted standards",
            "Differences from international standards explained",
          ]}
        />

        <PrincipleCard
          number={19}
          title="Managing Metadata"
          requirements={[
            "Complete, up-to-date metadata systems",
            "Metadata follow international standards",
            "Metadata available to users",
            "Regular metadata updates and quality checks",
          ]}
        />
      </div>
    </div>
  );
}
