<template>
  <div class="flex justify-center items-center w-screen h-screen">
        <!-- ALERT ERROR/OR SUCCES sign-in -->
        <div class="al-sign-in__alert fixed top-10 right-10 w-auto h-auto" v-show="Boolean(getErrorMessageToAlert)">
          <AlAuthAlertError 
            :errorMessage="getErrorMessageToAlert"
          />  
        </div>
    <div class="
        w-4/5
        
        h-3/6
        
        shadow-2xl
        
        md:h-3/6     
        lg:w-2/5"
        >
      <div class="al-sign-in__login-form-box" >
        
        <div class="al-sign-in__wrapper-form">
        <!-- FORM -->
          <form class="al-sign-in__form" action="">
            <span class="al-sign-in__label-form">
              Регистрация
            </span>
            <div class="al-sign-in__input">
              <AlAuthInput 
                v-model="emailValue"
                :authInputValue="emailValue"
                :authPlaceholderInput="placeholderEmail"
                :authTypeInput="typeEmail"
                :authInputTypeValue="authInputTypeValueEmail"
                :authInputErrorStylePlaceholder="placeholderLoginError"
              />
              
              <AlAuthInput 
                v-model="passwordValue"
                :authInputValue="passwordValue"
                :authPlaceholderInput="placeholderPassword"
                :authTypeInput="typePassword"
                :authInputTypeValue="authInputTypeValuePassword"
                :authInputErrorStylePlaceholder="placeholderPasswordError"
              />
                
              <div class="mt-5 flex justify-center">
                <AlAuthBtn 
                  @click="createAccount()"
                  :authBtnName="btnName"
                />
              </div>
            </div>
          </form>
          
        </div>
      </div>

  </div>

  </div>
</template>

<script>
import AlAuthInput from '../components/AutentificationComponents/AlAuthInput.vue'
import AlAuthBtn from '../components/AutentificationComponents/AlAuthBtn.vue'
import AlAuthAlertError from '../components/AutentificationComponents/AlAuthAlertError.vue'

export default {
  components: {
    AlAuthInput,
    AlAuthBtn,
    AlAuthAlertError,
  },


  data: () => ({
    placeholderEmail: 'E-mail',
    placeholderPassword: 'Password',

    typeEmail: 'email',
    typePassword: 'password',
    authInputTypeValueEmail: 'email',
    authInputTypeValuePassword: 'password', 

    placeholderLoginError: false,
    placeholderPasswordError: false,

    emailValue: '',
    passwordValue: '',

    btnName: 'Создать аккаунт',

    focusEmail: false,
  }),


  mounted() {
    // Если alert вылезет и перейти на др страницу, а затем вернуться -- alert так и будет весеть там
    // поэтому сообщение об ошибке предварительно вбиваем пустое на страницу.
    this.$store.commit('auth/SET_ERROR_MESSAGE_IN_STATE', '')
  },
  
  computed: {
    getErrorMessageToAlert() {
      return this.$store.state.auth.errorAuthOrCreateUser
    }
  },
  
  methods: {
    onMounted() {
      // this.$store.commit('setStateDatabase')
      // this.$store.dispatch('setValueDB')
      // this.$store.dispatch('getReference')
    },

    createAccount() {
      if (this.isInputEmpty()) {
        this.$store.dispatch({
          type: 'auth/createAccountWithEmailAndPassword',
          email: this.emailValue,
          password: this.passwordValue,
        })
      }
    },

    isInputEmpty() {
      this.placeholderLoginError = !Boolean(this.emailValue)
      this.placeholderPasswordError = !Boolean(this.passwordValue)
      return !this.placeholderLoginError && !this.placeholderPasswordError
    }
    


    
  }
}
</script>

<style lang="postcss" scoped>
/* @layer base { */
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

  .al-sign-in__wrapper-form {
    @apply
      flex
      flex-col
      items-center
      justify-center
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
/* } */
</style>