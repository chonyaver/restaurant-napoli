<template>
  <div>
    <!--     <nav
      class="font-sans flex flex-col text-center content-center bg-black sm:flex-row sm:text-left sm:justify-between py-2 px-6 sm:items-baseline w-full"
    >
      <div class="mb-2 sm:mb-0 flex flex-row">
        <div>
          <nuxt-link
            to="/"
            href="/home"
            class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >
            <img src="~assets/images/logo.png" class="w-2/4" alt />
          </nuxt-link>
        </div>
      </div>

      <div class="pb-5 md:pb-0 sm:mb-0 self-center md:tracking-widest md:mr-20 flex flex-wrap">
        <nuxt-link
          to="/meny"
          class="text-lg text-md no-underline text-white hover:text-orange-500 ml-2 px-1 xl:text-2xl"
        >Meny</nuxt-link>
        <nuxt-link
          to="/dagenslunch"
          class="text-lg no-underline text-white hover:text-orange-500 ml-2 px-1 xl:text-2xl"
        >Dagens lunch</nuxt-link>
        <nuxt-link
          to="/kontakt"
          class="text-lg no-underline text-white hover:text-orange-500 ml-2 px-1 xl:text-2xl"
        >Kontakta oss</nuxt-link>
        <nuxt-link
          to="/admin"
          class="text-lg no-underline text-white hover:text-orange-500 ml-2 px-1 xl:text-2xl"
        >Logga in</nuxt-link>
      </div>
      <button class="bg-white px-10 py-10" @click="toggle">Toggle</button>
    </nav>-->

    <nav
      class="flex items-center justify-between flex-wrap bg-teal px-5 bg-black"
    >
      <div class="flex items-center flex-no-shrink text-white mr-6 ">
        <img src="~assets/images/logo.png" alt="napoli logo" class="w-24" />
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
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto animated"
      >
        <div class="text-sm sm:flex-grow sm:flex sm:justify-end">
          <nuxt-link
            to="/meny"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            >Meny</nuxt-link
          >
          <nuxt-link
            to="/drycker"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            >Drycker</nuxt-link
          >
          <nuxt-link
            to="/dagenslunch"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            >Dagens lunch</nuxt-link
          >
          <nuxt-link
            to="/kontakt"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            >Kontakta oss</nuxt-link
          >
          <nuxt-link
            to="/admin"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white tracking-widest sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            >Logga in</nuxt-link
          >
          <nuxt-link
            to="/admin"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white sm:text-md lg:text-xl hover:text-orange-600 mr-6"
            >{{ isLoggedIn }}</nuxt-link
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
      type: String
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
