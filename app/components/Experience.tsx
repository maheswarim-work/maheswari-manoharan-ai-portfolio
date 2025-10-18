import { portfolioData } from '../data/portfolio'
import { Building2, Calendar } from 'lucide-react'

export default function Experience() {
  const { experience, education } = portfolioData

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#ec4899'}}>
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6" style={{color: '#374151'}}>Work Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="mb-8 p-6 rounded-lg transition-all hover:shadow-lg" style={{
                background: '#FFFFFF',
                borderLeft: '3px solid #ec4899',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-semibold" style={{color: '#ec4899'}}>{job.position}</h4>
                    <div className="flex items-center mt-1" style={{color: '#374151'}}>
                      <Building2 size={16} className="mr-2 flex-shrink-0" style={{color: '#f472b6'}} />
                      <span className="font-medium">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0" style={{color: '#64748B'}}>
                    <Calendar size={16} className="mr-2" style={{color: '#f472b6'}} />
                    <span className="text-sm whitespace-nowrap font-medium">{job.duration}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm flex" style={{color: '#1E293B'}}>
                      <span className="mr-2 flex-shrink-0" style={{color: '#ec4899', fontWeight: '700'}}>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{color: '#374151'}}>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6 p-6 rounded-lg transition-all hover:shadow-lg" style={{
                background: '#FFFFFF',
                borderLeft: '3px solid #f472b6',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <h4 className="text-xl font-semibold" style={{color: '#ec4899'}}>{edu.degree}</h4>
                <p className="mt-1 font-medium" style={{color: '#374151'}}>{edu.institution}</p>
                <p className="mt-3" style={{color: '#1E293B'}}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}