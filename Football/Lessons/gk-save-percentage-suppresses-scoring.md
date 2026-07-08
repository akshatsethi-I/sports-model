---
title: Lesson â€” Elite GK Save% Suppresses Scoring but Cannot Prevent It Forever
type: lesson
confidence: High
last_updated: 2026-06-27
---

# Elite GK Save% Suppresses Scoring but Cannot Prevent It Forever

## The Lesson
An elite GK (save% > 85%) can suppress opponent goal-scoring for 2-3 matches at tournament level. They cannot prevent a technically superior team from eventually scoring. The GK-adjusted model accurately predicts the suppression â€” but the long-run mean is determined by xG quality.

## Evidence

### Beiranvand (Iran) WC2026
- Save%: **86.7%** â€” the highest in the WC2026 dataset after MD2
- SoTA faced: 15 in 2 games (7.5/game â€” the most allowed)
- Goals conceded: 2 (vs 3.03 xGA = -1.03 below expected)
- Opponent conversion rate: **5.41%** â€” the lowest in the entire dataset
- MD3 vs Egypt: Beiranvand held Egypt to 1 goal (1-1 draw) despite Egypt's 0.40 G/SoT

### Crocombe (New Zealand) WC2026
- Save%: **54.5%** â€” near the worst in the dataset
- MD3 vs Belgium: conceded 5 goals in a single game
- Belgium's xG regression (-2.14) combined with Crocombe's weakness = predicted 2+ goals â†’ got 5

## Confidence
**High** â€” two independent data points confirm the model from opposite ends of the GK quality spectrum.

## How to Apply
- Always apply GK-adjusted expected goals before predicting match outputs
- An elite GK (save% > 85%) reduces expected goals by ~50-60% vs a below-average GK
- Never assume a team won't score against an elite GK â€” they'll score ~1 rather than ~2
- A weak GK (save% < 60%) multiplies expected opponent goals: a team expected to score 1 may score 2-3

## The Model Formula
```
Adjusted SoT = Team SoT/game Ã— (Opponent SoT allowed/game Ã· 5.5)
Expected goals = Adjusted SoT Ã— (1 âˆ’ Opponent GK save%)
```

