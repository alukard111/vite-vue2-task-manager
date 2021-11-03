import Vue from 'vue';

import router from '../../router'
import { 
  getAuth,
  signOut,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  
} from 'firebase/auth'


const state = {
  errors: {
    'auth/email-already-in-use': 'Этот e-mail уже занят',
    'auth/invalid-email': 'E-mail введен не корректно',
    'auth/weak-password': 'Password должен быть минимум из 6 символов',
    'auth/user-not-found': 'Пользователь не найден',
    'auth/wrong-password': 'Неверный пароль',
    'auth/space-in-password': 'В пароле не должно содержаться пробелов'
  },
  errorCreateUserInputAlertMessage: '',
  errorMessageAuthUserInput: '',
  errorAuthOrCreateUser: '',

  auth: null,
  user: null,
  providerGoogle: null,
  providerGitGub: null,

}

const getters = {
  getPhotoUserURL: state => {
    if (state.user != null) {
      return state.user.photoURL
    }
  },
  getUserDisplayName: state => {
    if (state.user != null) {
      return state.user.displayName
    }
  },
  getUserEmail: state => {
    if (state.user != null) {
      return state.user.email
    }
  }
}


const mutations = {
    // SIGN__IN__WITH LOAD_STATE_AUTH_CHANGE
    LOAD_STATE_AUTH_CHANGE(state) {
    state.auth = getAuth()
    state.user = state.auth.currentUser
    state.providerGoogle = new GoogleAuthProvider()
    state.providerGitGub = new GithubAuthProvider()
  },

  // ERROR__MESSAGE__ALERT SET_ERROR_MESSAGE_IN_STATE
  SET_ERROR_MESSAGE_IN_STATE(state, error) {
    if (Boolean(error)) {
      state.errorAuthOrCreateUser = state.errors[error]
    } 

    setTimeout(() => {
      state.errorAuthOrCreateUser = ''
    },5000)
  },
}

  
const actions = {
  userPhotourl(context) {
    return context.state.user.photoURL
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

        context.commit('LOAD_STATE_AUTH_CHANGE')
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
  signInWithGithub(context) {
    console.log('popup')
    signInWithPopup(context.state.auth, context.state.providerGitGub)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        context.commit('LOAD_STATE_AUTH_CHANGE')
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

  // SIGN__IN__WITH EMAIL__PASSWORD
  runSignInWithEmailAndPassword(context, valueInput) {
    signInWithEmailAndPassword(context.state.auth, valueInput.email, valueInput.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        context.commit('SET_ERROR_MESSAGE_IN_STATE', '')
        context.commit('LOAD_STATE_AUTH_CHANGE')
        context.dispatch('onAuthStateEnter')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        // context.commit('setErrorMessageWithEmailAndPassword', errorMessage)
        context.commit('SET_ERROR_MESSAGE_IN_STATE', errorCode)
      });
  },

  // пока не ясно
  // SIGN__IN__WITH_OUT
  signOut(context) {
    signOut(context.state.auth)
      .then(() => {
      // Sign-out successful.
        context.commit('LOAD_STATE_AUTH_CHANGE')
        context.dispatch('onAuthStateEnter')
      })
      .catch((error) => {
      // An error happened.
        console.error(error)
      });
  },

  createAccountWithEmailAndPassword(context, value) {
    // проверка на...пробелы в пароле 
    if (value.password.split('').some((e) => { return e === ' ' })) {
      return context.commit('SET_ERROR_MESSAGE_IN_STATE', 'auth/space-in-password')
    } 
    createUserWithEmailAndPassword(context.state.auth, value.email, value.password)
      .then((userCredential) => {
        
        // Signed in 
        const user = userCredential.user;
        context.commit('SET_ERROR_MESSAGE_IN_STATE', '')
        context.commit('LOAD_STATE_AUTH_CHANGE')
        context.dispatch('onAuthStateEnter')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('message', errorMessage, 'error.code', error.code )
        // context.commit('setErrorMessageInState', errorMessage)
        context.commit('SET_ERROR_MESSAGE_IN_STATE', errorCode)
        // ..
      });
  },

  isASpace(context, isSpace) {
    return isSpace === ' '
  },

  // перенаправление на др страницу
  onAuthStateEnter(context) {
    onAuthStateChanged(context.state.auth, (user) => {
      console.log(user && router.match(location).hash !== '#/app')
      if (user && router.match(location).hash !== '#/app') {
        console.log('spasd,', router.match(location).hash)
        return router.push('/app')
      } else if (router.match(location).hash !== '#/signin') {
        console.log('signin push')
        return router.push('/signin')
      }
    })
  },
}

  




export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};