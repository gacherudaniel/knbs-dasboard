import { PrincipleCard } from "./PrincipleCard";

export function LevelBSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        Level B: Managing the Institutional Environment
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          The institutional and organizational factors that influence the
          effectiveness and credibility of the NSO as producers of official
          statistics. These principles address professional independence,
          impartiality, objectivity, transparency, confidentiality, and adequate
          resources.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={4}
          title="Assuring Professional Independence"
          requirements={[
            "Statistical law guarantees professional independence",
            "Independence in statistical program development",
            "Independence in selecting methods, standards, and procedures",
            "Independence in content, timing, and form of publication",
            "Freedom from political or other interference",
            "Independence protected in case of organizational changes",
          ]}
        />

        <PrincipleCard
          number={5}
          title="Assuring Impartiality and Objectivity"
          requirements={[
            "Statistics developed on scientific basis",
            "Equal treatment of all users",
            "Advance release calendar published",
            "Advance access to statistics is clearly explained",
            "Procedures to eliminate political interference",
            "Public commitment to impartial and objective statistics",
          ]}
        />

        <PrincipleCard
          number={6}
          title="Assuring Transparency"
          requirements={[
            "Statistical laws and policies publicly available",
            "Internal rules and regulations publicly available",
            "Information on statistical programs and products accessible",
            "Release policies and practices publicly available",
            "Statistical products clearly identified and documented",
          ]}
        />

        <PrincipleCard
          number={7}
          title="Assuring Statistical Confidentiality and Security"
          requirements={[
            "Statistical confidentiality guaranteed by law",
            "Staff sign legal confidentiality commitments",
            "Penalties for confidentiality violations",
            "Guidelines for ensuring confidentiality at all process stages",
            "Procedures for access to administrative records",
            "Microdata access guidelines in place",
            "Physical and technological security measures",
          ]}
        />

        <PrincipleCard
          number={8}
          title="Assuring Quality Commitment"
          requirements={[
            "Product quality regularly monitored and reported",
            "Quality guidelines and quality management framework",
            "Quality improvement program in place",
            "Balance between quality, costs, timeliness, and burden",
            "Quality measures routinely gathered and analyzed",
          ]}
        />

        <PrincipleCard
          number={9}
          title="Assuring Adequate Resources"
          requirements={[
            "Staff, financial, computing, and other resources adequate",
            "Resource adequacy regularly evaluated",
            "Authority to allocate resources for statistical activities",
            "Active promotion of statistical awareness and literacy",
          ]}
        />
      </div>
    </div>
  );
}
