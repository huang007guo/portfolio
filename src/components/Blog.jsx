import { Icon } from '@iconify/react'
import './Blog.css'

function Blog() {
  const posts = [
    {
      id: 1,
      title: '基于微服务(Eureka)的优雅发布设计说明',
      excerpt: '为保证微服务上线时避免对线上业务的影响而设计的一套优雅发布流程和脚本支持。详细介绍如何使用Eureka REST API和Zuul实现服务的平滑发布。',
      date: '2022-11-09',
      readTime: '15 min read',
      tags: ['微服务', 'Spring Cloud', 'DevOps', 'Eureka'],
      link: 'https://blog.csdn.net/huang007guo/article/details/127773744'
    },
    {
      id: 2,
      title: 'java redis分布式互斥锁(基于lua脚本保证原子性)',
      excerpt: '详细介绍如何使用Redis和lua脚本实现分布式互斥锁，保证操作的原子性，解决分布式系统中的并发控制问题。',
      date: '2021-03-23',
      readTime: '12 min read',
      tags: ['Redis', '分布式锁', 'lua', 'Java'],
      link: 'https://blog.csdn.net/huang007guo/article/details/115143504'
    },
    {
      id: 3,
      title: 'springboot下使用Redisson(redlock, redis锁, 分布式锁)',
      excerpt: '介绍如何在Spring Boot项目中使用Redisson实现分布式锁，包括Redlock算法的应用，阅读量超过6000次。',
      date: '2019-11-06',
      readTime: '10 min read',
      tags: ['Spring Boot', 'Redisson', '分布式锁', 'Redis'],
      link: 'https://blog.csdn.net/huang007guo/article/details/102929337'
    },
    {
      id: 4,
      title: 'CLIP（Contrastive Language-Image Pre-Training）简介',
      excerpt: '介绍OpenAI的CLIP模型，讲解对比学习在语言-图像预训练中的应用，展示多模态AI技术的前沿进展。',
      date: '2022-10-28',
      readTime: '8 min read',
      tags: ['AI', 'CLIP', '多模态', '深度学习'],
      link: 'https://blog.csdn.net/huang007guo/article/details/127320524'
    },
    {
      id: 5,
      title: '一文搞懂反向传播算法',
      excerpt: '深入浅出地讲解神经网络中的反向传播算法，从数学原理到代码实现，帮助理解深度学习的核心机制。',
      date: '2020-06-04',
      readTime: '18 min read',
      tags: ['机器学习', '反向传播', '神经网络', '算法'],
      link: 'https://blog.csdn.net/huang007guo/article/details/106542781'
    },
    {
      id: 6,
      title: 'java虚拟机oom定位, java内存分析',
      excerpt: '详细介绍Java虚拟机OOM（Out Of Memory）问题的定位方法和内存分析技巧，帮助排查和解决内存泄漏问题。',
      date: '2020-11-20',
      readTime: '14 min read',
      tags: ['JVM', 'OOM', '内存分析', '性能优化'],
      link: 'https://blog.csdn.net/huang007guo/article/details/109576963'
    }
  ]

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <h2><Icon icon="mdi:post" className="section-icon" />技术博客</h2>
        <p className="blog-intro" data-reveal><Icon icon="mdi:information" className="intro-icon" />我在CSDN上分享了69篇技术文章，涵盖Java、Spring Boot、微服务架构、AI技术等多个领域。以下是精选文章：</p>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={post.id} className={`blog-card delay-${index + 1}`} data-reveal>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-date"><Icon icon="mdi:calendar" className="meta-icon" />{post.date}</span>
                  <span className="blog-read-time"><Icon icon="mdi:clock" className="meta-icon" />{post.readTime}</span>
                </div>

                <h3><Icon icon="mdi:file-document" className="blog-title-icon" />{post.title}</h3>
                <p>{post.excerpt}</p>

                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag"><Icon icon="mdi:tag" className="blog-tag-icon" />{tag}</span>
                  ))}
                </div>

                <a href={post.link} className="blog-read-more" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:arrow-right" className="read-more-icon" />阅读全文</a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <a href="https://blog.csdn.net/huang007guo" className="btn" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:book-open" className="btn-icon" />查看所有69篇文章
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
