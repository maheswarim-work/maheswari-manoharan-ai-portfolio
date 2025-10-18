import { portfolioData } from '../data/portfolio'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {personal.summary}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a strong foundation in computer science and over a decade of industry experience, 
            I specialize in designing and implementing scalable cloud solutions, developing robust 
            software applications, and leveraging data platforms to drive business insights. My 
            expertise spans across multiple cloud providers and modern development frameworks.
          </p>
        </div>
      </div>
    </section>
  )
}