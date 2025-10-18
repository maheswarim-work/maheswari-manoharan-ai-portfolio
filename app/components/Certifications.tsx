import { portfolioData } from '../data/portfolio'
import { Award, Calendar, Clock } from 'lucide-react'

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#C026D3'}}>
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 rounded-lg transition-all hover:shadow-lg" style={{
              background: '#FFFFFF',
              borderLeft: '3px solid #E879F9',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="flex items-start mb-4">
                <Award className="mr-3 flex-shrink-0" size={24} style={{color: '#E879F9'}} />
                <div>
                  <h3 className="text-lg font-semibold" style={{color: '#C026D3'}}>{cert.name}</h3>
                  <p className="text-sm mt-1 font-medium" style={{color: '#374151'}}>{cert.issuer}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm" style={{color: '#1E293B'}}>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2" style={{color: '#E879F9'}} />
                  <span>Issued: {cert.issued}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-2" style={{color: '#E879F9'}} />
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