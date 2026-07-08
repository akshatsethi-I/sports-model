---
title: xG — Expected Goals
type: concept
folder: Statistics
tags: [statistics, attacking, shooting, model]
last_updated: 2026-06-27
---

# xG — Expected Goals

## Definition
Each shot is assigned a probability (0–1) of being scored based on historical data from similar situations. Summing all shot xG values gives a team's total expected goals for a match.

## Key variables that drive xG
- **Distance from goal** — the single strongest predictor
- **Angle** — central shots score far more often than wide-angle attempts
- **Shot type** — headers score at ~30% the rate of feet shots
- **Assist type** — crosses, through-balls, set pieces each have distinct baselines
- **Defensive pressure** — whether the shooter was closed down
- **Body part** — dominant vs non-dominant foot

## xG vs xGA
- **xG** = quality of chances created (attacking output)
- **xGA** = quality of chances conceded (defensive vulnerability)
- The gap between xG and xGA over multiple matches is a strong predictor of future results — more reliable than actual goals scored/conceded

## Interpreting xG in match flow
- A team with **xG > actual goals** is likely due for regression upward (more goals coming)
- **High xGA with few goals conceded** often signals a goalkeeper overperforming — not sustainable
- xG per 90 normalises for game state effects (teams trailing tend to open up, inflating both sides' xG)

## Common misuses
- xG is a pre-shot metric — it doesn't account for goalkeeper positioning or deflections
- Single-match xG is noisy; **5+ match trends** are meaningful
- xG models vary by provider (Opta, StatsBomb, FBref) — always compare within the same source

## How it affects betting
- A team with a large negative xG differential (goals scored − xG) is a regression candidate — back them to score more in the next match
- A GK who consistently outperforms xGA save% will regress — opponents will score more than recent results suggest
- xG/shot (chance quality) matters as much as xG volume — high shot volume + low xG/shot = speculative shooting, not genuine dominance

## WC2026 dataset benchmarks (after MD2)
| Metric | Best | Worst |
|--------|------|-------|
| xG/game | Spain 2.20 | Iran 1.06 |
| xG/shot (attack) | Norway 0.19 | Spain 0.09 |
| Goals vs xG | France +1.54 | Belgium -2.14 |
| xGA/game | Spain 0.17 | New Zealand 1.69 |
| xG/shot conceded | Spain 0.04 | NZ 0.09 |

