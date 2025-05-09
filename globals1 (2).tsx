import dynamic from "next/dynamic"

// Import components with dynamic loading to prevent hydration issues
const Hero = dynamic(() => import("@/components/hero"), { ssr: true })
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: true })
const AboutMe = dynamic(() => import("@/components/about-me"), { ssr: true })
const Skills = dynamic(() => import("@/components/skills"), { ssr: true })
const Services = dynamic(() => import("@/components/services"), { ssr: true })
const Projects = dynamic(() => import("@/components/projects"), { ssr: true })
const Contact = dynamic(() => import("@/components/contact"), { ssr: true })
const Footer = dynamic(() => import("@/components/footer"), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen bg-bege text-rosa">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
