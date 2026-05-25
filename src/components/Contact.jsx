// TODO: 后端就绪后恢复表单功能
// import { useState } from 'react'
import { Icon } from '@iconify/react'
import './Contact.css'

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // })
  //
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('Form submitted:', formData)
  //   alert('感谢您的留言！我会尽快回复您。')
  //   setFormData({ name: '', email: '', subject: '', message: '' })
  // }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2><Icon icon="mdi:email" className="section-icon" />联系我</h2>

                <div className="contact-content">
                  <div className="contact-info" data-reveal>
                    <h3><Icon icon="mdi:handshake" className="contact-heading-icon" />期待与您合作</h3>
                    <p>
                      我始终开放讨论新项目、创意想法，或成为您愿景的一部分的机会。
                      无论是技术架构设计、AI应用开发，还是团队技术转型，我都愿意与您深入交流。
                    </p>

                    <div className="contact-details">
                      <div className="contact-item">
                        <div className="contact-row">
                          <Icon icon="mdi:phone" className="contact-icon" />
                          <strong>电话</strong>
                        </div>
                        <a href="tel:139****4003">139-****-4003</a>
                      </div>

                      <div className="contact-item">
                        <div className="contact-row">
                          <Icon icon="mdi:email" className="contact-icon" />
                          <strong>邮箱</strong>
                        </div>
                        <a href="mailto:huang007guo@qq.com">huang007guo@qq.com</a>
                      </div>


                    </div>

                    <div className="social-links">
                      <a href="https://blog.csdn.net/huang007guo" className="social-link" title="CSDN博客" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:book-open" className="social-icon" />CSDN
                      </a>
                      <a href="https://gitee.com/huang007guo" className="social-link" title="Gitee">
                        <Icon icon="mdi:git" className="social-icon" />Gitee
                      </a>
                      <a href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkzNTQyOTUyOA==&action=getalbum&album_id=2972072666612400132&scene=173&from_msgid=2247483731&from_itemidx=1&count=3&nolastread=1#wechat_redirect" className="social-link" title="HuggingAI">
                        <Icon icon="mdi:robot" className="social-icon" />HuggingAI
                      </a>
                      <a href="https://github.com/huang007guo" className="social-link" title="GitHub">
                        <Icon icon="mdi:github" className="social-icon" />GitHub
                      </a>
                    </div>
                  </div>

                  {/* TODO: 后端就绪后恢复表单
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name"><Icon icon="mdi:account" className="form-icon" />姓名</label>
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
                      <label htmlFor="email"><Icon icon="mdi:email" className="form-icon" />邮箱</label>
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
                      <label htmlFor="subject"><Icon icon="mdi:format-title" className="form-icon" />主题</label>
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
                      <label htmlFor="message"><Icon icon="mdi:message-text" className="form-icon" />留言</label>
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

                    <button type="submit" className="btn">
                      <Icon icon="mdi:send" className="btn-icon" />发送留言
                    </button>
                  </form>
                  */}
                </div>
              </div>
            </section>
  )
}

export default Contact
