import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const clampScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY > maxScroll - 1) {
        window.scrollTo(0, maxScroll)
      }
      requestAnimationFrame(clampScroll)
    }
    
    clampScroll()
    
    return () => {}
  }, [])

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
