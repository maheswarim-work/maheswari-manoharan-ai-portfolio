import { portfolioData } from '../data/portfolio'
import { Building2, Calendar } from 'lucide-react'

export default function Experience() {
  const { experience, education } = portfolioData

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Experience & Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Work Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-semibold text-gray-900">{job.position}</h4>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Building2 size={16} className="mr-2 flex-shrink-0" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 flex-shrink-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm whitespace-nowrap">{job.duration}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-gray-700 text-sm flex">
                      <span className="text-blue-700 mr-2 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-600 mt-1">{edu.institution}</p>
                <p className="text-gray-700 mt-3">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}