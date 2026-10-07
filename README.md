# Kinderflohmarkt – GitHub Pages

Eine statische Einladung für einen Kinderflohmarkt. Kein Build-Schritt und keine Abhängigkeiten nötig.

## Inhalte ändern

Öffne `config.js`. Dort lassen sich Datum, Uhrzeit, Ort, Adresse, Titel, Beschreibung, E-Mail und Veranstalter zentral ändern.

## Auf GitHub Pages veröffentlichen

1. Neues GitHub-Repository anlegen.
2. Alle Dateien aus diesem Ordner in die oberste Ebene des Repositories hochladen.
3. In GitHub unter **Settings → Pages** bei **Build and deployment** die Option **Deploy from a branch** wählen.
4. Branch `main` und Ordner `/ (root)` auswählen und speichern.
5. Nach kurzer Zeit ist die Seite unter der von GitHub angezeigten Pages-Adresse erreichbar.

## Dateien

- `index.html` – Seitenstruktur
- `styles.css` – Gestaltung und Responsive Design
- `config.js` – leicht editierbare Veranstaltungsdaten
- `script.js` – übernimmt die Daten aus `config.js`

Hinweis: Die Seite lädt die Schriftarten DM Sans und Fredoka von Google Fonts. Alles andere ist lokal und benötigt keine Bibliotheken.
