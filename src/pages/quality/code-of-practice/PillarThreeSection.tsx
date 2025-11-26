import { PrincipleCard } from "./PrincipleCard";
import { Zap } from "lucide-react";

export function PillarThreeSection() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <Zap size={24} />
        </div>
        <h1 className="text-3xl font-bold text-knbs-600">
          Pillar Three: Progressiveness
        </h1>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          Producers of official statistics are innovative and creative to
          improve the quality of statistics and build resilience to deal with
          uncertainties. Modern practices are used in the production and
          dissemination of official statistics to enable producers of statistics
          to respond to the emerging needs of the users and the changing
          statistical environment. Producers of statistics also embrace
          technological advances in the statistics value chain.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={1}
          title="Innovation"
          description="Creativity in the development of new ideas to increase efficiency and optimize the use of resources. This also entails the use of modern technology and approaches in the production and dissemination of statistics."
          commitments={[
            "Adopt modern technology in data capture, processing, and dissemination of statistics",
            "Regularly review and update ICT architecture and hardware infrastructure and identify possibilities for innovation and modernization",
            "Continuously research and implement new and emerging methodologies in statistics",
            "Promote, organize, and support competition on different thematic areas in statistics",
            "Cooperate with the scientific community to improve methods and promote innovation in the development, production and dissemination of statistics",
            "Regularly identify alternative sources of data and validate the data using appropriate quality frameworks developed and/or adopted by KNBS for official reporting",
          ]}
        />

        <PrincipleCard
          number={2}
          title="Continuous Improvement"
          description="Develop processes, skills and output that conform to emerging data needs within the statistical environment. Efforts are made to take advantage of opportunities to undertake incremental improvements in services, products, and processes."
          commitments={[
            "Collaborate with stakeholders to develop and improve integrated systems of sharing administrative data",
            "Regularly review alternative sources of data to fill existing data gaps",
            "Build capacity on new methods of production, dissemination and use of statistics",
            "Undertake peer reviews and benchmarking on best practices in statistics",
            "Regularly analyse user feedback to improve on statistical products",
            "Conduct monitoring and evaluation programs in statistical production",
            "Promote a culture of continuous improvement",
            "Adopt and use risk-based statistical planning",
            "Put in place appropriate business continuity plans to minimize impact of disruptions and keep statistical production processes running smoothly",
          ]}
        />

        <PrincipleCard
          number={3}
          title="User Focus"
          description="Members of the NSS continuously engage users to customize statistical products to meet their needs in the changing data ecosystem."
          commitments={[
            "Continuously review and update platforms for engagement with users",
            "Put in place and regularly update processes to monitor and consult with both new and existing stakeholders on the relevance and practical utility of existing statistics",
            "Put in place procedures to prioritize various user needs in the strategic goals and annual statistical plan",
            "Engage users in the development of statistical tools aligned to their needs",
            "Produce regular user-focused statistical products",
          ]}
        />

        <PrincipleCard
          number={4}
          title="Adequate Funding"
          description="The producers of statistics allocate adequate financial resources or have mechanisms in place to ensure the statistics plans are funded for each implementation period. Mechanisms to build resilience in funding for statistics are entrenched in the statistics plans to ensure continuity in the face of crisis, which may interfere with the production of statistics."
          commitments={[
            "Develop a costed annual statistical plan aligned to the Kenya Strategy for the Development of Statistics (KSDS)",
            "Develop a resource mobilization strategy that is regularly reviewed and implemented",
            "Allocate an adequate budget for statistics in each implementation period",
            "Adopt and use risk-based statistical planning",
            "Efficiently utilize resources",
          ]}
        />
      </div>
    </div>
  );
}
