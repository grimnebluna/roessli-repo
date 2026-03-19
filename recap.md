# SEO Optimization Session — 2026-03-19

## 1. Bundled external dependencies into all.min.js / all.min.css
- Fancybox 3.5.7 (CSS + JS) and Lenis 1.0.39 (JS) bundled into the repo's own build files
- Fixed wrong npm fancybox package (was v2.1.5, replaced with @fancyapps/fancybox@3.5.7)
- Switched from gulp-uglify to gulp-terser (uglify doesn't support ES6+)
- Reduced external requests from 6 to 3 (all served from same jsDelivr/repo)

## 2. Bundled jQuery to enable async JS loading
- Added jQuery 3.x into all.min.js so the bundle is self-contained
- Enabled Webflow's "Asynchronously load JS" setting
- **Result: FCP improved from 8.3s to 2.2s** (Lighthouse mobile 3G)
- Performance score: 0.54 → 0.61
- jQuery loads twice (bundle + Webflow) but the ~30KB gzip overhead is worth the ~6s FCP gain

## 3. Fixed Mailchimp embed code
- **Fixed JS syntax error** — unquoted string values and stray commas (this was the `SyntaxError: Unexpected token ','` in Lighthouse)
- **Removed `jQuery.noConflict(true)`** — was stripping global `$`/`jQuery`, breaking fancybox and roessli.js
- **Lazy-loaded mc-validate.js** (143KB) — now only loads on email field focus instead of page load
- **Fixed protocol-relative URL** — changed `//s3.amazonaws.com` to `https://`
- Changes saved in `mailchimp-backup.html` for copy into Webflow

## 4. Font optimization (in progress)
- Identified two custom-uploaded TTF fonts eating ~870KB per page:
  - NotoSans-Medium.ttf (481KB)
  - NotoSerifDisplay-Bold.ttf (388KB)
- Downloaded originals from Webflow CDN, converted to WOFF2 latin subsets via Transfonter
- Uploaded WOFF2 versions to Webflow
- Old TTF references still present in Webflow's CSS — need to delete old TTF uploads from Webflow asset manager
- Also found 2 redundant OpenSans TTF uploads (Google Fonts WOFF2 version already loading)
- Details in `SEO-Fonts.md`

## Files created/modified
- `gulpfile.js` — updated build pipeline (terser, vendor bundling, jQuery)
- `package.json` — swapped dependencies
- `build/all.min.js` — now ~174KB, includes jQuery + fancybox + lenis + roessli.js
- `build/all.min.css` — now ~20KB, includes fancybox CSS + roessli styles
- `mailchimp-backup.html` — fixed embed code ready to paste into Webflow
- `SEO-Todo.md` — prioritized optimization checklist
- `SEO-Fonts.md` — font audit and migration plan
- `tmp_head.html` / `tmp_footer.html` — removed from repo (contained verification codes)

## Still open (see SEO-Todo.md)
- Delete old TTF font uploads from Webflow asset manager
- Convert NotoSans-Medium to WOFF2 subset and upload
- Remove redundant OpenSans TTF uploads
- Lazy-load reCAPTCHA (362KB, loaded twice)
- Responsive image optimization
- Accessibility fixes (lang attribute, alt tags, color contrast, heading order)
