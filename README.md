# Purrwood site

The pages the [Purrwood](https://github.com/Can1Cyp2/Purrwood) app links to, served by
GitHub Pages at https://can1cyp2.github.io/Purrwood_Site/.

| Page | Purpose |
|---|---|
| `index.html` | Front page |
| `help.html` | Help and support; the support URL for the store listings |
| `privacy.html` | Privacy policy; linked from Settings, the sign-up screen and the store listings |
| `auth.html` | Where account emails point. Codes are entered in the app; this page only says so, and drops anything after `#` in its address at once |

Plain HTML and CSS with a strict content security policy: no cookies, no analytics, no
external requests. `.nojekyll` makes Pages serve the files as they are.

To publish: **Settings → Pages → Build and deployment → Source: Deploy from a branch →
`main` / `/ (root)`**.
