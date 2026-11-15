# Public engineering evidence — 15 November 2026

## What can be verified

The [public checkpoint](evidence/checkpoint.json), [detached Ed25519 signature](evidence/checkpoint.sig.b64) and [demonstration public key](evidence/public-key.pem) are available without access to our implementation.

| Verification | Recorded result | Scope |
| --- | --- | --- |
| Python regression | 133/133 | Local developer-run automated suite |
| JavaScript UI-state regression | 8/8 | Script tests with a test double; not browser E2E |
| Ed25519 proof tests | 10/10 | Included in the Python total |
| Jury showcase | 9/9 | Separate synthetic acceptance assertions |
| Synthetic economic benchmark | 24 cases, 12 reviews, 0 false matches | Limited synthetic dataset |
| Real payments | 0 | No payment connector or payment execution in this run |

The private evidence package was verified locally with OpenSSL 3.5.5. The public checkpoint is a separately signed summary. A valid signature proves that the checkpoint bytes match the signature for the supplied key, not that an independent evaluator observed the execution.

## Public verification tooling

The dependency-free verifier is available for Node.js 22+ and modern browsers with WebCrypto Ed25519 support:

```sh
node evidence/verify-cli.mjs
node --test evidence/verify.test.mjs
```

On 15 November 2026, Node.js v22.23.4 executed all 10 public tests successfully (76.486 ms, developer-run). The CLI returned `verified: true`. These tests are additional public tooling checks, not part of the 133 private Python or eight private UI-state tests. They cover the original signature, byte alteration, whitespace tampering, corrupted signature, unrelated key, malformed signature, invalid counts, subset overcount, false payment claims and removed limitations. Schema validation is not independent validation of the reported execution.

The [live presentation](https://oromaskevic23-cmd.github.io/oromaskevic23-cmd/dubai-2027/) also offers an in-browser verification control. Browser end-to-end testing is a separate acceptance gate.

## Verify the public checkpoint

With OpenSSL 3, from the repository root:

```sh
tmp=$(mktemp -d)
openssl base64 -d -A -in evidence/checkpoint.sig.b64 -out "$tmp/signature"
openssl pkeyutl -verify -rawin -pubin -inkey evidence/public-key.pem \
  -in evidence/checkpoint.json -sigfile "$tmp/signature"
rm -r "$tmp"
```

Expected: `Signature Verified Successfully`.

Public-key fingerprint (SHA-256 of DER-encoded SubjectPublicKeyInfo):

```text
fbbd13d5389b8d8748ca9c0252b7690917ff825e1bcf56d5553e379ec79da080
```

Local release checks passed: correct signature accepted, modified checkpoint rejected, unrelated public key rejected. The signer is an ephemeral demonstration key, not an independently authenticated owner identity or a certification authority. The private signing key is not published. Obtain a trusted signer fingerprint independently before attributing a signature to a person or organization.

## Product behavior demonstrated in a synthetic environment

| Input | Governed result |
| --- | --- |
| Invoice matches its purchase order | Match recommendation; no payment |
| Invoice exceeds the purchase order and bank details change | Human review required; no payment |
| Unauthorized role attempts review | Request denied |
| Owner invokes emergency stop | New submission rejected; stop persists after restart |
| Evidence modified | Integrity verification rejects the modified package |

No live LLM evaluation, independent QA, completed client pilot, measured savings, successful browser E2E, production deployment or competition acceptance is claimed. This public repository is a presentation and evidence-summary surface, not the competition implementation.

Architecture → Implementation → Evidence.
