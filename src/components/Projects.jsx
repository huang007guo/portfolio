import { Icon } from '@iconify/react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: '我爱健康创新药店ERP系统',
      description: '主导设计开发面向连锁药店的综合性ERP管理系统，实现药品进销存、财务、客户关系的全流程数字化管控，深度集成GSP合规监管、医保结算、线上平台订单及互联网医院等行业特色功能。',
      tags: ['Spring Boot', 'Spring Cloud', 'Vue2', 'MySQL', 'Redis', 'Docker'],
      image: '项目 1',
      link: 'https://test2.seestech.com/pharmacyh5',
      github: '#'
    },
    {
      id: 2,
      title: '拥抱人工智能 (HuggingAI)',
      description: '独立开发的AI服务平台，提供AI绘图、AI图生图服务，基于Stable Diffusion开发。独立完成从域名申请、网站备案、产品设计到代码开发、部署上线的全流程。',
      tags: ['Python', 'Stable Diffusion', 'Vue3', 'uni-app', 'PyTorch', 'Spring Boot'],
      image: '项目 2',
      // link: 'https://www.huggingai.com/',
      link: 'https://mp.weixin.qq.com/s?__biz=MzkzNTQyOTUyOA==&mid=2247484580&idx=1&sn=82156b943b5efb16355583e294f33668&chksm=c2af5053f5d8d945bbe245b85484df98c9d6f1d1c6f96ac1d774b1e8f276052fe1298cf13913&scene=178&cur_album_id=2972072666612400132&search_click_id=#rd',
      github: '#'
    },
    {
      id: 3,
      title: '国民健康SaaS诊所平台',
      description: '全套医药SaaS平台，支持医院、诊所进行线上管理员工、医生、患者、医院诊所基本信息，并可进行在线挂号、问诊、开药、收费、发药、财务管理等，已获得互联网医院牌照。',
      tags: ['Spring Boot', 'Spring Cloud', 'Apollo', 'XXL-JOB', 'Skywalking', 'RabbitMQ'],
      image: '项目 3',
      link: 'https://www.nahefa.com.cn/',
      github: '#'
    },
    {
      id: 4,
      title: '国民健康统一支付系统',
      description: '对内部外部所有服务聚合支付能力的统一支持，聚合微信、支付宝、联动（银行卡）统一在一个系统里，并通过AES+RSA的双向加密传输手段保证支付业务的安全可靠。',
      tags: ['Spring Boot', 'Spring Cloud', '微信支付', '支付宝', 'AES', 'RSA'],
      image: '项目 4',
      link: 'https://www.nahefa.com.cn/',
      // github: 'https://gitee.com/huang007guo/Rsa-Random-Aes-Pay-Crypt'
      github: '#'

    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2><Icon icon="mdi:briefcase" className="section-icon" />精选项目</h2>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Icon icon="mdi:code-tags" className="project-image-icon" />
              </div>

              <div className="project-content">
                <h3><Icon icon="mdi:rocket-launch" className="project-title-icon" />{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag"><Icon icon="mdi:tag" className="tag-icon" />{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.link !== '#' && (
                    <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                      <Icon icon="mdi:open-in-new" className="btn-icon" />查看详情
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <Icon icon="mdi:github" className="btn-icon" />GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
