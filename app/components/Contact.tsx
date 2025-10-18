'use client'

import { portfolioData } from '../data/portfolio'
import { Mail, Download, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-6" style={{color: '#2563EB', fontSize: '36px', fontWeight: '700'}}>
          Let's Connect
        </h2>

        <div className="max-w-xl mx-auto">
          <div className="card" style={{
            background: '#FFFFFF',
            borderLeft: '3px solid #2563EB',
            borderRadius: '8px',
            padding: '48px 40px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="text-center">
              {/* Intro Text */}
              <p className="mb-8 text-lg" style={{color: '#64748B', lineHeight: '1.6'}}>
                I'm open to new opportunities, collaborations, and tech discussions—feel free to reach out!
              </p>

              {/* Primary & Secondary Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:shadow-lg"
                  style={{
                    background: '#2563EB',
                    color: 'white',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#1D4ED8'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#2563EB'}
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>

                <a
                  href="/Maheswari_Manoharan_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg font-medium text-base transition-all hover:shadow-lg"
                  style={{
                    background: '#14B8A6',
                    color: 'white',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#0D9488'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#14B8A6'}
                >
                  <Download size={18} />
                  <span>Download Résumé (PDF)</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-8 pt-6 border-t" style={{borderColor: '#E5E7EB'}}>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all group"
                  style={{color: '#64748B'}}
                >
                  <Linkedin size={20} style={{color: '#2563EB'}} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all group"
                  style={{color: '#64748B'}}
                >
                  <Github size={20} style={{color: '#14B8A6'}} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>

                {personal.twitter && (
                  <a
                    href={personal.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all group"
                    style={{color: '#64748B'}}
                  >
                    <Twitter size={20} style={{color: '#14B8A6'}} />
                    <span className="text-sm font-medium">Twitter</span>
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