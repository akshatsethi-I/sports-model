---
title: Lesson — Raw SoT Averages Mislead Against Compact Defenses
type: lesson
confidence: High
last_updated: 2026-06-27
---

# Raw SoT Averages Mislead Against Compact Defenses

## The Lesson
Never use a team's raw SoT/game average to project goals against a compact or desperate opponent. The opponent's defensive quality compresses shot volume significantly. Always use the opponent-adjusted SoT model.

## Evidence

### Spain vs Uruguay MD3 (WC2026)
- Spain averages 7.5 SoT/game across MD1-2
- Uruguay (PPDA 10.1, compact mid-block, desperate for a result) allowed only 4.5 SoT/game to opponents
- Applying raw Spain average to Uruguay's GK: 7.5 × (1 − 57.1%) = 3.2 expected goals
- But adjusted for Uruguay's defensive quality: 7.5 × (4.5/5.5) = 6.1 adjusted SoT → then × 42.9% = **2.6 expected goals**
- Actual result: Spain 1-0 — low-scoring as the compact defense predicted

### The Lesson Applied
In a previous prediction error: Spain Over 2.5 was given a high rating based on Spain's raw SoT numbers against Muslera's save rate. Uruguay's compact, desperate defensive setup compressed Spain's output. The match ended 1-0.

The opponent-adjusted model accounts for:
- How many SoT does the opponent typically *allow* (their defensive quality)?
- Adjust the attacking team's SoT downward if the opponent allows below-average SoT

## Confidence
**High** — Confirmed empirically. The model was correct; applying raw averages was not.

## How to Apply
```
Adjusted SoT = Team SoT/game × (Opponent SoT allowed/game ÷ 5.5 [dataset avg])
Expected goals = Adjusted SoT × (1 − Opponent GK save%)
```

