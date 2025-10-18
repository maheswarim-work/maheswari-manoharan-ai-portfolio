import { Twitter, Linkedin, Github, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export default function Footer() {
  const { personal } = portfolioData

  return (
    <footer className="bg-gradient-to-r from-slate-100 to-slate-50 text-gray-800 py-10 border-t border-slate-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Maheswari Manoharan. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}