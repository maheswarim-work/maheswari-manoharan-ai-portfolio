'use client'

import { portfolioData } from '../data/portfolio'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="section-spacing" style={{background: 'white'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-8" style={{color: '#1E3A8A'}}>
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="card" style={{background: '#FAFAFA', borderColor: '#E5E7EB'}}>
            <div className="text-center">
              <p className="mb-10 readable-text" style={{fontSize: '19px', color: '#111827', fontWeight: '500', lineHeight: '1.8'}}>
                I'm always interested in hearing about new opportunities and exciting projects.
                Feel free to reach out if you'd like to connect!
              </p>

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