<template>
  <div class="al-auth__input-box">
    <div class="al-auth__wrapper-input">
      <label class="al-auth__label">
        <!-- <p>{{ authLabelName }}</p> -->
        <input 
          :placeholder="authPlaceholderInput"
          :type="authTypeInput"
          class="al-auth__input focus:ring-gray-500 "
          @input="$emit(inputValue = $event.target.value)"
          :value="inputValue"
        >
        {{ renderInput }}
      </label>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    authLabelName: {
      type: String || Number,
      require: false,
      default: 'Label'
    },
    authTypeInput: {
      type: String,
      require: true,
      default: 'text'
    },
    authPlaceholderInput: {
      type: String,
      require: false,
      default: 'Text'
    },
    authInputValue: {
      type: String || Number,
      require: true,
      default: ''
    },
    authInputTypeValue: {
      type: String || Number,
      require: false,
      default: ''
    }
  },
  
  data: () => ({
    inputValue: '',

    onFocusInput: false

  }),

  computed: {
    renderInput() {
      return this.authWriteInputToStore()
    }
  },
  
  methods: {
    focusInput() {
      return onFocusInput = !onFocusInput
    },

    authWriteInputToStore() {
      if (this.authInputTypeValue === 'email') {
        this.$store.state.inputEmail = this.inputValue
      } else if (this.authInputTypeValue === 'password') {
        this.$store.state.inputPassword = this.inputValue
      }
      return console.log(this.$store.state.inputEmail, ' :email', this.$store.state.inputPassword, ' :password')
    }
  }

}

  

</script>

<style lang="postcss" scoped>
@layer base {
  .al-auth__wrapper-input {
    @apply
      text-center
    ;
  }

  .al-auth__label {
    @apply
      text-center

      cursor-pointer
    ;
  }
  
  .al-auth__input {
   
    @apply
      sm:m-4
      sm:p-2
      sm:w-48
      xs:m-4
      xs:p-2
      xs:w-36
      m-2
      p-1
      w-32

      text-gray-900
      text-xs

      ring-2
      ring-gray-600
      ring-opacity-25
      ring-offset-2

      outline-none

      transition 
      duration-300
      ease-in-out

    ;
  }

  

  


}
</style>
