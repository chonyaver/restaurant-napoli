<template>
  <div>
    <Navigation />
    <div class="flex justify-center items-center mt-20 pb-20">
      <div
        class="cont-form px-5 py-20 md:px-40 md:py-40 bg-orange-500 shadow-lg"
      >
        <form @submit.prevent>
          <div class="flex flex-col">
            <h1 class="mb-5 text-center text-4xl md:text-6xl text-white">
              Logga in
            </h1>

            <label for="email" class="mb-2 text-white">
              <b>Email:</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="text"
              placeholder="Email"
              required
              v-model="email"
            />

            <label for="psw" class="mb-2 text-white">
              <b>Lösenord</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="password"
              placeholder="Lösenord"
              required
              v-model="password"
            />
            <button class="px-5 py-3 bg-black text-white" @click="logIn">
              Logga in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation/Navigation";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  components: {
    Navigation
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push("/admin/loggedin");
          this.isLoggedIn = "true";
        });
    }
  }
};
</script>

<style scoped>
.cont-form {
  background: #f46b45; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #eea849,
    #f46b45
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #eea849,
    #f46b45
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
