---
title: R32 — Netherlands vs Morocco
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, netherlands, morocco]
sources: [opta-wc2026-all-tables, fbref-netherlands-wc2026, fbref-morocco-wc2026, opta-analyst-netherlands, opta-analyst-morocco]
last_updated: 2026-06-29
---

# R32: Netherlands vs Morocco — FINAL PREDICTION

## Pre-Prediction Checklist

### Step 1 — Qualification stakes
Knockout. No conservative play. Netherlands as Group F winners, Morocco as runners-up. Both play for full 90' and beyond.

### Step 2 — Opponent-adjusted xG model (final, post all data)

**Netherlands attacking vs Morocco defence:**
- Netherlands SoT/game: 20/3 = 6.67
- Morocco SoT allowed/game: 7/3 = **2.33/game** (Opta defending; Morocco elite at restricting shots)
- Adjusted Netherlands SoT: 6.67 × (2.33 / 5.5) = **2.83**
- Bounou save% (FBRef): 5/8 = **62.5%**
- Netherlands base expected goals: 2.83 × (1 − 0.625) = **1.06**
- Aerial adjustment (+): NL win 62.3% aerial duels vs Morocco's 46.3% — NL's 12 headed shots (2G) directly exploit Morocco's biggest defensive weakness
- **Revised Netherlands expected goals: ~1.15**

**Morocco attacking vs Netherlands defence:**
- Morocco SoT/game: 16/3 = 5.33
- Netherlands SoT allowed/game: 15/3 = **5.0/game** (FBRef)
- Adjusted Morocco SoT: 5.33 × (5.0 / 5.5) = **4.85**
- Verbruggen save% (FBRef): 11/15 = **73.3%**
- Morocco expected goals: 4.85 × (1 − 0.733) = **1.29**
- Note: Netherlands xGA = 2.22 but conceded 4 (+1.78 defensive bad luck). True defensive quality is better than record shows.

**Final model: λ_Netherlands = 1.15 | λ_Morocco = 1.29 | Total = 2.44**

### Step 3 — Probability derivation

Using Poisson (λ_NL=1.15, λ_Morocco=1.29):

P(NL=0)=0.317, P(NL=1)=0.364, P(NL=2)=0.209, P(NL=3)=0.080
P(Mor=0)=0.275, P(Mor=1)=0.355, P(Mor=2)=0.229, P(Mor=3)=0.098

| Outcome | Probability |
|---------|------------|
| Netherlands win (90') | **33%** |
| Draw (→ ET/pens) | **27%** |
| Morocco win (90') | **40%** |
| **Morocco qualify (incl. ET/pens)** | **~55%** |
| Netherlands qualify | ~45% |
| Under 2.5 goals | **57%** |
| BTTS Yes | **52%** |
| Over 2.5 | 43% |

---

## Full Team Analysis

### Netherlands

**Attack:**
- xG = 5.24 in 3 games (1.75/game) but scored 10 goals = **+4.76 overperformance** — regression imminent
- G/SoT = 0.45 (Brobbey 1.00, Summerville 1.00) — true rate ~0.25
- **97 box touches** (32/game — highest profiled), **12 headed shots (2G)** — dominant box presence
- Set pieces: 3G from 12 shots (1.25 xG) — 30% of goals. Direct attacks efficient (1G from 2 = 50%) vs build-up inefficient (1G from 15 = 6.7%)
- Cross volume high (48 crosses, 22.9% accuracy) — primary delivery method

**Defence:**
- xGA = 2.22 but conceded 4 (+1.78 defensive bad luck). True quality much better: 0.06 xG/shot allowed (elite)
- **Set piece defence weak**: 2 of 4 goals from set pieces (0.84 xGA → 2 goals = overperformance by opponents)
- **Header vulnerability**: opponents scored 2 goals via 6 headed shots — Morocco's 7 header attempts (0 goals) could convert here
- Ground duels 48.5% (slightly below 50%), **aerial duels 62.3% (dominant)**
- Allow 3 fast breaks (1 goal) — Morocco's counter system can exploit

**Key players:**
- Gravenberch **+11.42 On-Off** — must start, sets entire rhythm
- Gakpo **+8.89 On-Off**, 2G, 9 Sh — primary threat
- Brobbey 3G from 4 shots (1.00 G/SoT) — major regression risk but live threat
- Van Dijk, van Hecke both scoring headers — aerial weapons
- AVOID: Timber (-7.02), Memphis (-2.50), Koopmeiners (-2.73)

**Style:** Possession-based (60.7%), moderate-high press (PPDA 11.7), direct speed 2.15 (faster than Morocco). Problem: their build-up system doesn't unlock Morocco's mid-block. Direct play works but they rarely use it.

---

### Morocco

**Attack:**
- xG = **6.13** (2.04/game) — NOT overperforming (-0.13 vs xG). Attack is genuine quality, not luck
- 84 box touches (28/game), 6 fast breaks (2/game, 1 goal) — active in dangerous areas
- Hakimi: 18 crosses, 10 fouls drawn — primary creator and foul magnet
- Set pieces: 1G from 14 shots (0.55 xG) — set piece attack generates volume but doesn't convert
- Headers: 7 shots, 0 goals — heading attack hasn't worked yet

**Defence:**
- xGA = 3.00, conceded 3 (exactly on xG — no luck, clean record)
- Only **2.33 SoT/game allowed** — elite defensive compactness
- **0 goals from set pieces conceded** — Morocco's best defensive attribute (10 shots, 0.53 xGA held)
- **0 opponent fast breaks** — Morocco's mid-block completely shuts down counter-attacks
- Ground duels 53.7%, **aerial duels only 46.3%** — losing aerial battles is the primary defensive vulnerability
- 5 opponent header shots, 0 goals — has held so far but NL's 62.3% aerial dominance is a different level

**Key players:**
- Gessime Yassine **+8.21 On-Off** — best in squad, only 21 min avg. Super-sub who can shift matches
- Rahimi **+5.63 On-Off**, 10 min avg — another game-changer off bench
- Neil El Aynaoui **-10.56 On-Off** — worst in squad, near-constant starter. If he starts, Morocco significantly weaker
- Saibari 3G but **-5.63 On-Off** — same Marmoush pattern (goals mask team drag)
- Hakimi (full 270 min, +1.00): the attacking engine

**Style:** Possession when possible (58.9%), mid-block PPDA 15.8 (sit and absorb), direct speed 1.55. High turnovers (27, but only 11.11% end in shot). Fast break model — absorb then spring Hakimi and Saibari.

---

## The Six Critical Tactical Battlegrounds

| Battle | Edge |
|--------|------|
| Aerial duels (NL 62.3% vs Mor 46.3%) | **Netherlands** — NL's 12 headers (2G) vs Morocco's aerial weakness |
| Set piece attack (NL 3G vs Mor 1G defending) | **CANCELS OUT** — NL strong SP attack, Morocco elite SP defence (0 GC) |
| Set piece defence (NL 2 GC vs Mor 14 shots) | **Morocco** — NL vulnerable, Morocco generate SP volume |
| Fast breaks (Mor 6 vs NL allowing 3) | **Morocco** — counter system active, NL allow counters |
| Build-up vs mid-block (NL 6.7% goal rate) | **Morocco** — PPDA 15.8 absorbs NL's patient game |
| Box presence (NL 97 touches vs Mor 84) | **Netherlands** — slight edge getting into danger areas |

**Net read:** Morocco have the tactical advantage in how the match will flow. Netherlands' one clear path to goals is aerial: Van Dijk / van Hecke headers from set plays and crosses from Dumfries and Reijnders — which runs into Morocco's best defensive trait (0 SP goals conceded). Morocco's path is more natural: absorb, spring Hakimi, create fast breaks, generate set plays (14 shots).

---

## Match Flow Prediction

- **Likely opening phase**: Netherlands 60%+ possession, Morocco absorbing in 4-4-2 or 4-5-1 mid-block. Netherlands circulate wide, deliver crosses. Morocco GK active on high balls.
- **Key tactical battles**: Hakimi vs Netherlands left side (Dumfries likely moved around — Reijnders covers). Van Dijk aerial vs Morocco's centre-backs. Morocco fast break timing.
- **Momentum triggers**: Netherlands set piece goal → opens up → more space for Morocco counters. Morocco fast break goal → NL chase, more space opens further.
- **The Yassine / Rahimi factor**: Morocco bring on Gessime Yassine (+8.21) and Rahimi (+5.63) at 70-75 min. Netherlands have no equivalent impact subs (their best subs are negative On-Off).
- **Scenarios**: Draw 90' (27%) → ET Morocco favourites on legs and bench impact.

---

## Market Predictions

### Result / Qualification

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Morocco qualify** | **~55%** | ⭐⭐⭐ | Model favourite, physical edge in ET, better bench impact (Yassine +8.21, Rahimi +5.63) |
| Morocco win (90') | 40% | ⭐⭐⭐ | Value pick if NL are favourites in the market |
| Draw → ET | 27% | ⭐⭐⭐ | Single most likely path overall |
| NL win (90') | 33% | ⭐⭐ | Possible via aerial route but going against the model |

### Goals

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Under 2.5** | **57%** | ⭐⭐⭐⭐ | λ=2.44. Both GKs solid. NL xG regression massive. Morocco mid-block restricts flow |
| Over 2.5 | 43% | — | Not enough edge |
| BTTS Yes | 52% | — | Coin flip — no recommendation |
| BTTS No | 48% | — | Coin flip — no recommendation |

### Shots on Target

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total SoT Over 5.5** | **~65%** | ⭐⭐⭐⭐ | NL adj 2.83 SoT + Morocco adj 4.85 SoT = 7.7 total. Both teams generate on-target volume |
| **Morocco SoT Over 3.5** | **~62%** | ⭐⭐⭐⭐ | Morocco adj 4.85/game. Verbruggen busy |
| NL SoT Over 2.5 | ~55% | ⭐⭐⭐ | Adj 2.83 but Morocco's defence restricts hard |

### GK Saves

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Verbruggen saves Over 3.5** | **~65%** | ⭐⭐⭐⭐ | Adj 4.85 SoT from Morocco × 73.3% save% = 3.6 expected saves |
| Bounou saves Over 1.5 | ~58% | ⭐⭐⭐ | Adj 2.83 NL SoT × 62.5% = 1.77 expected saves. Marginal |

### Fouls

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total fouls Over 20.5** | **~72%** | ⭐⭐⭐⭐ | Morocco 14.7/game + NL 8.7/game = 23.4 expected |
| **Morocco fouls Over 7.5** | **~68%** | ⭐⭐⭐⭐ | 44 fouls in 3 games = 14.7/game. Fouling Hakimi's crosses, Gakpo runs |
| Total fouls Over 22.5 | ~58% | ⭐⭐⭐ | Still backed |

### Cards

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| Morocco to receive a card | ~52% | ⭐⭐⭐ | 44 fouls but only 2 YC — refs been lenient. Tighter in R32 |
| Over 1.5 total cards | ~46% | — | No edge |

### Corners

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total corners Over 7.5** | **~62%** | ⭐⭐⭐⭐ | Morocco 5.33/game + NL 4.33/game own. Expected total ~8.5 |
| NL corners Over 3.5 | ~60% | ⭐⭐⭐ | NL's crossing game + 64 clearances by NL defence → Morocco corners too |

---

## Best Picks Summary

1. **Total fouls Over 20.5** ⭐⭐⭐⭐ — ~72% (Morocco 14.7 + NL 8.7 = 23.4/game)
2. **Total SoT Over 5.5** ⭐⭐⭐⭐ — ~65%
3. **Verbruggen saves Over 3.5** ⭐⭐⭐⭐ — ~65%
4. **Morocco fouls Over 7.5** ⭐⭐⭐⭐ — ~68%
5. **Under 2.5 goals** ⭐⭐⭐⭐ — 57%
6. **Morocco SoT Over 3.5** ⭐⭐⭐⭐ — ~62%
7. **Total corners Over 7.5** ⭐⭐⭐⭐ — ~62%
8. **Morocco qualify** ⭐⭐⭐ — ~55%

---

## Score Prediction

| Scoreline | Probability |
|-----------|------------|
| **1-1** | **~13%** — most likely single outcome |
| 0-1 Morocco | ~11% |
| 1-0 Netherlands | ~10% |
| 0-0 (→ ET) | ~9% |
| 1-2 Morocco | ~8% |
| 2-1 Netherlands | ~8% |
| 0-2 Morocco | ~7% |

**Predicted score: 1-1 at 90' → Morocco progress (ET/pens)**

Path: Netherlands score via Van Dijk / van Hecke aerial route from Dumfries/Reijnders cross (their only reliable goal source vs Morocco's set piece defence). Morocco equalise via Hakimi combination play or fast break — Gessime Yassine/Rahimi influence from the bench in second half. Extra time: Morocco's physical superiority (faster, more sprints, more HSR) and bench impact proves decisive.

**Key watch in-game:** When Morocco bring on Gessime Yassine (best On-Off +8.21) — that substitution is the single biggest momentum signal of the match. If he comes on with Morocco level or behind, the game tilts hard in Morocco's favour.

## Cross-links
- [[Teams/netherlands]]
- [[Teams/morocco]]
- [[Models/wc2026-dataset-benchmarks]]
