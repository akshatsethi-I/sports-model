---
title: Lesson — Corner Model Must Adjust for Possession Dominance vs Passive Block
type: lesson
confidence: High
last_updated: 2026-07-08
---

# Corner Model Must Adjust for Possession Dominance vs Passive Block

## The Lesson

When a possession-dominant team (≥55% possession) faces a low-block passive opponent (PPDA >14), the raw corners model catastrophically misdirects:
- Possession team corners: inflate ~30%
- Passive/low-block team corners: deflate ~50%

## The Failure (Argentina vs Egypt, R16 WC2026)

Raw model predicted Egypt corners over 1.5 at **91.5%** confidence.
Actual result: Egypt won **1 corner** (Argentina won 6). Egypt over 1.5 lost catastrophically.

Raw model predicted Egypt more corners at **60.4%**.
Actual result: Argentina dominated 6-1 on corners.

**Root cause:** Egypt's historical 18.5 crosses/game were used naively. In actual match, Argentina controlled ~60% possession, giving Egypt almost no attacking territory. Egypt's cross/corner generation was contingent on having the ball — which they didn't.

## The Rule

**Trigger conditions (BOTH must be true):**
1. Team A has ≥55% projected possession
2. Opponent PPDA is >14 (passive low-block — they sit deep and don't press)

**Adjustment when triggered:**
- Team A (possession team) corners: multiply raw estimate × 1.30
- Team B (low-block team) corners: multiply raw estimate × 0.50

**When NOT triggered:**
- Both teams moderate press (PPDA 9–14): no adjustment, raw model holds
- Even possession split (~50/50): no adjustment
- High-press vs high-press: no adjustment

## Application Check

Before finalising corner picks, always check:
1. What is each team's avg possession? Is one team ≥55%?
2. What is each team's PPDA? Is the defending team >14?
3. Does lineup confirm tactical shape (low-block likely)?

## Why the 50% deflation for low-block teams

Low-block teams are designed to prevent opponents from building attacks — they concede territory intentionally. Their historical cross/corner totals were generated against different opponents who also conceded territory. Against a possession team, they rarely advance far enough to earn corners.

## Links
- [[Betting/over-under-goals]]
- [[Tactics/pressing-systems]]
