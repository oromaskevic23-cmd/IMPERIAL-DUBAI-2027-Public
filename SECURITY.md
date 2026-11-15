# Security & trust

This public repository contains only the approved presentation, public artwork, aggregate evidence and standalone integrity-verification tools. It does not distribute the competition implementation.

| Control | Intended function | Current disclosed scope |
| --- | --- | --- |
| Identity and roles | Separate identity from authority | Synthetic local role checks |
| Guardian policy | Govern advisory recommendations | Local synthetic decision tests |
| Human review | Record an authorized review | Local scenario assertions |
| Owner stop | Block new submissions | Local persistence and denial checks |
| Evidence integrity | Detect modified evidence | Signed summary and verification tests |

## Public verifier threat model

The verifier checks exact checkpoint bytes, a pinned demonstration-key fingerprint, Ed25519 signature and a restrictive schema. It rejects tested modifications and inconsistent counts. It does not authenticate an owner independently, prove that developer-reported tests occurred, establish security of a compromised hosting origin or certify production readiness. Trust an independently authenticated signer fingerprint before relying on identity.

## Reporting

Report suspected vulnerabilities through the project owner's established contact channels. Do not include secrets, customer records, private implementation details or exploit payloads in public issues. This is a reporting guideline, not an advertised security-response SLA.

Read [PUBLIC_BOUNDARY.md](PUBLIC_BOUNDARY.md) and [EVIDENCE.md](EVIDENCE.md).
