# Document provenance research — 15 November 2026

Standalone laboratory research, not competition runtime integration. The developer fixed 12 synthetic documents and five gold field slots per document before implementing the provenance reference. Labels, supported formats and tests are developer-authored; no independent QA claim.

| Measurement | Observed result |
| --- | ---: |
| Research contract tests | 35/35 |
| Deterministic reference exact fields | 60/60 |
| Reference exact documents | 12/12 |
| Reference correct abstentions | 8/8 |
| Reference exact source spans | 55/55 |
| Actual Qwen native extraction responses | 12/12 |
| Exact model-extracted documents | 2/12 |
| Model candidates rejected by provenance gate | 10/12 |
| Incorrect candidates accepted by new gate | 0 |
| Real execution actions | 0 |

The prior lexical baseline accepted seven candidates for review, of which only two were exact. The previous semantic guard accepted four, of which two were exact. The new provenance gate accepted two, both exact. These are comparisons on the same outputs, not independent trials. All candidates remain subject to human review. The observed filtering improvement does not improve the model's raw extraction quality, and the model quality gate failed.

The deterministic reference supports explicit text labels; it is not an LLM, cannot authenticate invoices, and does not establish accuracy for arbitrary layouts, PDF/OCR, images or production documents. No customer savings, production deployment, independent certification, competition eligibility or market superiority is claimed. The separate research tests are not part of the 133 product tests or earlier signed public evidence.

This public summary does not include implementation details, individual documents, model outputs or private evidence.

## Separate PDF intake research

A local review-only PDF intake prototype passed 10/10 synthetic tests on 15 November 2026. Native text extraction and English OCR on a clean image-only PDF each recovered 4/4 expected nonblank lines. Encrypted, malformed and out-of-budget documents were rejected in the tested cases. Page identity was retained and the candidate bound to its input digest. No execution actions occurred.

These results are separate from both the 35 provenance tests and the signed product checkpoint. They do not establish production parser isolation, arbitrary PDF/OCR accuracy, multilingual recognition, real customer data processing, competition runtime integration or independent QA. No implementation or private documents are disclosed.
