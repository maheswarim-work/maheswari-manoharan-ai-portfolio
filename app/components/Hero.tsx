import { portfolioData } from '../data/portfolio'
import { Github, Linkedin, Mail, Twitter, Download, FileText } from 'lucide-react'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 px-4">
            <span className="text-gradient-pink">{personal.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 px-4 leading-relaxed">
            {personal.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mb-6 px-4">
            {personal.location}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 px-4">
            <a
              href="/Maheswari_Manoharan_Resume.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                color: 'white'
              }}
            >
              <Download size={18} />
              <span>Resume (PDF)</span>
            </a>
            <a
              href="/Maheswari_Manoharan_Resume.docx"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                color: 'white'
              }}
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
              className="p-3 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
            {personal.twitter && (
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sky-100 text-sky-700 rounded-full hover:bg-sky-200 transition-all hover:scale-110"
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