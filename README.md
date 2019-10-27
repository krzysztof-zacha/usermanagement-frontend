# UsermanagementFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run following command to build the app
```
$ npm run build
```
Built app is ready to deploy on static server.

## Running tests
Run following command to lint and test your project.
```
$ npm run test
```
Basically you don't need to worry about this because Husky make sure that you won't commit anything which is not linted and tested.

## Devops magic

### CI
It's basically simplified to the husky's pre-commit hook for linting and testing and pre-push hook for building.  
It has been done in this manner because all commits should be linted and tested. But built process takes a time. So we want to ensure that everything is 100% right just before push it to the origin.  

## CD
Deployment is realized by Firebase Hosting. All you need to do is:
```
$ firebase login
$ firebase init
$ firebase deploy
```
In this project it's simplified to the `firebase-deploy.js` script which recognize on which branch you are. Based on that, only if you are on the master, it's executing building and deploying processes.
