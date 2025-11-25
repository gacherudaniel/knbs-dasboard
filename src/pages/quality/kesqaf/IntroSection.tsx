export function IntroSection() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-knbs-600 mb-2">
          Kenya Statistical Quality Assurance Framework
        </h1>
        <p className="text-gray-600">KeSQAF</p>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Key Terms and Definitions
        </h2>

        <div className="space-y-4">
          <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
            <h3 className="font-semibold text-knbs-700 mb-2">
              Statistical Agency/ National Statistical Office (NSO)
            </h3>
            <p className="text-sm text-gray-700">
              The main producer of official statistics in a country and/or the
              organization responsible for coordinating all activities related
              to the development, production, and dissemination of official
              statistics in the National Statistical System (NSS). In Kenya, the
              NSO is the Kenya National Bureau of Statistics (KNBS), herein
              referred to as the Bureau.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Official Statistics
            </h3>
            <p className="text-sm text-gray-700">
              Statistics that are produced in accordance with the United Nations
              Fundamental Principles of Official Statistics (UNFPOS) by the KNBS
              or compiled by Statistical Units for their specific domain and
              certified by KNBS.
            </p>
          </div>

          <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
            <h3 className="font-semibold text-knbs-700 mb-2">
              Statistical Unit
            </h3>
            <p className="text-sm text-gray-700">
              An organizational entity within a government ministry, department,
              or agency, other than the KNBS that develops, produces and
              disseminates statistics.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              National Statistical System (NSS)
            </h3>
            <p className="text-sm text-gray-700">
              The National Statistical System is the ensemble of the National
              Statistical Office, the KNBS, and other statistical units in Kenya
              that produce, provide, supply, use and disseminate official
              statistics on behalf of the Government of Kenya (GoK) under the
              supervision and co-ordination of the Bureau.
            </p>
          </div>

          <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
            <h3 className="font-semibold text-knbs-700 mb-2">
              National Data Ecosystem
            </h3>
            <p className="text-sm text-gray-700">
              The entire network of data collectors, producers, analysts and
              users across the data value chain in both state and non-state
              actors and associated infrastructural enablers in Kenya.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Quality Assurance
            </h3>
            <p className="text-sm text-gray-700">
              This is a planned and systematic pattern of all the actions
              necessary to provide adequate confidence that a product will
              conform to established requirements. It aims at achieving quality
              improvements on an ongoing basis.
            </p>
          </div>

          <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
            <h3 className="font-semibold text-knbs-700 mb-2">
              Quality Assessment
            </h3>
            <p className="text-sm text-gray-700">
              Part of quality assurance that focuses on an assessment of how
              well quality requirements (the stated needs or expectations) are
              fulfilled. It is a tool that identifies areas where quality
              improvements are most needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
