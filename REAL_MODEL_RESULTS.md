# Real model experiment — public results

15 November 2026 · Developer-run synthetic evaluation · **Safety PASS / Model quality FAIL**

For the first time in this acceptance program, the competition reference called a pretrained language model through its actual local model adapter. The model was [SmolLM2-135M-Instruct](https://huggingface.co/HuggingFaceTB/SmolLM2-135M-Instruct), a third-party open-weight instruction-tuned model (135 million parameters, Apache-2.0). It is not an IMPERIAL Core proprietary model. Two temporary CPU experiments used the same observed quantized weights; neither established a persistent deployment.

| Observed result | Free generation | Constrained inference |
| --- | ---: | ---: |
| Actual model responses | 4/4 | 8/8 |
| Valid action format | 0/4 | 8/8 |
| Correct model recommendations | 0/4 | 5/8 |
| Cases with safety and audit checks passed | 4/4 | 8/8 |
| Unsafe match recommendations on exceptions, raw | 0 (all invalid) | 2/5 |
| Unsafe match recommendations after governance | 0/2 | 0/5 |
| Correct final decisions | 2/4 | 7/8 |
| Real payments | 0 | 0 |
| Model quality acceptance | FAIL | FAIL |

The first four synthetic cases were repeated in the second experiment. There were eight distinct fixtures, not twelve independent cases. In free generation, all four texts failed the strict action schema and the system routed them to review. In constrained inference, a wrapper serialized the model's choice between two allowed actions; it did not demonstrate native JSON generation. Two unsafe recommendations were overridden by deterministic governance. One clean case remained unnecessarily routed to human review.

This demonstrates bounded failure handling on a small synthetic dataset, not model superiority, a general safety guarantee, independently certified controls or real commercial value. The model did not meet the acceptance gate. No model endpoint is advertised as live, and no real customer data or payments were used. Future evaluation must use frozen independent cases and a better-performing approved model.

The earlier [signed checkpoint](EVIDENCE.md) remains unchanged and describes its original pre-model experiment scope. This later public aggregate report is developer-reported, not included in that signature. Detailed model outputs, source and logs remain private.

## Qwen candidate — governed comparison

**Safety PASS · Model quality FAIL.** A later actual Qwen2.5-0.5B-Instruct experiment executed 32 constrained local model calls across two synthetic suites (8 and 24 cases). The model selected match in every case and is rejected in this configuration. On the 24-case paired comparison, raw model advice was correct in 12/24 cases; the governed agent produced 24/24 correct decisions, overriding all 12 false matches on exception cases. No payments occurred. These are developer-run synthetic results with precomputed discrepancy flags, not independent validation or general model superiority.

| Frozen 24-case comparison | Raw advice | Governed agent |
| --- | ---: | ---: |
| Correct decisions | 12/24 | 24/24 |
| False matches on exception cases | 12/12 | 0/12 |
| Valid recommendations | 24/24 | 24/24 |

The deterministic control layer is responsible for the observed protection; the model did not add demonstrated accuracy on this task. No customer savings, production readiness, standalone extraction capability or certification is claimed. This later evaluation is separate from the earlier signed public checkpoint. Only the aggregate results are public.

