import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen gradient-pink-mild">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  )
}
