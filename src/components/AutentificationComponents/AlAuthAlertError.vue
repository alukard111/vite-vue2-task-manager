<template>
  <div class="al-auth-alert-error-container m-2">
    <div class="al-auth-alert-error-container__wrapper text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="animate-pulse h-4 w-4 m-2 text-white" viewBox="0 0 1792 1792">
          <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z">
          </path>
      </svg>
      <span class="m-2">{{ errorMessage }}  </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      require: false,
      default: ''
    },
    styleAlert: {
      type: String,
      require: false,
      default: 'error'
    }
  },


  data: () => ({
    emailInUse: 'Такой e-mail существует',
    emailIsCorrecter: 'Не верно вверен e-mail',

  }),

  computed: {
    getStyleAlert() {
      return this.styleAlert === 'error' ? 'bg-red-800' : 'bg-green-300' 
    }
  }
}
</script>


<style lang="postcss" scoped>
/* @layer base { */
  .al-auth-alert-error-container {
    @apply
      w-80
      h-auto
      p-2

      rounded-lg
      shadow-xl
      bg-red-900

      text-white
      text-center

      transition
      duration-700
      ease-in-out
      
    ;
  }
  .al-auth-alert-error-container__wrapper {
    @apply
      flex

    ;
  }
/* } */
</style>