import { portfolioData } from '../data/portfolio'
import { Building2, Calendar } from 'lucide-react'

export default function Experience() {
  const { experience, education } = portfolioData

  return (
    <section id="experience" className="section-spacing" style={{background: '#FAFAFA'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-12">
          Experience & Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="mb-6">Work Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="mb-6 card">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="mb-1" style={{fontSize: '20px'}}>{job.position}</h3>
                    <div className="flex items-center mt-1" style={{color: '#4B5563'}}>
                      <Building2 size={18} className="mr-2" style={{color: '#2563EB'}} />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0 ml-4" style={{color: '#6B7280'}}>
                    <Calendar size={18} className="mr-2" style={{color: '#2563EB'}} />
                    <span className="text-sm">{job.duration}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex" style={{fontSize: '16px', lineHeight: '1.7'}}>
                      <span className="mr-2 flex-shrink-0" style={{color: '#2563EB'}}>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="card">
                <h3 style={{fontSize: '20px', marginBottom: '8px'}}>{edu.degree}</h3>
                <p className="mt-1" style={{color: '#4B5563'}}>{edu.institution}</p>
                <p className="mt-3">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}