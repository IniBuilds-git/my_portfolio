import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import { aboutData } from '@/data/about'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="bg-gray-50">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {aboutData.bio}
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section>
        <Container>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="grid gap-8">
              {aboutData.experience.map((exp, index) => (
                <Card key={index} hover={false}>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section className="bg-gray-50">
        <Container>
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aboutData.skills.map((skill, index) => (
                <Card key={index}>
                  <h3 className="font-semibold text-gray-900 mb-3">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </main>
  )
}