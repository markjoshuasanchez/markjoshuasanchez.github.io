import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="flex min-h-screen px-4 md:px-8 py-6 gap-8 ">
      <Sidebar />
      <main className="flex-1 space-y-16 pb-20">
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App