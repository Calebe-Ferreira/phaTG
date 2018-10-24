// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    //firebase config
    apiKey: "AIzaSyBl_YQXa6AayDrx1zGZz2aL1HAM6UJ5sTI",
    authDomain: "projeto-tg-pha.firebaseapp.com",
    databaseURL:"https://projeto-tg-pha.firebaseio.com",
    projectId: "projeto-tg-pha",
    storageBucket: "projeto-tg-pha.appspot.com",
    messagingSenderId: "35170508886"
  },
    googleMapsKey:'AIzaSyBUHvhdcg6ojS4dsIG8rWKPnP1F6eilXVA'
};

 
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
