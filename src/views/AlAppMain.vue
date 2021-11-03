<template>
  <div class="main-box-app">
    <div class="box mx-auto w-full">
      <AlAppMenu 
        @logout="signOutAuth()"
        @getUserDisplayName="getUserDisplayName()"
        :userDisplayName="getDisplayName"
        :userEmail="getUserEmail"
        :userPhotoURL="getUserPhotoURL"
        :toggleOptionsMenu="isToggleOptionsMenu"
      />
      <div class="main-box-app__al-navbar-box" ref="navbarBox">
        <div class="flex w-full main-box-app__al-navbar-wrapper transition ease-in-out 
    duration-300  ">
          <div class="main-box-app__navbar" ref="navbar" >
            <AlAppNavbar  />

          </div>
          <div class="main-box-app__burger ">
            <AlAppBurgerNavbar 
              @clickOnBurger="runBURGER()"
            />
          </div>
          <div class="flex justify-center items-center w-full">
            <span class=" border border-2 border-red-200">
              LOL
            </span>
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


export default { 
  components: {
    AlAppMenu,
    AlAppNavbar,
    AlAppBurgerNavbar
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
    runBURGER() {
      const elNavbarWrapper = document.querySelector('.main-box-app__al-navbar-box')
      if (elNavbarWrapper.style.marginLeft === `-${this.$refs.navbar.offsetWidth}px`) {
        elNavbarWrapper.style.marginLeft = `0px`
      } else {
        elNavbarWrapper.style.marginLeft = `-${this.$refs.navbar.offsetWidth}px`
        
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
  ;
}

.main-box-app__al-navbar-box {
  @apply
    m-0
    w-full
    flex
    justify-start
    transition
    ease-in-out
    duration-300  
    relative
  ;
}
.main-box-app__navbar {
   @apply
    m-0
    flex
    w-auto
    justify-start
    transition
    ease-in-out
    duration-300  

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


</style> 