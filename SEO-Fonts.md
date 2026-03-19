# Font Audit — roessli.ch

## Current situation

### Fonts in Webflow Designer
| Font | Weights | Source | Format | Size |
|------|---------|--------|--------|------|
| Open Sans | 300, 400, 600, 700, 800 | Google Fonts (built-in) | WOFF2 | ~41-44KB per weight (auto-subset) |
| NotoSans Medium | 500 | Custom upload | TTF | **481KB** |
| NotoSerifDisplay Bold | 700 | Custom upload | TTF | **388KB** |

### What the browser actually loads (from Lighthouse)
- `NotoSans-Medium.ttf` — 481KB (uncompressed, full Unicode charset)
- `NotoSerifDisplay-Bold.ttf` — 388KB (uncompressed, full Unicode charset)
- `Open Sans` — 2 x ~42KB WOFF2 from Google Fonts (already optimized, auto-subset to latin)
- `Roboto Regular` — 49KB WOFF2 from TrustYou widget (third-party, not our control)

### The problem
The two custom-uploaded fonts are **raw TTF files with full character sets** (including Cyrillic, Greek, Vietnamese, etc.). The site only needs latin characters.

- NotoSans-Medium.ttf: 481KB → estimated ~20-25KB as WOFF2 latin subset
- NotoSerifDisplay-Bold.ttf: 388KB → estimated ~15-20KB as WOFF2 latin subset
- **Total savings: ~820KB per page load**

### Note on Open Sans
Open Sans appears to be using Webflow's built-in Google Fonts integration (served as WOFF2 from fonts.gstatic.com), even though there's also a custom "opensans" entry in the designer. This is fine — no action needed. The custom upload can be removed if it's not being used, but it won't affect performance since the browser loads the Google Fonts version.

## Recommended action

### Generate WOFF2 latin subsets and re-upload

1. Go to https://gwfh.mranftl.com/ (google-webfonts-helper)
2. Search **"Noto Sans"** → select weight **500 (Medium)** → select charset **latin** → download WOFF2
3. Search **"Noto Serif Display"** → select weight **700 (Bold)** → select charset **latin** → download WOFF2
4. In Webflow Designer: delete the old TTF uploads, upload the new WOFF2 files
5. Verify font rendering looks the same across pages

### Expected result
- ~820KB saved per page load
- Significant improvement to FCP and LCP (fonts block rendering)
- No visual change to the site
