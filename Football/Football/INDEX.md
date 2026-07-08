# Football Intelligence Database â€” Index

**Last updated**: 2026-07-08 | **Active competition**: WC2026 — Quarterfinals (2026-07-10/11) | **Teams indexed**: 48/48

## QF Fixtures

| # | Match | Data status |
|---|-------|-------------|
| QF1 | France vs Morocco | ✅ Prediction filed — France λ=1.572, Morocco λ=1.135 |
| QF2 | Spain vs Belgium | ⏳ Data needed |
| QF3 | England vs Norway | ⏳ Data needed |
| QF4 | Argentina vs Switzerland | ⏳ Data needed (SUI won R16 on penalties 4-3, 0-0 aet) |

---

## Session Log
- **2026-07-06** — R16 Brazil vs Norway result filed. Norway 2-1 (upset). 13/17 picks correct. Nyland variance decisive.
- **2026-07-06** — R16 Mexico vs England result filed. England 3-2 (17% upset). 16/27 picks correct. England RC black swan invalidated corners, cards, goals, BTTS markets. Red card lesson added.
- **2026-07-08** — R16 Colombia vs Switzerland prediction filed. λ_COL=1.214, λ_SUI=0.781. Result pending.
- **2026-07-08** — **CRITICAL MODEL UPDATE**: Opponent-adjusted SoT model v3.0. Added GK/SoTA Bayesian regression formulas, weaker team floor rule, lineup adjustment, schedule correction, half-time split, BTTS caution flag, xG blend (0.6 λ_SoT + 0.4 λ_xG), SP additive (λ_SP), GK prior raised to 70% for QF+, SoTA regression prior updated per round, data collection checklist added.
- **2026-07-08** — **NEW**: Ancillary markets model filed (cards, fouls, offsides, corners, SoT formulas + corner possession rule + star rating table).
- **2026-07-08** — **NEW**: Lesson — dataset benchmark ages by round. Round-specific SoTA benchmarks: R16=3.5, R8+=3.0.
- **2026-07-08** — **NEW**: Lesson — corner possession rule. Argentina-Egypt post-mortem. Trigger: ≥55% possession AND opponent PPDA >14.
- **2026-07-09** — QF1 France vs Morocco prediction filed. France 4G→5G vault updated (Maignan save% 66.7%→77.8%). Morocco full 5G vault built from scratch. France λ=1.572, Morocco λ=1.135, total=2.707. Picks: France Win ⭐⭐⭐, France Advance ⭐⭐⭐⭐, BTTS Yes ⭐⭐⭐, Over 2.5 ⭐⭐⭐, Under 3.5 YC ⭐⭐⭐⭐⭐.

---

## How to Navigate

- **Starting a prediction**: Read the team pages â†’ run the model â†’ check referees â†’ check lessons
- **After a match**: File a Match Review â†’ update team page â†’ add/update a Lesson
- **For betting research**: Go to Betting/ folder â†’ find the market â†’ cross-check with Lessons/

---

## Competitions

| File | Summary |
|------|---------|
| [[Competitions/wc2026-group-d]] | USA 1st, Australia 2nd â€” both qualified |
| [[Competitions/wc2026-group-e]] | Germany 1st, Ivory Coast 2nd â€” both qualified |
| [[Competitions/wc2026-group-f]] | Netherlands 1st, Japan 2nd â€” both qualified |
| [[Competitions/wc2026-group-g]] | Belgium 1st (7pts), Egypt 2nd (5pts) â€” Iran & NZ eliminated |
| [[Competitions/wc2026-group-h]] | Cape Verde 1st, Spain 2nd (7pts) â€” Uruguay & Saudi Arabia eliminated |
| [[Competitions/wc2026-group-i]] | France 1st (9pts), Senegal 2nd â€” Norway & Iraq eliminated |

---

## Teams

| File | Summary |
|------|---------|
| [[Teams/belgium]] | 7pts Group G winners. R32 vs Senegal. λ=2.27 (clean model). Tielemans −29.32 starts. FBRef+Opta+Footystats ingested. |
| [[Teams/egypt]] | 5pts Group G runners-up. G/SoT 0.40 (dataset record). Marmoush/Trézéguet dilemma. |
| [[Teams/france]] | 9pts, perfect group stage. Mbappé 4G+. 0 yellows. Through-ball model. |
| [[Teams/spain]] | 7pts Group H 2nd. 70.7% possession (record). 0 goals from build-up patterns. |
| [[Teams/germany]] | Group E winners. 9G in 2 games. High press + Undav super-sub. |
| [[Teams/usa]] | Group D winners (6pts). PPDA 8.1, press start 46.2m (highest). McKennie +16.70 best On-Off in dataset. Freese GK 66%. SP defence 50% concession rate — key weakness. λ=2.04 vs Bosnia. |
| [[Teams/japan]] | Group F runners-up. PPDA 13.5 mid-block. Shiogai super-sub (+11.30 On-Off). |
| [[Teams/netherlands]] | Group F winners. xG/shot 0.17 elite quality. Gakpo +15.46 On-Off. |
| [[Teams/australia]] | Group D runners-up. Low block. Beach GK elite saves. Counter-attack dependent. |
| [[Teams/cape-verde]] | Group H winners. Vozinha GK elite. Upset Spain on points. |
| [[Teams/ivory-coast]] | Group E runners-up. Diallo 90th-min winner vs Ecuador. Quick transitions. |
| [[Teams/ecuador]] | Group E 3rd — qualified. 16 SoT/0 goals MD1-2; extreme negative variance. |
| [[Teams/senegal]] | Group I runners-up. R32 vs Belgium. λ=1.02 (clean model). Koulibaly OUT, Diaw IN, Ndiaye starts. FBRef+Opta+Footystats ingested. |
| [[Teams/brazil]] | **ELIMINATED R16.** Lost 1-2 vs Norway Jul 5. λ=2.39 model correct; Nyland overperformed 61.2% regressed save%. 4 SoT, 5 corners. |
| [[Teams/south-africa]] | R32 vs Canada Jun 28. Direct speed 1.43 (fastest). 2 reds in 3 games. Williams 66.7% save%. |
| [[Teams/canada]] | R32 vs South Africa Jun 28. 7 SoT/90 (highest). Crépeau 57.1% save% (worst in dataset). Davies 0 mins. |
| [[Teams/paraguay]] | Qualified (3rd place). Low block. Galarza early-goal pattern. |
| [[Teams/norway]] | **QF qualified. Won R16 vs Brazil 2-1 (13% upset).** Nyland overperformed. Haaland counter decisive. 5 SoT, 5 corners. |
| [[Teams/iran]] | Eliminated. Beiranvand 86.7% save% (dataset record). 0 build-up sequences. |
| [[Teams/uruguay]] | Eliminated. 76 crosses/2 games (record). +1.46 defensive unluckiness. |
| [[Teams/new-zealand]] | Eliminated. SoT% 52% (record) but Crocombe 54.5% cost them. |
| [[Teams/sweden]] | Eliminated. PPDA 15.9 passive block. Svanberg super-sub. |
| [[Teams/iraq]] | Eliminated (0pts). Low data quality. |
| [[Teams/saudi-arabia]] | Eliminated. 5 shots/game — minimal attacking output. |
| [[Teams/mexico]] | **ELIMINATED R16.** Lost 2-3 England despite 20 shots, 12 corners. Red card changed game. Rangel 40% actual vs 88.3% regressed prior. |
| [[Teams/england]] | **QF qualified. Won R16 3-2 Mexico (17% upset).** 1 RC, 4 YC. 3 goals from 5 SoT (60% G/SoT on counter). |
| [[Teams/scotland]] | Eliminated. 70.31s BRT (2nd slowest). 6.21 km/h. 42 fouls drawn (3rd most fouled). |
| [[Teams/portugal]] | Eliminated. 22.69s BRT (fastest press). 23 fouls committed (fewest). 5.95 km/h. |
| [[Teams/argentina]] | 2 CS, 0 GC. GK faced 1 shot. 5.67 km/h slowest movers. 732 sprints (lowest). |
| [[Teams/morocco]] | R32 qualified. 6.04 km/h. 2nd most offers to receive (1376). 1 CS, 3 GC. |
| [[Teams/switzerland]] | R32 qualified. 4041 HSR. 42 fouls committed. 6.0 km/h. |
| [[Teams/croatia]] | R32 qualified. 6.10 km/h. 11 GK saves, 5 GC. 36 fouls committed. |
| [[Teams/turkey]] | R32 qualified. 1275 offers to receive. 6.10 km/h. 350,818m (high distance). |
| [[Teams/korea-republic]] | R32 qualified. 1201 offers. 11 GK saves, 3 GC (low concede). 32 fouls committed. |
| [[Teams/austria]] | Eliminated. 5.91 km/h. 6 GK saves, 3 GC. 17 fouls committed (fewest after Spain). |
| [[Teams/czechia]] | Eliminated. 6.33 km/h (2nd fastest). 4330 HSR. 11 GK saves, 6 GC. |
| [[Teams/bosnia]] | R32 vs USA. Vasilj 50%/53% (worst GK). 3/5 goals from SP, aerial 65%. Goals vs xG +3.13 (extreme overperformance). PPDA 12.0 mid-block. λ=0.73 vs USA. Fouls 15.67/game (YC risk). |
| [[Teams/panama]] | Eliminated. 6.05 km/h. 42 fouls drawn. 4 GC, 4 GK saves. |
| [[Teams/ghana]] | Eliminated. 5.85 km/h. 2 CS, 7 GK saves. 42 fouls drawn. |
| [[Teams/haiti]] | Eliminated. 55 fouls drawn (most in dataset). 8 GC, 13 GK saves. |
| [[Teams/tunisia]] | Eliminated. 12 GC (2nd worst). 6.09 km/h. 69.13s BRT (2nd slowest press). |
| [[Teams/qatar]] | Host. 5.64 km/h (slowest). 2 red cards. 10 OG. |
| [[Teams/jordan]] | Eliminated. 6.19 km/h but only 236,715m distance — compact shape. 5 GC. |
| [[Teams/curacao]] | Eliminated. 21 GK saves (most in dataset). 9 GC. 7 YC. |
| [[Teams/uzbekistan]] | Eliminated. 5.85 km/h. 8 GC. 2 YC (disciplined). |
| [[Teams/colombia]] | R32 qualified. Physical data pending. 23 fouls committed. 1 CS, 1 GC (elite). |
| [[Teams/algeria]] | Eliminated. 6.06 km/h. 4 GC, 6 GK saves. 225,609m (low distance). |
| [[Teams/congo-dr]] | Eliminated. 5.91 km/h. 218,417m (lowest distance). 9 GK saves, 2 GC (solid). |

---

## Players (profiled)

| File | Summary |
|------|---------|
| **Beiranvand** | Iran GK. 86.7% save% (dataset record). Worth ~1 goal/game above expected. |
| **Mbappe** | France FW. 4G/12sh, G/SoT 0.57. Tournament's best individual output. |
| **Haaland** | Norway FW. 4G/10sh, G/SoT 0.57. 0 offsides in 2 games. |
| **Salah** | Egypt FW/AM. Captain. G/SoT 0.33, 7 crosses/game, +1.13 On-Off. |
| **Trezeguet** | Egypt FW. +5.45 On-Off, G/SoT 1.00. Best impact sub in dataset. |
| **Marmoush** | Egypt FW. -5.45 On-Off, 0G/8sh. Should not start. |
| **Pedri** | Spain MF. 11 interceptions (dataset record). +2.26 On-Off. 1 yellow (risk). |
| **Courtois** | Belgium GK. 83.3% save%. Elite return from injury. |
| **De Bruyne** | Belgium MF. 9 shots, 14 crosses, 0G through MD2. 34yo. |
| **De Cuyper** | Belgium WB. 80% SoT% (dataset record). +2.36 On-Off. |
| **Lukaku** | Belgium FW. 0 SoT in 97 mins MD1-2. Scored MD3 vs weak GK. |
| **Rezaeian** | Iran WB. 14 crosses (dataset record). Iran's only attack outlet. |

---

## Models

| File | Summary |
|------|---------|
| [[Models/opponent-adjusted-sot-model]] | **v3.0** Core expected goals model. Full formula: λ_field = 0.6×λ_SoT + 0.4×λ_xG, plus λ_SP additive. GK prior 70% for QF+. SoTA regression uses round benchmark. Data collection checklist included. |
| [[Models/wc2026-dataset-benchmarks]] | Full dataset reference + round-by-round SoTA benchmarks (R16=3.5, R8+=3.0). Updated 2026-07-08. |
| [[Models/ancillary-markets-model]] | **v2.0** Cards, fouls, offsides, SoT formulas. Graduated corner possession adjustment (replaces binary trigger) — scales continuously with possession% and opponent PPDA. Known model biases. Half-time split. Star rating table. |

---

## Lessons (most valuable section)

| File | Summary |
|------|---------|
| [[Lessons/xg-regression-corrects-sharply]] | xG deficit corrects in one game, not gradually. Belgium 5-1 NZ confirmed. |
| [[Lessons/gk-save-percentage-suppresses-scoring]] | Elite GK (>85%) suppresses by ~50-60%. Beiranvand validated. |
| [[Lessons/raw-sot-averages-mislead-vs-compact-defenses]] | Always adjust SoT for opponent defensive quality. Spain vs Uruguay confirmed. |
| [[Lessons/qualification-stakes-dont-mean-desperate-play]] | Check 3rd-place table. Draw often qualifies in 48-team WC. |
| [[Lessons/on-off-differential-reveals-selection-errors]] | On-Off gap reveals lineup errors. TrÃ©zÃ©guet vs Marmoush: +5.45/-5.45. |
| [[Lessons/possession-dominance-doesnt-mean-goals]] | Spain & Uruguay: 0 goals from build-up sequences. xG/shot quality matters. |
| [[Lessons/low-block-teams-stay-low-scoring]] | PPDA >14 teams create Under-friendly matches. Iran: 1.33 goals/game avg. |
| [[Lessons/dataset-benchmark-ages-by-round]] | **NEW** Using group-stage SoTA benchmark (5.5) for R8+ understates λ by 30-40%. Use R16=3.5, R8+=3.0. Evidence from 11 R16 teams. |
| [[Lessons/corner-possession-rule]] | **NEW** Argentina-Egypt: Egypt predicted 91.5% corners over 1.5 → got 1 corner. Possession ≥55% + opponent PPDA >14 triggers ×1.30/×0.50 adjustment. |

---

## Predictions

| File | Summary |
|------|---------|
| [[Predictions/r32-south-africa-vs-canada]] | ✅ RESULT: Canada 1-0 SA. Hits: Canada win ⭐⭐⭐⭐, BTTS No ⭐⭐⭐⭐⭐, Under 2.5 ⭐⭐⭐⭐⭐. Miss: corners (5 total vs 8.5+), SA card (0 cards). Core 4/4. |
| [[Predictions/r32-brazil-vs-japan]] | Jun 29. Under 2.5 ⭐⭐⭐⭐⭐ (84%), BTTS No ⭐⭐⭐⭐⭐ (86%), Brazil win ⭐⭐⭐⭐, Brazil qualify ⭐⭐⭐⭐⭐ |
| [[Predictions/r32-germany-vs-paraguay]] | Jun 29. Germany win ⭐⭐⭐⭐⭐ (68%), Paraguay card ⭐⭐⭐⭐⭐ (78%), Under 3.5 ⭐⭐⭐⭐⭐ (83%), BTTS No ⭐⭐⭐⭐ (73%), Gill saves O4.5 ⭐⭐⭐⭐ (63%). Score: 2-0 Germany. FULL DATA MODEL. |
| [[Predictions/r32-netherlands-vs-morocco]] | Jun 29. Genuine 50/50 — Morocco model favourite (52%). Fouls O20.5 ⭐⭐⭐⭐ (76%), Total SoT O5.5 ⭐⭐⭐⭐, Verbruggen saves O2.5 ⭐⭐⭐⭐, score: 1-1 (Morocco ET) |
| [[Predictions/r32-norway-vs-ivory-coast]] | Jun 29. Norway win 2-1. Corrected model. BTTS No cap applied. |
| [[Predictions/r32-france-vs-sweden]] | Jul 1. λ_France=1.70, λ_Sweden=1.22. Corrected model. Over 2.5 ⭐⭐⭐⭐, BTTS Yes ⭐⭐⭐⭐. |
| [[Predictions/r32-england-vs-congo-dr]] | **RESULT: England 2-1 Congo DR ✓** — England win ✓, SoT markets ✓, BTTS No ✗ (Congo scored), corners ✗, YC O2.5 ✗. |
| [[Predictions/r32-mexico-vs-ecuador]] | **Jul 1.** λ_Mexico=0.71, λ_Ecuador=0.80. Under 3.5 93% ⭐⭐⭐⭐⭐, Under 2.5 81% ⭐⭐⭐⭐⭐, BTTS No 72% ⭐⭐⭐⭐⭐, Ecuador YC O0.5 95% ⭐⭐⭐⭐⭐. Clean model. Model-reality tension flagged (Mexico 3W group winner). |
| [[Predictions/r32-belgium-vs-senegal]] | **Jul 1.** λ_Belgium=2.27, λ_Senegal=1.02. Belgium win 64% ⭐⭐⭐⭐, Belgium qualify 81% ⭐⭐⭐⭐⭐. Over 1.5 83% ⭐⭐⭐⭐⭐. Total SoT O7.5 79% ⭐⭐⭐⭐⭐. Total YC O2.5 80% ⭐⭐⭐⭐⭐. Clean model. Said Martinez referee. |
| [[Predictions/r32-usa-vs-bosnia]] | **Jul 1.** λ_USA=2.04, λ_Bosnia=0.73. USA win 68% ⭐⭐⭐⭐⭐, USA qualify 84% ⭐⭐⭐⭐⭐. Over 1.5 76% ⭐⭐⭐⭐⭐. Bosnia YC O0.5 91% ⭐⭐⭐⭐⭐. Total YC O2.5 81% ⭐⭐⭐⭐⭐. Bosnia SoT U3.5 83% ⭐⭐⭐⭐⭐. SP matchup critical. Raphael Claus referee. Full data model. |
| [[Predictions/r32-spain-vs-austria]] | **Jul 2. COMPLETE.** λ_Spain=2.09, λ_Austria=0.20. Spain qualify 93% ⭐⭐⭐⭐⭐, BTTS No 84% ⭐⭐⭐⭐⭐, Under 3.5 80% ⭐⭐⭐⭐⭐, Austria SoT U2.5 82% ⭐⭐⭐⭐⭐. Glenn Nyberg referee (3.29 YC). Austria fast break vulnerability (5/3). |
| [[Predictions/r32-portugal-vs-croatia]] | **Jul 2.** λ_Portugal=1.26, λ_Croatia=0.38. Under 2.5 82% ⭐⭐⭐⭐⭐, BTTS No 78% ⭐⭐⭐⭐⭐, Portugal qualify 72% ⭐⭐⭐⭐⭐. Croatia PPDA 16.3 (deepest block in dataset). SP aerial matchup: Portugal 59.6% vs Croatia 45.4%. Referee/lineups pending. |
| [[Predictions/r16-brazil-vs-norway]] | **RESULT: Norway 2-1 Brazil (13% upset). 13/17 picks correct.** λ_Brazil=2.39, λ_Norway=0.75. Nyland variance decisive. Fouls (13 actual vs λ=23) extreme outlier. YC O1.5 missed (1 card). |

## Projects

| File | Summary |
|------|---------|
| [[Projects/data-automation-plan]] | Club season 2026/27 — FBRef + Understat scrapers to replace manual screenshots. 5 build phases. Target: live by Aug 2026. |

---

## Match Reviews

| File | Summary |
|------|---------|

---

## Betting Guides

| File | Summary |
|------|---------|
| [[Betting/moneyline]] | When to back favourites; probability-first star rating system |
| [[Betting/over-under-goals]] | Model-based Over/Under framework; Spain Over 2.5 error documented |
| [[Betting/cards-market]] | Referee profiles + discipline records + must-win context = cards formula |
| [[Betting/btts]] | When BTTS Yes/No is reliable; Iran BTTS pattern documented |

---

## Tactics & Statistics

| File | Summary |
|------|---------|
| [[Statistics/xg]] | xG definition, interpretation, WC2026 benchmarks |
| [[Statistics/ppda]] | PPDA benchmarks, WC2026 team profiles |
| [[Tactics/pressing-systems]] | High press / mid-block / low block explained with WC2026 examples |
| [[Tactics/momentum-shifts]] | What causes shifts; the 60-75 minute window |

---

## Referees

| File | Summary |
|------|---------|
| [[Referees/wc2026-referees]] | All 12 MD3 referees profiled with yellow/red averages and cards picks |

---

## Session Log (major operations)
- 2026-06-27: Full migration from wiki/ to Football/ structure per SYSTEM.md
- 2026-06-26: MD3 predictions (Groups G, H, I) â€” Belgium/NZ, Egypt/Iran, France/Norway, Spain/Uruguay, Senegal/Iraq, Cape Verde/Saudi Arabia
- 2026-06-25: MD3 predictions (Groups D, E, F)
- 2026-07-01: Belgium + Senegal full ingest (FBRef, Opta initial+extended, Footystats, referee Said Martinez, R32 lineups). Created r32-belgium-vs-senegal.md. Corrected model applied.
- 2026-06-25: Opta data ingested â€” Belgium, Egypt, Iran, New Zealand, France, Norway, Spain, Uruguay
- 2026-07-05: R16 Norway vs Brazil full data ingest (FBRef+Opta+Opta Extended 4G, Footystats, lineups, Elfath referee). Norway.md + Brazil.md updated. r16-brazil-vs-norway.md created. Two data errors corrected: fouls team-swapped (Brazil 12.7, Norway 8.3 committed/game), offsides team-swapped (Brazil 3.0/G, Norway 0.33/G).
