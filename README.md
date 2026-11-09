# Hallo Welt (`hello`)

Beispiel-Addon für [evcc-addons](https://github.com/m75r/evcc-addons): ein Eintrag „Hallo“ im Menü „Mehr“ und eine Seite mit der PV-Leistung (live aus dem evcc-WebSocket). Es zeigt den kleinsten sinnvollen Aufbau eines Addons, siehe [src/index.ts](src/index.ts) und [ADDON-DEVELOPMENT.md](https://github.com/m75r/evcc-addons/blob/main/ADDON-DEVELOPMENT.md).

## Installation

ZIP `hello-<version>.zip` von der [Release-Seite](https://github.com/m75r/evcc-addon-hello/releases) herunterladen und auf der Seite „Addons“ über „+ Neu“ hochladen.

## Entwicklung

Voraussetzungen: Node.js ≥ 22, für E2E-Tests Docker.

```sh
npm install       # SDK als Tarball vom Release der Plattform
npm run build     # dist/hello-<version>.zip
npm test
npm run lint
npm run e2e       # Playwright gegen evcc in Docker (EVCC_IMAGE überschreibt das Image)
```

## Lizenz

MIT, siehe [LICENSE](LICENSE). Fremdkomponenten: keine (siehe [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)).
