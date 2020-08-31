<template>
  <div>
    <Navigation />

    <section
      class="flex flex-col items-center xl:py-20 lg:flex lg:flex-row lg:justify-evenly lg:items-center"
    >
      <img src="~assets/images/lunch.jpg" alt class="w-full lg:w-2/5" />
      <div class="py-20 xl:flex xl:flex-col">
        <h1 class="text-3xl text-center xl:text-6xl">Lunchbuffé</h1>
        <div class="flex justify-center items-center text-2xl">
          <h2 class="text-xl mr-2">Måndag-fredag</h2>
          <span>11.00-14:00</span>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-center mt-2 text-6xl text-red-500">90:-</p>
          <font-awesome-icon
            :icon="['fas', 'arrow-down']"
            class="text-6xl mt-5 mr-8 cursor-pointer"
            @click="goToLunch"
          />
        </div>
      </div>
    </section>
    <section
      class="flex flex-col items-center bg-orange-100 pt-20 pb-40 xl:flex xl:flex-row xl:justify-between xl:items-center"
    >
      <div class="w-11/12 xl:ml-20 xl:w-2/5">
        <p
          class="mb-5 text-3xl text-center uppercase tracking-widest xl:text-6xl lunch"
        >
          vecka: {{ object.week }}
        </p>
        <div
          class="border-b-2 border-gray-800 border-t-2 py-5 px-5 shadow-lg bg-white"
        >
          <p class="text-2xl xl:text-4xl uppercase font-bold">Måndag:</p>
          <p class="text-xl xl:text-2xl">{{ object.monday }}</p>
        </div>
        <div
          class="mt-5 border-b-2 border-gray-800 border-t-2 py-5 px-5 shadow-lg bg-white"
        >
          <p class="text-2xl xl:text-4xl uppercase font-bold">Tisdag:</p>
          <p class="text-xl xl:text-2xl">{{ object.tuesday }}</p>
        </div>
        <div
          class="mt-5 border-b-2 border-gray-800 border-t-2 py-5 px-5 shadow-lg bg-white"
        >
          <p class="text-2xl xl:text-4xl uppercase font-bold">Onsdag:</p>
          <p class="text-xl xl:text-2xl">{{ object.wednesday }}</p>
        </div>
        <div
          class="mt-5 border-b-2 border-gray-800 border-t-2 py-5 px-5 shadow-lg bg-white"
        >
          <p class="text-2xl xl:text-4xl uppercase font-bold">Torsdag:</p>
          <p class="text-xl xl:text-2xl">{{ object.thursday }}</p>
        </div>
        <div
          class="mt-5 border-b-2 border-gray-800 border-t-2 py-5 px-5 shadow-lg bg-white"
        >
          <p class="text-2xl xl:text-4xl uppercase font-bold">Fredag:</p>
          <p class="text-xl xl:text-2xl">{{ object.friday }}</p>
        </div>
      </div>
      <img
        src="~assets/images/buffet.jpg"
        alt
        class="w-11/12 mt-20 lg:w-6/12 xl:w-2/5 shadow-lg bg-white"
      />
    </section>
    <FooterSection />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation/Navigation";
import jump from "jump.js";
import axios from "@nuxtjs/axios";
import FooterSection from "~/components/Footer/FooterSection";
export default {
  data() {
    return {
      results: [],
      object: {}
    };
  },
  components: {
    Navigation,
    jump,
    FooterSection
  },
  mounted() {
    let lunchData = this.$axios
      .$get("https://napoli-b522c.firebaseio.com/days.json")
      .then(res => {
        const fetchedResult = [];
        for (let key in res) {
          fetchedResult.unshift({
            ...res[key],
            id: key
          });
        }
        this.results = fetchedResult;
        console.log(this.results[0]);
        this.object = this.results[0];
      })

      .catch(error => console.log(error));
  },
  methods: {
    goToLunch() {
      jump(".lunch");
    }
  }
};
</script>
