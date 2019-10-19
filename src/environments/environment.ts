// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBwzmTPiYypyJA95ewoClpkCv_DKhW8yt8',
    authDomain: 'myprofile-dab38.firebaseapp.com',
    databaseURL: 'https://myprofile-dab38.firebaseio.com',
    projectId: 'myprofile-dab38',
    storageBucket: 'myprofile-dab38.appspot.com',
    messagingSenderId: '174437822750'
  },
  googleMapConfig: {
    apiKey: 'AIzaSyDwQl5_AGjHIGz9IK4Ggjtp8RBKUZ3G2xo'
  },
  dialogFlowConfig: {
    askMeBotToken: '3c1079104bfd42fe8ea1f0c642c97c67'
  }
};
