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
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 px-4 leading-relaxed" style={{color: '#374151', fontWeight: '600'}}>
            {personal.title}
          </h2>
          <p className="text-base sm:text-lg mb-6 px-4" style={{color: '#64748B'}}>
            {personal.location}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 px-4">
            <a
              href="/Maheswari_Manoharan_Resume.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg text-sm"
              style={{
                background: '#2563EB',
                color: 'white',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#1D4ED8'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#2563EB'}
            >
              <Download size={18} />
              <span>Resume (PDF)</span>
            </a>
            <a
              href="/Maheswari_Manoharan_Resume.docx"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg text-sm"
              style={{
                background: '#14B8A6',
                color: 'white',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0D9488'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#14B8A6'}
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
              className="p-3 rounded-lg transition-all hover:shadow-md"
              style={{
                background: '#FFFFFF',
                color: '#2563EB',
                border: '1px solid #E5E7EB'
              }}
            >
              <Linkedin size={22} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-all hover:shadow-md"
              style={{
                background: '#FFFFFF',
                color: '#14B8A6',
                border: '1px solid #E5E7EB'
              }}
            >
              <Github size={22} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-lg transition-all hover:shadow-md"
              style={{
                background: '#FFFFFF',
                color: '#2563EB',
                border: '1px solid #E5E7EB'
              }}
            >
              <Mail size={22} />
            </a>
            {personal.twitter && (
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all hover:shadow-md"
                style={{
                  background: '#FFFFFF',
                  color: '#14B8A6',
                  border: '1px solid #E5E7EB'
                }}
              >
                <Twitter size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}