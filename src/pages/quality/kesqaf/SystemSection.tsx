import { CheckCircle2, AlertCircle, Target } from "lucide-react";

export function SystemSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        2. The Statistical System in Kenya
      </h1>

      <div className="space-y-6">
        <div className="bg-knbs-50 border-l-4 border-knbs-500 p-6">
          <p className="text-gray-700 leading-relaxed">
            The National Statistical System (NSS) is the ensemble of statistical
            organizations and units within a country, that jointly collect,
            process and disseminate official statistics on behalf of the
            government. In Kenya, the NSS includes producers, suppliers and
            users of official statistics working under the supervision and
            coordination of the Kenya National Bureau of Statistics.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Constitutional Framework
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Constitution of Kenya, which was enacted in 2010 changed the
            administrative structure of the country that brought in a devolved
            system of governance. The country has a National Government and 47
            County Governments. The constitution categorized statistics as a
            concurrent function between the two levels of Government.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            2.1 Situational Analysis - SWOT
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="text-green-600" size={20} />
                <h3 className="font-semibold text-green-800">Strengths</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  • Relevant laws (Constitution 2010, Statistics Act 2006)
                </li>
                <li>• Application of international standards</li>
                <li>• Functional technical working groups</li>
                <li>• Collaborations among NSS members</li>
                <li>• Availability of DQAF assessment tools</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="text-amber-600" size={20} />
                <h3 className="font-semibold text-amber-800">Weaknesses</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Low staffing of Statistical Units in MDAs</li>
                <li>• Inadequate technical capacity</li>
                <li>• Inadequate financial resources</li>
                <li>
                  • Low focus on statistical needs in non-statistical MDAs
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-blue-600" size={20} />
                <h3 className="font-semibold text-blue-800">Opportunities</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Country-specific QAFs for benchmarking</li>
                <li>• Generic UN-NQAF framework available</li>
                <li>• PARIS21, MAPS emphasis on quality</li>
                <li>• Advancement in technology</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="text-red-600" size={20} />
                <h3 className="font-semibold text-red-800">Threats</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Resistance to change</li>
                <li>• Cyber insecurity challenges</li>
                <li>• Potential external interference</li>
                <li>• COVID-19 budget reprioritization</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
