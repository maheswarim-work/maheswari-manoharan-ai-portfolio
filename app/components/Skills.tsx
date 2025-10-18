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
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#0C4A6E'}}>
          Skills & Expertise
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#0E7490'}}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(10px)',
                      color: '#0C4A6E',
                      border: '2px solid rgba(6, 182, 212, 0.4)',
                      boxShadow: '0 2px 8px rgba(6, 182, 212, 0.15)'
                    }}
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