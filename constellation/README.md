# Synsentia — Curiosity Constellation (prototype 1)

A standalone, mobile-friendly interactive prototype of the Curiosity Constellation. It is **not yet merged into the live Synsentia site**.

## Open locally
Open `index.html` in a browser, with `styles.css` and `app.js` in the same folder. No build step, internet connection, account, API key, or external library is needed.

## Features
- **Ask:** Add your own question; it is stored in the current browser's localStorage, not transmitted to a server.
- **Explore:** Select stars and follow linked questions.
- **Surprise Me:** Discover an unexpected, editorially written bridge between two subjects.
- Four visual categories: established knowledge, open questions, speculative connections, and personal questions.
- A keyboard-friendly list view; mobile layout; accessible labels.

## Important limitations
- The connections are curated illustrations, not AI-generated research or verified causal relationships.
- The personal questions are stored only in the browser; clearing site data or switching devices may erase them.
- No public submissions, accounts, collaboration, or moderation yet.
- Dense constellations may eventually need an improved graph layout; this prototype intentionally uses fixed star positions.

## Suggested future integration
1. Preserve a backup of the current live Synsentia repository.
2. Create a new root folder named `constellation` and upload `index.html`, `styles.css`, and `app.js` **inside that folder**. Do not flatten these files into the root or the existing `assets` directory.
3. Test `https://synsentia-founder.github.io/Synsentia-Site/constellation/`.
4. Only after testing, add a navigation link to `/Synsentia-Site/constellation/` from the existing homepage.
5. For a later release, add question review, provenance/citations, export, and optional contributions with moderation.

## Design principle
“A curiosity should never have to justify its destination before beginning its journey.”
