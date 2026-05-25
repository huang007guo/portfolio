import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>关于我</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              计算机专业毕业，在校获得过信息技术大赛一等奖、优秀毕业生、软考程序员等荣誉。
              拥有15年开发架构经验，具备扎实的Java、C语言基础，熟练掌握Spring Boot、Spring Cloud等主流框架，
              编程语言栈覆盖PHP、Python、JavaScript、Vue等。
            </p>
            
            <p>
              对AI编程技术充满热情，持续关注并实践最新的AI辅助开发工具，包括GitHub Copilot、Cursor、
              Claude Code、腾讯CodeBuddy、阿里Qoder等主流AI编程平台。深入了解AI原生开发环境、
              智能体编程、多模态交互等前沿技术趋势，能够熟练运用AI工具提升代码质量与开发效率。
            </p>

            <p>
              具备快速学习和使用新工具的能力，可迅速适应不同公司的技术架构。深刻理解产品业务逻辑，
              工作踏实肯干，多次获得优秀员工表彰。性格开朗，善于团队协作，能快速融入新环境。
              业余时间积极参与技术社区交流，关注AI编程领域最新动态，乐于通过博客、开源项目等方式持续学习。
            </p>

            <h3>专业技能</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>后端技术</h4>
                <ul>
                  <li>Java / Spring Boot / Spring Cloud</li>
                  <li>Python / Django / Flask</li>
                  <li>PHP / Laravel</li>
                  <li>微服务架构 / 分布式系统</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>前端技术</h4>
                <ul>
                  <li>Vue.js / Vue3</li>
                  <li>JavaScript / TypeScript</li>
                  <li>React / HTML5 / CSS3</li>
                  <li>uni-app</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>AI & 工具</h4>
                <ul>
                  <li>Stable Diffusion / AIGC</li>
                  <li>GitHub Copilot / Cursor</li>
                  <li>Claude Code / CodeBuddy</li>
                  <li>Docker / Git / CI/CD</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">年工作经验</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">项目完成</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">技术栈掌握</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
