<template>
  <div>
    <nav
      class="flex items-center justify-between flex-wrap bg-teal px-5 bg-black"
    >
      <div class="flex items-center flex-no-shrink text-white mr-6 ">
        <nuxt-link to="/">
          <img src="~assets/images/logo.png" alt="napoli logo" class="w-24 "
        /></nuxt-link>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 focus:outline-none border rounded text-teal-lighter border-teal-light text-orange-500"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto "
      >
        <div class="text-sm sm:flex-grow sm:flex sm:justify-end ">
          <nuxt-link
            to="/meny"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white md:tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-4"
            v-if="!isLoggedIn"
            >Meny</nuxt-link
          >
          <nuxt-link
            to="/drycker"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white md:tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            v-if="!isLoggedIn"
            >Drycker</nuxt-link
          >
          <nuxt-link
            to="/dagenslunch"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white md:tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            v-if="!isLoggedIn"
            >Dagens lunch</nuxt-link
          >
          <nuxt-link
            to="/kontakt"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white md:tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            v-if="!isLoggedIn"
            >Kontakta oss</nuxt-link
          >
          <nuxt-link
            to="/admin"
            class="no-underline block mt-4 mb-4 md:mb-0 sm:inline-block sm:mt-0 text-white md:tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            v-if="!isLoggedIn"
            >Logga in</nuxt-link
          >
          <nuxt-link
            to="/admin"
            class="no-underline block mt-4 mb-4 md:mb-0 sm:inline-block sm:mt-0 text-white md:tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            v-else
            >Logga ut</nuxt-link
          >
        </div>
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    isLoggedIn: {
      type: Boolean
    }
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      console.log(this.open);
    }
  }
};
</script>

<style scoped>
.animated {
  animation: opacityIn 1.5s ease;
}

@keyframes opacityIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
