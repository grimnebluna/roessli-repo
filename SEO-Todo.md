# SEO / Performance Todo

Based on Lighthouse audit of roessli.ch/de/hotel (2026-03-19, mobile 3G simulation).

**Current scores:** Performance 0.56 | Accessibility 0.82 | Best Practices 0.77 | SEO 0.92

## High priority

### 1. Subset fonts to WOFF2 (est. ~800KB saved)
- NotoSans-Medium: 481KB (full character set)
- NotoSerifDisplay: 388KB (full character set)
- Subsetting to latin-only WOFF2 would reduce each to ~20-40KB
- Biggest single improvement for FCP and LCP

### 2. Lazy-load reCAPTCHA (est. ~360KB saved)
- `recaptcha__en.js` (362KB) is loaded twice on page load
- Should only load when user interacts with a form
- Consider using reCAPTCHA v3 lazy loading or loading on form focus

### 3. Lazy-load Mailchimp JS (est. ~140KB saved) **DONE**
- `mc-validate.js` (143KB) loaded on every page
- Only needed when newsletter form is visible/interacted with

### 4. Fix JS syntax error
- Console error: `SyntaxError: Unexpected token ','`
- Track down and fix — may affect functionality

## Medium priority

### 5. Responsive images / srcset
- Images are already WebP (good) but many are oversized for mobile
- Top offenders: 580KB, 506KB, 291KB, 226KB, 215KB
- Ensure Webflow responsive image settings are configured

### 6. Accessibility fixes
- Missing `lang` attribute on `<html>`
- Missing `alt` attributes on images
- Insufficient color contrast ratios
- Heading elements not in sequential order
- iframes missing `title` attribute

## Not actionable (Webflow platform)
- Unused CSS from Webflow shared stylesheet (~25KB)
- Webflow's own JS bundle

## Completed
- [x] Bundle fancybox + lenis into all.min.js/all.min.css (reduced 6 requests to 3)
- [x] Bundle jQuery into all.min.js to enable async JS loading (FCP: 8.3s -> 2.2s)
