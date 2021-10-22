import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'

import { getDatabase, ref, child, get, set } from 'firebase/database'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    inputEmail: '',
    inputPassword: '',

    database: null,
    reference: null,
    
    userState: null,

    auth: null,
    user: null,
    providerGoogle: null
  },

  getters: {
    loadStateAuthChange(state) {
      state.auth = getAuth()
      state.user = state.auth.currentUser
      state.providerGoogle = new GoogleAuthProvider()
    },
    // используется после входа. если в сети - отправляет в страницу регистрации(но в будущем -- на главную)
    onAuthStateEnter(state) {
      onAuthStateChanged(state.auth, (user) => {
        if (user) {
          router.push('/registration')
        } 
      })
    },

    // // используется для проверки -- в сети ли пользователь
    // onAuthStateChange(state) {
    //   console.log(state.auth, state.user)
    // } 


  },

  mutations: {
    getDatabase(state) {
      state.database = getDatabase()
    },

    getReference(state) {
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
  },


  actions: {
    async getRef(context) {
      await context.commit('getReference')      
    },

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
 

    signInWithGoogle(context) {
      signInWithPopup(context.state.auth, context.state.providerGoogle)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        context.getters.onAuthStateEnter()
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
  }
})