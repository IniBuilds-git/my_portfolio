import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  const activeProjects = projects.filter(project => project.status === 'Active')
  const completedProjects = projects.filter(project => project.status === 'Completed')

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="bg-gray-50">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Projects
              </h1>
              <p className="text-xl text-gray-600">
                A collection of projects I've built and contributed to over the years
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Active Projects */}
      <Section>
        <Container>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">Active Projects</h2>
            <p className="text-gray-600 mb-8">Projects I'm currently working on</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Completed Projects */}
      <Section className="bg-gray-50">
        <Container>
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold mb-4">Completed Projects</h2>
            <p className="text-gray-600 mb-8">Projects I've successfully delivered</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </main>
  )
}