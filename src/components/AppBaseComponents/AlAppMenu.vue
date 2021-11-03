<template>
  <div class="al-app-menu  ">
    <header class="
      al-app-menu__header-wrapper
      "
    >
      <div class="al-app-menu__header header">
        <div class="header__menu-box">
          <div class="header__left-menu left-menu">
              <!-- w-full in div -->
            <div class="left-menu__search-box search-box">
              <svg 
                class="search-box__icon-search" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                </path>
              </svg>
              <input 
                type="text" 
                class="search-box__input" 
                @click="$emit('getUserDisplayName')"
                placeholder="Search"
              />
            </div>
          </div>
          <div class="
            header__right-menu
            "
          >
            <a 
              href="#"
              class="right-menu__link block relative"
              @click="$emit('changeToggleOptionsMenu')"
            >
              <img 
                alt="profil"
                :src="userPhotoURL"
                class="
                  menu-toggle-link
                  right-menu__link-img
                  "
                />
            </a>
            <div 
              class="right-menu__user-menu user-menu"
              v-if="toggleOptionsMenu"
            >
              <div 
                class="user-menu__box" 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="options-menu"
               
              >
                <a 
                  href="#" 
                  class="user-menu__link" 
                  role="menuitem"
                  >
                    <span class="user-menu__span-box">
                      <span class=" user-menu__span-text">
                        {{ userDisplayName }}
                        <br>
                        {{ userEmail }}
                      </span>
                    </span>
                  </a>
                  <hr>
                  <a 
                    href="#" 
                    class="user-menu__link"
                    role="menuitem">
                    <span class="user-menu__span-box">
                      <span>
                        Settings
                      </span>
                    </span>
                  </a>
                  <a 
                    href="#" 
                    class="user-menu__link"
                    role="menuitem"
                    @click="$emit('logout')"
                  >
                    <span class="user-menu__span-box">
                      <span>
                        Logout
                      </span>
                    </span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    userPhotoURL: {
      type: String,
      require: false,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDk_IPseyI-K-TmMeKVR3JqHQXZMgzK6CttCFNneSDMuFNRYY9l1BZ2szrlFK79nj0RQc&usqp=CAU'
    },
    userDisplayName: {
      type: String,
      require: false,
      default: 'Ваше имя'
    },
    userEmail: {
      type: String,
      require: false,
      default: 'Ваш email'
    },
    toggleOptionsMenu: {
      type: Boolean,
      require: false,
      default: false
    }
  },

  mounted() {
    console.log(this.userPhotoURL, 'asdasd')
  }
}
</script>

<style lang="postcss" scoped>
  .al-app-menu__header-wrapper {
    @apply
      w-full
      items-center
      h-16
      z-40
      bg-white
    ;
  }
  .al-app-menu__header {
    @apply
      relative
      z-20
      flex
      
      justify-between
      w-full
      h-full
      px-3
      mx-auto
    ;
  }
.header__menu-box {
  @apply
    relative
    items-center
    pl-1
    flex
    sm:max-w-5xl
    lg:max-w-full
    lg:w-full
    sm:pr-2
    sm:ml-0
  ;
}
  .header__left-menu {
    @apply
      container
      relative
      left-0
      z-50
      flex
      w-3/4
      h-auto
      h-full
    ;
  }
  .left-menu__search-box {
    @apply
      relative
      flex
      items-center
      w-64
      h-full
    ;
  }
.search-box {

}
.search-box__icon-search {
  @apply
    absolute 
    left-0 
    z-20 
    hidden 
    w-4 
    h-4 
    ml-4 
    text-gray-500 
    pointer-events-none 
    fill-current 
    group-hover:text-gray-400 
    sm:block
  ;
}
.search-box__input {
  @apply
    block 
    w-full 
    py-1.5 
    pl-10 
    pr-4 
    leading-normal 
    ring-2
    ring-gray-400
    transition
    ease-in-out
    duration-300  
    focus:border-transparent 
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-400 
    ring-opacity-90 
    bg-gray-100 
    text-gray-400 
  ;
}
.header__right-menu {
  @apply
    relative 
    p-1 
    flex 
    items-center 
    justify-end 
    w-1/4 
    ml-5 
    mr-4 
    sm:mr-0 
    sm:right-auto
  ;
}
.menu-toggle-link {

}
.right-menu__link-img {
  @apply
    mx-auto
    object-cover
    rounded-full
    h-10 
    w-10
  ;
}
.right-menu__user-menu {

}
.user-menu {
  @apply
    origin-top-right 
    absolute 
    right-0
    top-10
    mt-2 
    w-56  
    shadow-xl 
    bg-white 
    ring-1 
    ring-black 
    ring-opacity-5
  ;
}
.user-menu__box {
  @apply
    py-1
  ;
}
.user-menu__link {
  @apply
    block
    px-4 
    py-2 
    text-gray-700 
    hover:bg-gray-100 
    hover:text-gray-900 
  ; 
}
.user-menu__span-box {
  @apply
    flex 
    flex-col
  ;
}
.user-menu__span-text {
  @apply
    text-sm
  ;
}
</style>