import { portfolioData } from '../data/portfolio'
import { Award, Calendar, Clock } from 'lucide-react'

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all">
              <div className="flex items-start mb-4">
                <Award className="text-blue-700 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2" />
                  <span>Issued: {cert.issued}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-2" />
                  <span>Expires: {cert.expires}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}