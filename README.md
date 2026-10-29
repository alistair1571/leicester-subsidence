# Leicester Subsidence Services

Static lead-gen site for leicestersubsidence.co.uk (advice, services, area pages, one enquiry form). Plain HTML, CSS and JS, no build step. Built from the Birmingham biohazard template with a blue theme and smaller corner radii.

## Structure
- `/` homepage; `/is-it-subsidence/` (+16 advice pages); `/services/` (+9 pages incl. `costs`); `/around-leicester/` (+18 area pages)
- `/referrals/who-we-are/` disclosure, `/contact/`, `/privacy-notice/`, `/terms/`, `404.html`
- `style.css` (blue tokens at the top: `--blue`, `--accent`, `--radius*`), `script.js` shared
- `wrangler.jsonc`, `.assetsignore`, `CNAME` for GitHub -> Cloudflare; preview with `python3 preview.py`

## Before going live
| Placeholder | Where | Replace with |
| --- | --- | --- |
| `https://formspree.io/f/YOUR_FORM_ID` | `contact/index.html` | real form endpoint |
| `[Operator: ...]` | `privacy-notice/`, `terms/`, `referrals/who-we-are/` | business name, address, ICO number, retention period, cookies |
| `info@leicestersubsidence.co.uk` | footer, contact, schema | a real mailbox |

No phone number is used (enquiry-form model, like the Croydon site).

## Verify before publishing (not independently confirmed)
- Council-tree items: Knighton listing disclosure, Ombudsman 2025 decision, Spinney Hills 1700s shaft collapse (wording is hedged)
- GoCompare 2.32 cases per 1,000 homes (2025 data), ABI £307m payouts (2025) and £20,000 average claim (Q2 2026)
- Cost ranges on `/services/costs/` (published UK guides, vary by source)
- Area pages: housing, geology and postcode notes are general; check each against BGS maps and local knowledge
- Conservation-area statements, Severn Trent as sewerage company, council boundaries

## Honesty rules
Do not add reviews, accreditations, response times or "vetted firm" claims unless the operator can prove them. Keep the fee disclosure in the footer and on the form.
