'use client'

import { portfolioData } from '../data/portfolio'
import { Mail, Download, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="py-16" style={{background: 'linear-gradient(to bottom, #FFFFFF 0%, #F0F9FF 100%)'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-6" style={{color: '#1E40AF', fontSize: '36px', fontWeight: '700'}}>
          Let's Connect
        </h2>

        <div className="max-w-xl mx-auto">
          <div className="card" style={{
            background: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '16px',
            padding: '48px 40px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }}>
            <div className="text-center">
              {/* Intro Text */}
              <p className="mb-8 text-lg" style={{color: '#6B7280', lineHeight: '1.6'}}>
                I'm open to new opportunities, collaborations, and tech discussions—feel free to reach out!
              </p>

              {/* Primary & Secondary Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)'}
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>

                <a
                  href="/Maheswari_Manoharan_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg font-medium text-base transition-all hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
                    color: '#1E40AF',
                    border: '2px solid #3B82F6',
                    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #BFDBFE 0%, #93C5FD 100%)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.2)'
                  }}
                >
                  <Download size={18} />
                  <span>Download Résumé (PDF)</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-8 pt-6 border-t" style={{borderColor: '#DBEAFE'}}>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all hover:scale-110 group"
                  style={{color: '#475569'}}
                >
                  <Linkedin size={22} style={{color: '#3B82F6', transition: 'color 0.2s'}} className="group-hover:!text-blue-700" />
                  <span className="text-sm font-medium group-hover:text-blue-700" style={{transition: 'color 0.2s'}}>LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all hover:scale-110 group"
                  style={{color: '#475569'}}
                >
                  <Github size={22} style={{color: '#06B6D4', transition: 'color 0.2s'}} className="group-hover:!text-cyan-700" />
                  <span className="text-sm font-medium group-hover:text-cyan-700" style={{transition: 'color 0.2s'}}>GitHub</span>
                </a>

                {personal.twitter && (
                  <a
                    href={personal.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all hover:scale-110 group"
                    style={{color: '#475569'}}
                  >
                    <Twitter size={22} style={{color: '#F59E0B', transition: 'color 0.2s'}} className="group-hover:!text-amber-700" />
                    <span className="text-sm font-medium group-hover:text-amber-700" style={{transition: 'color 0.2s'}}>Twitter</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}