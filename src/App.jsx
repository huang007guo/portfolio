import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} 黄国梁. All rights reserved.</p>
        <p className="footer-description">AI应用开发工程师 / 架构师 | 15年软件开发经验</p>
      </footer>
    </div>
  )
}

export default App
