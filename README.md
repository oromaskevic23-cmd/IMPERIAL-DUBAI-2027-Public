<p align="center">
  <img src="assets/IMPERIAL-DUBAI-2027.png" alt="Dubai Chamber reference artwork — competition context" width="100%">
</p>

<p align="center"><a href="https://oromaskevic23-cmd.github.io/oromaskevic23-cmd/dubai-2027/"><strong>Official public presentation · Share on Telegram &amp; WhatsApp</strong></a></p>

<h1 align="center">IMPERIAL Core — Dubai 2027</h1>
<p align="center"><strong>Enterprise AI Agents · Zero Trust · Human Governance · Verifiable Intelligence</strong></p>
<p align="center">Architecture → Implementation → Evidence</p>

> Independent competition preparation by IMPERIAL Core. The Dubai Chamber reference artwork identifies the intended competition context; it does not establish partnership, endorsement, registration acceptance or affiliation.

<p align="center"><a href="https://oromaskevic23-cmd.github.io/oromaskevic23-cmd/dubai-2027/">Live public presentation</a> · <a href="EVIDENCE.md">Verify evidence</a> · <a href="PRODUCT_BRIEF.md">Product brief</a> · <a href="SECURITY.md">Security & trust</a></p>

## Governed Invoice Exception Agent

An AI-assisted invoice reconciliation prototype designed to help finance teams identify discrepancies, route exceptions to authorized human reviewers and preserve a verifiable record of decisions. The agent recommends actions; it cannot authorize or execute payments.

| Business challenge | Product approach |
| --- | --- |
| Manual invoice reconciliation | Structured comparison with purchase-order and supplier records |
| Unsafe AI recommendations | Deterministic governance checks and fail-closed exception routing |
| Unauthorized financial actions | Scoped roles, explicit human review and owner stop |
| Accountability | Integrity-checked decision history and reproducible verification |

## Enterprise architecture direction

- **VELION** — intelligence core; **HANTER** — AI Command Center.
- **Federated Multi-Orchestrator Architecture** and **Nano Core Agents** — scoped, distributed task execution.
- **AI Passport** and **Enterprise Skills** — identity, capability and authority boundaries.
- **Guardian Core**, **Approval Gateway** and **Audit Ledger** — policy, human approval and evidence.
- **Zero Trust**, **Public/Private Boundary** and **CRYPTO IMPERIAL Ecosystem Boundary** — explicit isolation; crypto and payments are outside the competition prototype's scope.

These are the canonical design principles of IMPERIAL Core. The competition prototype is a separate original implementation; this public overview does not claim that every named platform component is deployed or integrated.

## Interactive public walkthrough

[Explore four illustrative scenarios](https://oromaskevic23-cmd.github.io/oromaskevic23-cmd/dubai-2027/#walkthrough): matching invoice, invoice exception, unauthorized review and owner emergency stop. The walkthrough uses fixed synthetic examples and is not a live execution of the private agent. It accepts no business data and performs no payment or external action.

## Enterprise workflow at a glance

| Stage | Governance outcome |
| --- | --- |
| 01 — Reconcile | Compare invoice and authorized reference records |
| 02 — Assess | Advisory model can recommend, but cannot grant authority |
| 03 — Govern | Deterministic policy routes exceptions to human review |
| 04 — Review | Authorized reviewer records a decision |
| 05 — Evidence | Audit history and integrity-verifiable evidence |
| 06 — Stop | Owner can prevent further submissions |

See the [product brief](PRODUCT_BRIEF.md) for the intended business value and [security boundaries](SECURITY.md) for what has actually been demonstrated.

## Evidence before claims

<table>
<tr><td align="center"><strong>133/133</strong><br>Python regression</td><td align="center"><strong>8/8</strong><br>UI-state tests</td><td align="center"><strong>9/9</strong><br>Showcase assertions</td></tr>
<tr><td align="center"><strong>10/10</strong><br>Ed25519 tests (included in 133)</td><td align="center"><strong>24</strong><br>Synthetic benchmark cases</td><td align="center"><strong>0</strong><br>False matches in this benchmark</td></tr>
</table>

**NEW — Public verification tooling:** 10/10 separate Node.js tests passed on 15 November 2026. These verify the published summary and reject tampering, invalid keys and inconsistent claims. They are not part of the private product regression count.

```sh
node evidence/verify-cli.mjs
node --test evidence/verify.test.mjs
```

**Verify the signed public checkpoint:** [JSON data](evidence/checkpoint.json) · [Ed25519 signature](evidence/checkpoint.sig.b64) · [Public key](evidence/public-key.pem) · [Verification instructions](EVIDENCE.md#verify-the-public-checkpoint).

The checkpoint was recorded in a local synthetic environment on 15 November 2026. The public summary is signed with a demonstration key; a valid signature confirms integrity, not independent certification, signer identity, real customer savings or production acceptance.

### What the prototype demonstrates

A matching invoice receives a recommendation. An invoice with an amount discrepancy and changed bank details requires authorized human review. An unauthorized review is denied. The owner can stop new submissions, and evidence tampering is rejected. No payment is executed.

Read the [public evidence summary](EVIDENCE.md) and [public/private disclosure policy](PUBLIC_BOUNDARY.md).

## Real language model evaluation — latest experiment

**Safety PASS · Model quality FAIL.** An actual SmolLM2-135M-Instruct model was tested via the local adapter. Free generation produced 0/4 valid action responses. Constrained inference returned 8/8 valid responses, 5/8 correct raw recommendations and 7/8 correct governed decisions. Two unsafe recommendations on five exception cases were overridden; no payment occurred. The model is not accepted for production. [Read the full public results](REAL_MODEL_RESULTS.md).

This later experiment is not included in the earlier signed checkpoint.

## Public presentation acceptance

31/31 public tooling tests passed (10 signature/schema tests, 12 presentation tests and 9 release-integrity tests). All eight deployed presentation files matched the pinned public source byte-for-byte. See [PUBLIC_ACCEPTANCE.md](PUBLIC_ACCEPTANCE.md) and [RELEASE_INTEGRITY.md](RELEASE_INTEGRITY.md). These are separate from the private product counts.

```sh
node release-audit.mjs
```

## Competition preparation

Our goal is to demonstrate useful, safe, accountable AI assistance and measurable economic value. Registration acceptance, jury selection, independent QA, successful model quality acceptance and a measured client pilot remain unconfirmed.

This repository contains only the public-facing presentation. Implementation source, operational configuration, sensitive evidence and private development history are not published here.

## Founder

**Alexander Romaskevich** — Founder · Owner · CEO, IMPERIAL Core.

[IMPERIAL Core public profile](https://github.com/oromaskevic23-cmd) · [Public repository](https://github.com/oromaskevic23-cmd/IMPERIAL-DUBAI-2027-Public)

© IMPERIAL Core. All rights reserved. Third-party marks belong to their respective owners. No software license is granted by this presentation.
