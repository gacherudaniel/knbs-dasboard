import { PrincipleCard } from "./PrincipleCard";
import { Shield } from "lucide-react";

export function PillarOneSection() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <Shield size={24} />
        </div>
        <h1 className="text-3xl font-bold text-knbs-600">
          Pillar One: Professionalism
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
          title="Quality"
          description="Accuracy of the statistics and their fitness to meet users' needs using appropriate statistical procedures."
          commitments={[
            "Adopt appropriate methods, systems and procedures for the production of official statistics",
            "Regularly review and update the production processes to ensure conformity to international statistical standards and best practices",
            "Manage the quality of statistics by regularly assessing and reporting on the key quality dimensions",
            "Share the methods and frameworks used in statistical production with stakeholders",
            "Ensure statistics are disseminated with adequate metadata and quality reports",
          ]}
        />

        <PrincipleCard
          number={2}
          title="Mandate and Coordination"
          description="A sound statistical legislative and institutional framework that spells out the mandate of statistical unit and clearly establishes organizational relationships within the National Statistical System (NSS)."
          commitments={[
            "Ensure statistics are produced based on the mandate provided by the relevant legislation",
            "Clearly document and communicate the mandate and responsibilities of the statistical unit to all stakeholders",
            "Collaborate and establish mechanisms for coordination and data sharing with all relevant institutions within and outside the NSS",
            "Regularly review and update the statistical legislative framework to address emerging issues",
            "Participate actively in NSS coordination meetings and activities",
          ]}
        />

        <PrincipleCard
          number={3}
          title="Competence"
          description="Producers of official statistics have staff that are sufficiently skilled, knowledgeable and experienced to perform the required functions."
          commitments={[
            "Recruit competent staff with the requisite qualifications, skills and expertise",
            "Develop and implement an appropriate performance appraisal system",
            "Build staff capacity through training and professional development programs",
            "Provide staff with necessary resources and tools to perform their functions effectively",
            "Create a conducive work environment that promotes productivity and innovation",
            "Establish and implement succession planning mechanisms",
          ]}
        />

        <PrincipleCard
          number={4}
          title="Dissemination"
          description="Statistics that are timely, easily accessible and clear to users. Effective use of modern media and technology to ensure wider coverage."
          commitments={[
            "Disseminate statistics in a timely manner according to advance release calendar",
            "Ensure statistics are easily accessible to all users through various platforms",
            "Present statistics in clear and user-friendly formats",
            "Provide adequate documentation and metadata to support interpretation",
            "Utilize modern media and technology to enhance reach and accessibility",
            "Respond promptly to user inquiries and feedback",
          ]}
        />
      </div>
    </div>
  );
}
