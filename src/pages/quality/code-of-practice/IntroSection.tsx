import { BookOpen, Target, Shield } from "lucide-react";

export function IntroSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        Kenya Statistical Code of Practice (KeSCoP)
      </h1>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          The Code of Practice for Official Statistics outlines the principles
          and practices that govern the production and dissemination of official
          statistics in Kenya. It establishes the foundation for trust, quality,
          and innovation in the National Statistical System.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Pillars</h2>
        <p className="text-gray-700 mb-6">
          KeSCoP is built on three fundamental pillars that guide statistical
          operations across Kenya's National Statistical System:
        </p>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-knbs-600">Pillar 1</h3>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Professionalism</h4>
            <p className="text-sm text-gray-700">
              Adherence to professional standards, competency requirements, and
              best practices in statistical production.
            </p>
          </div>

          <div className="bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold text-knbs-600">Pillar 2</h3>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Impartiality</h4>
            <p className="text-sm text-gray-700">
              Independence from political and external influence, ensuring
              objectivity and credibility in statistical outputs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-knbs-600">Pillar 3</h3>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Progressiveness</h4>
            <p className="text-sm text-gray-700">
              Innovation, continuous improvement, and adaptation to emerging
              technologies and user needs.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Purpose</h2>
        <p className="text-sm text-gray-700 mb-3">
          KeSCoP serves multiple critical functions in Kenya's statistical
          ecosystem:
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>
              Establishes common standards and expectations for all NSS members
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>
              Builds public trust and confidence in official statistics
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>
              Ensures quality, reliability, and comparability of statistical
              products
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>
              Promotes innovation and continuous improvement in statistical
              practices
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>
              Aligns Kenya's statistical system with international best
              practices
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
