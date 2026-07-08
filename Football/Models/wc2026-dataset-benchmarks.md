---
title: WC2026 Dataset Benchmarks
type: concept
sport: football
tags: [model, benchmarks, wc2026, dataset]
sources: [opta-wc2026, fbref-wc2026, footystats-wc2026]
last_updated: 2026-07-08
---

# WC2026 Dataset Benchmarks

Reference averages derived from all 48 WC2026 group-stage teams (3 games each). Use these in opponent-adjusted models for any R32+ match.

> ⚠️ **BENCHMARK UPDATE — 2026-07-08 (R8 calibration)**
> The 5.5 SoTA-allowed/game figure was derived from all 48 group-stage teams, including weak defenses (SA 7.3, Ghana, Haiti etc.) that have been eliminated. R16 team data shows true average ~2.6/game — a 53% drop. Using 5.5 as denominator in R8+ matches systematically over-compresses adj SoT and underestimates λ by ~30-40%.
>
> **Use updated benchmarks by round:**
> | Round | SoTA-allowed/game benchmark | Shots-allowed/game |
> |-------|----------------------------|-------------------|
> | Group stage (R48) | 5.5 | ~9.5 |
> | R32 | 4.5 | ~8.0 |
> | R16 | **3.5** | ~6.5 |
> | R8+ | **3.0** | ~5.5 |
>
> **R16 team SoTA-allowed data (evidence base):**
> Argentina 0.75 | Spain 1.00 | Colombia 1.25 | Portugal 1.33 | France 2.00 | USA 2.00 | Belgium 2.67 | Brazil 3.67 | Switzerland 4.00 | Egypt ~3.50 | Norway ~5.00 → **mean ~2.6/game across 11 R16 teams**

---

## Core Model Averages

| Metric | Dataset Average | Source | Notes |
|--------|----------------|--------|-------|
| SoT allowed/game (group) | **5.5** | FBRef/Opta | R48 benchmark — do NOT use for R8+ |
| SoT allowed/game (R16) | **3.5** | FBRef derived | Use for R16 matches |
| SoT allowed/game (R8+) | **3.0** | FBRef derived | Use for QF, SF, Final |
| Shots allowed/game | **~9.5** | Opta | Group stage only |
| Total match corners | **~9.0** | Footystats (5-game) | Both teams combined per match |
| Team own corners/game | **~4.5** | Opta (3 WC games) | Estimated from team data |

---

## Shooting Benchmarks (Opta, 3-game WC totals)

| Metric | Low end | Average | High end | Notes |
|--------|---------|---------|---------|-------|
| Total attempts/game | ~6 (Austria) | ~13 | ~20 (Canada) | |
| On target/game | ~2 | ~6 | ~8 (Canada 7.3) | |
| Inside box % | 36% (SA) | ~60% | 72% (Canada) | |
| xG/game | ~0.5 | ~2.5 | ~2.6 (Canada 2.3) | |
| xG efficiency | 0.37x (Ecuador) | ~1.0x | 2.40x (Japan) | >1.5x = unsustainable |

---

## Defensive Benchmarks

| Metric | Low end | Average | High end | Notes |
|--------|---------|---------|---------|-------|
| Ball recovery time | 22.7s (Portugal) | ~45s | 69.1s (Ghana) | Lower = faster press |
| Def pressures applied | 315 (Colombia) | ~650 | 1035 (Saudi Arabia) | |
| GK saves/game | ~1.5 | ~3.5 | ~4.5 | |
| Fouls committed/game | ~6 (Japan-level) | ~10 | ~16 (Canada) | |

---

## Corners Model

**Footystats "Corners" column = total match corners (both teams)**
**Opta "Corners" column = individual team corners won**

### Blended corners model (recommended)
```
Expected Team A corners = (Team A own corners/game + Opponent corners conceded/game) / 2
Opponent corners conceded = Footystats total - Team own corners
Total match corners = Team A expected + Team B expected
```

### WC2026 corners by team (Opta, 3-game total → /game)

| Team | Own corners (total) | Own corners/game | Match total avg (Footystats) | Opponent gets/game |
|------|--------------------|-----------------|-----------------------------|-------------------|
| Canada | 35 | 11.7 | 13.6 | ~1.9 |
| South Africa | 10 | 3.3 | 7.75 | ~4.5 |
| Brazil | 16 | 5.3 | 7.8 | ~2.5 |
| Japan | 11 | 3.7 | 9.0 | ~5.3 |

---

## Fouls Model

**Use Opta "Fouls For" (committed) column, not "Fouls Against" (drawn)**

Total expected match fouls = Team A committed/game + Team B committed/game

| Team | Fouls committed (total) | Per game |
|------|------------------------|---------|
| Canada | 49 | 16.3 |
| Brazil | 38 | 12.7 |
| South Africa | 30 | 10.0 |
| Japan | 27 | 9.0 |

---

## GK Saves Model

**Formula**: Expected saves = Adj SoT faced × GK save%
**Note**: Opta GK save% column unreliable — derive from saves/(saves + goals conceded)

| Team | GK | Saves (3g) | Goals conceded | Implied save% |
|------|----|-----------|---------------|--------------|
| Brazil | Alisson | 11 | 1 | 91.7% |
| Japan | Suzuki | 12 | 3 | 80.0% |
| SA | Williams | 9 | 3 | 75.0% |
| Canada | Crépeau | 4 | 3 | 57.1% |

---

## Physical Benchmarks (Opta, 3-game WC)

| Metric | Low | Average | High |
|--------|-----|---------|------|
| Average speed (km/h) | 5.64 (Qatar) | ~6.0 | 6.37 (Germany) |
| Sprints | ~730 | ~1200 | ~1520 |
| High speed running | ~2100 | ~3500 | ~4400 |
| Total distance (m) | ~212,000 | ~330,000 | ~360,000 |

**Our 4 teams ranked by speed:**
Canada (6.03) > Japan (6.02) > Brazil (5.98) > SA (5.89)

---

## Crossing Benchmarks

| Team | Crosses attempted | Cross acc% | Crosses/game |
|------|------------------|-----------|-------------|
| Canada | **117** (highest) | 24% | 39.0 |
| Japan | 50 | 28% | 16.7 |
| Brazil | 43 | **33%** | 14.3 |
| SA | 31 | **13%** (worst) | 10.3 |

---

## PPDA Reference (from Opta/FBRef)

| PPDA | Pressing style |
|------|---------------|
| <7 | Elite gegenpressing |
| 7–9 | Active high press |
| 9–12 | Mid-block |
| >12 | Low/passive block |

Our teams: Canada 9.7 (active) | Brazil 12.5 (mid-block) | Japan 12.6 (mid-block) | SA 16.7 (passive block)

---

## Star Rating → Probability Table

| Stars | Probability | Use for |
|-------|------------|---------|
| ⭐⭐⭐⭐⭐ | >70% | Near-certain structural edges |
| ⭐⭐⭐⭐ | 55–70% | Strong, well-supported picks |
| ⭐⭐⭐ | 40–55% | Value picks at good odds |
| ⭐⭐ | 25–40% | Long-shot value only |

---

## Links
- [[Models/opponent-adjusted-sot-model]]
- [[Teams/south-africa]]
- [[Teams/canada]]
- [[Teams/brazil]]
- [[Teams/japan]]
