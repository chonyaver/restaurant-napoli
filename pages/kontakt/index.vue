<template>
  <div>
    <Navigation />
    <div class="flex justify-around items-center py-20 bg-gray-200">
      <div class="flex flex-col w-10/12 md:w-2/4 lg:w-4/12 xl:w-full justify-around xl:flex-row">
        <div class="flex flex-col xl:w-1/4">
          <h1
            class="text-2xl font-bold xl:text-4xl r-2 border-b-2 border-orange-500 text-center"
          >Sommaröppettider</h1>

          <p class="text-xl text-center mt-5">Måndag-Torsdag: 11:00-22:00</p>
          <p class="text-xl text-center">Fredag-Lördag: 11:00-23:00</p>
          <p class="text-xl text-center">Söndag: 11:00-22:00</p>
        </div>
        <div class="flex flex-col xl:w-1/4">
          <h1
            class="text-2xl xl:text-4xl font-bold border-b-2 mt-5 xl:mt-0 border-orange-500 text-center"
          >Vinteröppettider</h1>

          <p class="text-xl text-center mt-5">Måndag-Torsdag: 11:00-21:00</p>
          <p class="text-xl text-center">Fredag-Lördag: 11:00-23:00</p>
          <p class="text-xl text-center">Söndag: 11:00-21:00</p>
        </div>
        <div class="flex flex-col xl:w-1/4">
          <h1
            class="text-2xl xl:text-4xl border-b-2 font-bold border-orange-500 text-center mt-5 xl:mt-0"
          >Kontakt</h1>
          <p class="text-xl text-center mt-5 font-bold">Restaurang Napoli</p>
          <p class="text-center">Östra Storgatan 5,</p>
          <p class="text-center">293 34, Olofström</p>
        </div>
      </div>
    </div>
    <section class="bg-gray-200 pt-0 xl:pt-10 pb-40 flex flex-col items-center">
      <div class="pb-20 flex flex-col items-center">
        <font-awesome-icon :icon="['fas', 'phone']" class="text-6xl" />
        <p class="text-center text-4xl mt-5">0454-917 01</p>
      </div>
      <div class="flex justify-center">
        <a href="https://www.facebook.com/NapoliRestaurang/" target="_blank" rel="noopener">
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="text-6xl mr-5 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1"
          />
        </a>
        <a href="https://www.instagram.com/napoli_restaurang/" target="_blank" rel="noopener">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="text-6xl ml-5 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
    <section class="bg-gray-200 flex justify-center pb-20">
      <div class="bg-gray-100 py-20 w-11/12 px-10 text-2xl shadow-lg xl:w-2/4 xl:px-20">
        <h1 class="text-center mb-5 text-3xl uppercase xl:4xl">Evenemang</h1>
        <p class="text-xl">
          Vi ordnar allt från den lilla festen till studentbjudning, företags
          eller födelsedagsfester. Kom in med dina önskemål så ordnar vi
          resten.
          <br />
          <span class="font-bold text-orange-500">Välkomna önskar Napoli med personal!</span>
        </p>
      </div>
    </section>
    <section class="flex flex-col items-center py-20 xl:py-40 bg-gray-100">
      <font-awesome-icon :icon="['fas', 'map-pin']" class="text-6xl mb-10" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.9917395286407!2d14.520354515650341!3d56.27819158069716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c03a575ed6c9e52!2sNapoli%20Restaurang%20%26%20Pub!5e0!3m2!1ssv!2sse!4v1598354237199!5m2!1ssv!2sse"
        width="90%"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation/Navigation";

export default {
  data() {
    return {
      title: "Napoli Restaurang & Pub Olofström | Kontakta oss",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Napoli Restaurang & Pub Olofström, kontakta oss",
        },
      ],
    };
  },
  components: {
    Navigation,
  },
};
</script>
