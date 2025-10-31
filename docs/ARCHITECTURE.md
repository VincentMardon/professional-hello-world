# Professional Hello World — Architecture

## 1. Purpose

This document describes the technical architecture of the **Professional Hello World** platform, a distributed, observable and CI-first system whose primary business objective is to display the string **"Hello, World!"** across multiple channels (web, CLI, future mobile).

While the functional scope is intentionally trivial, the architecture is designed to mimic production-grade patterns in order to practice DevOps, documentation and code organization skills.

---

## 2. High-Level Overview

The system is composed of several logical layers:

1. **Presentation layer**  
   - React/Next.js frontend consuming the API  
   - Optional CLI client for terminal-based rendering  
   - Future support for WebGL / animated experience

2. **API layer**  
   - Django + Django REST Framework  
   - Exposes a `/api/greetings/{code}/` endpoint returning the greeting payload  
   - Includes healthcheck endpoints for monitoring

3. **Data layer**  
   - Relational database (SQLite in dev, PostgreSQL in production-like setups)  
   - Stores greetings, languages and platform-specific display metadata

4. **Operations / CI/CD layer**  
   - GitHub Actions workflow triggered on `push` and `pull_request`  
   - Future steps: lint, tests, build, containerization  
   - Logs must remain professional in tone

---

## 3. Component Breakdown

### 3.1 Frontend

- **Technology**: Next.js (React + TypeScript)
- **Styling**: Vanilla Extract, optional glassmorphism for theatrical impact
- **Responsibility**:
  - Fetch greeting from `/api/greetings/default/`
  - Render it with exaggerated visual fidelity
  - Display auxiliary metadata (language, source, node name)

**Rationale**: even a single string deserves a dedicated rendering pipeline.

---

### 3.2 Backend (API)

- **Technology**: Django, Django REST Framework
- **Responsibility**:
  - Provide a stable contract: `GET /api/greetings/:code`
  - Enforce that a greeting exists (i.e. "Hello, World!")
  - Log all accesses for imaginary audit purposes

**Non-functional requirements**:
- Must respond under 200ms (because it’s funny)
- Must be testable via `pytest` or `manage.py test`
- Must expose a `/health` or `/ping` endpoint, because DevOps

---

### 3.3 Database

- **Dev**: SQLite (zero-config)
- **Prod-like**: PostgreSQL (via Docker compose)
- **Schema (minimal)**:

  | Table     | Columns                                  |
  |-----------|-------------------------------------------|
  | greetings | id (PK), code (unique), text, language    |

**Note**: while the business object is just a string, we still isolate it in its own table to demonstrate separation of concerns.

---

## 4. CI/CD

### 4.1 Current workflow

- Location: `.github/workflows/ci.yml`
- Trigger: `push`, `pull_request`
- Steps:
  1. Checkout repository
  2. Print a highly professional message to assert pipeline authority

This step is intentionally simple to validate that the CI is wired before adding real jobs.

### 4.2 Future extensions

- Node setup (`actions/setup-node`)
- Python setup (`actions/setup-python`)
- `npm run lint` for frontend
- `pytest` / `manage.py test` for backend
- Build Docker image
- Push to registry (optional)
- Notify imaginary Slack channel

---

## 5. Observability & Monitoring

Even though the system prints only “Hello, World!”, production-like applications must be observable.

**Planned instrumentation**:
- Request-level logging on the API
- Prometheus-style `/metrics` endpoint returning:
  - `hello_requests_total`
  - `hello_requests_by_lang{lang="en"}`
  - `hello_requests_by_client{type="web"|"cli"}`
- Synthetic checks to confirm that the greeting remains polite

---

## 6. Security Considerations

- Public endpoints should not allow arbitrary mutation of greetings without authentication.
- Rate limiting may be added to prevent denial-of-salutation.
- Secrets (if any) must be stored in GitHub Actions secrets, not in the repository.

---

## 7. Local Development

1. Clone the repository  
2. Start Django API (`python manage.py runserver`)  
3. Start frontend (`npm run dev`)  
4. Open browser → admire “Hello, World!” rendered as if it were a billion-euro product

---

## 8. Roadmap

- Add multilingual greetings
- Add audit trail for greeting reads
- Add SLA document for greeting availability
- Add AI to suggest greeting tone based on time of day
- Add dark mode (most important)

---

## 9. Conclusion

This architecture intentionally **over-engineers a trivial requirement** in order to practice real-world patterns without the cognitive load of a complex domain.

In other words: _“we built a spaceship to go to the bakery.”_
