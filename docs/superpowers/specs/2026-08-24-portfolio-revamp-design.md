# Portfolio Revamp — Design Spec

**Date:** 2026-08-24
**Branch:** `feat/portfolio-revamp` (off `refactor/ui`)
**Owner:** Himanshu Jain
**Status:** Approved direction; implementing + iterating live.

---

## 1. Goal

Turn the site from a tech-stack list into **evidence of engineering ability**. A visitor
should leave believing: *"This person takes products from zero to shipped, solo, across
the whole stack."* Not: *"This person knows React."*

**Audiences (in priority):**
1. Hiring managers / startup recruiters — skim in ~20s, need to believe he ships.
2. Founders hiring contract devs — need to believe he ships solo, fast.
3. Dev crowd (X / HN / GitHub) — peer respect → referrals. Convinced by depth + craft.

All three are won by the same thing: **visible, verifiable proof of hard systems built.**

## 2. Hard constraint: honesty

No fabricated metrics. Ever. One catchable exaggeration poisons every other claim and
destroys the exact trust we're building. Corollaries:

- **Remove the "production scale" claim.** Mintix has **no users**; founder is still doing
  demos to land the first client. Replace with truthful framing: *"built the full platform;
  company was pre-launch."* Stated up front, this reads senior, not as a gap.
- Proof comes from **scope + difficulty**, not scale: surfaces built, integration depth,
  timeline, real screenshots, hard problems told honestly.
- The **one real stat we have** is the GitHub contribution graph (verified live via API):
  2024: 1,707 · 2025: 2,305 · 2026: 2,554 (through Aug) · 848 distinct commit-days ·
  trailing 12mo ≈ 3,500+. This is what GitHub itself shows, so it self-verifies on click.
  Includes private-repo contributions (his real work) — legitimate, labelled only as
  "contributions," never as open-source.

## 3. Information architecture (single-page home + case-study routes)

| # | Section | Change |
|---|---|---|
| 1 | **Hero** | Positioning-first. One hard proof sentence. Availability demoted to a small status pill (still findable, no longer the opening line). |
| 2 | **Selected Work** | Replaces "Projects / Coming Soon". 2 real case-study cards → dedicated pages. Centerpiece, sits directly under hero. |
| 3 | **Experience** | Kept but compact. 3–4 concrete ownership bullets each. No paragraphs, no `Tech Stack: …` trailer. Cross-links to case studies. |
| 4 | **Activity (GitHub graph)** | KEPT. Headlined with the real number ("3,500+ contributions in the last year · 848 days shipping code") so it reads as proof of consistency, not bare squares. |
| 5 | **Stack** | Marquee killed. Static, grouped-by-role grid with icons + depth signal (primary vs. worked-with). |
| 6 | **About** | Short, specific, human. Replaces "passionate about emerging tech." |
| 7 | **Contact** | Real CTA (currently `contact-us.tsx` is empty). |

**Deletions:** "Coming Soon" div; `Tech Stack:` trailers; auto-scroll skills marquee (motion,
not the icons). **Kept:** GitHub link in dock, contribution graph, dark/light theme, Geist,
Lenis, narrow `max-w-2xl` column.

## 4. Selected Work — case-study system

**Home card:** screenshot (Mintix) or typographic/diagram treatment (Singapore, anonymized),
index number, role tag, one-line description, 3–4 key techs, `Case study →`.

**Two case studies only** (two done well > four padded):
- **01 · Mintix** — Founding Engineer. Full visual case study (has screenshots).
- **02 · Internal Work-Management Platform** — Freelance, Singapore, **anonymized** (no client
  name). A systems case study; leans on architecture/data-model, no screenshots needed.

GastroSmart (current employer) and Hexleap (FE intern, heavy NDA) stay as compact Experience
entries — no padded case-study pages.

**Case-study page = fixed 6-block skeleton** (each block ≈ one screen max; bail-friendly):

1. **Header** — name, role, dates, one-line what-it-is, live link if any.
2. **At a glance** — 3–4 stat tiles (scope facts only: Role, Scope/surfaces, Timeline
   `0→production-ready`, # integrations). Never invented user/revenue numbers.
3. **What I owned** — 5–7 bullets. The "solo, end-to-end" proof.
4. **Architecture** — one clean diagram + ~2 lines. Real if repo access; conceptual otherwise.
5. **Hard problems** — 2–3 items, each `Problem → Approach → Outcome`, ~3 lines. Wins the
   dev crowd (judgment, not tool-listing). Mintix candidates: scheduled on-chain minting,
   Stripe→mint handoff, seat-map sync, shared web/mobile logic.
6. **Gallery + links** — screenshots (Mintix), live/store links, next-project link.

## 5. Copy strategy

- Concrete over generic. Kill "passionate about emerging tech", "clean scalable code",
  "production-ready functionality" — every dev says these.
- Ownership + specifics. "Built the iOS scanner app" > "shipping features".
- Scannable. If a block needs a paragraph, it's too long. Screenshots/structure carry it.
- Don't over-disclose (boring + risk). Punchy, not exhaustive.

## 6. Visual direction (delegated to implementer; iterate live)

Scope = "case studies + design pass," NOT full custom-motion rebuild.
- Reduce the most recognizable stock-Aceternity tells (esp. the repeated marquee; reassess
  stars background, background-gradient, typewriter). Keep what still looks good.
- Tighten typography + hierarchy; introduce a small, consistent visual identity accent.
- Keep it fast, clean, dark/light. Static stat-tile / dot-depth pattern for stack.
- Exact visual treatment locked during implementation with the user.

## 7. Open inputs (placeholder until provided)

- **Mintix repo access?** → decides real vs. conceptual architecture diagram. *(pending)*
- **Mintix screenshots** — count + which surfaces (web / dashboard / scanner). *(user has some;
  will supply during iteration)*
- Any private-but-shareable Mintix facts (events onboarded, orgs in pilot). *(likely none yet)*

Build scaffolding with clearly-marked placeholders; user fills assets during iteration.

## 8. Explicit non-goals

- No fabricated metrics.
- No GastroSmart / Hexleap case-study pages.
- No college clone projects (twitter-clone, youtube-clone, etc.) shown anywhere.
- No long narrative prose.
- No full custom-motion rebuild (that was the declined "full rebuild" option).
