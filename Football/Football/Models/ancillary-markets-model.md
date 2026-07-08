---
title: Ancillary Markets Model — Cards, Fouls, Offsides, Corners, SoT
type: model
version: 2.0
last_updated: 2026-07-08
---

# Ancillary Markets Model

Formulas for all markets beyond goals. Use Poisson distribution to convert λ to probabilities, same as the goals model.

---

## Cards Model

```
λ_total = (team1_YC/game + team2_YC/game + referee_YC/game) / 2
```

Use the referee's historical YC/game as a third input averaged with the two teams. This accounts for referee strictness, which is the single largest variable in card markets.

**Data sources:**
- Team YC/game: FBRef or Opta 4G data
- Referee YC/game: Footystats referee profile

**Common thresholds:** Over 1.5, Over 2.5, Under 5.5

> ⚠️ Individual team card props: derive λ_team = team_YC/game, then use Poisson for Over 0.5, Under 2.5 etc.

---

## Fouls Model

```
λ_teamA = (teamA_committed/game + teamB_drawn/game) / 2
λ_teamB = (teamB_committed/game + teamA_drawn/game) / 2
λ_total = (λ_teamA + λ_teamB + referee_fouls/game) / 2
```

The referee's fouls/game is the third input, averaged in the same way as for the cards model. A lenient referee (low fouls/game) pulls the total down; a strict one pulls it up — this is the single most consistent cross-match variable.

**Data sources:**
- Team committed/drawn: Opta "Fouls For/Against" columns
- Referee fouls/game: Footystats referee profile (same page as YC/game — collect both together)

**Common thresholds:** Total Over 23.5, Under 29.5; Team Over 10.5, Under 14.5

---

## Offsides Model

```
λ_team = (team_own_offsides/game + opponent_offside_trap/game) / 2
λ_total = λ_teamA + λ_teamB
```

Blend the team's own offside rate with the opponent's ability to spring the trap. A team that runs in behind frequently will trigger more offsides; a team with a high defensive line will catch more runners.

**Data source:** FBRef Misc stats (offsides drawn/committed) or Opta.

**Common thresholds:** Total Over 1.5, Over 3.5; Team Over 1.5, Under 2.5

---

## Corners Model

```
Expected team corners = (team_own_corners/game + opponent_corners_conceded/game) / 2

Opponent corners conceded/game = Footystats match total − team_own_corners/game (from opponent's perspective)

Total match corners = team A expected + team B expected
```

**Data sources:**
- Opta "Corners" = individual team corners won
- Footystats "Corners" column = total match corners (both teams combined)

### Possession-Dominance Adjustment (Graduated)

Replace the old binary trigger with a continuous adjustment. No on/off switch — both factors scale smoothly.

**Step 1 — Possession factor**
```
Possession factor = (team possession% − 50) / 10

Examples:
  50% possession → 0.0 (no adjustment)
  55% possession → 0.5
  60% possession → 1.0
  65% possession → 1.5
  70% possession → 2.0
```

**Step 2 — PPDA factor (opponent pressing passivity)**
```
PPDA factor = (opponent PPDA − 9) / 5

Examples:
  PPDA 9  → 0.0  (active press — no deflation)
  PPDA 11 → 0.4
  PPDA 13 → 0.8
  PPDA 14 → 1.0
  PPDA 16 → 1.4
  Cap at 0 if opponent PPDA < 9 (do not inflate low-block team corners for high-press opponents)
```

**Step 3 — Corner multipliers**
```
Possession team corners × (1 + 0.15 × possession_factor × PPDA_factor)
Low-block team corners  × (1 − 0.25 × possession_factor × PPDA_factor)
  [floor: low-block team multiplier cannot go below 0.40]
```

**Worked examples:**

| Scenario | Possession | Opp PPDA | Poss factor | PPDA factor | Poss team × | Block team × |
|----------|-----------|---------|------------|------------|------------|-------------|
| Colombia vs Switzerland | 60% | 11.0 | 1.0 | 0.4 | ×1.06 | ×0.90 |
| Argentina vs Egypt | 60% | 16.0 | 1.0 | 1.4 | ×1.21 | ×0.65 |
| Spain vs low-block | 70% | 15.0 | 2.0 | 1.2 | ×1.36 | ×0.40 (floor) |
| Even match 50/50 | 50% | 12.0 | 0.0 | — | ×1.00 | ×1.00 |

**Why this is better than the binary rule:**
- Colombia-Switzerland (PPDA 11.0) previously got zero adjustment even though Colombia had 60% possession. Graduated rule now gives a small ×1.06/×0.90 — more accurate than nothing.
- Argentina-Egypt gets a larger ×1.21/×0.65 — correctly larger than a moderate mismatch.
- No cliff edge where going from PPDA 13.9 to 14.1 flips the whole model.

**Data needed:** possession% (Opta Passing tab) + opponent PPDA (Opta Pressing tab) — both already in standard data collection.

See [[Lessons/corner-possession-rule]] for the Argentina-Egypt failure that generated this rule.

---

## Shots on Target (SoT) Model

SoT uses the same adj SoT values already calculated in the goals model — no separate calculation needed.

```
Expected team SoT = Adj SoT (from goals model Step 1)
λ_total = adj_SoT_teamA + adj_SoT_teamB
```

**Common thresholds:** Total Over 6.5, Over 8.5; Team Over 3.5, Under 5.5

> Note: Colombia more SoT, Switzerland more SoT etc. = compare the two adj SoT values directly.

---

## Half-Time Split

For all markets, split full-match λ:

```
First half λ = full-match λ × 0.45
Second half λ = full-match λ × 0.55
```

Apply consistently to goals, corners, cards, fouls.

---

## Star Rating → Probability Table

| Stars | Probability | Use for |
|-------|------------|---------|
| ⭐⭐⭐⭐⭐ | >70% | Near-certain structural edges |
| ⭐⭐⭐⭐ | 55–70% | Strong, well-supported picks |
| ⭐⭐⭐ | 40–55% | Value picks at good odds |
| ⭐⭐ | 25–40% | Long-shot value only |

Stars must follow the probability — never assign ⭐⭐⭐⭐⭐ to a pick below 70% because it "feels right."

---

## Known Model Biases

| Market | Bias | Action |
|--------|------|--------|
| Under 2.5 goals | Systematically over-predicted | Flag caution, do not parlay with other conservative picks |
| BTTS No | Systematically over-predicted | Flag caution, especially in knockout matches |
| Weaker team goals | Under-estimated without floor rule | Apply 2.5 SoT floor + 15% uplift |

---

## Links
- [[Models/opponent-adjusted-sot-model]]
- [[Models/wc2026-dataset-benchmarks]]
- [[Lessons/corner-possession-rule]]
- [[Lessons/dataset-benchmark-ages-by-round]]
