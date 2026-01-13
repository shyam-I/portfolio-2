export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
             I’m Shyam I, a Computer and Communication Engineering student passionate about cybersecurity, data analytics, and financial markets. I actively participate in CTF competitions and security research, and I also trade the NIFTY 50, using price action and market structure to make disciplined, high-probability decisions. I enjoy solving complex problems, whether in code, security, or the stock market.
            </p>
            {/* <p className="text-gray-300 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve complex problems through elegant
              solutions. I believe in the power of clean code and thoughtful design.
            </p> */}
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <h3 className="text-cyan-400 font-semibold mb-2">Experience</h3>
              <p className="text-gray-300 text-sm">2+ years in web development, design, and security</p>
              <p className="text-gray-300 text-sm">3+ years in Trading </p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <h3 className="text-cyan-400 font-semibold mb-2">Focus</h3>
              <p className="text-gray-300 text-sm">React, Next.js, TypeScript, and modern UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
