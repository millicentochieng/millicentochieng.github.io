# millicentochieng.github.io

Personal website, live at <https://millicentochieng.github.io>.

## Structure

```
index.html          redirect to src/pages/index.html
src/pages/          the six pages: index, about, publications, community, news, cv
src/css/tokens.css  all styling, single source of truth
src/js/site.js      shared nav, footer, theme toggle
src/data/           news.json and publications.json
src/assets/         portrait, CV pdf, social card
bump.sh             bumps the asset version so browsers load fresh CSS and JS
```

## Previewing locally

```sh
python3 -m http.server 8777
```

Then open <http://localhost:8777/src/pages/index.html>.

The server runs from the repo root, so local paths need the `src/` prefix.

## Avoiding stale previews

GitHub Pages serves CSS and JS with `cache-control: max-age=600`, so a browser
will keep showing the old file for up to ten minutes after a push. To prevent
that, `tokens.css` and `site.js` are linked with a `?v=N` version query.

After editing `src/css/tokens.css` or `src/js/site.js`, run:

```sh
./bump.sh
```

This raises the version in all six pages, so browsers fetch the new file
immediately and the local preview always matches the live site. The JSON data
files are fetched with `cache: "no-store"`, so they never need a bump.

## Conventions

- No em dashes or en dashes anywhere in the site copy. Use commas, full stops,
  or the middle dot for title separators. Date ranges read "Since 2021" or
  "2019 to 2021".
- No bordered or filled boxes. Cards use a 2px top rule only.
- Shared component CSS lives in `tokens.css`, never inline in a page.
- Page width is fixed by `--maxw: 1080px` in `tokens.css`.
