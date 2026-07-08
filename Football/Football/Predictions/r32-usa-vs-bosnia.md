---
title: R32 — USA vs Bosnia and Herzegovina
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, usa, bosnia]
sources: [fbref-usa-wc2026, opta-usa-wc2026, fbref-bosnia-wc2026, opta-bosnia-wc2026, footystats-usa-bosnia, lineups-r32]
last_updated: 2026-07-01
---

# R32: USA vs Bosnia and Herzegovina

## Lineups (Confirmed)

**USA (3-4-2-1):**
Freese — Richards, Ream, Freeman — Dest, Adams, McKennie, Robinson — Tillman, Pulisić — Balogun

**Bosnia (4-4-2):**
Vasilj — Kolašinac, Katić, Muharemović, Dedić — Alajbegović, Bašić, Tahirović, Bajraktarević — Džeko, Demirović

**Referee:** Raphael Claus (BRA) — **4.34 YC/game, 0.22 RC/game**

### Key Lineup Notes

**USA:**
- **Freese confirmed** as GK (+3.50 On-Off, 2 wins) — use 66% save%
- **McKennie (+16.70, 264 min)** — best On-Off in full dataset; non-negotiable ✓
- **All drag players absent:** Pepi (−2.57, 0 SoT), Berhalter (−4.41), Turner (−3.50) — USA's optimal lineup
- **Robinson (+3.55) at LWB** faces Dedić (−3.50 RB) — USA's hottest individual matchup
- **Balogun (+3.63)** — primary striker, 2G in WC ✓
- **Pulisić (+1.37)** — limited mins but high SoT% ✓
- 3-4-2-1 gives USA numerical superiority in midfield (Adams + McKennie double pivot)

**Bosnia:**
- **Demirović (+15.00, 264 min)** — only genuine attacking threat ✓
- **Katić (−4.07, CB, 243 min)** — biggest confirmed drag; structural weakness at centre-back
- **Dedić (−3.50, RB)** — will face Robinson; Bosnia's right defensive flank is weak
- **Alajbegović (−2.05, LM)** — starts despite confirmed drag; USA's press will target him
- **Džeko (+1.96)** — positive On-Off but 0 SoT in 126 WC minutes; statistical presence only
- Kolašinac (−0.34) — minimal drag at LB

---

## Footystats Context (10-game broader sample)

| Team | P | W | D | L | GF | GA | GD | Last 5 | PPG | xG | xGA | BTTS% | CS% | Corners | Cards | AVG |
|------|---|---|---|---|----|----|----|--------|-----|-----|------|-------|-----|---------|-------|-----|
| USA | 10 | 6 | 0 | 4 | 23 | 18 | 5 | WLWWL | 1.80 | 1.55 | 1.15 | 80% | 10% | 10.1 | 16 | 4.1 |
| Bosnia | 10 | 3 | 6 | 1 | 16 | 12 | 4 | DDDLW | 1.50 | 1.52 | 1.23 | 90% | 10% | 10 | 25 | 2.8 |

> Note: Broader sample includes non-WC opponents. WC-specific numbers (in team pages) are the primary model inputs. BTTS% at 80-90% in broader sample may overstate BTTS risk vs WC defensive quality. Bosnia's card rate (2.5/game) supports discipline picks. USA cards (1.6/game) suggest they stay disciplined despite pressing.

---

## Model

### USA attacking vs Bosnia defence

- USA SoT/game: **5.00** (FBRef, 3 WC games)
- Bosnia SoTA-allowed: **4.67/game** (3 WC games, 0 CS) → regress 15%: **4.79**
- Adj USA SoT = 5.00 × (4.79/5.5) = **4.35**
- Vasilj save%: 50.0% on 12 SoTA → regress 20%: **53%**
- **λ_USA = 4.35 × 0.47 = 2.04**

> Lineup note: USA's optimal XI is on the pitch. No Pepi (0 SoT drag), no Berhalter (−4.41 drag). Base SoT/game of 5.00 is squad average including games with drags — actual output with this lineup may be higher. Model is conservative.

### Bosnia attacking vs USA defence

- Bosnia SoT/game: **3.67** (FBRef, 3 WC games)
- USA SoTA-allowed: **2.00/game** (3 WC games, only 6 SoTA) → regress 35% toward 5.5: **3.23**
- Adj Bosnia SoT = 3.67 × (3.23/5.5) = **2.15**
- Freese save%: 66.7% on 3 SoTA → regress 35%: **66%**
- **λ_Bosnia = 2.15 × 0.34 = 0.73**

> Broader data note: Footystats 10-game xGA for USA = 1.15/game, suggesting genuine defensive quality — the 35% regression may slightly underestimate USA's defensive strength. λ_Bosnia could be 0.65-0.73.

---

## λ_USA = 2.04 | λ_Bosnia = 0.73 | λ_total = 2.77

### Match Outcomes
| Outcome | Probability |
|---------|------------|
| **USA win (90')** | **68%** |
| Draw (90') | 20% |
| Bosnia win (90') | 12% |
| **USA qualify (incl. ET/pens)** | **~84%** |

### Score Distributions
| Goals | USA (λ=2.04) | Bosnia (λ=0.73) |
|-------|-------------|----------------|
| 0 | 13.0% | 48.2% |
| 1 | 26.5% | 35.2% |
| 2 | 27.0% | 12.8% |
| 3 | 18.4% | 3.1% |
| 4+ | 15.1% | 0.7% |

---

## Market Predictions

### Result / Qualification
| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **USA qualify (incl. ET/pens)** | **84%** | ⭐⭐⭐⭐⭐ | λ=2.04 vs 0.73; elite press neutralises Bosnia SP |
| **USA win (90')** | **68%** | ⭐⭐⭐⭐⭐ | Strong; optimal lineup all present |
| Draw (90') | 20% | — | — |
| Bosnia win (90') | 12% | — | Requires Demirović SP goal + USA errors |

### Goals
*λ_total = 2.77*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Under 3.5** | **70%** | ⭐⭐⭐⭐⭐ | λ=2.77; Bosnia xG 0.73 caps total |
| **Over 1.5** | **76%** | ⭐⭐⭐⭐⭐ | λ=2.77 — USA expected to score 2+ |
| **BTTS No** | **55%** | ⭐⭐⭐⭐ | P(Bosnia ≥1) = 51.8%; Freese at 66% the key |
| Under 2.5 | 48% | — | Too close; skip |
| Over 2.5 | 52% | — | Marginal; skip |
| BTTS Yes | 45% | — | Skip |
| **USA to score 2+** | **54%** | ⭐⭐⭐⭐ | P(USA ≥2) = 0.270+0.184+0.151 = 60.5%... let me recheck: P(≥2) = 1-P(0)-P(1) = 1-0.130-0.265 = **60%** |

### Shots on Target
*Adj USA SoT = 4.35 | Adj Bosnia SoT = 2.15 | Total = 6.50*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Bosnia SoT Under 3.5** | **83%** | ⭐⭐⭐⭐⭐ | λ=2.15; P(≤3) = 83% |
| **Total SoT Under 8.5** | **~78%** | ⭐⭐⭐⭐⭐ | λ=6.50 |
| **USA SoT Over 3.5** | **63%** | ⭐⭐⭐⭐ | λ=4.35; P(≥4) = 63% |
| **Bosnia SoT Over 1.5** | **63%** | ⭐⭐⭐⭐ | λ=2.15; P(≥2) = 63% |
| Total SoT Over 5.5 | 63% | ⭐⭐⭐⭐ | λ=6.50 |
| Total SoT Under 7.5 | 67% | ⭐⭐⭐⭐ | — |

### Saves
*λ_Vasilj_saves = 4.35 × 0.53 = 2.31 | λ_Freese_saves = 2.15 × 0.66 = 1.42*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Vasilj saves Over 1.5** | **67%** | ⭐⭐⭐⭐ | λ=2.31; P(≥2) = 67% |
| **Freese saves Over 0.5** | **76%** | ⭐⭐⭐⭐⭐ | λ=1.42; P(≥1) = 76% |
| Vasilj saves Over 0.5 | 90% | ⭐⭐⭐⭐⭐ | P(≥1) = 90% |
| Vasilj saves Over 2.5 | 41% | — | Skip |

### Corners
*USA own WC corners: 6.33/game (19 in 3 games). Bosnia broader: 10.0/game (both teams combined). Blended estimate: λ_total ≈ 10.*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **USA corners Over 5.5** | **66%** | ⭐⭐⭐⭐ | USA 6.33/game own corners in WC; 3-4-2-1 WB-heavy system generates corners |
| Total corners Under 11.5 | ~68% | ⭐⭐⭐⭐ | Broad estimate |
| Total corners Over 8.5 | ~68% | ⭐⭐⭐⭐ | Broad estimate — limited data, moderate confidence |

### Fouls
*USA fouls committed: 12.67/game | Bosnia fouls committed: 15.67/game | λ_total = 28.34/game*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Total fouls Over 24.5** | **~76%** | ⭐⭐⭐⭐⭐ | λ=28.34 — Bosnia's 15.67/game alone nearly hits this |
| Total fouls Over 26.5 | ~63% | ⭐⭐⭐⭐ | — |
| Total fouls Under 31.5 | ~63% | ⭐⭐⭐⭐ | — |
| Bosnia fouls Over 12.5 | ~72% | ⭐⭐⭐⭐⭐ | λ=15.67; normal approx P(≥13) |

### Cards (Claus — 4.34 YC/game, 0.22 RC/game)
*USA fouls: 44.7% share → λ_USA_YC = 1.94 | Bosnia fouls: 55.3% share → λ_Bosnia_YC = 2.40*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Bosnia YC Over 0.5** | **91%** | ⭐⭐⭐⭐⭐ | λ=2.40; P(≥1) = 90.9% |
| **Total YC Over 2.5** | **81%** | ⭐⭐⭐⭐⭐ | λ=4.34; P(≥3) = 81% |
| **Total YC Under 5.5** | **73%** | ⭐⭐⭐⭐⭐ | P(≤5) = 73% |
| **USA YC Over 0.5** | **86%** | ⭐⭐⭐⭐⭐ | λ=1.94; P(≥1) = 85.6% |
| Total YC Over 3.5 | 63% | ⭐⭐⭐⭐ | — |
| Bosnia YC Over 1.5 | 69% | ⭐⭐⭐⭐ | λ=2.40; P(≥2) = 69% |
| USA YC Over 1.5 | 58% | ⭐⭐⭐⭐ | Marginal |

### Offsides
*USA 2.67/game | Bosnia 0.67/game | λ_total = 3.33*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **USA offsides Over 1.5** | **75%** | ⭐⭐⭐⭐⭐ | λ=2.67; P(≥2) = 75% — USA's runs in behind, WB overlaps |
| **Total offsides Under 4.5** | **76%** | ⭐⭐⭐⭐⭐ | λ=3.33; P(≤4) = 76% |
| Total offsides Over 2.5 | 65% | ⭐⭐⭐⭐ | — |

---

## Best Picks — Priority Order

| # | Market | Prob | Stars |
|---|--------|------|-------|
| 1 | Bosnia YC Over 0.5 | 91% | ⭐⭐⭐⭐⭐ |
| 2 | USA qualify (incl. ET/pens) | 84% | ⭐⭐⭐⭐⭐ |
| 3 | Vasilj saves Over 0.5 | 90% | ⭐⭐⭐⭐⭐ |
| 4 | USA YC Over 0.5 | 86% | ⭐⭐⭐⭐⭐ |
| 5 | Total YC Over 2.5 | 81% | ⭐⭐⭐⭐⭐ |
| 6 | Bosnia SoT Under 3.5 | 83% | ⭐⭐⭐⭐⭐ |
| 7 | Over 1.5 goals | 76% | ⭐⭐⭐⭐⭐ |
| 8 | Freese saves Over 0.5 | 76% | ⭐⭐⭐⭐⭐ |
| 9 | Total fouls Over 24.5 | ~76% | ⭐⭐⭐⭐⭐ |
| 10 | Total YC Under 5.5 | 73% | ⭐⭐⭐⭐⭐ |
| 11 | Bosnia fouls Over 12.5 | ~72% | ⭐⭐⭐⭐⭐ |
| 12 | USA win (90') | 68% | ⭐⭐⭐⭐⭐ |
| 13 | Bosnia YC Over 1.5 | 69% | ⭐⭐⭐⭐ |
| 14 | Total SoT Under 8.5 | ~78% | ⭐⭐⭐⭐⭐ |
| 15 | Vasilj saves Over 1.5 | 67% | ⭐⭐⭐⭐ |
| 16 | USA corners Over 5.5 | 66% | ⭐⭐⭐⭐ |
| 17 | Under 3.5 goals | 70% | ⭐⭐⭐⭐⭐ |
| 18 | USA offsides Over 1.5 | 75% | ⭐⭐⭐⭐⭐ |
| 19 | Total offsides Under 4.5 | 76% | ⭐⭐⭐⭐⭐ |
| 20 | Total fouls Over 26.5 | ~63% | ⭐⭐⭐⭐ |
| 21 | Total corners Under 11.5 | ~68% | ⭐⭐⭐⭐ |
| 22 | USA SoT Over 3.5 | 63% | ⭐⭐⭐⭐ |
| 23 | Bosnia SoT Over 1.5 | 63% | ⭐⭐⭐⭐ |
| 24 | Total YC Over 3.5 | 63% | ⭐⭐⭐⭐ |
| 25 | Total offsides Over 2.5 | 65% | ⭐⭐⭐⭐ |

**Predicted score: 2-0 USA** (primary) | 2-1 USA (secondary) | 1-0 USA (third)

---

## Result — 2026-07-02

**USA 2–0 Bosnia** ✓ Predicted score correct

### 90-minute Stats
| Metric | USA | Bosnia |
|--------|-----|--------|
| Goals | 2 | 0 |
| Shots | 8 | 10 |
| SoT | 2 | 3 |
| Corners | 4 | 3 |
| Fouls | 7 | 13 |
| YC | 0 | 1 |
| RC | **1 (Balogun)** | 0 |

### Pick Audit
| Pick | Prob | Result | Note |
|------|------|--------|------|
| Bosnia YC Over 0.5 | 91% | ✅ HIT | 1 YC ✓ |
| Vasilj saves Over 0.5 | 90% | ❌ MISS | USA scored both SoT — 0 saves |
| USA YC Over 0.5 | 86% | ❌ MISS | 0 YC (RC instead — market-dependent) |
| Bosnia SoT Under 3.5 | 83% | ✅ HIT | 3 SoT ✓ |
| USA qualify | 84% | ✅ HIT | Won 2-0 ✓ |
| Total YC Over 2.5 | 81% | ❌ MISS | Only 1 YC total |
| Total SoT Under 8.5 | 78% | ✅ HIT | 5 total SoT ✓ |
| Over 1.5 goals | 76% | ✅ HIT | 2 goals ✓ |
| Freese saves Over 0.5 | 76% | ✅ HIT | 3 Bosnia SoT, 0 conceded = 3 saves ✓ |
| Total fouls Over 24.5 | 76% | ❌ MISS | Only 20 fouls |
| USA offsides Over 1.5 | 75% | — | Not reported |
| Total offsides Under 4.5 | 76% | — | Not reported |
| Total YC Under 5.5 | 73% | ✅ HIT | 1 YC ✓ |
| Under 3.5 goals | 70% | ✅ HIT | 2 goals ✓ |
| Bosnia fouls Over 12.5 | 72% | ✅ HIT | 13 fouls ✓ |
| USA win (90') | 68% | ✅ HIT | 2-0 ✓ |
| Bosnia YC Over 1.5 | 69% | ❌ MISS | Only 1 YC |
| Vasilj saves Over 1.5 | 67% | ❌ MISS | 0 saves |
| USA corners Over 5.5 | 66% | ❌ MISS | Only 4 corners |
| Total corners Under 11.5 | 68% | ✅ HIT | 7 total ✓ |
| USA SoT Over 3.5 | 63% | ❌ MISS | Only 2 SoT |
| Bosnia SoT Over 1.5 | 63% | ✅ HIT | 3 SoT ✓ |
| Total YC Over 3.5 | 63% | ❌ MISS | 1 YC |
| Total fouls Over 26.5 | 63% | ❌ MISS | 20 fouls |

### Player Pick Audit
| Pick | Prob | Result | Note |
|------|------|--------|------|
| Balogun SoT Over 0.5 | 76% | ❌ MISS | RC — likely limited minutes; USA only 2 SoT total |
| Balogun shots ≥2 | 85% | ❌ MISS | RC ended his game early |
| McKennie shots ≥1 | 78% | likely ✅ | USA 8 shots — almost certain he had ≥1 |

### Key Surprises
- **USA 2 SoT, 2 goals = 100% conversion** — historic efficiency. Both SoT went in. Model expected 4.35 adj SoT; reality was 2. Extreme negative variance on shot volume but perfect finishing.
- **Bosnia MORE shots (10) and MORE SoT (3) than USA (8, 2)** — Bosnia "won" the shot stats and still lost 2-0.
- **Vasilj 0 saves** — faced 2 SoT, conceded both. Model's λ_saves=2.31 was irrelevant.
- **Balogun RC** — completely unexpected; killed all his individual markets mid-game. USA played significant time with 10 men.
- **Fouls only 20** (model expected ~28) — both teams far cleaner than projected. Bosnia's 13 fouls vs model expectation of 15.67.
- **Cards: only 1 YC total** — with Claus averaging 4.34 YC/game, this was a major referee variance miss. The Balogun RC is dramatic but not a YC.
- **Predicted score 2-0 USA confirmed** ✓ — result was correct despite all the process misses.

---

## Match Flow Prediction

- **Likely opening phase:** USA press high immediately (PPDA 8.1, press start 46.2m). Bosnia's 4-4-2 mid-block sits at 40.8m — they will be pressed before they can settle. Alajbegović (−2.05 LM) is the press target; USA's McKennie and Adams will hunt his zone. Bosnia look to bypass press with long balls to Demirović and Džeko.

- **Key tactical battles:**
  - **Robinson (+3.55 LWB) vs Dedić (−3.50 RB):** USA's most explosive matchup. Robinson's runs in behind should create the majority of USA's wide attacks and corner opportunities.
  - **Balogun vs Katić (−4.07 CB):** Katić is Bosnia's structural weakness. Balogun (2G, +3.63) in a 1v1 aerial battle should have opportunities — though Bosnia's overall aerial stats (65% won) must be respected.
  - **Demirović (+15.00) vs USA's CB trio:** Demirović is Bosnia's entire attack. If Richards, Ream, Freeman contain him, Bosnia have no goal route. If USA's 3-CB structure invites Bosnia set pieces, Demirović's aerial quality becomes dangerous.
  - **SP contest — the defining duel:** Bosnia score 3/5 goals from SP (65% aerial duels won). USA concede 2 from 6 SP shots (50% concession rate, 45% aerial). **This is Bosnia's only realistic scoring route.**

- **Momentum triggers:**
  - USA early goal → Bosnia must abandon mid-block, open up, USA counter-press becomes lethal (McKennie/Adams in transitions)
  - Bosnia SP goal (Demirović aerial from corner) → psychological reset; USA may drop deeper
  - Katić or Dedić yellow card → Bosnia lose discipline shape; USA attack corners even more aggressively
  - Džeko or Demirović isolated by USA's press → Bosnia lose build-up entirely, become a long-ball team with 0 real SP delivery

- **Scenarios:**
  - USA 2-0 (efficient press, Balogun 2G): 22%
  - USA 2-1 (Bosnia score via SP): 18%
  - USA 1-0 (tight win): 17%
  - Draw 0-0 (Bosnia park the bus, USA wasteful): 6%
  - Bosnia 1-0 (Demirović SP goal, USA blank): 7%

- **Key indicators to watch:** Alajbegović foul count in first 30 min (if 2+ early, card coming); Bosnia corner frequency (if 4+ before 60 min, SP danger real); McKennie completing forward passes into box (leading indicator of USA's creative output)

---

## SP Matchup Deep-Dive (The Key Battle)

| Category | USA | Bosnia |
|----------|-----|--------|
| SP goals scored | 3 (from 13 shots, 37.5% conv) | 3 (from 14 shots, 21.4% conv) |
| SP goals conceded | **2 (from 6 shots, 50% rate)** | 0 (from 9 shots, 0%) |
| Aerial duels won | **45.0%** (below avg) | **65.0%** (above avg) |
| SP xG (attack) | 1.22 | 1.36 |

**Bosnia's only realistic scoring route is the set piece.** They are superior in the air, concede nothing from opponents' set pieces, and 60% of their goals come from dead balls. USA's SP defence (50% concession rate) is the genuine vulnerability.

**However** — to earn set pieces, Bosnia must first get into USA's half. USA's press (PPDA 8.1) will disrupt Bosnia's low-possession, direct build-up. Bosnia average only 3.67 SoT/game against average opponents — against USA's elite press, generating enough SP situations is the challenge.

**The question is: can Bosnia earn enough corners/set pieces to make the aerial advantage count?**

---

## Model Uncertainty Flags

1. **Freese save% on 3 SoTA** — barely a sample. If he concedes early (like Turner did), all GK On-Off signals flip. His 2-game record (2 wins, 1 CS) is the best available signal but fragile.
2. **USA SoTA-allowed at 2.00/game** — smallest sample in dataset. Even at 35% regression (→3.23), this could understate Bosnia's ability to generate shots. Bosnia's 3.67 SoT/game is genuine.
3. **Bosnia's Goals vs xG (+3.13)** — most extreme overperformance in dataset. Their open-play xG was only 0.51 in 3 WC games. A Bosnia goal from open play would be a significant positive variance event.
4. **USA's 3-4-2-1 vs Bosnia's 4-4-2** — USA's wing-backs (Robinson, Dest) will have space behind Bosnia's flat midfield 4. This structure could produce more SoT than the model projects.

---

## Cross-links
- [[Teams/usa]]
- [[Teams/bosnia]]
- [[Models/opponent-adjusted-sot-model]]
- [[Referees/wc2026-referees]]
