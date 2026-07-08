---
title: United States — FIFA World Cup 2026
type: team
sport: football
tags: [wc2026, group-d, usa, usmnt]
sources: [fbref-usa-wc2026, opta-usa-wc2026-md1md2, fifa-opta-usa-wc2026]
last_updated: 2026-07-01
---

# United States — World Cup 2026

**Group:** D — **1st place, 6pts** (W Paraguay 4-1, W Australia 2-0, MD3 result TBC)
**R32:** vs Bosnia and Herzegovina

---

## Overview
USA qualified top of Group D. Elite pressing system (PPDA 7.1), highest press start distance in the dataset (49.2m). McKennie (+16.70 On-Off, 264 min) is the best On-Off player in the entire tournament dataset. GK situation is split — Freese (66.7% on 3 SoTA, 2 games) vs Turner (0.0% on 3 SoTA, 1 game). Who starts R32 is model-critical.

---

## GK — Split Situation (Model Critical)

### FBRef GK Detail
| Player | MP | Min | GA | SoTA | Saves | Save% | CS | Note |
|--------|-----|-----|----|------|-------|-------|----|------|
| Matt Freese | 2 | 180 | 1 | 3 | 2 | **66.7%** | 1 | 2 wins — likely R32 starter |
| Matt Turner | 1 | 90 | 3 | 3 | 0 | **0.0%** | 0 | 1 loss — likely benched |
| **Squad Total** | 3 | 270 | 4 | 6 | 2 | **33.3%** | 1 | Distorted by Turner's game |
| **Opponent GK** | 3 | 270 | 8 | 17 | 9 | **52.9%** | 0 | USA GK faces far less than they generate |

> ⚠️ **Model note:** Squad-level save% (33.3%) is misleading. If Freese starts (likely), use **66.7% raw on only 3 SoTA → regress heavily (35%) toward 65% → ~66% projected**. If Turner starts (unlikely), model collapses. Confirm lineup before finalising prediction.
> ⚠️ **SoTA-allowed (2.00/game, 6 total)** is the smallest sample in the dataset. Regress heavily (35%) toward 5.5 → **4.28/game** for prediction.

---

## Shooting Stats (FBRef, WC2026 — 3 games)

### Summary
| | G | Sh | SoT | SoT% | SoT/90 | G/Sh | G/SoT |
|--|---|----|----|------|--------|------|-------|
| **USA Squad** | 6 | 44 | 15 | 34.1% | **5.00** | 0.14 | **0.40** |
| Opponents | 4 | 23 | 6 | 26.1% | **2.00** | 0.17 | 0.67 |

### Key Shooters
| Player | Pos | 90s | G | Sh | SoT | SoT% | G/SoT | Note |
|--------|-----|-----|---|----|----|------|-------|------|
| Folarin Balogun | FW | 1.8 | 2 | 7 | 3 | 42.9% | 0.67 | Primary striker; 2G best output |
| Sebastian Berhalter | MF | 1.7 | 1 | 2 | 1 | 50.0% | 1.00 | — |
| Alex Freeman | DF | 2.2 | 1 | 1 | 1 | 100.0% | 1.00 | Attacking DF |
| Auston Trusty | DF | 1.1 | 1 | 3 | 2 | 66.7% | 0.50 | CB goal |
| Gio Reyna | MF | 0.9 | 1 | 2 | 1 | 50.0% | 1.00 | Super-sub impact |
| Malik Tillman | MF | 2.0 | 0 | 5 | 2 | 40.0% | — | Volume |
| Weston McKennie | MF | 2.9 | 0 | 5 | 1 | 20.0% | — | Box presence; set pieces |
| Ricardo Pepi | FW | 2.0 | 0 | 5 | 0 | 0.0% | — | **0 SoT in 2 starts — drag** |
| Christian Pulisic | MF | 0.9 | 0 | 3 | 2 | 66.7% | — | High SoT% in limited minutes |

---

## On-Off Table (FBRef, WC2026 — 3 games)

| Player | Pos | Min | On-Off | Signal |
|--------|-----|-----|--------|--------|
| Weston McKennie | MF | 264 | **+16.70** | **Best On-Off in full dataset — non-negotiable starter** |
| Antonee Robinson | MF/DF | 169 | **+3.55** | Reliable positive — left flank |
| Folarin Balogun | FW | 160 | **+3.63** | Reliable positive — primary striker |
| Tyler Adams | MF | 180 | **+3.50** | Defensive engine |
| Matt Freese | GK | 180 | **+3.50** | 2 wins — corroborates GK choice |
| Tim Ream | DF | 180 | +3.50 | CB pairing when winning |
| Chris Richards | DF | 180 | +3.50 | CB pairing when winning |
| Sergiño Dest | MF | 165 | +2.18 | Inverted RB — positive |
| Alex Freeman | DF | 194 | +1.86 | Reliable |
| Pulisic | MF | 78 | +1.37 | Positive in limited mins |
| Malik Tillman | MF | 176 | +0.58 | Mild positive |
| Gio Reyna | MF | 85 | −0.40 | Slight drag in limited mins |
| Joe Scally | DF | 87 | −1.97 | Mild drag |
| Matt Turner | GK | 90 | **−3.50** | 1 loss — confirms Freese as starter |
| Mark McKenzie | DF | 90 | **−3.50** | Only played in loss |
| Miles Robinson | DF | 90 | **−3.50** | Only played in loss |
| Auston Trusty | DF | 101 | **−3.55** | Drag despite 1G |
| Ricardo Pepi | FW | 182 | **−2.57** | 0 SoT in 2 starts; system drag |
| Sebastian Berhalter | MF | 152 | **−4.41** | Biggest confirmed drag — 152 min |
| Alejandro Zendejas | FW/MF | 14 | −8.19 | 14 min — discard |

**Key On-Off insight:** McKennie +16.70 in 264 min is the dataset's best. The Turner/McKenzie/Robinson cluster (all −3.50, all played in the same loss) means their negative On-Off is likely one bad game contaminating all. Treat Freese/Ream/Richards/Adams (+3.50) as the confirmed winning unit.

---

## Miscellaneous Stats (FBRef, WC2026 — 3 games)
| Metric | Squad | Per game | Opponents |
|--------|-------|---------|-----------|
| Yellow cards | 5 | 1.67 | 9 |
| Red cards | 0 | — | 0 |
| **Fouls committed** | **38** | **12.67** | 46 |
| Fouls drawn | 44 | 14.67 | 35 |
| Offsides | 8 | 2.67 | 3 |
| Crosses | 49 | 16.33 | 35 |
| Interceptions | 43 | 14.33 | 24 |
| Tackles won | 24 | 8.0 | 46 |

**Discipline notes:**
- Tyler Adams: 1 YC, 7 interceptions, 4 tackles — defensive anchor
- Chris Richards: 1 YC
- Folarin Balogun: 1 YC
- Sebastian Berhalter: 1 YC
- Antonee Robinson: 1 YC
- USA draw 14.67 fouls/game (more than they commit) — ball-carrying, forward-pressing team

---

## Opta Data — Full 3 Games (WC2026)

### Attacking
| Metric | Value | Per game |
|--------|-------|---------|
| Goals | 8 | 2.67 |
| xG | **4.62** | **1.54** |
| **Goals vs xG** | **+3.38** | Running hot — regression due |
| Shots | 44 | 14.67 |
| SoT | 15 | 5.00 |
| Conv% | 18.18% | — |
| xG/shot | **0.10** | Moderate quality |

### Passing & Possession
| Metric | Value |
|--------|-------|
| Avg Possession | **59.9%** |
| Pass completion | 84.9% |
| Final third passes | 447 (73.6% success) |
| Through balls | **9** |
| Crosses | 34 (14.7% accuracy) |

### Pressing
| Metric | Value |
|--------|-------|
| **PPDA** | **8.1** — very good; slightly less elite over 3 games (was 7.1 in MD1-MD2) |
| **Press start distance** | **46.2m** — highest in dataset |
| Pressed sequences | 53 |
| High turnovers | **31** |
| Shot-ending turnovers | 5 (16.13%) |
| Goal-ending turnovers | 1 |

### Sequences
| Metric | Value |
|--------|-------|
| 10+ pass sequences | 47 |
| Direct speed | 1.59 |
| Passes per sequence | 3.97 |
| Sequence time | 10.74s |
| Build-up goals | 0 (from 9) |
| Direct attack goals | 0 (from 6) |

### Defending
| Metric | Value | Per game |
|--------|-------|---------|
| Goals conceded | 4 | 1.33 |
| xGA | **3.94** | **1.31** |
| Goals vs xGA | **+0.06** | Near-perfectly expected |
| Shots faced | 23 | 7.67 |
| SoT faced | 6 | 2.00 |
| Conv% allowed | 17.39% | — |
| xG/shot allowed | **0.17** | Above average (game 3 exposed) |
| Shots in box% | 65.22% | — |
| Goals in box% | 100% | — |

### Attacking Set-Pieces
| Metric | Value | Note |
|--------|-------|------|
| SP goals | **3** (from 13 shots, xG 1.22) | — |
| SP Goal% | **37.50%** | High conversion |
| SP Shot% | 29.55% | — |
| SP xG% | 26.44% | — |

> USA are a serious SP offensive threat — 3 goals, 1.22 xG from set pieces. 37.5% conversion is elite.

### Attacking Misc
| Metric | Value |
|--------|-------|
| Box touches | 109 (36.3/game) — very high attacking presence |
| Hit post | 1 |
| Offsides | 8 (2.67/game) |
| Penalties | 0 goals from 0 |
| Free-kick goals | 0 (0 shots) |
| **Header goals** | **1** (from 9 attempts) |
| Fast break goals | 0 (from 2) |

### Defending Set-Pieces
| Metric | Value | Note |
|--------|-------|------|
| SP goals conceded | **2** (from 6 shots, xG 1.16) | — |
| **SP Goal% conceded** | **50.00%** | **Critical weakness** |
| SP Shot% | 26.09% | — |
| SP xG% | 29.51% | — |

> ⚠️ **SP DEFENCE IS USA's BIGGEST VULNERABILITY.** 2 goals conceded from just 6 SP shots = 50% concession rate. Bosnia score 60% of their goals from SP (3/5) and win 65% of aerial duels. USA win only **45.0% of aerial duels** (below average). This is the primary danger zone in this fixture.

### Defensive Actions
| Metric | Value | Per game |
|--------|-------|---------|
| Tackles | 43 | 14.33 |
| Interceptions | 38 | 12.67 |
| Recoveries | 126 | 42.0 |
| Blocks | 7 | 2.33 |
| **Clearances** | **73** | **24.3** — moderate (not under constant siege like Bosnia's 42.67) |
| Ground duels won | 49.4% | — |
| **Aerial duels won** | **45.0%** | **Below average — key vs Bosnia's 65% aerial** |

### Defending Misc
| Metric | Value |
|--------|-------|
| Box touches allowed | 53 (17.7/game) |
| Hit post (opponents) | 0 |
| Opponent offsides caught | 3 (1.0/game) |
| Penalties conceded | 0 |
| FK goals conceded | 0 |
| Header goals conceded | 0 (from 0 attempts) |
| Fast breaks conceded | 2 (0 goals) |

---

## Movement & Offers (WC2026, 3 games)
| Metric | Value |
|--------|-------|
| Offers to receive (total) | 1207 |
| Offers in behind | 337 |
| Offers in between | 474 |
| Offers in front | 396 |
| Offers inside team shape | 658 |
| Offers outside team shape | 549 |
| Receptions in behind | 52 |
| Receptions between mid & def lines | 360 |

## Physical Stats (WC2026, 3 games)
| Metric | Value |
|--------|-------|
| Average speed | 6.23 km/h |
| High speed running | 4388 |
| Sprints | 1513 |
| Total distance | 358,610m |

## xG & Possession Stats (WC2026, 3 games)
| Metric | Value | Rank (48 teams) |
|--------|-------|-----------------|
| Inside box shots | 36 | — |
| Outside box shots | 8 | — |
| Headed shots | 9 | — |
| xG | 5.24 | 4/48 |
| xG efficiency | 1.53x | — |
| Corners won | 19 | — |
| Possession | 54% | — |

---

## Model Input Summary (vs Bosnia, R32)
| Input | Value | Note |
|-------|-------|------|
| SoT/game | **5.00** | FBRef 3-game |
| SoTA-allowed/game | **2.00 raw → regress 35% → 4.28** | Only 6 SoTA — smallest sample in dataset |
| GK save% | **Freese 66.7% on 3 SoTA → regress 35% → ~66%** | Confirm starter in lineup |
| xG/shot | **0.10** | Opta 3-game |
| Goals vs xG | **+3.38 (3 games)** | Running hot; regression due |
| PPDA | **8.1** | Very good press (full 3-game) |
| Press start | **46.2m** | Highest in dataset |
| Fouls committed/game | **12.67** | FBRef |
| YC/game | **1.67** | 5 in 3 games |
| Key player | **McKennie +16.70** (264 min) | Best On-Off in dataset |
| Key drag | **Berhalter −4.41** (152 min), **Pepi −2.57** (182 min, 0 SoT) | If either starts, USA attack suffers |
| GK risk | **Turner −3.50** | Do NOT start in model |
| SP attack | **3 goals from 13 shots (37.5%)**, xG 1.22 | Serious SP offensive threat |
| **SP defence** | **2 goals conceded from 6 shots (50%)** | **Critical weakness vs Bosnia** |
| **Aerial duels won** | **45.0%** (below average) | Bosnia win 65% — dominant SP edge to Bosnia |

---

## Cross-links
- [[Competitions/wc2026-group-d]]
- [[Predictions/r32-usa-vs-bosnia]]
