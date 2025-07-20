import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            <span className="text-gradient-pink">{personal.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            {personal.title}
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            {personal.location}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
            {personal.twitter && (
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-all hover:scale-110"
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