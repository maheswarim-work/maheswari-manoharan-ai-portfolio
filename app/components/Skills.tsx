import { portfolioData } from '../data/portfolio'

export default function Skills() {
  const { skills } = portfolioData

  const skillCategories = [
    { title: 'Cloud Platforms', items: skills.cloud },
    { title: 'Development', items: skills.development },
    { title: 'Data & Analytics', items: skills.data },
    { title: 'Tools & DevOps', items: skills.tools },
    { title: 'Methodologies', items: skills.methodologies },
  ]

  return (
    <section id="skills" className="section-spacing">
      <div className="container mx-auto px-5 sm:px-6">
        <h2 className="text-center mb-12">
          Skills & Expertise
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}