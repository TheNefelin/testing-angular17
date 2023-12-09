# Testing First Time Angular 17

### First Steps 
[Angular Dev](https://angular.dev) 
[Google oAuth2](https://developers.google.com/identity/openid-connect/openid-connect)
[Google Console](https://console.cloud.google.com/apis)
* validate version
* update version
* create project
* run server
* google auth
```
ng version
npm install -g @angular/cli@latest
ng new project-name
ng serve
npm install angular-oauth2-oidc
```

### Install Tailwind CSS & DaisyUI [Tailwind CSS](https://tailwindcss.com) [Daisy UI](https://daisyui.com)
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm i -D daisyui@latest
```

1. in the tailwind.config.js file add...
```
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  plugins: [
    require("daisyui")
  ],
  ...
}
```

2. in the styles.css file add directives
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Some Commands
* Create Components
* Create Interfaces
* Create Services
* Create Modules
```
ng g c components/comp_name
ng g i interfaces/inte_name
ng g s services/serv_name
ng g m modules/modu_name
```

<hr/>

# TestingAngular17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
