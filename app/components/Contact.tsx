'use client'

import { portfolioData } from '../data/portfolio'
import { Mail, Linkedin, Github, MapPin, Twitter } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="py-16" style={{background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFC 100%)'}}>
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-16" style={{color: '#1E3A8A', fontSize: '36px', fontWeight: '700'}}>
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="card" style={{
            background: 'linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 100%)',
            border: '2px solid #BFDBFE',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
            <div className="text-center">
              <p className="mb-12 readable-text" style={{fontSize: '18px', color: '#1E3A8A', fontWeight: '500', lineHeight: '1.8'}}>
                I'm always interested in hearing about new opportunities and exciting projects.
                Feel free to reach out if you'd like to connect!
              </p>

              <div className="space-y-5">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center justify-center space-x-3 transition-all text-lg hover:scale-105 group"
                  style={{color: '#1E3A8A', fontWeight: '500'}}
                >
                  <div className="p-2.5 rounded-lg group-hover:scale-110 transition-transform" style={{background: '#2563EB'}}>
                    <Mail size={20} style={{color: 'white'}} />
                  </div>
                  <span className="group-hover:text-blue-600">{personal.email}</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 transition-all text-lg hover:scale-105 group"
                  style={{color: '#1E3A8A', fontWeight: '500'}}
                >
                  <div className="p-2.5 rounded-lg group-hover:scale-110 transition-transform" style={{background: '#0EA5E9'}}>
                    <Linkedin size={20} style={{color: 'white'}} />
                  </div>
                  <span className="group-hover:text-blue-600">LinkedIn Profile</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 transition-all text-lg hover:scale-105 group"
                  style={{color: '#1E3A8A', fontWeight: '500'}}
                >
                  <div className="p-2.5 rounded-lg group-hover:scale-110 transition-transform" style={{background: '#06B6D4'}}>
                    <Github size={20} style={{color: 'white'}} />
                  </div>
                  <span className="group-hover:text-blue-600">GitHub Profile</span>
                </a>

                {personal.twitter && (
                  <a
                    href={personal.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 transition-all text-lg hover:scale-105 group"
                    style={{color: '#1E3A8A', fontWeight: '500'}}
                  >
                    <div className="p-2.5 rounded-lg group-hover:scale-110 transition-transform" style={{background: '#0EA5E9'}}>
                      <Twitter size={20} style={{color: 'white'}} />
                    </div>
                    <span className="group-hover:text-blue-600">Twitter Profile</span>
                  </a>
                )}

                <div className="flex items-center justify-center space-x-3 text-lg" style={{color: '#1E3A8A', fontWeight: '500'}}>
                  <div className="p-2.5 rounded-lg" style={{background: '#F59E0B'}}>
                    <MapPin size={20} style={{color: 'white'}} />
                  </div>
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