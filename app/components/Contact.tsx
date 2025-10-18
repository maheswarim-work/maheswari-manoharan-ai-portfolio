'use client'

import { portfolioData } from '../data/portfolio'
import { Mail, Download, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="py-16" style={{background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFC 100%)'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-6" style={{color: '#1E3A8A', fontSize: '36px', fontWeight: '700'}}>
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
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-semibold text-base transition-all hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                    color: 'white'
                  }}
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>

                <a
                  href="/Maheswari_Manoharan_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg font-medium text-base transition-all hover:bg-gray-100"
                  style={{
                    background: 'white',
                    color: '#2563EB',
                    border: '2px solid #2563EB'
                  }}
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
                  className="flex items-center gap-2 transition-all hover:scale-110 group"
                  style={{color: '#6B7280'}}
                >
                  <Linkedin size={22} className="group-hover:text-blue-600" style={{transition: 'color 0.2s'}} />
                  <span className="text-sm font-medium group-hover:text-blue-600" style={{transition: 'color 0.2s'}}>LinkedIn</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all hover:scale-110 group"
                  style={{color: '#6B7280'}}
                >
                  <Github size={22} className="group-hover:text-blue-600" style={{transition: 'color 0.2s'}} />
                  <span className="text-sm font-medium group-hover:text-blue-600" style={{transition: 'color 0.2s'}}>GitHub</span>
                </a>

                {personal.twitter && (
                  <a
                    href={personal.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-all hover:scale-110 group"
                    style={{color: '#6B7280'}}
                  >
                    <Twitter size={22} className="group-hover:text-blue-600" style={{transition: 'color 0.2s'}} />
                    <span className="text-sm font-medium group-hover:text-blue-600" style={{transition: 'color 0.2s'}}>Twitter</span>
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