import { portfolioData } from '../data/portfolio'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
          
          <div className="space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center justify-center space-x-3 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <Mail size={20} />
              <span>{personal.email}</span>
            </a>
            
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <Github size={20} />
              <span>GitHub Profile</span>
            </a>
            
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <MapPin size={20} />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}