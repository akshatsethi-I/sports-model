---
title: Opponent-Adjusted SoT Model
type: model
version: 3.0
last_updated: 2026-07-08
---

# Opponent-Adjusted SoT Expected Goals Model

## Purpose
Predict expected goals per team in a match, accounting for:
1. The attacking team's shot-on-target generation rate AND shot quality (xG/shot)
2. The opponent's defensive quality (how many SoT they allow)
3. The opponent's goalkeeper quality (how many SoT they save)
4. Set piece contribution as a separate additive component

Do NOT use raw SoT averages against GK save%. Adjust for opponent defensive quality first. Do NOT ignore xG — shot quality matters as much as volume.

## Full Formula (v3.0)

### Step 1 — Field play λ (blended SoT + xG)

```
λ_SoT = Adj SoT × (1 − GK save%)
  where Adj SoT = Team SoT/game × (Opponent SoTA-allowed/game ÷ Round benchmark)

λ_xG  = Team xG/game × (1 − GK save%)
  [xG already adjusts for shot quality — no opponent adjustment needed]

λ_field = 0.6 × λ_SoT + 0.4 × λ_xG
```

**Why blend?** λ_SoT captures volume; λ_xG captures shot quality. A team with 8 speculative SoT (low xG/shot) would be over-estimated by SoT alone. A team with 4 high-quality chances (high xG/shot) would be under-estimated. The blend corrects both directions.

### Step 2 — Set piece λ (additive)

```
λ_SP = Team SP xG/game × (1 − Opponent GK save%)
```

SP xG/game = Opta set piece xG ÷ games played. Use only if SP xG data is available.
If not available, omit (treat λ_SP = 0) — do not estimate.

### Step 3 — Total λ

```
λ_total = λ_field + λ_SP
```

Then apply Poisson distribution to λ_total for all goal/BTTS/outcome probabilities.

---

**Dataset average SoT/game allowed**: use round-appropriate benchmark (see Adjustment Rules below)

## Example Calculation

**Belgium vs New Zealand (MD3)**

Belgium:
- Belgium SoT/game: 5.0
- NZ allows SoT/game: ~7.5 (Crocombe's poor save% means opponents shoot more effectively)
- Adjusted SoT: 5.0 × (7.5 / 5.5) = 6.8 adjusted SoT
- Crocombe save%: 54.5% → concede rate: 45.5%
- Expected Belgium goals: 6.8 × 45.5% = **3.1**

New Zealand:
- NZ SoT/game: 6.5
- Belgium allows SoT/game: 3.0 (Courtois dominates)
- Adjusted SoT: 6.5 × (3.0 / 5.5) = 3.5 adjusted SoT
- Courtois save%: 83.3% → concede rate: 16.7%
- Expected NZ goals: 3.5 × 16.7% = **0.58**

**Predicted: Belgium ~3, NZ ~0.6 → Actual: Belgium 5-1 NZ (model directionally correct)**

## WC2026 Validation History

| Match | Prediction | Actual | Model accuracy |
|-------|-----------|--------|----------------|
| Belgium vs NZ | Belgium ~3, NZ ~0.6 | 5-1 | ✅ Direction correct; magnitude underestimated (xG regression added) |
| Egypt vs Iran | Egypt ~0.67, Iran ~0.78 | 1-1 | ✅ Model correctly predicted low scoring; draw |
| Spain vs Uruguay | Spain ~2.6, Uruguay ~0.5 | 1-0 | ✅ Under 2.5 confirmed; Spain win confirmed |

## Dataset Benchmarks (WC2026, updated after MD3)

| Metric | Value | Team |
|--------|-------|------|
| Best GK save% | 86.7% | Beiranvand (Iran) |
| Worst GK save% | 40.0% | Nyland (Norway) |
| Fewest SoT allowed/game | 1.0 | Spain (vs opponents) |
| Most SoT allowed/game | 7.5 | Iran (vs opponents) |
| Dataset avg SoT allowed | ~5.5 | — |

## When to Apply xG Regression Adjustment
If the attacking team has a goals vs xG deficit > 1.0 (they've scored fewer goals than expected):
- Add an upward regression factor to expected goals
- Quantify: expected goals = model output + (xG deficit × 0.3-0.5 regression factor)
- Diminishes over time as the sample grows

## Regression Formulas (mandatory — never use raw small-sample values)

### GK Save% Bayesian Regression
Small samples produce wild save% swings. Regress every GK toward the **knockout-stage tournament mean (70%)** before applying to the model.

> ⚠️ Prior updated to 70% for QF+ (was 65% for group stage). WC2026 QF GKs are elite — the 65% league-average prior over-regresses them downward. QF remaining GK mean is approximately 72-74%; 70% is a conservative but realistic prior.

```
Regressed save% = (n × raw_save% + 3 × 0.70) / (n + 3)

Where n = number of shots faced (SoTA)
Prior = 3 shots at 70% save% (knockout stage)
Use 65% prior for group-stage / R32 predictions only
```

Example: GK with 5 SoTA, 4 saves → raw 80%
Regressed (group prior 65%) = (5 × 0.80 + 3 × 0.65) / 8 = **74.4%**
Regressed (QF prior 70%)    = (5 × 0.80 + 3 × 0.70) / 8 = **(4.0 + 2.10) / 8 = 76.3%**

### SoTA-Allowed Bayesian Regression
Teams that have faced unusually few shots get regressed toward the dataset average to avoid over-weighting defensive dominance from small samples.

```
Regressed SoTA-allowed/game = (actual_total + benchmark × 3) / (games + 3)

Where benchmark = round-appropriate SoTA-allowed average (NOT always 5.5)
Weight of prior = 3 games
```

| Round | Use this benchmark as prior |
|-------|-----------------------------|
| Group | 5.5 |
| R32 | 4.5 |
| R16 | 3.5 |
| R8+ | 3.0 |

Example at R16: Colombia allowed 5 SoTA in 4 games (1.25/game), benchmark=3.5
Regressed = (5 + 3.5×3) / (4 + 3) = (5 + 10.5) / 7 = **2.21/game**

> Note: Earlier in this tournament Colombia's SoTA regression used the 5.5 group benchmark (→3.07). At QF the correct prior is 3.0, giving a lower regressed value that better reflects QF defensive quality.

---

## Adjustment Rules (apply before finalising λ)

### 1. Benchmark by Round
Use the correct SoTA-allowed benchmark for the round — NOT always 5.5. See [[Models/wc2026-dataset-benchmarks]].

| Round | Benchmark |
|-------|-----------|
| Group | 5.5 |
| R32 | 4.5 |
| R16 | 3.5 |
| R8+ | 3.0 |

### 2. Weaker Team SoT Floor
If the weaker/underdog team's adjusted SoT < 2.5, apply a minimum floor:

```
Minimum adj SoT = 2.5
Then apply +15% knockout uplift: effective adj SoT = 2.5 × 1.15 = 2.875
```

Rationale: knockout football increases pressure and urgency — even weak teams generate more chances than group-stage form suggests.

### 3. Lineup Adjustment
When multiple confirmed negative On-Off starters are in the XI (and positive On-Off players are absent):

```
Apply −5% quality adjustment to that team's attack λ
Maximum one lineup adjustment per team
```

Only apply when On-Off data is available AND the starters/absences are confirmed.

### 4. Schedule Quality Correction
When a team's SoT/game or SoTA-allowed/game was inflated/deflated by clearly weak opponents:

```
Apply −10% to the inflated metric
Maximum one quality/schedule adjustment per team
```

Do NOT stack with lineup adjustment unless clearly independent.

### 5. Half-Time Split
When modelling first-half vs second-half markets:

```
First half: 45% of full-match λ
Second half: 55% of full-match λ
```

### 6. Under 2.5 / BTTS No Caution Flag
⚠️ The model systematically over-predicts Under 2.5 and BTTS No. These outcomes appear more likely than they materialise, especially in knockout matches where game state shifts force open play. Always flag these picks with a caution note and do not combine them in parlays with other conservative picks.

---

## Data Collection Checklist (per match)

Before running the model, confirm you have all of the following from FBRef + Opta:

| Input | Source | Notes |
|-------|--------|-------|
| SoT/game | FBRef Shooting | Use 4G+ where available |
| SoTA-allowed/game | FBRef Shooting (Opponents row) | Regress using round benchmark |
| GK save% raw | FBRef Goalkeeping | Regress using round prior (70% for QF+) |
| xG/game | Opta Basic — Attacking | For λ_xG component |
| SP xG/game | Opta Extended — Set Pieces | For λ_SP additive; skip if unavailable |
| PPDA | Opta Basic — Pressing | For corner possession rule trigger |
| Possession% | Opta Basic — Passing | For corner possession rule trigger |
| Fouls/game committed | Opta Basic — Defending | Cards/fouls model |
| Fouls/game drawn | Opta Basic — Defending | Cards/fouls model |
| YC/game | FBRef Misc | Cards model |
| Corners/game | Opta Basic — Attacking | Corners model |
| Offsides/game | FBRef Misc | Offsides model |
| Referee YC/game + fouls/game | Footystats referee profile | Cards model + fouls model |
| On-Off differentials | FBRef Playing Time | Lineup adjustment check |

---

## Limitations
- xG blend weights (0.6/0.4) are empirical — adjust if one component proves systematically more accurate
- SP xG is omitted when data unavailable; this slightly under-estimates teams with strong SP records
- Benchmark priors assume equal-quality remaining teams — may need manual override for extreme mismatches
- Dataset benchmark must be updated each round — see [[Models/wc2026-dataset-benchmarks]]

