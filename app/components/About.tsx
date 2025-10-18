import { portfolioData } from '../data/portfolio'

export default function About() {
  const { personal } = portfolioData

  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="readable-text">
              <p className="mb-6">
                {personal.summary}
              </p>
              <p>
                With a strong foundation in computer science and over a decade of industry experience,
                I specialize in designing and implementing scalable cloud solutions, developing robust
                software applications, and leveraging data platforms to drive business insights. My
                expertise spans across multiple cloud providers and modern development frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}