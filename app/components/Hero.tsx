'use client'

import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, Twitter, Download, FileText } from 'lucide-react'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="home" className="flex items-center justify-center pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 px-4">
            <span className="text-gradient-pink">{personal.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 px-4 leading-relaxed" style={{color: '#1E3A8A', fontWeight: '600'}}>
            {personal.title}
          </h2>
          <p className="text-base sm:text-lg mb-6 px-4" style={{color: '#64748B', fontWeight: '500'}}>
            {personal.location}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 px-4">
            <a
              href="/Maheswari_Manoharan_Resume.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-1 text-sm"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)'}
            >
              <Download size={18} />
              <span>Resume (PDF)</span>
            </a>
            <a
              href="/Maheswari_Manoharan_Resume.docx"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-1 text-sm"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(6, 182, 212, 0.4)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(6, 182, 212, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(6, 182, 212, 0.4)'}
            >
              <FileText size={18} />
              <span>Resume (DOCX)</span>
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full transition-all hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
                color: '#1E40AF'
              }}
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full transition-all hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
                color: '#0369A1'
              }}
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3.5 rounded-full transition-all hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #A5F3FC 0%, #67E8F9 100%)',
                color: '#0E7490'
              }}
            >
              <Mail size={24} />
            </a>
            {personal.twitter && (
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full transition-all hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)',
                  color: '#C2410C'
                }}
              >
                <Twitter size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}