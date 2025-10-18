import { portfolioData } from '../data/portfolio'
import { Building2, Calendar } from 'lucide-react'

export default function Experience() {
  const { experience, education } = portfolioData

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#0C4A6E'}}>
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6" style={{color: '#0E7490'}}>Work Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="mb-8 p-6 rounded-lg transition-all hover:scale-[1.01]" style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(6, 182, 212, 0.3)',
                boxShadow: '0 4px 16px rgba(6, 182, 212, 0.2)'
              }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-semibold" style={{color: '#0E7490'}}>{job.position}</h4>
                    <div className="flex items-center mt-1" style={{color: '#155E75'}}>
                      <Building2 size={16} className="mr-2 flex-shrink-0" style={{color: '#06B6D4'}} />
                      <span className="font-medium">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0" style={{color: '#475569'}}>
                    <Calendar size={16} className="mr-2" style={{color: '#22D3EE'}} />
                    <span className="text-sm whitespace-nowrap font-medium">{job.duration}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm flex" style={{color: '#0C4A6E'}}>
                      <span className="mr-2 flex-shrink-0" style={{color: '#06B6D4', fontWeight: '700'}}>•</span>
                      <span style={{fontWeight: '500'}}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{color: '#0E7490'}}>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6 p-6 rounded-lg transition-all hover:scale-[1.01]" style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(6, 182, 212, 0.3)',
                boxShadow: '0 4px 16px rgba(6, 182, 212, 0.2)'
              }}>
                <h4 className="text-xl font-semibold" style={{color: '#0E7490'}}>{edu.degree}</h4>
                <p className="mt-1 font-medium" style={{color: '#155E75'}}>{edu.institution}</p>
                <p className="mt-3" style={{color: '#0C4A6E', fontWeight: '500'}}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}