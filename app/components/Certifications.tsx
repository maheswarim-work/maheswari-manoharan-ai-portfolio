import { portfolioData } from '../data/portfolio'
import { Award, Calendar, Clock } from 'lucide-react'

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#0C4A6E'}}>
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="p-6 rounded-lg transition-all hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(6, 182, 212, 0.3)',
              boxShadow: '0 4px 16px rgba(6, 182, 212, 0.2)'
            }}>
              <div className="flex items-start mb-4">
                <Award className="mr-3 flex-shrink-0" size={24} style={{color: '#06B6D4'}} />
                <div>
                  <h3 className="text-lg font-semibold" style={{color: '#0E7490'}}>{cert.name}</h3>
                  <p className="text-sm mt-1 font-medium" style={{color: '#155E75'}}>{cert.issuer}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm" style={{color: '#0C4A6E'}}>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2" style={{color: '#22D3EE'}} />
                  <span className="font-medium">Issued: {cert.issued}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-2" style={{color: '#22D3EE'}} />
                  <span className="font-medium">Expires: {cert.expires}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}