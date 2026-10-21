# What couple are we?

A cute pink-and-roses quiz. 11 categories x 2 questions ("If I were..." / "If you were...") = 22 questions. The answers score points for eight couples and the highest total wins.

## Put it online with GitHub Pages
1. Create a new repository on GitHub (e.g. `couple-quiz`) and upload everything in this folder, keeping the structure.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/couple-quiz/`.

## Add the result photos
Drop a picture for each couple into `images/couples/`, named after the `photo` value in `couples.js`:
`burt-irv`, `mark-helly`, `mark-gemma`, `fred-daphne`, `jim-lee`, `belle-beast`, `rapunzel-flynn`, `jack-sally`
(`.jpg`, `.jpeg`, `.png` or `.webp`). Until a photo exists, the result page shows a "Our photo goes here" placeholder.

## Edit things
- **Questions and scoring:** `quiz-data.js` (the comment at the top explains the point format).
- **Result text:** `couples.js`.
- **Colors and fonts:** the variables at the top of `styles.css`.

## Test locally
Open `index.html` in a browser. No build step needed.

## Files
`index.html`, `styles.css`, `app.js`, `quiz-data.js`, `couples.js`, `assets/` (rose and pattern art), `images/couples/` (your photos).
