import { portfolioData } from '../data/portfolio'
import { Rocket, Github, Wrench, Cpu, Sparkles, ExternalLink } from 'lucide-react'

export default function FeaturedProjects() {
  const { featuredProjects } = portfolioData

  return (
    <section id="ai-projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4" style={{color: '#ec4899'}}>
          Featured AI Projects
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto" style={{color: '#374151'}}>
          {featuredProjects.description}
        </p>

        <div className="max-w-6xl mx-auto">
          {/* Projects Grid - Now at the top */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{color: '#374151'}}>
              <Rocket className="mr-3" size={24} style={{color: '#f472b6'}} />
              Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.projects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg transition-all hover:shadow-lg"
                  style={{
                    background: '#FFFFFF',
                    borderLeft: '3px solid #f472b6',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold" style={{color: '#ec4899'}}>{project.name}</h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      title="View on GitHub"
                    >
                      <Github size={20} style={{color: '#f472b6'}} />
                    </a>
                  </div>
                  <p className="text-sm mb-4" style={{color: '#1E293B'}}>{project.description}</p>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 mb-4 rounded-full font-bold text-base transition-all hover:scale-110 hover:shadow-xl animate-pulse"
                      style={{
                        background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                        color: '#FFFFFF',
                        boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)'
                      }}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs rounded-full" style={{
                        background: '#fce7f3',
                        color: '#be185d'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{color: '#374151'}}>
              <Sparkles className="mr-3" size={24} style={{color: '#f472b6'}} />
              AI Development Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.aiTools.map((tool, index) => (
                <div key={index} className="p-6 rounded-lg transition-all hover:shadow-lg" style={{
                  background: '#FFFFFF',
                  borderLeft: '3px solid #f472b6',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className="flex items-start">
                    <Wrench className="mr-3 flex-shrink-0 mt-1" size={20} style={{color: '#f472b6'}} />
                    <div>
                      <h4 className="text-lg font-semibold" style={{color: '#ec4899'}}>{tool.name}</h4>
                      <p className="text-sm mt-2" style={{color: '#1E293B'}}>{tool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12 p-6 rounded-lg" style={{
            background: '#FFFFFF',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center" style={{color: '#374151'}}>
              <Cpu className="mr-3" size={20} style={{color: '#f472b6'}} />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {featuredProjects.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 text-sm rounded-full font-medium" style={{
                  background: '#fce7f3',
                  color: '#be185d'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div className="mb-12 p-6 rounded-lg" style={{
            background: '#FFFFFF',
            borderLeft: '3px solid #ec4899',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 className="text-xl font-semibold mb-4" style={{color: '#374151'}}>Key Highlights</h3>
            <ul className="space-y-3">
              {featuredProjects.highlights.map((highlight, index) => (
                <li key={index} className="text-sm flex" style={{color: '#1E293B'}}>
                  <span className="mr-2 flex-shrink-0" style={{color: '#ec4899', fontWeight: '700'}}>•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
