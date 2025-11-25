export function ContextSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        1. Quality Context and Concepts
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            1.1 Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In recent years, new data sources, data providers and statistics
            producers have emerged, fueled by technological advances and new
            demands for detailed and timely data for policymaking to address
            various development agendas. This new data ecosystem poses
            challenges and opportunities for official statistics.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-sm text-blue-900 leading-relaxed">
              The UN-NQAF manual for Official Statistics was adopted in 2019 to
              guide countries in the implementation of their respective NQAF.
              The 19 quality principles and their associated requirements from
              the United Nations National Quality Assurance Framework (UN NQAF)
              manual are all borrowed in the development of the Kenya
              Statistical Quality Assurance Framework (KeSQAF).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            1.2 Quality Context
          </h2>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            1.2.1 The rationale for a quality assurance framework
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kenya National Bureau of Statistics (KNBS) is the National
            Statistics office in Kenya and is mandated to collect, compile,
            analyse, publish, and disseminate statistical information for public
            use. Given KNBS's obligation to provide statistics that inform
            decision-making and the need to provide leadership to members of the
            NSS, there is a need for a framework to support the production of
            high-quality statistics.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            1.3 Quality Concepts - 11 Key Quality Dimensions
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Relevance",
                desc: "Degree to which statistical information meets the real or perceived needs of clients.",
              },
              {
                title: "Accuracy",
                desc: "Closeness of computations or estimates to the unknown exact or true values.",
              },
              {
                title: "Reliability",
                desc: "Closeness of the initial estimated value to the subsequent estimated value.",
              },
              {
                title: "Timeliness",
                desc: "Length of time between data availability and the event or phenomenon they describe.",
              },
              {
                title: "Punctuality",
                desc: "Time lag between the actual delivery of the data and the target date.",
              },
              {
                title: "Accessibility",
                desc: "Ease and conditions under which statistical information can be obtained.",
              },
              {
                title: "Clarity",
                desc: "Extent to which easily comprehensible metadata are available.",
              },
              {
                title: "Coherence",
                desc: "Adequacy of statistics to be combined in different ways and for different uses.",
              },
              {
                title: "Consistency",
                desc: "Statistics having logical and numerical coherence.",
              },
              {
                title: "Methodological Soundness",
                desc: "Extent to which methodology complies with relevant international standards.",
              },
              {
                title: "Integrity",
                desc: "Values and practices that maintain confidence in the eyes of users.",
              },
            ].map((dimension, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <h4 className="font-semibold text-knbs-600 mb-2">
                  {dimension.title}
                </h4>
                <p className="text-sm text-gray-700">{dimension.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
