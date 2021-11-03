<template>
  <div 
    class="burger m-4"
    @click="$emit('clickOnBurger')"
  >
    <svg viewBox="0 0 100 80" width="26" height="26" class="flex items-center">
      <rect width="92" height="8"></rect>
      <rect y="30" width="92" height="8"></rect>
      <rect y="60" width="92" height="8"></rect>
    </svg>
  </div>
</template>

<script>
</script>

<style lang="postcss" scoped>
.burger {
  @apply
    w-12
    h-12
    flex
    justify-center
    items-center
    transition 
    duration-300
    ease-in-out
    hover:bg-gray-300
    active:bg-gray-400
  ;
}
</style>