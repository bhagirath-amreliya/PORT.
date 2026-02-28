# Portfolio Website

This is a static personal portfolio landing page for Bhagirath Amreliya.

## Structure

```
files/
  index.html         # main HTML document
  css/
    styles.css       # stylesheet
  js/
    script.js        # interactive behavior
  dp.jpeg            # profile image (referenced from HTML)
  Res.pdf            # resume download link
```

## Running Locally

Since this is a static site, you can simply open `index.html` in your browser. For development, it's often helpful to serve it via a simple HTTP server to avoid any CORS or file path issues:

```bash
cd files
# Python 3 built-in server
python3 -m http.server 8000
# then visit http://localhost:8000
```

Alternatively, use any static server like `npm install -g serve` and run `serve`.

## Editing

- Modify HTML in `index.html`
- Update styles in `css/styles.css`
- Add/adjust behavior in `js/script.js`

All files are linked relatively, so they will load automatically when the HTML is opened.
