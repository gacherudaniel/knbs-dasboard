import {
  CheckCircle2,
  Users,
  ClipboardCheck,
  Target,
  BookOpen,
} from "lucide-react";

export function ImplementationSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        4. Implementation of KeSQAF
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          The successful implementation of KeSQAF requires institutional
          arrangements, assessment tools, capacity building, and continuous
          improvement mechanisms. This section outlines the key components for
          operationalizing the framework across Kenya's National Statistical
          System.
        </p>
      </div>

      {/* Institutional Arrangements */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="text-knbs-500" size={24} />
          Institutional Arrangements
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-1"
                size={20}
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Quality Assurance Unit
                </h3>
                <p className="text-sm text-gray-700">
                  Dedicated unit within KNBS responsible for coordinating
                  quality assurance activities, conducting assessments, and
                  providing technical support to all statistical producers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-1"
                size={20}
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Technical Committees
                </h3>
                <p className="text-sm text-gray-700">
                  Sectoral and thematic committees comprising experts from NSS
                  members to review quality standards, methodologies, and
                  assessment reports.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-1"
                size={20}
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  NSS Coordination Forum
                </h3>
                <p className="text-sm text-gray-700">
                  Regular forum bringing together heads of NSS member
                  organizations to discuss quality issues, share best practices,
                  and coordinate implementation efforts.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-1"
                size={20}
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Quality Champions Network
                </h3>
                <p className="text-sm text-gray-700">
                  Designated focal points in each NSS member organization
                  responsible for implementing and monitoring quality assurance
                  practices within their institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Tools */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ClipboardCheck className="text-knbs-500" size={24} />
          Assessment Tools and Instruments
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-knbs-500 bg-white rounded-r-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">
              Self-Assessment Questionnaire
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Comprehensive questionnaire covering all 19 principles, enabling
              organizations to evaluate their compliance and identify
              improvement areas.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Annual Review
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Evidence-Based
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Scoring System
              </span>
            </div>
          </div>

          <div className="border-l-4 border-knbs-500 bg-white rounded-r-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">
              Peer Review Mechanism
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Structured peer review process where experienced statisticians
              from other NSS members conduct independent assessments of
              statistical processes and outputs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Biennial
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                External Review
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Recommendations
              </span>
            </div>
          </div>

          <div className="border-l-4 border-knbs-500 bg-white rounded-r-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">
              Quality Certification Framework
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Three-tier certification system (Bronze, Silver, Gold) recognizing
              organizations that meet progressively higher quality standards
              across all principle areas.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Incentive-Based
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Three Levels
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Public Recognition
              </span>
            </div>
          </div>

          <div className="border-l-4 border-knbs-500 bg-white rounded-r-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">
              User Satisfaction Survey
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Regular survey instrument to measure user satisfaction with
              statistical products and services, focusing on the dimensions of
              quality most relevant to data users.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Annual Survey
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                User Feedback
              </span>
              <span className="bg-knbs-100 text-knbs-700 px-3 py-1 rounded text-xs">
                Improvement Plans
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Phases */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="text-knbs-500" size={24} />
          Implementation Roadmap
        </h2>

        <div className="space-y-3">
          <div className="flex gap-4 items-start">
            <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">
                Phase 1: Awareness and Preparation (Year 1)
              </h3>
              <p className="text-sm text-gray-700">
                Sensitization workshops, establishment of quality assurance
                structures, development of guidelines and tools, baseline
                assessment.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">
                Phase 2: Pilot Implementation (Year 2)
              </h3>
              <p className="text-sm text-gray-700">
                Pilot KeSQAF in selected NSS member organizations, refine tools
                and processes, conduct first round of peer reviews, capacity
                building programs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">
                Phase 3: Full Rollout (Years 3-5)
              </h3>
              <p className="text-sm text-gray-700">
                System-wide implementation across all NSS members, introduction
                of certification framework, regular assessment cycles,
                continuous improvement.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              4
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">
                Phase 4: Maturity and Optimization (Year 5+)
              </h3>
              <p className="text-sm text-gray-700">
                Framework review and updates, advanced quality improvement
                initiatives, international benchmarking, knowledge sharing with
                regional partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Resources */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="text-knbs-500" size={24} />
          Supporting Resources
        </h2>

        <div className="bg-gray-50 border rounded-lg p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <span>
                <strong>KeSQAF Implementation Manual:</strong> Detailed guidance
                on applying each principle
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <span>
                <strong>Assessment Templates:</strong> Standardized forms for
                self-assessment and peer review
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <span>
                <strong>Training Modules:</strong> E-learning and workshop
                materials for capacity building
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <span>
                <strong>Best Practice Database:</strong> Repository of examples
                and case studies from NSS members
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <CheckCircle2
                className="text-knbs-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <span>
                <strong>Quality Improvement Toolkit:</strong> Practical tools
                for addressing common quality challenges
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
