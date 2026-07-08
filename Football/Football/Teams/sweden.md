---
title: Sweden — WC2026
type: team
sport: football
competition: WC2026 R32
tags: [wc2026, sweden, r32]
sources: [fbref-sweden-wc2026, opta-sweden-wc2026]
last_updated: 2026-06-30
---

# Sweden

## Overview
WC2026. Group stage record: W1 D1 L1, 7 goals scored, 7 conceded. Advanced to R32.

**Critical caveat:** Sweden's 7 goals represent the second-largest xG overperformance in the dataset (+4.02), with the lowest xG/shot (0.07) of any team profiled. True attacking quality = ~1.0 xG/game. GK vulnerability (Nordfeldt 33.3% save%) is severe — opponents convert 29.17% of SoT.

## Manager
Jon Dahl Tomasson. Direct, fast, physical. PPDA 17.5 — the deepest defensive block in the dataset. Sweden invite pressure and break at speed (direct speed 1.97 — highest in dataset).

## Preferred Formation
4-4-2 / 4-3-3. Gyökeres and Isak as dual striker partnership. High offsides (8 in 3 games = 2.67/game) from constant runs behind defensive lines.

## Style of Play

**Build-up:** 48.5% possession, 80.9% pass accuracy (lowest in dataset). Short sequences: 3.16 passes/seq, 9.13s (fastest tempo in dataset). Direct speed 1.97 (highest in dataset). Only 3 through balls in 3 games — Sweden are NOT a line-breaking team. They play early and direct.

**Pressing:** PPDA 17.5 — the deepest defensive block in the dataset. Press start 41.2m. 17 high turnovers (5 shot-ending, 1 goal-ending). Sweden sit and wait, then break.

**Attacking patterns:** Fast breaks are the primary open-play mechanism (6 attempts, 2 goals — 33.3%). SP: 14 shots / 3 games (aggressive at dead balls) but only 1 goal (0.97 xG). Headers: 6 attempts, **0 goals** — physical presence but no aerial conversion. Crosses: 30 total, 3 successful (10.0% — worst in dataset).

**Defensive shape:** PPDA 17.5 — deepest block. Clearances 58 (19.3/game). But allow opponents 4.0 SoT/game and concede 29.17% of those — GK is the critical vulnerability.

## Key Players

- **Viktor Gyökeres** — FW, 1G/11sh/5SoT, G/SoT 0.20, SoT/90 1.67. High volume, underwhelming conversion for a top-10 striker. On-Off: 0.00. Booked (1 YC). Draws contact (3 fouls drawn).
- **Alexander Isak** — FW, 1G/6sh/5SoT, SoT%=83.3% (elite accuracy), G/SoT 0.20. On-Off: -90.33 (discard — 1 min "off" sample in 3 games). The better finisher of the two when he connects.
- **Yasin Ayari** — MF, 2G/7sh/3SoT, G/SoT 0.67. **On-Off: +7.85** — Sweden's most impactful starter. 17 crosses. Also booked (1 YC). Nailed starter.
- **Anthony Elanga** — FW, 2G/3sh/3SoT, 100% SoT%, G/SoT 0.67. On-Off: +1.34. Impact sub (1 start, 2 subs). Clinical when deployed.
- **Gabriel Gudmundsson** — MF/DF. On-Off: **-6.75** — significant drag. Likely to lose minutes.
- **Lucas Bergvall** — MF. On-Off: +2.72. Young, improving.
- **Elliot Stroud** — MF. On-Off: +2.85. Good sub impact.
- **Kristoffer Nordfeldt** — GK (started 2/3). Save%: **33.3%** (3 saves / 9 SoTA) — severe weakness.
- **Jacob Widell Zetterström** — GK (started 1/3). Save%: **66.7%** (2 saves / 3 SoTA). Squad total: 41.7%.

## GK Decision — Critical for Model
Who starts in goal is the single most important variable for λ_France:
- **Nordfeldt (33.3%):** France's adj SoT × 0.667 → very high xG
- **Widell Zetterström (66.7%):** France's adj SoT × 0.333 → significantly lower xG
Nordfeldt started the first 2 games; Widell started MD3. Nordfeldt likely returns for R32.

## Strengths
- Dual striker threat: Gyökeres volume + Isak precision
- Fast-break speed: 1.97 direct speed — can hurt any team in transition
- Ayari +7.85 On-Off — key midfield engine
- SP volume: 14 SP shots / 3 games (4.67/game) — dangerous at dead balls despite low conversion
- Elanga: clinical finisher when deployed (2G/3SoT, 100% SoT%)

## Weaknesses
- **Goals vs xG: +4.02** — second largest overperformance in dataset; true level ~1.0 xG/game
- **xG/shot: 0.07** — the lowest in the entire dataset. Goals from pure chance positions
- **Nordfeldt 33.3% save%** — the most severe GK weakness in the dataset
- Cross accuracy: 10.0% (worst in dataset)
- 0 header goals from 6 attempts despite physical strikers
- PPDA 17.5 — completely passive against possession teams. France will dominate territory
- 8 offsides (2.67/game) — push timing often wrong

---

## FBRef Data (WC2026, 3 games)

### Goalkeeping
| Player | MP | Min | GA | SoTA | Saves | Save% | CS |
|--------|-----|-----|----|----|-------|-------|----|
| Kristoffer Nordfeldt | 2 | 180 | 6 | 9 | 3 | **33.3%** | 0 |
| Jacob Widell Zetterström | 1 | 90 | 1 | 3 | 2 | **66.7%** | 0 |
| **Squad Total** | 3 | 270 | 7 | 12 | 5 | **41.7%** | 0 |
| **Opponent GK** | 3 | 270 | 7 | 19 | 12 | **63.2%** | — |

### Shooting
| | G | Sh | SoT | SoT% | Sh/90 | SoT/90 | G/Sh | G/SoT |
|--|---|----|----|------|-------|--------|------|-------|
| Squad | 7 | 40 | 20 | 50.0% | 13.33 | **6.67** | 0.18 | 0.35 |
| Opponents | 7 | 24 | 12 | 50.0% | 8.00 | **4.00** | 0.29 | 0.58 |

**Key shooters:**
| Player | Pos | G | Sh | SoT | G/SoT | SoT/90 | Note |
|--------|-----|---|----|----|-------|--------|------|
| Gyökeres | FW | 1 | 11 | 5 | 0.20 | 1.67 | Volume, low conv |
| Isak | FW | 1 | 6 | 5 | 0.20 | 1.67 | Elite SoT% 83.3% |
| Ayari | MF | 2 | 7 | 3 | 0.67 | 1.05 | Key scorer |
| Elanga | FW | 2 | 3 | 3 | 0.67 | 2.13 | 100% SoT% — clinical |
| Svanberg | MF | 1 | 1 | 1 | 1.00 | 12.86 | 7 mins — noise |

### On-Off (key)
| Player | On-Off | Signal |
|--------|--------|--------|
| Svanberg | +13.20 | 7 mins — noise |
| Ayari | **+7.85** | Best starter |
| Stroud | +2.85 | Good sub |
| Bergvall | +2.72 | Young positive |
| Elanga | +1.34 | Impact |
| Gyökeres | 0.00 | Neutral |
| Lagerbielke | 0.00 | Neutral |
| Bernhardsson | -2.11 | Negative |
| Nygren | -2.70 | Negative |
| Gudmundsson | **-6.75** | Significant drag |
| Isak | -90.33 | **Discard** (1 min off) |

### Miscellaneous (3 games)
| Metric | Total | Per game |
|--------|-------|---------|
| Yellow cards | 5 | **1.67** |
| Fouls committed | 33 | **11.0** |
| Fouls drawn | 36 | **12.0** |
| Crosses | 49 | **16.3** |
| Interceptions | 19 | 6.3 |
| Offsides | 8 | **2.67** |

**Yellow card holders:** Gyökeres, Ayari, Gudmundsson, Isak Hien, Bergvall (1 each — all at risk of 2nd)

---

## Opta Data (WC2026, 3 games)

### Attacking Overall
| Metric | Value | Per game |
|--------|-------|---------|
| Goals | 7 | 2.33 |
| xG | 2.98 | 0.99 |
| **Goals vs xG** | **+4.02** | — |
| Shots | 40 | 13.3 |
| SoT | 20 | **6.67** |
| Conv% | 17.50% | — |
| **xG/shot** | **0.07** | — |

### Attacking Extended
| Metric | Value |
|--------|-------|
| SP goals | 1 (from 14 shots — 4.67/game, 0.97 xG) |
| Penalties won | 0 |
| Free-kick goals | 0 |
| Header goals | **0** (from 6 attempts) |
| Fast break goals | **2** (from 6 attempts — 33.3%) |
| Box touches | 61 (20.3/game) |
| Hit post | 1 |
| Offsides | 8 |

### Passing & Build-up
| Metric | Value | Per game |
|--------|-------|---------|
| Possession | 48.5% | — |
| Total passes | 1176 | 392 |
| Pass accuracy | **80.9%** | — |
| Final third passes | 335 | 112 |
| FT pass% | 68.4% | — |
| Crosses | 30 (3 successful, **10.0%**) | 10.0 |
| **Through balls** | **3** | **1.0** |

### Pressing
| Metric | Value |
|--------|-------|
| **PPDA** | **17.5** (deepest block in dataset) |
| Press start | 41.2m |
| High turnovers | 17 (5 shot-ending, 1 goal-ending) |

### Sequences
| Metric | Value |
|--------|-------|
| 10+ pass sequences | 20 (6.7/game — low, direct) |
| **Direct speed** | **1.97** (highest in dataset) |
| Passes per sequence | **3.16** (lowest in dataset — most direct) |
| Sequence time | **9.13s** (fastest in dataset) |
| Build-up goals | 1 | Direct attack goals | 2 |

### Defending Overall
| Metric | Value | Per game |
|--------|-------|---------|
| Goals conceded | 7 | 2.33 |
| xGA | 4.09 | 1.36 |
| Goals vs xGA | **+2.91** (opponents overperformed) | — |
| Shots faced | 24 | 8.0 |
| SoT faced | 12 | **4.0** |
| **Conv% allowed** | **29.17%** | — |
| xG/shot allowed | **0.17** | — |

### Defending Extended
| Metric | Value |
|--------|-------|
| SP goals conceded | 1 (from 4 shots, 0.23 xGA) |
| Header goals conceded | 1 (from 4 attempts) |
| Fast break goals conceded | 1 (from 1) |
| Penalty conceded | 0 |
| Box touches allowed | 41 (13.7/game) |
| Opponent offsides caught | **12** (4/game) |
| Tackles | 39 (13.0/game) |
| Interceptions | 16 (5.3/game) |
| Recoveries | 116 (38.7/game) |
| Clearances | **58 (19.3/game)** |
| Ground duels won | 48.1% |
| **Aerial duels won** | **48.3%** |

---

## ✅ Model Inputs

| Input | Value | Note |
|-------|-------|------|
| SoT/game | **6.67** | FBRef 3-game |
| SoT allowed/game | **4.0** | Moderate |
| GK save% (Nordfeldt) | **33.3%** | If starts — likely |
| GK save% (Widell) | **66.7%** | Backup option |
| Squad save% | **41.7%** | Blended |
| xG/shot | **0.07** | Lowest in dataset |
| xG/shot allowed | **0.17** | Moderate quality conceded |
| Goals vs xG | **+4.02** | Second largest overperformance in dataset |
| Goals vs xGA | **+2.91** | Opponents overperformed — GK can't save |
| PPDA | **17.5** | Deepest defensive block |
| Through balls/game | **1.0** | Direct team |
| Direct speed | **1.97** | Highest in dataset — fast-break threat |
| Fouls committed/game | **11.0** | Above average card risk |
| Yellow cards total | **5** | 1.67/game |
| Aerial duels won | **48.3%** | Below average |
| Offsides/game | **2.67** | High — push timing risk |

## FIFA Opta Data (WC2026, 3 games)
| Metric | Value | Per game |
|--------|-------|---------|
| Shots (total) | 40 | 13.3 |
| SoT | 20 | 6.67 |
| Inside box attempts | 24 | 8.0 |
| Outside box attempts | 16 | 5.33 |
| Headed attempts | 6 | 2.0 |
| Conv rate | 18% | — |
| xG (FIFA model) | **3.95** | 1.32 |
| xG Efficiency | **1.77x** | — |
| **Own corners won** | **17** | **5.67/game** |
| Possession | 45% | — |
| Passes | 1204 | 401 |
| Passing accuracy | 83% | — |
| Crosses | 51 | 17.0 |
| Crossing accuracy | 20% | — |
| Def linebreaks attempted | 51 | 17.0 |
| Def linebreaks accuracy | 55% | — |
| Switches of play | 11 | 3.67 |
| Own goals | 0 | — |
| Goals conceded | 7 | 2.33 |
| Forced turnovers | 116 | 38.7 |
| Ball recovery time | **52.16s** | — |
| Defensive pressures applied | 601 | 200 |
| Defensive pressures direct | 108 | 36.0 |
| Fouls committed | 33 | 11.0 |
| Fouls drawn | 37 | 12.3 |
| Yellow cards | 5 | 1.67 |
| Red cards | 0 | — |
| Offsides | 8 | 2.67 |
| GK clean sheets | 0 | — |
| GK goals conceded | 7 | 2.33 |
| GK saves | 6 | 2.0 |
| GK actions inside box | 42 | 14.0 |
| GK actions outside box | 35 | 11.7 |
| Offers to receive | 815 | 271.7 |
| Offers in behind | 227 | 75.7 |
| Offers in between | 320 | 106.7 |
| Offers in front | 268 | 89.3 |
| Offers inside team shape | 474 | 158.0 |
| Offers outside team shape | 341 | 113.7 |
| **Receptions in behind** | **29** | **9.67** |
| Receptions between mid/def lines | 260 | 86.7 |
| Average speed | 5.99 km/h | — |
| High speed running | 3440 | 1147/game |
| Sprints | 1240 | 413/game |
| Total distance | 332,530m | 110,843m/game |

## Footystats Data (10-game average)
| Metric | Value |
|--------|-------|
| Corners (match total/game) | **9.0** |
| Cards (team total, 10g) | 15 (1.5/game) |
| Match avg cards (both teams) | 3.9 |
| BTTS% | 90% |
| CS% | 0% |

## Cross-links
- [[Competitions/wc2026-group-f]]
- [[Models/opponent-adjusted-sot-model]]
- [[Predictions/r32-france-vs-sweden]]
