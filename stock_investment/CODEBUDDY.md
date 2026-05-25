# CODEBUDDY.md This file provides guidance to CodeBuddy when working with code in this repository.

## 项目概述

本工作区是 `ai_hope` 项目下的炒股理财子工作区，专注于股票投资研究、策略分析、投资组合管理和相关工具开发。

## 目录结构

```
stock_investment/
├── analysis/          # 股票分析报告（基本面、技术面、财务分析等）
├── strategies/        # 投资策略文档（量化策略、择时策略、风控规则等）
├── tools/             # 数据采集、回测、可视化等工具脚本
├── notes/             # 学习笔记、心得总结、会议纪要
├── portfolio/         # 投资组合跟踪、持仓记录、收益统计
└── README.md
```

## 技术栈约定

- **数据分析**：Python 为首选语言，使用 pandas、numpy 处理金融数据
- **数据源**：优先使用 tushare、akshare 等开源金融数据接口获取 A 股数据
- **可视化**：matplotlib、plotly 用于图表生成，mplfinance 用于 K 线图
- **回测框架**：backtrader 或 zipline-reloaded 用于策略回测验证
- **Web 展示**：需要前端展示时使用 Streamlit 快速搭建仪表盘

## 编码规范

- Python 文件头部添加 `# -*- coding: utf-8 -*-`，文件操作指定 `encoding='utf-8'`
- 输出信息使用纯 ASCII 字符，避免 emoji 和特殊 Unicode 字符（PowerShell 兼容性）
- 股票代码统一使用 6 位数字格式，市场前缀约定：`sh`（上海）、`sz`（深圳）
- 分析报告和策略文档使用 Markdown 格式，便于版本追踪
- 临时文件、测试脚本放入 `tmp/` 目录，不在业务目录中遗留临时文件

## 已安装外部工具

### TradingAgents-CN（多智能体股票分析平台）

- **描述**：基于多智能体 LLM 的中文金融交易分析框架，通过基本面/情绪/新闻/技术 4 类 AI 分析协作决策，支持 A 股/港股/美股分析
- **安装方式**：Docker 容器化部署
- **安装位置**：`G:\ai\TradingAgents-CN-main`
- **前端访问**：http://localhost:3000
- **后端 API**：http://localhost:8000
- **数据源**：默认 AKShare（免费），可选 Tushare/BaoStock
- **LLM 支持**：DeepSeek、阿里百炼、OpenAI 等，需在 Web 界面配置 API Key
- **仓库地址**：https://github.com/hsliuping/TradingAgents-CN

**Docker 管理命令**：
```powershell
cd G:\ai\TradingAgents-CN-main
docker-compose ps              # 查看服务状态
docker-compose up -d           # 启动服务
docker-compose stop            # 停止服务
docker logs tradingagents-backend --tail 50  # 查看后端日志
```

**容器组成**：backend (FastAPI)、frontend (Vue3+Nginx)、mongodb、redis

**注意事项**：
- 仅用于研究和教育目的，不构成投资建议
- 首次使用前需在 Web 界面配置至少一个 LLM API Key
- Docker Desktop 重启后需重新执行 `docker-compose up -d` 启动服务

---

## 常见工作流

### 数据获取与分析
1. 使用 akshare/tushare 获取行情数据、财务数据
2. 数据存入 `tools/` 下的 CSV 或本地 SQLite 数据库
3. 分析报告输出到 `analysis/` 目录，按日期或股票代码命名

### 策略开发
1. 策略思路记录在 `strategies/` 中
2. 使用 backtrader 进行回测验证
3. 回测结果包含收益率、最大回撤、夏普比率等核心指标
4. 实盘前需经过充分历史数据验证和模拟交易

### 投资组合管理
1. 持仓信息记录在 `portfolio/` 中
2. 定期更新持仓市值和收益统计
3. 关注行业分布和风险敞口

## 注意事项

- 本工作区为个人投资研究用途，所有分析和策略仅供参考，不构成投资建议
- 涉及真实交易数据的脚本需注意 API key 等敏感信息不要提交到版本控制
- 数据文件（CSV、数据库文件）建议在 .gitignore 中排除，仅保留分析和策略文档
- 回测结果不代表未来收益，策略文档中应明确标注回测假设和局限性
