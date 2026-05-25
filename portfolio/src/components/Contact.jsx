import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('感谢您的留言！我会尽快回复您。')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>联系我</h2>
                
                <div className="contact-content">
                  <div className="contact-info">
                    <h3>期待与您合作</h3>
                    <p>
                      我始终开放讨论新项目、创意想法，或成为您愿景的一部分的机会。
                      无论是技术架构设计、AI应用开发，还是团队技术转型，我都愿意与您深入交流。
                    </p>
                    
                    <div className="contact-details">
                      <div className="contact-item">
                        <strong>电话</strong>
                        <a href="tel:13916994003">139-1699-4003</a>
                      </div>
                      
                      <div className="contact-item">
                        <strong>邮箱</strong>
                        <a href="mailto:huang007guo@qq.com">huang007guo@qq.com</a>
                      </div>
                      
                      <div className="contact-item">
                        <strong>期望城市</strong>
                        <p>上海</p>
                      </div>
                      
                      <div className="contact-item">
                        <strong>求职意向</strong>
                        <p>架构师（期望薪资：25-35K）</p>
                      </div>
                    </div>
                    
                    <div className="social-links">
                      <a href="https://blog.csdn.net/huang007guo" className="social-link" title="CSDN博客" target="_blank" rel="noopener noreferrer">CSDN</a>
                      <a href="https://gitee.com/huang007guo" className="social-link" title="Gitee">Gitee</a>
                      <a href="https://www.huggingai.com/" className="social-link" title="HuggingAI">HuggingAI</a>
                      <a href="#" className="social-link" title="GitHub">GitHub</a>
                    </div>
                  </div>
                  
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">姓名</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="您的姓名"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">邮箱</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">主题</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="主题"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">留言</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="您的留言..."
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn">发送留言</button>
                  </form>
                </div>
              </div>
            </section>
  )
}

export default Contact
