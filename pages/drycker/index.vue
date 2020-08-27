<template>
  <div>
    <Navigation />
    <section>
      <div
        class="flex flex-col items-center justify-center w-full mt-20 text-black pb-10"
      >
        <img src="~assets/images/logo.png" alt />
        <!--   <h1 class="xl:text-6xl">Napoli | Olofström</h1>
        <h2 class="xl:text-4xl">Pizzeria | Restaurang</h2>
        <h3 class="xl:text-4xl">Bar | Café | Pub</h3>-->
        <vue-typed-js
          class="mt-10"
          :strings="['pizzeria', 'pub', 'bar', 'café', 'restaurang']"
          :typeSpeed="100"
          :backSpeed="50"
          :backDelay="1000"
        >
          <h2 class="text-2xl md:text-4xl xl:text-6xl text-center">
            <span
              class="text-3xl md:text-6xl typing font-bold uppercase text-orange-600"
            ></span>
            <br />Napoli | Olofström
          </h2>
        </vue-typed-js>
      </div>
    </section>
    <section>
      <swiper class="swiper mt-10" :options="swiperOption">
        <swiper-slide class="slide-1">
          <div
            class="flex flex-col justify-center items-center text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToWine">Vin</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-2">
          <div
            class="flex justify-center items-center text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer " @click.passive="goToBeer">Öl</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-3">
          <div
            class="flex justify-center items-center text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToCider">Cider</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-4">
          <div
            class="flex justify-center items-center text-4xl xl:text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToOther">
              Övriga drycker
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-5">
          <div
            class="flex justify-center items-center text-4xl xl:text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToDesert">Efterrätt</p>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
    <section class="flex justify-around flex-wrap items-stretch mt-20 pb-20">
      <div
        class="w-11/12 border-solid border-2 border-orange-500 pl-5 py-20 shadow-2xl xl:w-5/12 xl:px-10"
      >
        <p class="text-3xl xl:text-4xl text-center font-bold mb-5 mr-5 wine">
          Husets vin
        </p>

        <div class="flex flex-col">
          <div class="flex flex-col">
            <div class="flex justify-between items-end">
              <div class="flex flex-col">
                <p class="text-xl font-bold mt-5">Rött/vitt</p>
              </div>
              <p class="text-red-600 font-bold text-2xl mr-5">70:-</p>
            </div>
            <div class="flex justify-between items-end">
              <div class="flex flex-col">
                <p class="text-xl font-bold mt-5">Flaska</p>
              </div>
              <p class="text-red-600 font-bold text-2xl mr-5">220:-</p>
            </div>
          </div>

          <p class="text-3xl xl:text-4xl text-center font-bold py-10 mr-5 beer">
            Öl
          </p>

          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Eriksberg</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">50cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">70:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Falcon</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">50cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">70:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Tuborg</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">50cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">70:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Karhu</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">50cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">70:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Brooklyn EIPA</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">40cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">70:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Stor Stark</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">40cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">60:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Carlsberg Hof</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">33cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">60:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Guiness</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">33cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">60:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Staropramen</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">33cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">60:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Budweiser</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">33cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">60:-</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-xl font-bold mt-5">Corona</p>

            <div class="flex justify-end mt-5 font-bold border-b-2">
              <div class="flex flex-col">
                <p class="text-center text-red-600 mr-5">33cl</p>
              </div>
              <div class="flex flex-col pb-2">
                <p class="text-center text-red-600 mr-5">60:-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-11/12 mt-10 border-solid border-2 border-orange-500 pl-5 py-20 shadow-2xl xl:w-5/12 xl:px-10 xl:mt-0"
      >
        <div class="flex flex-col">
          <p class="text-3xl xl:text-4xl text-center font-bold  mr-5 cider">
            Cider
          </p>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Cactus Lime</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">60:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Vattenmelon</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">60:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Mandarin Chili</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">60:-</p>
          </div>

          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Raspberry</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">60:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Somersby Pear</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">60:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Somersby Blackberry</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">60:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Smirnoff Ice</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">60:-</p>
          </div>
          <p
            class="text-3xl xl:text-4xl text-center font-bold py-10 mr-5 other"
          >
            Övriga drycker
          </p>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Alkoholfri Öl</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">50:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Lättöl</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">30:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Energy Drink</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">30:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Kaffe/Te</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">20:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Läsk</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">20:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Mjölk</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">20:-</p>
          </div>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Isvatten</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">5:-</p>
          </div>
          <p
            class="text-3xl xl:text-4xl text-center font-bold py-10 mr-5 desert"
          >
            Efterrätt
          </p>
          <div class="flex justify-between items-end">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Husets Glass</p>
            </div>
            <p class="text-red-600 font-bold text-2xl mr-5">40:-</p>
          </div>
        </div>
        <div class="flex justify-center items-center mt-32">
          <img src="~assets/images/logo.png" alt />
        </div>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation/Navigation";
import { VueTypedJs } from "vue-typed-js";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import jump from "jump.js";
import FooterSection from "~/components/Footer/FooterSection";
export default {
  components: {
    Navigation,
    VueTypedJs,
    Swiper,
    SwiperSlide,
    jump,
    FooterSection
  },
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "2",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
        },
        breakpoints: {
          1280: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  methods: {
    goToWine() {
      jump(".wine");
    },
    goToBeer() {
      jump(".beer");
    },
    goToCider() {
      jump(".cider");
    },
    goToOther() {
      jump(".other");
    },
    goToDesert() {
      jump(".desert");
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 50vh;

  .swiper-slide {
    background-position: center;
    background-size: cover;

    &.slide-1 {
      background-image: url("~assets/images/wine.jpg");
    }
    &.slide-2 {
      background-image: url("~assets/images/beer.jpg");
    }
    &.slide-3 {
      background-image: url("~assets/images/cider.jpg");
    }
    &.slide-4 {
      background-image: url("~assets/images/coffee.jpg");
    }
    &.slide-5 {
      background-image: url("~assets/images/desert.jpg");
    }
  }
}
</style>
