# yn. — Portfolio

A lightweight portfolio website built with plain **HTML, CSS and JavaScript**.

The design is intentionally professional first, with a restrained creative layer: dark technical grid, pink/purple accents, subtle engineering marks, and a custom geometric mandala used as background detail.

## Folder structure

- `index.html` — all visible content and section structure
- `style.css` — layout, colours, typography, responsive behaviour and visual effects
- `script.js` — navigation state, mobile menu and contact-form demo behaviour
- `assets/mandala.svg` — reusable background mandala
- `assets/` — place your own project images here when ready

## How to edit it without being a software engineer

### Change text
Open `index.html` and search for the text you want to replace. Most content is written directly in normal HTML so it is easy to find.

### Change colours
Open `style.css` and edit the variables near the top:

- `--pink`
- `--purple`
- `--bg`
- `--ink`

### Add your own photos
Put your image inside `assets/` and replace an image URL in `index.html` with something like:

`assets/my-photo.jpg`

### Change the mandala
Replace `assets/mandala.svg` with your own SVG or update the existing file. The same asset is reused in multiple sections with different opacity and sizing.

## Run locally

Double-click `index.html` to open it in a browser.

For a nicer development workflow, open the folder in VS Code and use a simple local server/Live Server extension. A local server is not required for the basic site to work.

## Publish later

This folder can be uploaded to GitHub as a normal repository and published with GitHub Pages. No backend is required for the main site.

The contact form is intentionally not connected yet. When you are ready, connect it to a form service such as Formspree or another email/form endpoint without changing the design.


### Profile photo
For the large circular frame on the first page, add your image as:

`assets/profile-photo.jpg`

The existing design has not been replaced; the photo frame, mandala details, and small artistic accents are additions layered on top of it.
