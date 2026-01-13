const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "MongoDB", "GraphQL"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker",  "Vercel", "Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "Nmap", "OWASP ZAP", "Postman",],
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX", "Responsive Design", "Animation", "Accessibility"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
