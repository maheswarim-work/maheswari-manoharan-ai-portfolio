import { portfolioData } from '../data/portfolio'
import { Code2, Cloud, Database, Sparkles } from 'lucide-react'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="py-16" style={{background: 'linear-gradient(to bottom, #F0F9FF 0%, #FFFFFF 100%)'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-16" style={{color: '#1E40AF', fontSize: '36px', fontWeight: '700'}}>
          About Me
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* T-Shaped Engineer */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
              border: '2px solid #93C5FD',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 6px 16px rgba(59, 130, 246, 0.15)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                }}>
                  <Code2 size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#1E40AF', fontSize: '22px', fontWeight: '700'}}>
                    T-Shaped Engineer
                  </h3>
                  <p style={{color: '#1E3A8A', lineHeight: '1.8', fontSize: '15px', fontWeight: '500'}}>
                    {personal.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud Architecture */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #BAE6FD 0%, #7DD3FC 100%)',
              border: '2px solid #38BDF8',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 6px 16px rgba(14, 165, 233, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                  boxShadow: '0 4px 12px rgba(14, 165, 233, 0.4)'
                }}>
                  <Cloud size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#0369A1', fontSize: '22px', fontWeight: '700'}}>
                    Cloud Architecture
                  </h3>
                  <p style={{color: '#075985', lineHeight: '1.8', fontSize: '15px', fontWeight: '500'}}>
                    Design and implement scalable cloud solutions on AWS and Azure using Python and Java, with expertise in microservices and serverless architectures.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Platforms */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #A5F3FC 0%, #67E8F9 100%)',
              border: '2px solid #22D3EE',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 6px 16px rgba(6, 182, 212, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.4)'
                }}>
                  <Database size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#0E7490', fontSize: '22px', fontWeight: '700'}}>
                    Data Platforms
                  </h3>
                  <p style={{color: '#155E75', lineHeight: '1.8', fontSize: '15px', fontWeight: '500'}}>
                    Leveraging data platforms to drive business insights with hands-on experience in modern data engineering, analytics, and ML operations.
                  </p>
                </div>
              </div>
            </div>

            {/* 12+ Years Experience */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)',
              border: '2px solid #FBBF24',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 6px 16px rgba(245, 158, 11, 0.25)',
              transition: 'all 0.3s ease'
            }}>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 p-3.5 rounded-xl" style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
                }}>
                  <Sparkles size={32} style={{color: 'white'}} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4" style={{color: '#92400E', fontSize: '22px', fontWeight: '700'}}>
                    12+ Years Experience
                  </h3>
                  <p style={{color: '#78350F', lineHeight: '1.8', fontSize: '15px', fontWeight: '500'}}>
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
