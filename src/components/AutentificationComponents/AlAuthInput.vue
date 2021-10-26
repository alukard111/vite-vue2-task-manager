<template>
  <div class="al-auth__input-box">
    <div class="al-auth__wrapper-input ">
      <label class="al-auth__label">
        <!-- <p>{{ authLabelName }}</p> -->
        <input 
          :placeholder="authInputErrorStylePlaceholder ? 'Это обязательное поле' : authPlaceholderInput"
          :type="authTypeInput"
          class="al-auth__input"
          :class="authInputErrorStylePlaceholder ? 'placeholder-red-500' : ''"
          :value="inputValue"
          @input="$emit('input', $event.target.value)"
        >
      
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
    authInputErrorStylePlaceholder: {
      type: Boolean,
      require: false,
      default: false
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
    },
  },
  
  data: () => ({
    inputValue: '',

    onFocusInput: false

  }),

  computed: {
    
  },
  
  methods: {
    focusInput() {
      return onFocusInput = !onFocusInput
    },
  }

}

  

</script>

<style lang="postcss" scoped>
/* @layer base { */
  .al-auth__wrapper-input {
    @apply
      text-center
      relative
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
      focus:ring-gray-500
      ring-gray-600
      ring-opacity-25
      ring-offset-2

      outline-none

      transition 
      duration-300
      ease-in-out
    ;
  }

  



/* } */
</style>
