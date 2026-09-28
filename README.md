# Local preview

This site uses Hugo Blox and Hugo Extended **0.124.1**, matching the GitHub Pages workflow.

Local tools are stored in `.local/tools/` (ignored by Git):

- Hugo Extended 0.124.1: `.local/tools/hugo/hugo.exe`
- Go: `.local/tools/go/bin/go.exe`

If setting up a fresh checkout, extract the Windows amd64 archive from the [Hugo 0.124.1 release](https://github.com/gohugoio/hugo/releases/tag/v0.124.1) into `.local/tools/hugo/`, and extract the Windows amd64 ZIP from [Go downloads](https://go.dev/dl/) into `.local/tools/`.

Run from PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\preview.ps1
```

Open http://localhost:1313/. Changes to content and configuration trigger a rebuild and browser refresh. Press Ctrl+C to stop the server. To choose another port, add `-Port 1314`.

The first run downloads the theme modules and requires network access. The preview listens only on this computer.

## Academic layout

The homepage, publication lists/details, and project pages use the compact layout in `layouts/partials/academic/` and `assets/css/academic.css`. Hugo remains the build system. Profile, education, and internships are maintained in `content/authors/admin/_index.md`; papers remain in `content/publication/`.

The publication index is available at `/publications/`; the existing `/publication/` index and individual paper URLs also remain available. Paper thumbnails are resized by Hugo from each bundle's `featured` image. Bibliography links serve the bundle's `cite.bib` directly.

Thumbnail sources:

- NMR: https://nju3dv-humanoidgroup.github.io/nmr.github.io/static/images/1.png
- Embodied intelligence survey: https://arxiv.org/html/2507.00917v3/teaser-pic-hw.png
- LIKO and project images: existing repository assets.
- Light-O1: https://www.lightorigins.com/assets/light-o1-cover.jpg
- Light REACT: https://www.lightorigins.com/assets/light-react-cover.jpg
- Light-Loco-Parkour: https://arxiv.org/html/2608.02653v1/images/pipeline.jpg
- EMoG: https://arxiv.org/html/2609.14432v2/teaser.png

Set `publication_group` to `lead` or `cooperation` in each publication's front matter. Both the homepage and publication index render these groups in that order, newest first within each group. Dates use the initial arXiv submission or the blog's publication date, not later revisions. Company blog posts use the company as the author and link directly to the original post.
