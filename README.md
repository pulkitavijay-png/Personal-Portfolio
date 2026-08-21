# Ideas in motion — Pulkita Vijay

This version keeps the portfolio structure but separates **structure from editable content**.

## Files

- `index.html` — all visible text and project/learning entries
- `style.css` — layout, typography, colours, responsive behaviour
- `script.js` — only navigation/mobile-menu behaviour
- `assets/mandala.svg` — clean vector mandala; reused without distortion
- `assets/profile-photo.jpg` — optional profile photo

## What was corrected

- The mandala is a real SVG with a fixed `viewBox` and `preserveAspectRatio`, so it stays circular and sharp.
- Decorative crosses/stars are CSS shapes rather than relying on inconsistent symbol glyphs.
- Images use `object-fit: cover`, so they cannot stretch.
- Typography has explicit font families and consistent heading/body/technical roles.
- The contact form was removed and replaced with a dedicated mandala composition.
- Decorative mandalas are kept inside their own containers so they do not affect page layout.
- Mobile breakpoints are explicit and do not squash the artwork.
- Project cards and learning rows are intentionally repeatable.

## Editing later

You should mostly only touch `index.html`.

### To change a heading
Search for the heading text and replace it.

### To add a project
Inside `.projects-grid`, copy one `<article class="project-card">...</article>` and edit the contents.

### To add a learning topic
Inside `.learning-table`, copy one `.learning-row` and change the subject/resources/progress.

### To add your photo
Put the file at:

`assets/profile-photo.jpg`

No other code needs to change.

### To change the visual system
Use the variables at the top of `style.css`:
`--pink`, `--purple`, `--bg`, `--ink`, etc.

The layout itself does not need to be touched for normal content updates.
