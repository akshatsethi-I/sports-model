---
title: La Liga 2026-27
type: index
---

# La Liga 2026-27

## Folders
- `Teams/` — one .md file per club (xGF, xGA, home/away splits, model inputs)
- `Schedule/` — full fixture list by matchweek
- `Predictions/` — pre-match prediction files

## Model
- Dixon-Coles Poisson: home_λ = xGF_home × (away_xGA / league_avg_xGA), away_λ = xGF_away × (home_xGA / league_avg_xGA)
- League avg xGA: TBD after data collection
- Promoted teams: apply empirical Segunda→LaLiga conversion factors (TBD)
