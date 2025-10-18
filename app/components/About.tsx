import { portfolioData } from '../data/portfolio'
import { Code2, Cloud, Database, Sparkles } from 'lucide-react'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="section-spacing" style={{background: 'white'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-12" style={{color: '#1E3A8A'}}>
          About Me
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card" style={{background: 'linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 100%)', border: 'none'}}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-lg" style={{background: '#2563EB'}}>
                  <Code2 size={28} style={{color: 'white'}} />
                </div>
                <div>
                  <h3 className="mb-3" style={{color: '#1E3A8A', fontSize: '20px'}}>T-Shaped Engineer</h3>
                  <p style={{color: '#374151', lineHeight: '1.7'}}>
                    {personal.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)', border: 'none'}}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-lg" style={{background: '#0EA5E9'}}>
                  <Cloud size={28} style={{color: 'white'}} />
                </div>
                <div>
                  <h3 className="mb-3" style={{color: '#1E3A8A', fontSize: '20px'}}>Cloud Architecture</h3>
                  <p style={{color: '#374151', lineHeight: '1.7'}}>
                    Designing and implementing scalable cloud solutions across AWS, Azure, and modern cloud platforms with expertise in microservices and serverless architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{background: 'linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)', border: 'none'}}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-lg" style={{background: '#06B6D4'}}>
                  <Database size={28} style={{color: 'white'}} />
                </div>
                <div>
                  <h3 className="mb-3" style={{color: '#1E3A8A', fontSize: '20px'}}>Data Platforms</h3>
                  <p style={{color: '#374151', lineHeight: '1.7'}}>
                    Leveraging data platforms to drive business insights with hands-on experience in modern data engineering, analytics, and ML operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)', border: 'none'}}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 rounded-lg" style={{background: '#F59E0B'}}>
                  <Sparkles size={28} style={{color: 'white'}} />
                </div>
                <div>
                  <h3 className="mb-3" style={{color: '#1E3A8A', fontSize: '20px'}}>12+ Years Experience</h3>
                  <p style={{color: '#374151', lineHeight: '1.7'}}>
                    Strong foundation in computer science with extensive industry experience building robust software applications and leading engineering teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
