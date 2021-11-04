<template>
  <div class="main-box-app ">
    <div class="main-box-app__wrapper ">
      <AlAppMenu 
        @logout="signOutAuth()"
        @getUserDisplayName="getUserDisplayName()"
        :userDisplayName="getDisplayName"
        :userEmail="getUserEmail"
        :userPhotoURL="getUserPhotoURL"
        :toggleOptionsMenu="isToggleOptionsMenu"
      />
      <div class="main-box-app__al-dashboard" ref="navbarBox">
        <div class="main-box-app__al-navbar-wrapper">
          <div class="main-box-app__navbar" style="" ref="navbar" >
            <AlAppNavbar  />
          </div>
          <div class="main-box-app__burger ">
            <AlAppBurgerNavbar 
              @clickOnBurger="burgerOnAndOff()"
            />
          </div>
          <div class="main-box-app__content" ref="contentBox">
            <div class="main-box-app__al-board">
              <AlColumn />
            </div>
          </div>  
        </div>
      </div>
      
    </div>
    
  </div>
</template>


<script>
import AlAppMenu from '../components/AppBaseComponents/AlAppMenu.vue'
import AlAppNavbar from '../components/AppBaseComponents/AlAppNavbar.vue'
import AlAppBurgerNavbar from '../components/AppBaseComponents/AlAppBurgerNavbar.vue'
import AlColumn from '../components/boards/AlColumn.vue'

export default { 
  components: {
    AlAppMenu,
    AlAppNavbar,
    AlAppBurgerNavbar,
    AlColumn,
  },


  data: () => ({
    funcEventChangeToggle: null,
    isToggleOptionsMenu: false,
  }),


  beforeMount() {
    // this.funcEventChangeToggle = e => { this.windowEventChangeToggleOptionsMenu() }
    console.log(Boolean(this.$store.state.auth.user))
    if ( !this.$store.state.auth.user ) { this.$router.push('/signin') }

    this.windowEventAddChangeToggle()
  },

  destroy() {
    this.windowEventRemoveChangeToggle()
  },

  computed: {
    getDisplayName() {
      return this.$store.getters['auth/getUserDisplayName']
    },
    getUserEmail() {
      return this.$store.getters['auth/getUserEmail']
    },
    getUserPhotoURL() {
      if (this.$store.getters['auth/getPhotoUserURL'] !== null) {
        return this.$store.getters['auth/getPhotoUserURL']
      }
    }
  },

  methods: {
    burgerOnAndOff() {
      const elNavbarWrapper = document.querySelector('.main-box-app__al-dashboard')
      this.$refs.contentBox.classList.toggle('main-box-app__content_disable-burger')
      if (elNavbarWrapper.style.marginLeft === `${this.$refs.navbar.offsetWidth}px`) {
        elNavbarWrapper.style.marginLeft = `0px`
      } else {
        elNavbarWrapper.style.marginLeft = `${this.$refs.navbar.offsetWidth}px`
      }
    },

    signOutAuth() {
      return this.$store.dispatch('auth/signOut')
    },

    changeToggleOptionsMenu() {
      return this.isToggleOptionsMenu = !this.isToggleOptionsMenu
    },

    windowEventAddChangeToggle() {
      return window.addEventListener('click', this.windowEventChangeToggleOptionsMenu)
    },

    windowEventRemoveChangeToggle() {
      return window.removeEventListener('click', this.windowEventChangeToggleOptionsMenu)
    },

    windowEventChangeToggleOptionsMenu(e) {
      if (e.target.classList.contains('menu-toggle-link')) {
        this.changeToggleOptionsMenu()
      } else {
        this.isToggleOptionsMenu = false
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.main-box-app {
  @apply
    bg-gray-200
    h-screen
    m-0
    overflow-hidden
  ;
}

.main-box-app__wrapper {
  @apply
    mx-auto 
    w-full 
    flex 
    flex-col 
    transition
    ease-in-out
    duration-300
  ;
}
.main-box-app__al-dashboard {
  @apply
    m-0
    w-screen
    flex
    justify-start
    transition-all
    ease-in-out
    relative 
    duration-300  
  ;
}
.main-box-app__al-navbar-wrapper {
  @apply
    flex
    w-full
    overflow-hidden
  ;
}
.main-box-app__navbar {
   @apply
    m-0
    flex
    w-3/12
    justify-start
    transition
    ease-in-out
    duration-300  
    absolute
    -left-1/4
  ;
}
.main-box-app__burger {
  @apply
    
    transition
    ease-in-out
    duration-300 
  ;
}
.main-box-app__burger-active {
  @apply
    -translate-x-96
  ;
}
.main-box-app__content {
  @apply
    flex 
    justify-center
    items-center
    
    h-screen
    overflow-x-auto 
    justify-start
    transition-all
    duration-300
  ;
}
.main-box-app__content_disable-burger {
  @apply
    
    w-9/12
  ;
}

</style> 