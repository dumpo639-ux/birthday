# The Baydi Chronicles — Multi-page edition

A pastel, cinematic friendship experience created by Darshil for Shruti (Baydi).

## Design
- Lavender background `#F4F0F8`
- Matcha text `#556B2F`
- Orchid pink accents `#E892B3`

## Structure
- `index.html` — cinematic archive entrance
- `origin.html` — 2019-to-present friendship timeline
- `effect.html` — playful Baydi personality analysis
- `clinic.html` — fictional friendship clinic and printable certificate
- `adventures.html` — text-only memory scenes
- `classified.html` — expandable inside-joke case files
- `soundtrack.html` — upload and play an MP3/WAV track
- `letter.html` — animated envelope and personal letter
- `finale.html` — interactive candles, birthday message and seven-star constellation
- `admin.html` — edit the letter and import/export local archive backup

## Photo privacy
This edition intentionally contains **no personal-photo section, photo upload, photo gallery, lightbox, photo placeholder, or photo manager**. No stock people photos are used. Memories are represented with text, CSS shapes and typography only.

## Run locally
The site uses JavaScript ES modules and IndexedDB. Run a local static server:

**Windows PowerShell**
```powershell
cd path\to\baydi-chronicles-multipage
py -m http.server 8000
```
Then open `http://localhost:8000`.

If `py` is unavailable:
```powershell
python -m http.server 8000
```

## Local storage and privacy
The letter and uploaded soundtrack are stored in IndexedDB in the current browser profile/device. They do not sync to Shruti's device automatically. Export a backup before clearing browser data. A GitHub Pages deployment serves static files but does not synchronize IndexedDB between visitors. For shared uploaded media or private admin authentication, add a backend/cloud storage service before publishing.

## Notes
- The “after some time” case is a light inside joke and explicitly says no pressure.
- The clinic report is fictional entertainment, not medical advice.
- No audio starts until the visitor presses play or chooses a track.
- Google Fonts are optional; system fallbacks are included.
- No deployment was performed.
