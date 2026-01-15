import { Github, Linkedin, Mail } from "lucide-react"

const certificationsData = [
  
  {
   title: "Basics of Ethical Hacking",
    issuer: "Great Learning",
    date: "2024",
  },
  {
    title: "Bypass CTF",
    issuer: "CTF Competition",
    date: "2025",
  },
  {
    title: "SEA CTF",
    issuer: "Cybersecurity CTF",
    date: "2025",
  },
  {
    title: "LEMON CTF",
    issuer: "amrita viswavidyapeetham",
    date: "2025",
  },
  {
    title: "Ethical hacking from scratch to advanced",
    issuer: "udemy",
    date: "2025",
  },
  {
   title: "CTF Participation – KashiCTF",
    issuer: "IIT (BHU) Varanasi",
    date: "2025",
  },
   {
    title: "Fundamentals of Data Science (FDS)",
    issuer: "Infosys Springboard",
    date: "2024",
  },
  {
    title: "Data Structures and Algorithms (DSA)",
    issuer: "Infosys Springboard",
    date: "2024",
  },
  {
    title: "Cybersecurity Internship Certificate",
    issuer: "Industry Internship Program",
    date: "2025",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Certifications
        </h2>

        <div className="space-y-4">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-cyan-400">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
              <span className="text-cyan-300 font-semibold">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-20 pt-12 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Let's connect and create something amazing together</p>
          <div className="flex justify-center gap-8 mt-4">
  <a
    href="https://github.com/shyam-I"
    target="_blank"
    className="p-4 rounded-full border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:scale-110 transition"
  >
    <Github size={28} />
  </a>

  <a
    href="https://www.linkedin.com/in/rtr-shyam-i"
    target="_blank"
    className="p-4 rounded-full border border-blue-400/40 text-blue-400 hover:bg-blue-400/10 hover:scale-110 transition"
  >
    <Linkedin size={28} />
  </a>

  <a
    href="mailto:shyamhari2204@email.com"
    className="p-4 rounded-full border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 hover:scale-110 transition"
  >
    <Mail size={28} />
  </a>
</div>

          <p className="text-gray-500 text-sm mt-8">© 2025 Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
