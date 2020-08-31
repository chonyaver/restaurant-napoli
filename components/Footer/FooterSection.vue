<template>
  <div>
    <footer class="bg-black py-20 text-white">
      <div class="flex justify-center">
        <a
          href="https://www.facebook.com/NapoliRestaurang/"
          target="_blank"
          rel="noopener"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="text-6xl mr-5 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1"
          />
        </a>
        <a
          href="https://www.instagram.com/napoli_restaurang/"
          target="_blank"
          rel="noopener"
        >
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="text-6xl ml-5 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1"
          />
        </a>
      </div>
      <div class="flex justify-center mt-12">
        <nuxt-link to="/kontakt">
          <button
            class=" text-white uppercase tracking-widest py-5 px-8 rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:text-black  btn-grad"
          >
            Öppettider
          </button>
        </nuxt-link>
      </div>

      <div class="flex justify-center mt-20">
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
      </div>
    </footer>
  </div>
</template>

<style scoped>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
}
.btn-grad:hover {
  background-position: right center;
}
</style>
