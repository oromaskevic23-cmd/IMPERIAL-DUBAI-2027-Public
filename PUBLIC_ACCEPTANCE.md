# Public presentation acceptance — 2026-11-15

Node.js 22.23.4, developer-run test environment.

`node --test evidence/verify.test.mjs presentation.test.mjs`

22/22 tests passed: 10 public signature and schema tests plus 12 walkthrough, release-consistency and metadata tests. The browser module passed Node syntax validation. These are public tooling tests, separate from the private product's 133 Python and eight JavaScript UI-state tests. The walkthrough is a fixed synthetic illustration, not an execution of the private agent. It accepts no business data and performs no real payments. No independent QA or real browser end-to-end acceptance is claimed.

The release tests compare displayed headline counts with the signed checkpoint, test the four illustrative outcomes, reject unknown scenarios, exercise text rendering against a minimal test double, and check preservation of image metadata and disclosure limitations. They do not authenticate signer identity or verify actual commercial outcomes.

Run the command above from the public repository root to reproduce the tests.
