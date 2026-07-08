---
title: Over/Under Goals Market — Betting Guide
type: betting
market: Over/Under Goals
last_updated: 2026-06-27
---

# Over/Under Goals Market

## When Over Performs Well

### Reliable Over indicators
1. **Weak GK on both sides** (save% < 65%): Both teams' goal-scoring potential is amplified. Over 2.5 becomes reliable when both GKs convert at above-average rates.
2. **xG regression team vs weak GK**: A team with >1.0 xG deficit AND facing a weak GK is the strongest Over signal in the model.
3. **Must-win team with attacking identity**: Will push men forward → creates counter-attack space → both sides score.
4. **Both teams high PPDA (< 9)**: High-press battle = higher transitions = more shots and goals per game.
5. **Norway/Belgium/Spain style teams (15-24 shots/game)**: Volume eventually beats even moderate GKs.

## When Under Performs Well

### Reliable Under indicators
1. **Elite GK vs low-output attack**: Beiranvand (86.7%) vs Egypt (5 SoT/game) → expected ~0.67 goals → Under 2.5 strong
2. **Low-block team (PPDA > 14) in any match**: Iran profile: 0 build-up sequences, 3.5 SoT/game → structurally low-scoring
3. **Compact defense vs cross-dominant team**: Spain (49 shots/2 games, all crosses) vs compact Uruguay → 1-0 result → Under 2.5 correct
4. **Both teams' defenses allow < 4 SoT/game**: The volume is just not there for 3+ goals
5. **Already-qualified team (playing for nothing)**: Reduced intensity = fewer goals; opponent also reduces pressure

## Common Mistakes

### The Spain Over 2.5 Error (WC2026 Session Example)
- Spain averages 7.5 SoT/game
- Uruguay's Muslera: 57.1% save%
- Raw calculation: 7.5 × 42.9% = 3.2 expected Spain goals → Over 2.5 backed
- **Error**: Didn't adjust for Uruguay's defensive quality (they allow only 3.5 SoT/game to opponents, not the 5.5 dataset average)
- Adjusted: 7.5 × (3.5/5.5) = 4.8 adjusted SoT × 42.9% = 2.1 expected Spain goals → Under 2.5 correct
- **Result**: Spain 1-0 → Under 2.5 confirmed

Always use the opponent-adjusted model: [[Models/opponent-adjusted-sot-model]]

## WC2026 Historical Observations

| Match | Total Goals | Over/Under 2.5 | Key factor |
|-------|------------|----------------|------------|
| Belgium vs NZ (MD3) | 6 | Over | xG regression + Crocombe 54.5% |
| Egypt vs Iran (MD3) | 2 | Under | Beiranvand 86.7% + Iran low block |
| France vs Norway (MD3) | 5 | Over | Nyland 40% + France 6.5 SoT/game |
| Spain vs Uruguay (MD3) | 1 | Under | Spain vs compact Uruguay; both defenses elite |
| Senegal vs Iraq (MD3) | 5 | Over | Senegal's 5-0 dominance over weak Iraq |

## Confidence Framework
| Expected total goals (model output) | Betting stance |
|-------------------------------------|----------------|
| > 3.0 | Over 2.5: ⭐⭐⭐⭐ or ⭐⭐⭐⭐⭐ |
| 2.5–3.0 | Marginal — look for match context tiebreaker |
| 1.5–2.5 | Under 2.5: ⭐⭐⭐ |
| < 1.5 | Under 2.5: ⭐⭐⭐⭐ |

