import firebaseServices from '../services/firebase';

export default ({ store }) => {
  
  // init the app with the firebase config
  const config = process.env.QENV.FIREBASE_CONFIG;
  firebaseServices.fBInit(config);
  
  // Tell the application what to do when the
  // authentication state has changed
  firebaseServices.auth().onAuthStateChanged((user) => {
    firebaseServices.handleOnAuthStateChanged(store, user)
  }, (error) => {
    console.error(error)
  })
  
  console.log('Firebase App Instantiation:', firebaseServices)
  console.log('Firebase Auth Module:', firebaseServices.auth())
  
  //xVue.prototype.$fb = firebaseServices;
  store.$fb = firebaseServices;
}
