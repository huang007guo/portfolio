---
description: 
alwaysApply: false
enabled: true
updatedAt: 2026-05-12T02:49:47.281Z
provider: 
---

# 全局代理配置规则

## 代理设置

如果需要访问外网或需要翻墙时，必须使用以下代理：

```bash
export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890
export all_proxy=socks5://127.0.0.1:7890
```

## 适用场景

所有涉及外网访问的操作必须通过上述代理进行，包括但不限于：
- Web 搜索
- API 调用
- 插件下载
- 外部资源获取