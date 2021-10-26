<template>
  <div class="al-sign-in">
    <div class="al-sign-in__alert fixed top-10 right-10 w-auto h-auto" v-show="Boolean(getErrorMessageToAlert)">
      <AlAuthAlertError 
        :errorMessage="getErrorMessageToAlert"
      />  
    </div>
    <div class="al-sign-in__wrapper">

      <div class="al-sign-in__wrapper-box">
        <div class="al-sign-in__with-network">
          <div class="al-sign-in__wrapper-network">
            <label>
              <span class="al-sign-in__title">
                Welcome my app <span class="text-blue-300"> task manager.</span> 
                <br> My name Sergey and this my pet project 
                <br> Sign in with:
              </span>
            </label>
            <div class="al-sign-in__component-auth-sign-in-with">
              <AlAuthSignInWith 
                :imgNetworkSrc="iconGooglePath"
                :socialNetwork="labelSignInWithGoogle"
                ref="signInWithGoogle"
                @click="signInWithGoogle()"
              />
              <AlAuthSignInWith 
                :imgNetworkSrc="iconGithubPath"
                :socialNetwork="labelSignInWithGitHub"
                @click="signInWithGithub()"
              />
            </div>
          </div>
        </div>
        <div class="al-sign-in__login-form-box">
          <div class="al-sign-in__wrapper-form">
            <!-- FORM -->
            <form class="al-sign-in__form" action="">
              <span class="al-sign-in__label-form">
                Авторизация
              </span>
              <div class="al-sign-in__input">
                <!-- LOGIN -->
                <AlAuthInput 
                  v-model="emailValue"
                  :authTypeInput="typeInputEmail"
                  :authPlaceholderInput="placeholderLogin"
                  :authInputTypeValue="authInputTypeValueEmail"
                  :authInputErrorStylePlaceholder="placeholderLoginError"
                  
                />
                  <!-- PASSWORD -->
                <AlAuthInput 
                  v-model="passwordValue"
                  :authTypeInput="typeInputPassword"
                  :authPlaceholderInput="placeholderPassword"
                  :authInputTypeValue="authInputTypeValuePassword"
                  :authInputErrorStylePlaceholder="placeholderPasswordError"
                  
                />
                <div class="mt-5 flex justify-center">
                  <AlAuthBtn 
                    :authBtnName="btnNameSignIn"
                    @click="signInWithEmailAndPassword()"
                  />
                </div>
              </div>
            </form>
            
            <div class="al-sign-in__registration-link text-center">
              <span class="
                cursor-pointer
                transition
                duration-300 
                ease-in-out 
                hover:text-gray-500"
                >
                  <router-link to="/registration">
                    Регистрация
                  </router-link>
                </span>
            </div>
            {{ log }}
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import AlAuthInput from '../components/AutentificationComponents/AlAuthInput.vue'
import AlAuthBtn from '../components/AutentificationComponents/AlAuthBtn.vue'
import AlAuthSignInWith from '../components/AutentificationComponents/AlAuthSignInWith.vue'
import AlAuthAlertError from '../components/AutentificationComponents/AlAuthAlertError.vue'

export default {
  data: () => ({
    
    labelEmail: 'Логин',
    labelPassword: 'Пароль',

    placeholderLogin: 'E-mail',
    placeholderPassword: 'Password',
    placeholderLoginError: false,
    placeholderPasswordError: false,

    typeInputEmail: 'email',
    typeInputPassword: 'password',
    authInputTypeValueEmail: 'password',
    authInputTypeValuePassword: 'email',

    emailValue: '',
    passwordValue: '',
    
    btnNameSignIn: 'Авторизация',

    iconGooglePath: '../src/assets/authIcon/google.png',
    iconGithubPath: '../src/assets/authIcon/github.png',

    labelSignInWithGoogle: 'Google',
    labelSignInWithGitHub: 'GitHub'
  }),


  components: {
    AlAuthInput,
    AlAuthBtn,
    AlAuthSignInWith,
    AlAuthAlertError,
  },

// 1. При попадании на страницу -- проверяем в сети ли пользователь +
// 2. Если пользователь не в сети запускаем функцию входа по клику на вход через google или github +
// 3. Если пользователь в сети - перенаправляем его на другую страницу. +
// 4. Добавление и проверка на пользователя в базе данных.
// !! Вывести email и displayName пользователя.
// !! Добавить их в базу данных и добавить в аккаунты пользователей эти имена с мылами пользователя.





  mounted() {
    if (this.$store.state.user) {
      this.$router.push('/app')
    }
  },

  computed: {
    log() {
      console.log(this.emailValue, this.passwordValue)
    },

    getErrorMessageToAlert() {
      return this.$store.state.errorMessageAuthUserInput
    }
  },

  methods: {
    signInWithGoogle() {
      return this.$store.dispatch('signInWithGoogle') 
    },

    signInWithGithub() {
      return this.$store.dispatch('signInWithGithub') 
    },

    signInWithEmailAndPassword() { 
      this.isInputEmpty()
      return this.$store.dispatch({
        type: 'runSignInWithEmailAndPassword',
        email: this.emailValue,
        password: this.passwordValue,
      })
    },

    isInputEmpty() {
      this.placeholderLoginError = !Boolean(this.emailValue) ? true : false
      this.placeholderPasswordError = !Boolean(this.passwordValue) ? true : false
    }
    
  }
}
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

.al-sign-in__title {
  text-align: center;
}

/* @layer base { */
  .al-sign-in {
    @apply
      flex
      justify-center
      items-center
    ;
  }

  .al-sign-in__wrapper {
    @apply
      /* container */
      
      sm:w-10/12
      flex
      justify-center
      items-center
      
      w-screen
      h-screen
    ;
  }

  .al-sign-in__wrapper-form {
    @apply
      flex
      flex-col
      items-center
      justify-center
    ;  
  }

  .al-sign-in__wrapper-box {
    @apply
      w-4/5
      
      h-auto

      shadow-2xl
      
      xl:h-5/6     
      xl:w-3/5
      xl:grid
      grid-cols-2
      gap-0
    ;
  }

  .al-sign-in__wrapper-network {
    @apply
      text-center

      h-2/5
      
      flex
      flex-col
      
    ;
  }
  
  .al-sign-in__title {
    @apply
      lg:text-sm
      text-xs
    ;
  }
  
  .al-sign-in__with-network {
    @apply
      m-2


      col-span-2

      flex
      justify-center
      items-center
    ;
  }

  .al-sign-in__form {
    @apply
      w-max
      h-56

      flex
      flex-col
    ;
  }

  .al-sign-in__label-form {
    @apply
      text-center
    ;
  }

  .al-sign-in__login-form-box {
    @apply
      border-l
      border-gray-400
      border-opacity-40

      col-start-3

      flex
      flex-col
      justify-center
    ;
  }

  .al-sign-in__component-auth-sign-in-with {
    @apply
      m-2
      flex
      flex-col
      items-center
      sm:flex-row
      sm:justify-center
    ;
  }

  .al-sign-in__registration-link {
    @apply
    m-4
    ;
  }

/* } */
</style>