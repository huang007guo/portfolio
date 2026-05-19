---
name: ai-native-startup-founders-playbook
description: >
  This skill provides the Anthropic Founder's Playbook framework for building AI-native startups.
  It should be used when the user is planning, building, or scaling a startup using AI tools (especially Claude),
  including: validating startup ideas, building MVPs, launching products, scaling operations,
  finding product-market fit, designing go-to-market strategies, or seeking guidance on
  AI-native entrepreneurship. Trigger keywords include: startup,创业, MVP, PMF, product-market fit,
  产品市场匹配, go-to-market, GTM, 创业阶段, 想法验证, 规模化, founder, 创始人, AI创业.
---

# AI-Native Startup Founder's Playbook

## Overview

This skill encapsulates Anthropic's official "The Founder's Playbook" — a step-by-step framework for building AI-native startups in 2026. It covers the full startup lifecycle from idea validation to scaling, with specific guidance on leveraging Claude (and similar AI tools) at each stage. The playbook redefines what it means to be a founder: from individual contributor to AI agent orchestrator.

## When to Use This Skill

Invoke this skill when the user is:

- **Planning a new startup** — validating an idea, researching a market, defining a problem
- **Building an MVP** — making architecture decisions, scoping features, coding with AI
- **Preparing for launch** — setting up growth engines, hardening infrastructure, establishing operations
- **Scaling a startup** — building organizational functions, hiring, creating moats
- **Facing a startup challenge** — pivoting, technical debt, founder bottleneck, false PMF signals
- **Asking about AI-native entrepreneurship** — how to use Claude/Claude Code/Claude Cowork to build faster

## The Four-Stage Framework

The playbook divides startup building into four sequential stages. Each stage has clear goals, exit criteria, common pitfalls, and Claude-powered tactics. Reference `references/founders-playbook.md` for the complete playbook with detailed instructions.

### Stage 1: Idea (想法阶段)

**Goal**: Collect solid evidence that a problem is real and the solution can solve it — before writing any code.

**What the AI should help the user do**:
1. Turn vague complaints into testable hypotheses (e.g., "reimbursement is painful" -> "mid-size company finance managers spend 4+ hours/week reconciling reimbursements because existing tools don't integrate with accounting software")
2. Pressure-test the problem hypothesis — have Claude act as devil's advocate to find counter-evidence
3. Conduct market research: competitive landscape, TAM/SAM/SOM, trend analysis
4. Plan customer discovery interviews (avoid leading questions)
5. Use Claude Cowork to automate outreach, scheduling, and follow-up
6. Design the solution concept and challenge gaps

**Exit criteria**: Can answer "yes" to all three: (1) problem is real and specific, (2) solution maps to a real problem, (3) enough qualitative evidence to justify building an MVP.

**Critical anti-pattern**: Using AI to "build" as a substitute for "validate". 42% of startups fail because they build something nobody wants. A prototype is not validation evidence — it's a stress-test prop.

### Stage 2: MVP (MVP 阶段)

**Goal**: Turn a validated problem into a working product, collect evidence of product-market fit (PMF), avoid compounding technical debt, and build persistent context from day one.

**What the AI should help the user do**:
1. **Define architecture before building** — create a CLAUDE.md file as the codebase's persistent memory and development guardrails
2. **Define and enforce MVP scope** — write a scope document, pressure-test new feature ideas
3. **Build with Claude Code** — base every session on scope doc + CLAUDE.md, update decision log at end of each session
4. **Security review before any user touches the product** — audit auth, data exposure, input validation, dependency vulnerabilities
5. **Set up measurement framework before launch** — define metrics, baselines, PMF patterns vs false positives
6. **Manage user discovery operations** — use Claude Cowork for outreach, scheduling, bug triage, weekly summaries (but humans must stay in the feedback interpretation loop)
7. **Iterate toward evidence, not toward "done"** — use Sean Ellis test (40% "very disappointed" threshold) and effort test (retention without heroic intervention)
8. **Pivot when data demands it** — if multiple iterations show no PMF, diagnose alternative segments, value communication issues, or fundamental changes

**Exit criteria**: Concrete, identifiable user group finds the product valuable — they return (retention), pay (revenue), or recommend (referral).

**Critical anti-patterns**: Agentic technical debt (architecture drift from session-by-session reasoning), mistaking false PMF for real PMF, frictionless scope creep, and insecure code from inexperience.

### Stage 3: Launch (发布阶段)

**Goal**: Convert early momentum into a repeatable, sustainable growth engine while hardening product infrastructure and building real company operations.

**What the AI should help the user do**:
1. **Settle technical debt** — run architecture reviews with Claude Code, prioritize fixes, update CLAUDE.md
2. **Build systems that replace founder attention** — audit operational load with Claude Cowork, categorize into automatable/delegatable/founder-judgment, design automation workflows
3. **Make security and compliance part of the product workflow** — scan code with Claude Code, design controls and audit logs, maintain compliance docs
4. **Establish product management processes** — design sprint cadence, spec templates, bug triage trees, weekly metric briefings

**Exit criteria**: (1) repeatable, channel-driven growth with clear CAC/LTV/payback period, (2) product withstands production workloads, (3) operations run without founder as bottleneck.

**Critical anti-pattern**: Founder becomes the bottleneck by staying involved in every aspect. Shift from doing things yourself to designing systems that do things.

### Stage 4: Scale (规模化阶段)

**Goal**: Transition from builder to public-facing executive, expand infrastructure and organization from thousands to millions of users, build systematic growth, and accumulate depth to create defensible moats.

**What the AI should help the user do**:
1. **Hand off daily tasks to Claude Cowork** — map bottlenecks, pressure-test systems at scale, fix handoff standards
2. **Upgrade technical operations to enterprise infrastructure** — product docs, support playbooks, SLAs, code-level reliability hardening
3. **Build a real GTM function** — segmentation, messaging architecture, sales playbooks, investor narratives, content pipelines
4. **Convert domain expertise into AI context** — capture founder knowledge through long conversations and Projects, encode repeat workflows as Skills, encode industry edge cases as test cases with Claude Code
5. **Compound accumulated user data** — audit interaction data, identify behavioral patterns, design feedback loops
6. **Create workflow lock-in** — audit customer workflow integration depth, build native integrations/APIs/webhooks

**Exit criteria**: Company runs sustainably even if the founder reduces day-to-day involvement. Growth is systematic and auditable, product moats withstand scrutiny, organization is mature.

## Key Principles to Reinforce

When advising users through any stage, always reinforce these principles:

1. **Validate before building** — AI makes building too easy; resist the temptation to skip validation
2. **Use CLAUDE.md from day one** — persistent context prevents agentic technical debt
3. **Founder's role is orchestrator, not IC** — design systems, don't just do the work
4. **PMF requires real evidence** — use Sean Ellis test (40% threshold), not vanity metrics
5. **Security is not optional** — AI generates functional code, not secure code; review before users touch it
6. **The bottleneck is now "what you choose to build", not "what you can build"**

## Resource Reference

The complete playbook with detailed Claude usage instructions, stage-specific challenges, real case studies, and tool summaries is available in:

- `references/founders-playbook.md` — Full translated playbook with all 7 chapters

Load this reference when the user needs detailed guidance on a specific stage, wants to see case studies, or asks about specific Claude tool applications.
