# Clandinin Lab website

The public website of the Clandinin Lab, Stanford Department of Neurobiology.
It's a plain static site (no build step, no database), hosted for free with
**GitHub Pages**.

---

## How the site works, in one picture

The site is a small set of files, a bit like a printed lab poster split into
layers you can swap independently:

```
clandinin-lab-site/
├── index.html              ← the pages and their text (Home, Pillars, Tools, Alumni…)
├── data/
│   ├── people.js           ← lab members: name, role, photo, bio
│   └── publications.js     ← every paper on the Publications page
├── images/
│   ├── brand/              ← lab logo + small logo in the top bar
│   ├── home/               ← home-page art
│   ├── people/             ← headshots (one file per person)
│   ├── research/           ← figures on the Pillars of Inquiry pages
│   └── tools/              ← images on the Tools page
├── videos/                 ← fly-on-ball video, whole-brain imaging movie
├── css/style.css           ← colors, fonts, layout (rarely touched)
└── js/main.js              ← interactive behavior (rarely touched)
```

**Rule of thumb:** almost every update is either editing a *data* file
(people, publications) or replacing a file in `images/` or `videos/`.
You should almost never need to open `css/` or `js/`.

GitHub stores these files and keeps a full history of every change
(so any mistake can be undone). GitHub Pages then serves the files as a public
website. Every time someone saves ("commits") a change, the live site updates
within a minute or two.

---

## Part 1: Put the site online (one time, ~15 minutes)

### 1. Create the repository

1. Sign in to GitHub and go to the **ClandininLab** organization
   (https://github.com/ClandininLab). You need to be an org owner, or ask one
   to do this step or give you permission to create repositories.
2. Click **New repository**.
3. **Name it.** This choice decides the web address:

   | Repository name            | Website address                                  |
   |----------------------------|--------------------------------------------------|
   | `ClandininLab.github.io`   | `https://clandininlab.github.io`  ← recommended  |
   | anything else, e.g. `website` | `https://clandininlab.github.io/website/`     |

4. Set it to **Public** (required for free GitHub Pages).
5. Leave "Add a README" **unchecked** and click **Create repository**.

### 2. Upload the files

On the new, empty repository page:

1. Click the link **"uploading an existing file"**.
2. Open the `clandinin-lab-site` folder on your computer, select **everything
   inside it** (not the folder itself), and drag it onto the GitHub page.
   Folders upload with their contents.
3. Wait until every file is listed, write a short message such as
   "First version of the lab site", and click **Commit changes**.

> If you're comfortable with the command line or **GitHub Desktop**, you can
> instead clone the empty repo, copy these files in, commit, and push.

### 3. Turn on GitHub Pages

1. In the repository, open **Settings → Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
4. After 1–2 minutes, refresh that settings page. It will show
   "Your site is live at …". Open the link and check each page.

---

## Part 2: Updating the site

Everything below can be done **in the web browser on github.com**, with no
software to install. To edit a file, open it in the repository, click the
✏️ **pencil** icon, make the change, and click **Commit changes**.
The live site updates in about a minute (hard-refresh with Ctrl/Cmd + Shift + R
if you still see the old version).

### Add a publication

1. Open `data/publications.js` and click ✏️.
2. Copy an existing `{ … },` block and paste it at the **top** of the list.
3. Fill in `citation` (the full reference), `link` (a DOI link is best), and
   `categories` (one or more of the category names listed at the top of
   that file, spelled exactly).
4. When a preprint is published, edit its existing block instead of adding a
   new one.

### Add a new lab member

1. **Photo:** go to `images/people/` → **Add file → Upload files** and upload a
   photo named after the person, lowercase with hyphens, e.g.
   `jane-doe.jpg`. Square-ish photos around 600×600 px look best.
2. **Details:** open `data/people.js`, click ✏️, copy an existing `{ … },` block,
   paste it where the person should appear, and change `group`
   (`"pi"`, `"postdoc"`, `"grad"` or `"staff"`), `name`, `role`, `photo`
   (e.g. `"images/people/jane-doe.jpg"`), and `bio`. You can delete the
   `photoBackup` line for new people.

### Move someone to Alumni

1. In `data/people.js`, delete their `{ … },` block.
2. In `index.html`, search (Ctrl/Cmd + F) for `alum-list` and add a line near
   the top of that list, for example:
   ```html
   <li>Jane Doe PhD, Postdoctoral Fellow, Somewhere University</li>
   ```

### Change page text

All page text lives in `index.html`, grouped into sections marked with
comments like `<!-- ============ HOME ============ -->` and
`<!-- ============ PILLAR 1: ENERGY … -->`. Search for a phrase you can see on
the live page, edit the words between the tags, and commit. Leave the
`<…>` tags themselves alone.

### Replace an image or video

The simplest way: upload a new file **with exactly the same name** into the
same folder (GitHub will replace the old one). For example, to swap the
Neurodegeneration cartoon, upload a new
`images/research/theisen-2026-fig7-lysosomal-catabolism.webp`.

To add a new figure with a new name, upload it, then change the matching
`src="images/…"` in `index.html`.

Keep images under ~1 MB and videos under ~10 MB so the site stays fast
(GitHub's browser upload limit is 25 MB per file). For figures,
`.webp` or `.jpg` at ~1500 px wide is plenty.

---

## Preview changes before they go live (optional)

Download or clone the repository and double-click `index.html`. The whole site
works straight from your computer. This is a good way to check bigger edits
first.

## If something breaks

* **A page is blank or the people/publication list disappeared:** almost always
  a missing comma, quote, or bracket in a `data/*.js` file. Compare your block
  with the one above it.
* **Undo any change:** open the file on GitHub → **History** → pick the last good
  version → copy its contents back, or ask someone comfortable with git to
  revert the commit. Nothing is ever lost.

## Giving lab members access

Add people to the ClandininLab organization (or as collaborators under the
repository's **Settings → Collaborators**) with *Write* access. Anyone with
access can edit through the browser as described above.

## The Eclosion game

Clicking the big stained-glass fly on the Home page (or the "Play Eclosion"
button under it) opens the game in a window on top of the site. The game itself
lives on Netlify. If it moves, open `js/main.js`, search for `ECLOSION_URL`, and
paste in the new address.

## Link preview and tab icon

When someone shares the site in a text, Slack, or email, it shows a preview card
using `images/brand/share-card.jpg`, and browser tabs show the fly logo
(`favicon.ico` and the icons in `images/brand/`). To change the preview picture,
upload a new 1200×630 image with the same name.

The preview card needs the site's full web address. It's set to
`https://clandininlab.github.io/`. **If the site moves to a different address**
(for example a custom Stanford domain), open `index.html`, search for
`clandininlab.github.io`, and change both lines to the new address.

## Custom web address (optional)

To serve the site from an address like `clandininlab.stanford.edu`, request
the DNS record from Stanford IT / your department web contact, then enter the
domain under **Settings → Pages → Custom domain**. GitHub's guide:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Image credits.** Pillar 3 figures: Currier & Clandinin, *Cell* 188 (2025),
https://doi.org/10.1016/j.cell.2025.05.007. Pillar 4 figures: Theisen et al.,
*Neuron* 114 (2026), https://doi.org/10.1016/j.neuron.2026.02.006. Pillar 1
figures: Mann et al., *Nature* 593 (2021), https://doi.org/10.1038/s41586-021-03497-0.
Tools page figures: Isaacman-Beck et al., bioRxiv (2019),
https://doi.org/10.1101/788679 (CC BY-NC-ND 4.0); Brezovec et al., *Current
Biology* 34 (2024), https://doi.org/10.1016/j.cub.2023.12.063; Hao et al.,
bioRxiv (2026), https://doi.org/10.64898/2026.05.27.728040.
