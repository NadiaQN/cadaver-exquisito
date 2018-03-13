// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-KNB0ewrW0y2BndL3i3zfHGF44p9z9oA",
    authDomain: "cadaver-exquisito-angular.firebaseapp.com",
    databaseURL: "https://cadaver-exquisito-angular.firebaseio.com",
    projectId: "cadaver-exquisito-angular",
    storageBucket: "cadaver-exquisito-angular.appspot.com",
    messagingSenderId: "169076116527"
  }
};
