import { PrincipleCard } from "./PrincipleCard";
import { Users } from "lucide-react";

export function PillarTwoSection() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <Users size={24} />
        </div>
        <h1 className="text-3xl font-bold text-knbs-600">
          Pillar Two: Impartiality
        </h1>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          Statistics are produced and disseminated according to guidelines,
          methods and procedures, respecting the scientific and technical
          independence of the statistical process without conflict of interest
          and undue influence.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={1}
          title="Independence"
          description="Professional independence of statistical authorities from other policy, regulatory or administrative departments and bodies, as well as from private sector operators."
          commitments={[
            "Ensure the independence and professional autonomy of the statistical unit",
            "Protect staff from any political or other external interference in the development, production, and dissemination of statistics",
            "Enable the statistical unit to decide on statistical methods, standards, and procedures, and on the content and timing of statistical releases",
            "Ensure that statistical releases are not subject to approval by any other governmental authority before release",
            "Establish clear protocols for interacting with political authorities while maintaining professional independence",
          ]}
        />

        <PrincipleCard
          number={2}
          title="Confidentiality"
          description="Protection of the statistical information against any unauthorised access and ensuring that it is used for statistical purposes only."
          commitments={[
            "Inform and assure data providers that information provided is secure and will not be disclosed or shared in a manner that will identify them",
            "Inform data providers of the main uses of the information they provide and restrictions to prevent unauthorised access to the information",
            "Ensure people with access to individual or confidential information must sign a declaration stating their commitment to confidentiality and taking note of the penalties for non-compliance as provided in the Statistics Act, 2006",
            "Anonymize and aggregate data to ensure that publication of statistics does not allow the individual identification of data providers",
            "Ensure protection and security of the information through encryption and giving access to only authorised persons",
            "Ensure that information is stored in accordance with the Statistics Act, 2006 and Data Protection Act, 2019",
          ]}
        />

        <PrincipleCard
          number={3}
          title="Accountability and Transparency"
          description="To facilitate a correct interpretation of the data, the statistical units present information according to scientific standards on the sources, methods and procedures of the statistics."
          commitments={[
            "Document and enable access to methods, processes and procedures used in the production of statistics",
            "Declare any methodological modifications made to the aspects of statistics that have been produced, before the publication of results",
            "Allow for peer reviewing of statistical processes and procedures by stakeholders, subject matter specialists and regional and international agencies",
            "Cite the source of data when disseminating statistics using data collected or originally produced by other institutions",
            "Metadata and quality reports should be made readily available to users which will enable them to judge the fitness of use of the data",
            "Provide guidelines and procedures for user access to data and detailed documentation such as metadata, concepts and definitions alongside the data",
            "Correct and communicate errors discovered in published statistics in a timely manner",
            "Routinely monitor and revise the statistical processes as required",
            "Ensure that revisions follow standard, well-established and transparent procedures",
            "Ensure that revisions are regularly analysed in order to improve source data, statistical processes and outputs",
            "Present statistics in a clear format, to allow proper interpretation and use",
            "Clarify statistics in the event of misuse or misinterpretations",
          ]}
        />

        <PrincipleCard
          number={4}
          title="Integrity and Credibility"
          description="Adherence to statistical ethics by demonstrating honesty truthfulness and reliability while maintaining a high level of expertise and competency."
          commitments={[
            "Engage competent personnel with the requisite expertise to manage the statistical processes",
            "Collect and manage statistics using recognized best practices and conform to international statistical standards",
            "Inculcate a culture of honesty and truthfulness in all individuals involved in the statistical value chain",
            "Be accountable for statistical products and ensure prudent use of resources",
          ]}
        />
      </div>
    </div>
  );
}
