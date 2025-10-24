"use client"

import { Icon } from "@iconify/react"
import Container from "./ui/Container"
import Section from "./ui/Section"
import AnimatedSection from "./ui/AnimatedSection"
import { tools as TOOL_GROUPS } from "@/data/tools" 

export default function Tools() {
  return (
    <Section id="tools">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">
            Tools & Technologies
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {TOOL_GROUPS.map((group, groupIndex) => (
            <AnimatedSection key={group.category} delay={groupIndex * 0.1}>
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 font-semibold">
                  {group.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-6">
                {group.items.map(tool => (
                  <div key={tool.name} className="flex items-center gap-2 text-gray-900 dark:text-gray-200">
                    <Icon icon={tool.icon} width="24" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  )
}