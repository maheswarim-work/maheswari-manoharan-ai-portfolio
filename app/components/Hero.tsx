import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-5 sm:px-6 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6 px-4">
            <span className="text-gradient-pink">{personal.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 px-4 leading-relaxed" style={{color: '#374151'}}>
            {personal.title}
          </h2>
          <p className="text-base sm:text-lg mb-10 px-4" style={{color: '#6B7280'}}>
            {personal.location}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-4 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
            >
              <Mail size={28} />
            </a>
            {personal.twitter && (
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
              >
                <Twitter size={28} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}