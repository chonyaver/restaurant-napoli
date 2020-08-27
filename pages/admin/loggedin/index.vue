<template>
  <div>
    <Navigation />
    <div class="flex justify-center items-center py-20">
      <div class="w-10/12 px-5 py-20 md:px-40 md:py-40 bg-orange-500 shadow-lg">
        <form @submit.prevent>
          <div class="flex flex-col">
            <label for="vecka" class="mb-2 text-black text-xl">
              <b>Vecka:</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="number"
              min="1"
              placeholder="Vecka"
              v-model="lunch.week"
            />

            <label for="dagens lunch" class="mb-2 text-black text-xl">
              <b>Måndag</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="text"
              placeholder="Dagens lunch"
              v-model="lunch.monday"
            />
            <label for="dagens lunch" class="mb-2 text-black text-xl">
              <b>Tisdag</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="text"
              placeholder="Dagens lunch"
              v-model="lunch.tuesday"
            />
            <label for="dagens lunch" class="mb-2 text-black text-xl">
              <b>Onsdag</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="text"
              placeholder="Dagens lunch"
              v-model="lunch.wednesday"
            />
            <label for="dagens lunch" class="mb-2 text-black text-xl">
              <b>Torsdag</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="text"
              placeholder="Dagens lunch"
              v-model="lunch.thursday"
            />
            <label for="dagens lunch" class="mb-2 text-black text-xl">
              <b>Fredag</b>
            </label>
            <input
              class="mb-5 py-3 px-3 bg-gray-300 focus:outline-none"
              type="text"
              placeholder="Dagens lunch"
              v-model="lunch.friday"
            />
            <div class="flex flex-col items-center mt-20">
              <button
                class="px-5 py-3 bg-black text-white w-1/2 uppercase tracking-widest font-bold"
                @click="addLunch"
              >Uppdatera</button>
              <button
                class="px-5 py-3 bg-black text-white mt-5 w-1/2 uppercase tracking-widest font-bold"
                @click="removeLunch"
              >Rensa</button>
              <button
                class="px-5 py-3 bg-black text-white mt-5 w-1/2 uppercase tracking-widest font-bold"
                @click="logOut"
              >Logga ut</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Cookies from "js-cookie";
import { getUserFromCookie } from "@/helpers";
import axios from "@nuxtjs/axios";
import Navigation from "~/components/Navigation/Navigation";

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      lunch: {
        week: null,
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
      },
      token: "",
    };
  },
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req);

      if (!user) {
        redirect("/admin");
      }
    } else {
      let user = firebase.auth().currentUser;
      if (!user) {
        redirect("/admin");
      }
    }
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    addLunch() {
      var ref = firebase.database().ref("days");
      ref
        .once("value")
        .then(function (snapshot) {
          let a = snapshot.exists(); // true
          return a;
        })
        .then((a) => {
          if (a) {
            alert("du måste trycka på rensa först");
          } else {
            this.$axios.$post(
              `https://napoli-b522c.firebaseio.com/days.json?auth=${this.token}`,
              this.lunch
            );
          }
        });
    },

    removeLunch() {
      this.$axios
        .$delete(
          `https://napoli-b522c.firebaseio.com/days.json?auth=${this.token}`
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/admin");
        });
    },

    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("logged in" + user.uid);

          this.loggedIn = true;

          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((token) => {
              Cookies.set("access_token", token);
              this.token = token;
            });
        } else {
          console.log("logged out");
          this.loggedIn = false;

          Cookies.remove("access_token");
        }
      });
    },
  },
};
</script>
