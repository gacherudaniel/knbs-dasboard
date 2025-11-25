import { PrincipleCard } from "./PrincipleCard";

export function LevelASection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        Level A: Managing the Statistical System
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          Coordination of the NSS and managing relations with all stakeholders is a
          precondition for the quality and efficient production of official statistics.
          Ensuring the use of common statistical standards throughout the system is an
          important part of this management.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={1}
          title="Coordinating the National Statistical System"
          requirements={[
            "Statistical law establishes responsibilities of NSS members",
            "Body and mechanisms for NSS coordination exist",
            "Mechanism for considering statistics from outside NSS",
            "National plan (KSDS) for development of official statistics",
          ]}
        />

        <PrincipleCard
          number={2}
          title="Managing Relationships with Data Users, Data Providers and Other Stakeholders"
          requirements={[
            "Stakeholders are identified and consulted",
            "Strategy for engaging with users exists",
            "Cooperation with funding agencies and international organizations",
            "Legal authority to collect data for statistical purposes",
            "Legal authority to obtain administrative data",
            "Authority to access privately-held data",
            "Cooperation and support to data providers",
          ]}
        />

        <PrincipleCard
          number={3}
          title="Managing Statistical Standards"
          requirements={[
            "Cooperation in development of international/regional/national standards",
            "Support and guidance to data providers on standards",
            "Divergences from standards are documented and explained",
          ]}
        />
      </div>
    </div>
  );
}