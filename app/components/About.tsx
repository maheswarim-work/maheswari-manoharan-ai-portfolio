import { portfolioData } from '../data/portfolio'
import { Code2, Cloud, Database, Sparkles } from 'lucide-react'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="py-16" style={{background: 'linear-gradient(to bottom, #F8FAFC 0%, #FFFFFF 100%)'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-16" style={{color: '#1E3A8A', fontSize: '36px', fontWeight: '700'}}>
          About Me
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* T-Shaped Engineer */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 100%)',
              border: '2px solid #BFDBFE',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: '#2563EB',
                  boxShadow: '0 4px 8px rgba(37, 99, 235, 0.3)'
                }}>
                  <Code2 size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#1E3A8A', fontSize: '22px', fontWeight: '700'}}>
                    T-Shaped Engineer
                  </h3>
                  <p style={{color: '#374151', lineHeight: '1.8', fontSize: '15px'}}>
                    {personal.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud Architecture */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
              border: '2px solid #BAE6FD',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: '#0EA5E9',
                  boxShadow: '0 4px 8px rgba(14, 165, 233, 0.3)'
                }}>
                  <Cloud size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#1E3A8A', fontSize: '22px', fontWeight: '700'}}>
                    Cloud Architecture
                  </h3>
                  <p style={{color: '#374151', lineHeight: '1.8', fontSize: '15px'}}>
                    Designing and implementing scalable cloud solutions across AWS, Azure, and modern cloud platforms with expertise in microservices and serverless architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Platforms */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)',
              border: '2px solid #A5F3FC',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: '#06B6D4',
                  boxShadow: '0 4px 8px rgba(6, 182, 212, 0.3)'
                }}>
                  <Database size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#1E3A8A', fontSize: '22px', fontWeight: '700'}}>
                    Data Platforms
                  </h3>
                  <p style={{color: '#374151', lineHeight: '1.8', fontSize: '15px'}}>
                    Leveraging data platforms to drive business insights with hands-on experience in modern data engineering, analytics, and ML operations.
                  </p>
                </div>
              </div>
            </div>

            {/* 12+ Years Experience */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
              border: '2px solid #FCD34D',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: '#F59E0B',
                  boxShadow: '0 4px 8px rgba(245, 158, 11, 0.3)'
                }}>
                  <Sparkles size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#1E3A8A', fontSize: '22px', fontWeight: '700'}}>
                    12+ Years Experience
                  </h3>
                  <p style={{color: '#374151', lineHeight: '1.8', fontSize: '15px'}}>
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
