---
title: Data Automation Plan — Club Season 2026/27
type: project
status: planned
last_updated: 2026-07-08
---

# Data Automation Plan — Club Season 2026/27

## Problem
Current workflow (user sends screenshots → Claude extracts data → vault updated) works for WC (1-2 matches/week) but breaks at club football scale (10+ matches/weekend across multiple leagues).

## Goal
Semi-automated data ingestion so the vault updates with minimal manual effort before each match. User reviews and confirms; Claude runs the model.

---

## Target Data Sources

| Source | Data available | Cost | Effort to build |
|--------|---------------|------|-----------------|
| **FBRef** (scrape) | GK stats, shooting, On-Off, fouls, cards, pressing, SoT, SoTA-allowed | Free | 1-2 days |
| **Understat** (scrape) | xG/game, shot maps, xGA/game per team per match | Free | 1 day |
| **football-data.org** (API) | Fixtures, results, standings, basic stats | Free tier | Half a day |
| **StatsBomb API** | Opta-equivalent: PPDA, through balls, sequences, set piece xG | Paid | 2-3 days |

**Priority combination:** FBRef + Understat covers ~80% of model inputs for free. PPDA is the main gap — check if FBRef pressing stats suffice before paying for StatsBomb.

---

## Proposed Workflow (Club Season)

```
Match announced (fixture confirmed)
    ↓
Script runs automatically:
  - FBRef: pulls GK, shooting, On-Off, misc (fouls/cards) for both teams
  - Understat: pulls xG/game, xGA/game for both teams
  - football-data.org: pulls fixture context, recent form, standings
    ↓
Data formatted into vault-compatible markdown and staged
    ↓
User reviews staged data (5 min check vs 30 min screenshots)
    ↓
Claude runs model → prediction filed
```

---

## Build Phases

### Phase 1 — FBRef scraper (start here)
- Python script using `requests` + `BeautifulSoup`
- Inputs: team name + season
- Outputs: structured markdown block matching vault format (GK table, Shooting table, On-Off table, Misc table)
- Target leagues: Premier League, La Liga, Champions League, Serie A, Bundesliga

### Phase 2 — Understat scraper
- Python script pulling team xG/game and xGA/game
- Merge output into Phase 1 markdown block

### Phase 3 — Referee data
- Footystats referee profiles are scrapeable
- Pull YC/game and fouls/game per referee automatically when fixture + referee is confirmed

### Phase 4 — football-data.org API
- Fixture metadata, recent results, standings
- Use for competition context pages (auto-update standings each matchday)

### Phase 5 — PPDA decision point
- Check if FBRef pressing stats (PPDA equivalent) are sufficient for the model
- If not, evaluate StatsBomb pricing for indie developers
- PPDA is used in: goals model (opponent adjustment), corner model (possession-PPDA factor)

---

## Chatbot Integration
Once automation is built, the same pipeline feeds the public chatbot app:
- Vault auto-updated after each matchday
- Chatbot answers from fresh vault data
- No manual screenshot workflow needed at all

See related plan: club chatbot app (to be created pre-season 2026/27).

---

## Timeline
- **Now → WC Final:** Continue manual screenshot workflow. Use remaining WC matches to finalise and validate v3.0 model.
- **Post-WC (July/Aug 2026):** Build Phase 1 + 2 scrapers during pre-season.
- **Pre-season friendlies:** Test scrapers on real matches with low stakes.
- **Season start (Aug 2026):** Full automated workflow live.

---

## Links
- [[Models/opponent-adjusted-sot-model]]
- [[Models/ancillary-markets-model]]
