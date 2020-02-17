// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAdtJg840TySeHcy2K5bmOQxbmnzqcxBYg',
    authDomain: 'studens-fc521.firebaseapp.com',
    databaseURL: 'https://studens-fc521.firebaseio.com',
    projectId: 'studens-fc521',
    storageBucket: 'studens-fc521.appspot.com',
    messagingSenderId: '368084556825',
    appId: '1:368084556825:web:df7865f17cbe04f9c81e88',
    measurementId: 'G-J0WPZMW2XP'
  }
};
