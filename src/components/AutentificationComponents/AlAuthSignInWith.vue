<template>
  <div 
    class="al-auth-sign-in-with"
    @click="$emit('click')"
  >
    <div class="al-auth-sign-in-with__wrapper">
      <div class="al-auth-sign-in-with__icon-box">
        <img 
          class="al-auth-sign-in-with__icon"
          :src="imgNetworkSrc"
          :alt="imgNetworkAlt"
        >
      </div> 
      <div class="al-auth-sign-in-with__title-box">
        <span class="al-auth-sign-in-with__title">
          {{ socialNetwork }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    socialNetwork: {
      type: String || Number,
      require: false,
      default: 'SocialNetwork',
    },
    imgNetworkAlt: {
      type: String || Number,
      require: false,
      default: 'Icon'
    },
    imgNetworkSrc: {
      type: String || Number,
      require: false,
      default: ''
    }


  },

  data: () => ({
   
  }),

 

}
</script>

<style lang="postcss" scoped>
@layer base {
  .al-auth-sign-in-with__wrapper {
    @apply
      border-2
      border-gray-400

      xl:w-40
      xl:h-14
      sm:w-24
      sm:h-8
      xs:w-36
      w-32
      h-8

      m-1
      p-2

      xl:text-base
      text-xs

      flex
      
      justify-center
      items-center

      cursor-pointer
      
      transition 
      duration-300
      ease-in-out

      shadow-2xl

      hover:border-blue-400
      hover:border-opacity-40
      hover:bg-blue-500
      hover:bg-opacity-40
      hover:text-white
      active:text-white
      active:bg-blue-700
      active:bg-opacity-40
      active:border-blue-500
      active:border-opacity-40
  }

  .al-auth-sign-in-with__icon-box {
    @apply
      m-1
    ;
  }

  .al-auth-sign-in-with__title-box {
    @apply
      m-1
    ;
  }

  .al-auth-sign-in-with__icon {
    @apply
      w-6
      sm:w-8
      xl:w-10
    ;
  }

}
</style>