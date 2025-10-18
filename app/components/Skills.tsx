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
        <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#2563EB'}}>
          Skills & Expertise
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#374151'}}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                    style={{
                      background: '#FFFFFF',
                      color: '#1E293B',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
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