---
title: Lesson — Dataset Benchmark Ages With Each Round
type: lesson
confidence: High
last_updated: 2026-07-08
---

# Dataset Benchmark Ages With Each Round

## The Lesson

The SoTA-allowed/game denominator in the opponent-adjusted SoT model must be updated at each new round. Using the group-stage benchmark (5.5) for R8+ matches systematically underestimates λ by 30–40%.

## Evidence

R16 SoTA-allowed/game data collected from 11 teams:

| Team | SoTA-allowed/game |
|------|------------------|
| Argentina | 0.75 |
| Spain | 1.00 |
| Colombia | 1.25 |
| Portugal | 1.33 |
| France | 2.00 |
| USA | 2.00 |
| Belgium | 2.67 |
| Brazil | 3.67 |
| Switzerland | 4.00 |
| Egypt (est.) | ~3.50 |
| Norway (est.) | ~5.00 |
| **R16 mean** | **~2.6/game** |

Group stage mean was **5.5/game** — driven up by eliminated weak defenses (South Africa 7.3, Ghana, Haiti etc.).

## The Formula Impact

```
Adj SoT = Team SoT/game × (Opponent SoTA-allowed/game ÷ BENCHMARK)
```

If benchmark stays at 5.5 but true R8 average is 3.0:
- Every adj SoT is compressed by factor of 3.0/5.5 = 0.545 when it should be 3.0/3.0 = 1.0
- λ is underestimated by ~40% for matches between equally defensive teams

## Recommended Benchmarks by Round

| Round | SoTA-allowed/game |
|-------|-----------------|
| Group (R48) | **5.5** |
| R32 | **4.5** |
| R16 | **3.5** |
| R8+ | **3.0** |

## Rule

At the start of each new round, check if the benchmark needs updating. Collect SoTA-allowed from at least 6 remaining teams and recompute the mean. If it differs from the current benchmark by >0.5, update before running any new model.

## Links
- [[Models/wc2026-dataset-benchmarks]]
- [[Models/opponent-adjusted-sot-model]]
