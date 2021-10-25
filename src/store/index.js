import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'

import { getDatabase, ref, child, get, set } from 'firebase/database'
import { 
  getAuth,
  signOut,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,

    
    database: null,
    reference: null,
    
    userState: null,

    auth: null,
    user: null,
    providerGoogle: null,
    providerGitGub: null,
  },


  mutations: {
    // DATABASE
    setStateDatabase(state) {
      state.database = getDatabase()
    },
    // SIGN__IN__WITH
    loadStateAuthChange(state) {
      state.auth = getAuth()
      state.user = state.auth.currentUser
      state.providerGoogle = new GoogleAuthProvider()
      state.providerGitGub = new GithubAuthProvider()
    },
    
  },


  actions: {

    // DATABASE
    getReference(context) {
      const refs = ref(state.database)
      console.log('ref', refs)
      get(child(refs, 'accounts'
        )).then((snapshot) => {
          console.log( 'val ',snapshot.val())
        }).catch((err) => {
          console.error(err)
        })
      console.log('getRefence off')
    },

    // DATABASE
    setValueDB(context, eMail, passwords) {
        console.log('setValueDB')
        const db = getDatabase();
        set(ref(db, 'accounts'), {
          accostit: {
            email: 'asad',
            password: 'asdasd'
          }
        }
      )
    },
 
    // SIGN__IN__WITH
    signInWithGoogle(context) {
      signInWithPopup(context.state.auth, context.state.providerGoogle)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;

          context.commit('loadStateAuthChange')
          context.dispatch('onAuthStateEnter')

          // --- НЕ НАШЕЛ В ФАЙР БЭЙЗ КАК ЭТИМ ПОЛЬЗОВАТЬСЯ ---
          // signInWithRedirect(context.state.auth, context.state.providerGoogle)
       
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },

    
    //SIGN__IN__WITH
    signInWithGithub(context) {
      console.log('popup')
      signInWithPopup(context.state.auth, context.state.providerGitGub)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result.user;
          context.commit('loadStateAuthChange')
          context.dispatch('onAuthStateEnter')
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          console.log(errorMessage)
          // ...
        });
    },

    // пока не ясно
    // SIGN__IN__WITH_OUT
    signOut(context) {
      signOut(context.state.auth)
        .then(() => {
        // Sign-out successful.
          context.commit('loadStateAuthChange')
          context.dispatch('onAuthStateEnter')
        })
        .catch((error) => {
        // An error happened.
          console.error(error)
        });
    },

    // перенаправление на др страницу
    onAuthStateEnter(context) {
      onAuthStateChanged(context.state.auth, (user) => {
        if (user && router.match(location).hash !== '#/app') {
          return router.push('/app')
        } else if (router.match(location).hash !== '#/signin') {
          console.log('signin push')
          return router.push('/signin')
        }
      })
    },

    createAccountWithEmailAndPassword(context, value) {
      // console.log(info.email, info.password, 'info')
      createUserWithEmailAndPassword(context.state.auth, value.email, value.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          context.commit('loadStateAuthChange')
          context.dispatch('onAuthStateEnter')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('message', errorMessage, 'error.code', error.code )
          // ..
        });
    }
    
  },

  getters: {
   
  },

})