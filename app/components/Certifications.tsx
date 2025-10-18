import { portfolioData } from '../data/portfolio'
import { Award, Calendar, Clock } from 'lucide-react'

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="section-spacing" style={{background: '#FAFAFA'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-12">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="card">
              <div className="flex items-start mb-4">
                <Award className="mr-3 flex-shrink-0" size={28} style={{color: '#2563EB'}} />
                <div>
                  <h3 style={{fontSize: '18px', marginBottom: '4px'}}>{cert.name}</h3>
                  <p className="mt-1" style={{color: '#4B5563', fontSize: '15px'}}>{cert.issuer}</p>
                </div>
              </div>
              
              <div className="space-y-2" style={{color: '#6B7280', fontSize: '15px'}}>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" style={{color: '#2563EB'}} />
                  <span>Issued: {cert.issued}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" style={{color: '#2563EB'}} />
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