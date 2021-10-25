<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="
        w-4/5
        
        h-3/6
        
        shadow-2xl
        
        md:h-3/6     
        lg:w-2/5"
        >
      <div class="al-sign-in__login-form-box">
        <div class="al-sign-in__wrapper-form">
        <!-- FORM -->
          <form class="al-sign-in__form" action="">
            <span class="al-sign-in__label-form">
              Регистрация
            </span>
            <div class="al-sign-in__input">
              <AlAuthInput 
                :authPlaceholderInput="labelEmail"
                :authTypeInput="typeEmail"
                v-model="emailValue"
                :authInputTypeValue="authInputTypeValueEmail"
                ref="refInputEmail"
              />
              
              <AlAuthInput 
                :authPlaceholderInput="labelPassword"
                :authTypeInput="typePassword"
                v-model="passwordValue"
                :authInputTypeValue="authInputTypeValuePassword"
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


export default {
  components: {
    AlAuthInput,
    AlAuthBtn
  },


  data: () => ({
    labelEmail: 'E-mail',
    labelPassword: 'Password',

    typeEmail: 'email',
    typePassword: 'password',
    authInputTypeValueEmail: 'email',
    authInputTypeValuePassword: 'password', 

    emailValue: '',
    passwordValue: '',

    btnName: 'Создать аккаунт',

    focusEmail: false,
  }),


  mounted() {
    this.onMounted()
  },
  
  
  methods: {
    onMounted() {
      // this.$store.commit('setStateDatabase')
      // this.$store.dispatch('setValueDB')
      // this.$store.dispatch('getReference')
    },

    createAccount() {
      const password = this.passwordValue.split('').join('')
      console.log(password, typeof(password))
      if (this.passwordValue.split('').join('').length > 6 && !Array.isArray(this.passwordValue)) {
        console.log(password, typeof(this.passwordValue.split('').join('')), 'this.passwordValue.split().join()')
        this.$store.dispatch({
          type: 'createAccountWithEmailAndPassword',
          email: this.emailValue,
          password: this.passwordValue.split('').join(''),
        })
      } else {
        alert('your password is wrong')
      }
    },

    correctedInputValue() {
      if (this.passwordValue.split().join('').length > 6) {

      }
    }

    
  }
}
</script>

<style lang="postcss" scoped>
@layer base {
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
}
</style>