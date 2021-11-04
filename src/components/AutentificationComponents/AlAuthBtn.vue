<template>
  <div class="al-auth__btn-box">
    <button 
      class="al-auth__btn"
      :class="[...classesBtn, ...classes]"
      @click="$emit('click')"
      >
      {{ authBtnName }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    authBtnName: {
      type: String || Number,
      require: true,
      default: 'Button'
    },

    styleBtn: {
      type: String,
      require: false,
      default: 'classic'
    },
    classes: {
      type: Array,
      require: false,
      default: []
    }
  },

  data: () => ({
    classesBtn: [] 
  }),

  mounted() {
    this.whatIsBtn()
  },

  methods: {
    whatIsBtn() {
      if (this.styleBtn === 'classic') {
        this.classesBtn = [
          'hover:border-blue-400',
          'hover:border-opacity-40',
          'hover:bg-blue-500',
          'hover:bg-opacity-40',
          'hover:text-white',
          'active:text-white',
          'active:bg-blue-700',
          'active:bg-opacity-40',
          'active:border-blue-500',
          'active:border-opacity-40'
        ]
      } else if (this.styleBtn === 'cancel') {
        this.classesBtn = [
          'hover:border-red-400',
          'hover:border-opacity-40',
          'hover:bg-red-500',
          'hover:bg-opacity-40',
          'hover:text-white',
          'active:text-white',
          'active:bg-red-700',
          'active:bg-opacity-40',
          'active:border-red-500'
        ]
      } else if (this.styleBtn === 'accept') {
        this.classesBtn = [
          'hover:border-green-400',
          'hover:border-opacity-40',
          'hover:bg-green-500',
          'hover:bg-opacity-40',
          'hover:text-white',
          'active:bg-green-700',
          'active:bg-opacity-40',
          'active:text-white',
          'active:border-green-500'
        ]
      }
    }
  } 
}
</script>

<style lang="postcss" scoped>
/* @layer base { */
  .al-auth__btn {
    @apply
      w-32
      h-10
      p-2

      text-sm
      text-center

      border-black
      border-opacity-25
      border-2
     
      transition 
      duration-300
      ease-in-out
    ;
  }
   /* hover:border-blue-400
      hover:border-opacity-40
      hover:bg-blue-500
      hover:bg-opacity-40
      hover:text-white
      
      active:bg-blue-700 */

/* } */
</style>