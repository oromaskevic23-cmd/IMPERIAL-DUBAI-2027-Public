# Public release integrity — 2026-11-15

The public presentation was compared byte-for-byte against the pinned source revision `b4de0c294674d494a99cce4ce8cb67187f3f1921`. All eight deployed files returned HTTP 200, matched their expected SHA-256 and byte length, and had the expected media type. The original banner remains 1,390,511 bytes. The signed checkpoint verified successfully.

## Reproduce

```sh
node --test evidence/verify.test.mjs presentation.test.mjs release-audit.test.mjs
node release-audit.mjs
```

Node.js 22+; the live audit requires HTTPS access to the two public GitHub hosts. Observed: 31/31 public tooling tests passed, including nine release-audit tests; 8/8 live files matched; signed checkpoint verified. These are separate from private product tests. The audit performs a one-time read-only check, not continuous monitoring. It fails closed on changed content, HTTP failures, media-type mismatch and unexpected paths. The pinned manifest is a public reference, not independent attestation.

The release manifest covers the static presentation, its two browser modules, public verifier, signed summary, detached signature, public key and unmodified PNG. It is deliberately pinned; an authorized new presentation release requires a new manifest and rerun. No private source or credentials are required.

[Source snapshot](https://github.com/oromaskevic23-cmd/IMPERIAL-DUBAI-2027-Public/tree/b4de0c294674d494a99cce4ce8cb67187f3f1921) · [GitHub Pages deployment](https://github.com/oromaskevic23-cmd/oromaskevic23-cmd/actions/runs/43714757777) · [Live presentation](https://oromaskevic23-cmd.github.io/oromaskevic23-cmd/dubai-2027/)

This check does not verify actual messenger rendering, browser E2E, signer identity, independent QA, live LLM, customer savings or competition acceptance.
