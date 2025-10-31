# Feature: Global Hello Session

## Objective
Allow any connected user to initiate a global “Hello, World!” event and observe, in real time, how many other users reply to it.

The feature is intentionally simple from a UX perspective but heavily instrumented, in order to study usage patterns, timing, and geographic distribution.

## User flow

1. **Initiation**  
   - A user clicks on **“Launch Hello, World!”**.
   - The backend creates a new `hello_session` with:
     - `id`
     - `initiator` (optional, anonymous by default)
     - `started_at`
     - `duration` (e.g. 30 seconds)
     - `status = active`

2. **Broadcast**  
   - All currently connected users are informed that a global hello is in progress.
   - They see: “Someone said: Hello, World! → Respond 👋”.

3. **Participation**  
   - Each user can click **“Respond”** once.
   - Each response is stored as a `hello_response` tied to the current session.

4. **Closure**  
   - After the time window expires, the session is marked as `closed`.
   - The initiator (and optionally everyone) can see the final count and metrics.

5. **Archiving**  
   - The session is stored for historical/statistical purposes.

## Analytics / Metrics

For each `hello_session`, we collect the following data:

### Core metrics
- `total_responses` — number of users who replied
- `unique_ips` — number of distinct IPs (approximation of unique participants)
- `duration_ms` — actual duration of the session
- `response_rate_per_second` — responses grouped by second
- `max_concurrent_responses` — highest “burst”

### Temporal metrics
- `time_to_first_response` — ms between session start and first reply
- `median_response_time` — how fast people react on average
- `late_responses` — responses arriving after 80% of the window
- `time_of_day_bucket` — slot in which the hello was launched (morning, afternoon, night)

### Geographical / language (optional)
- `country_code` (from IP, if available)
- `city` (optional, depending on privacy)
- `accept_language` header to infer UI language
- `device_type` (desktop / mobile)

### Engagement
- `initiator_reengaged` — did the initiator launch another hello right after?
- `returning_participants` — users who took part in ≥ 2 sessions
- `average_hellos_per_user` — long-term stat

All collected data should be **documented and visible** in the stats page for educational purposes.


# Hello Analytics Dashboard (concept)

The dashboard displays real-time and historical analytics for all hello sessions.

## A. Realtime (current session)
- Current session ID
- Initiator (if known)
- Elapsed time / total time
- Live counter: **X people said hello back**
- Chart (per second): number of replies
- Map (optional): countries of responders
- Log stream: `2025-10-31 22:48:03 — FR — desktop — responded`

## B. Historical
- Total number of sessions launched
- Average responses per session
- Top 5 busiest hours (UTC+1 / Europe/Paris)
- Leaderboard:
  - “Most replied hello”
  - “Fastest ‘hello back’”
  - “Most polite day”
- Distribution chart: responses per country
- Distribution chart: responses per device

## C. Technical
- API latency per session
- WebSocket / polling success rate
- Error count (people who clicked too late)
- Version of the client (to show that we keep track of it)
