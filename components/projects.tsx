"use client"

import { useState } from "react"

const projectsData = [
  {
    id: 1,
    title: "finance manager",
    description: "A revolutionary web application built with React and Next.js",
    tags: ["React", "Next.js", "TypeScript"],
    link: "https://github.com/shyam-I/finance-manager-.git",
  },
  {
    id: 2,
    title: "od-portal",
    description: "Real-time collaboration platform ot accept OD requests",
    tags: ["Node.js", "JavaScript", "React"],
    link: "https://github.com/shyam-I/od-portal.git",
  },
  {
    id: 3,
    title: "Arima model for disease prediction",
    description: "Analyzing and forecasting disease trends using ARIMA model",
    tags: ["Python", "React",],
    link: "https://github.com/shyam-I/ARIMA-.git",
  },
  {
    id: 4,
    title: "Firewall for SQL Injection Attacks",
    description: "Analyzing and forecasting disease trends using ARIMA model",
    tags: ["Python", "React",],
    link: "https://github.com/shyam-I/Demostrate-sql-firewall.git"
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative p-6 rounded-lg bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Glow effect on hover */}
              {hoveredId === project.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-xl" />
              )}

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
