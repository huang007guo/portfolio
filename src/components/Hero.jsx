import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">你好，我是</p>
          <h1 className="hero-name">黄国梁</h1>
          <p className="hero-title">AI应用开发工程师 / 架构师</p>
          <p className="hero-description">
            15年软件开发与架构经验，精通Java、Spring Cloud、Python、Vue等全栈技术。
            热爱AI编程技术，熟练使用GitHub Copilot、Cursor、Claude Code、腾讯CodeBuddy等AI开发工具。
            期待与您共同探索智能化开发流程，提升研发效能与创新能力。
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">查看项目</a>
            <a href="#contact" className="btn btn-secondary">联系我</a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <span>黄国梁</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
