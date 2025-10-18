'use client'

import { portfolioData } from '../data/portfolio'
import { Mail, Linkedin, Github, MapPin, Download, FileText } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="section-spacing">
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-12">
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="card">
            <div className="text-center">
              <p className="mb-8 readable-text">
                I'm always interested in hearing about new opportunities and exciting projects.
                Feel free to reach out if you'd like to connect!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="/Maheswari_Manoharan_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                    color: 'white',
                    fontSize: '17px'
                  }}
                >
                  <Download size={20} />
                  <span>Download Résumé (PDF)</span>
                </a>
                <a
                  href="/Maheswari_Manoharan_Resume.docx"
                  download
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    color: 'white',
                    fontSize: '17px'
                  }}
                >
                  <FileText size={20} />
                  <span>Download Résumé (DOCX)</span>
                </a>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center justify-center space-x-3 transition-colors text-lg hover:text-blue-600"
                  style={{color: '#111827'}}
                >
                  <Mail size={22} />
                  <span>{personal.email}</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 transition-colors text-lg hover:text-blue-600"
                  style={{color: '#111827'}}
                >
                  <Linkedin size={22} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 transition-colors text-lg hover:text-blue-600"
                  style={{color: '#111827'}}
                >
                  <Github size={22} />
                  <span>GitHub Profile</span>
                </a>

                <div className="flex items-center justify-center space-x-3 text-lg" style={{color: '#4B5563'}}>
                  <MapPin size={22} style={{color: '#2563EB'}} />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}