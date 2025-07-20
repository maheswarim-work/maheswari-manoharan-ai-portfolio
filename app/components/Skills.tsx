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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Expertise
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
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