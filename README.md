# balloop.art

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# BEACHTEN
- dataservice: Namen der Kategorien müssen mit den Feldern im Docs übereinstimmen
- mapsservice: properties in toGeoJson müssen mit den Feldern im Docs übereinstimmen
- Docs: ausgelesen wird aus einer zweiten, inverted Tabelle. Bei neuen Feldern muss ggf. der Bereich, aus dem diese erstellt wird, vergrößert werden


# Compodoc Dokumentation der App
Run `npm run compodoc` to create the compodoc documentation like a normal script

Serve generated documentation with compodoc `compodoc -s` or `compodoc -s -d ./doc` the local HTTP server is launched at `http://localhost:8080`

More information about the usage of compodoc you will find here: `https://compodoc.github.io/website/guides/usage.html`

