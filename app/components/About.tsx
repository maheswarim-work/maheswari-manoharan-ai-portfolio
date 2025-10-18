import { portfolioData } from '../data/portfolio'
import { Code2, Cloud, Database, Sparkles } from 'lucide-react'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-16" style={{color: '#2563EB', fontSize: '36px', fontWeight: '700'}}>
          About Me
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* T-Shaped Engineer */}
            <div className="card" style={{
              background: '#FFFFFF',
              borderLeft: '3px solid #2563EB',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-lg" style={{
                  background: '#2563EB',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                }}>
                  <Code2 size={28} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#2563EB', fontSize: '22px', fontWeight: '700'}}>
                    T-Shaped Engineer
                  </h3>
                  <p style={{color: '#1E293B', lineHeight: '1.8', fontSize: '15px'}}>
                    {personal.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud Architecture */}
            <div className="card" style={{
              background: '#FFFFFF',
              borderLeft: '3px solid #14B8A6',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-lg" style={{
                  background: '#14B8A6',
                  boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)'
                }}>
                  <Cloud size={28} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#2563EB', fontSize: '22px', fontWeight: '700'}}>
                    Cloud Architecture
                  </h3>
                  <p style={{color: '#1E293B', lineHeight: '1.8', fontSize: '15px'}}>
                    Design and implement scalable cloud solutions on AWS and Azure using Python and Java, with expertise in microservices and serverless architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Platforms */}
            <div className="card" style={{
              background: '#FFFFFF',
              borderLeft: '3px solid #14B8A6',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-lg" style={{
                  background: '#14B8A6',
                  boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)'
                }}>
                  <Database size={28} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#2563EB', fontSize: '22px', fontWeight: '700'}}>
                    Data Platforms
                  </h3>
                  <p style={{color: '#1E293B', lineHeight: '1.8', fontSize: '15px'}}>
                    Leveraging data platforms to drive business insights with hands-on experience in modern data engineering, analytics, and ML operations.
                  </p>
                </div>
              </div>
            </div>

            {/* 12+ Years Experience */}
            <div className="card" style={{
              background: '#FFFFFF',
              borderLeft: '3px solid #2563EB',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-lg" style={{
                  background: '#2563EB',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
                }}>
                  <Sparkles size={28} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#2563EB', fontSize: '22px', fontWeight: '700'}}>
                    12+ Years Experience
                  </h3>
                  <p style={{color: '#1E293B', lineHeight: '1.8', fontSize: '15px'}}>
                    Strong computer science foundation with 12+ years leading teams and building enterprise software across insurance, automotive, and employment verification.
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
