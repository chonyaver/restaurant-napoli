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
            <p class="cursor-pointer" @click.passive="goToPizza">Pizza</p>
            <p class="text-xl px-3 text-center md:text-2xl">
              Vi har även glutenfria pizzor
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-2">
          <div
            class="flex justify-center items-center text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToKebab">Kebab</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-3">
          <div
            class="flex justify-center items-center text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToSalad">Sallad</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-4">
          <div
            class="flex justify-center items-center text-4xl xl:text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToPotatoe">
              Bakad potatis
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-5">
          <div
            class="flex justify-center items-center text-4xl xl:text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToHamburger">
              Hamburgare
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-6">
          <div
            class="flex justify-center items-center text-4xl xl:text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToSteak">
              Kött &#38; fiskrätter
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-7">
          <div
            class="flex justify-center items-center text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToPlank">Planka</p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide-8">
          <div
            class="flex justify-center items-center text-5xl text-white bg-black h-full w-full bg-opacity-50 hover:bg-opacity-75 transition duration-500 ease-in-out"
          >
            <p class="cursor-pointer" @click.passive="goToPasta">Pasta</p>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="mt-32 flex flex-col items-center">
        <p class="text-4xl text-center uppercase tracking-widest md:text-5xl">
          Beställ på:
        </p>
        <p class="text-2xl font-bold">0454-917 01</p>
      </div>
    </section>
    <section class="my-20 xl:my-40">
      <div
        class="flex flex-col items-center xl:flex xl:justify-around xl:flex-row xl:flex-wrap xl:h-full xl:items-stretch"
      >
        <!--FIRST BOX-->
        <div
          class="w-11/12 border-solid border-2 border-orange-500 pl-5 py-20 shadow-2xl xl:w-5/12 xl:px-10 pizza"
        >
          <p class="text-3xl xl:text-4xl text-center font-bold mb-5 mr-5">
            Pizza
          </p>

          <p class="md:text-2xl xl:text-3xl">
            Prisklass 1 - 80:- | Familjepizza 190:-
          </p>

          <div class="flex flex-col">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">1. Margarita</p>
              <p>Tomat, ost</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">2. Al Funghi</p>
              <p>Champinjoner</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">3. Vesuvio</p>
              <p>Skinka</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">4. Calzone</p>
              <p>Skinka (Inbakad)</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">5. Salami</p>
              <p>Lök, salami</p>
            </div>

            <p class="md:text-2xl mt-5 xl:mt-10 xl:text-3xl">
              Prisklass 2 - 85:- | Familjepizza 200:-
            </p>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">6. Bacon</p>
              <p>Lök, bacon</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">7. Hawaii</p>
              <p>Skinka, ananas</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">8. Capricciosa</p>
              <p>Skinka, champinjoner</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">9. Bolognese</p>
              <p>Köttfärsås (Hemlagad)</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">10. Calzone Bolognese</p>
              <p>Köttfärsås (Inbakad)</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">11. Bussola</p>
              <p>Skinka, räkor</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">12. Tonfisk</p>
              <p>Lök, tonfisk</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">13. Bananpizza</p>
              <p>Skinka, banan, jordnötter, curry</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">14. Africana</p>
              <p>Banana, ananas, curry</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">15. Naxos</p>
              <p>Skinka, köttfärsås, paprika, tabasco</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">16. Primavera</p>
              <p>Bacon, lök, ägg</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">17. Rimini</p>
              <p>Skinka, köttfärsås, ananas</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">18. Näsum-Jämshög</p>
              <p>Skinka, champinjoner, knaperstekt bacon</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">19. Holje</p>
              <p>Skinka, champinjoner, ananas</p>
            </div>
            <p class="md:text-2xl mt-5 xl:mt-10 xl:text-3xl">
              Prisklass 3 - 90:- | Familjepizza 210:-
            </p>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">20. Calzone Special</p>
              <p>Skinka, champinjoner, räkor (Inbakade)</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">21. Hawaii special</p>
              <p>Skinka, ananas, räkor</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">22. Pescatore</p>
              <p>Räkor, tonfisk</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">23. Marinara</p>
              <p>Räkor, musslor</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">24. Caruso</p>
              <p>Skinka, champinjoner, räkor</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">25. Lång John</p>
              <p>Skinka, tonfisk, räkor</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">26. Vegeta</p>
              <p>Champinjoner, lök, paprika, oliver, kronärtskocka</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">27. Cleopatra</p>
              <p>Köttfärs, paprika, gorgonzola</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">28. Jamaica</p>
              <p>Skinka, bacon, champinjoner, lök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">29. Print</p>
              <p>Salami, paprika, fetaost, oliver</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">30. Azteca</p>
              <p>Skinka, jalapeno, tacosås, tacokryddmix, vitlök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">31. Quattro Formaggi</p>
              <p>Fårost, mozzarella, gorgonzola</p>
            </div>

            <div class="flex justify-center">
              <img
                src="~assets/images/pizza.jpg"
                class="w-11/12 mr-5 mt-20 xl:mt-40 shadow-xl xl:max-w-sm"
                alt
              />
            </div>
            <div class="flex justify-center">
              <div
                class="flex flex-col bg-orange-500 w-11/12 p-5 text-center text-white rounded-lg shadow-xl mt-20 mr-5 xl:w-3/4 xl:mt-64"
              >
                <p class="text-xl">Extra tillbehör</p>
                <p class="text-sm xl:text-md">
                  Jordnötter, sås eller sallad 10:- | Kött 20:-
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--SECOND BOX-->
        <div
          class="w-11/12 border-solid border-2 border-orange-500 pl-5 py-20 mt-10 shadow-2xl xl:w-5/12 xl:px-10 pizza xl:mt-0"
        >
          <p class="text-3xl mr-5 xl:text-4xl text-center font-bold mb-5">
            Pizza
          </p>
          <p class="md:text-2xl xl:text-3xl">
            Prisklass 4 - 95:- | Familjepizza 220:-
          </p>
          <div class="flex flex-col">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">32. Havets Special</p>
              <p>Räkor, tonfisk, krabba, musslor</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">33. Venedig</p>
              <p>Kyckling, ananas, banan, jordnötter, curry</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">34. Ciao Ciao</p>
              <p>
                Champinjoner, fläskfilé/oxfilé, vitlök, bearnaisesås
                (Halvinbakad)
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">35. Gorgonzola</p>
              <p>Lök, oxfilé, gorgonzola</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">36. Volvospecial</p>
              <p>Oxfilé, fläskfilé, jalapeno, bearnaisesås</p>
            </div>

            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">37. OIBK</p>
              <p>Fläskfilé, sparris, bearnaisesås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">38. Steelers</p>
              <p>Oxfilé/fläskfilé, champinjoner, gorgonzola, sparris</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">39. Mozart</p>
              <p>Oxfilé, lök, champinjoner, bearnaisesås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">40. Roma</p>
              <p>Skinka, bacon, champinjoner, lök, köttfärsås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">41. Romeo</p>
              <p>Skinka, oxfilé, bearnaisesås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">42. Kycklingpizza</p>
              <p>Kyckling, färsk tomat, curry</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">43. Mama Mia</p>
              <p>Skinka, bacon, räkor, champinjoner, lök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">44. Triangeln</p>
              <p>Oxfilé, skinka, gyros/kebab, kebabsås, bearnaise</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">45. Broscheet</p>
              <p>
                Oxfilé, lök, champinjoner, paprika, tomater, bearnaisesås
                (Halvinbakad)
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">46. Mexicana</p>
              <p>
                Köttfärsås, tacokryddmix/sås, vitlök, lök, champinjoner,
                jalapeno
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">47. Quatro Stagioni</p>
              <p>Skinka, champinjoner, räkor, musslor, kronärtskocka</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">48. Gudfadern</p>
              <p>Skinka, tonfisk, kapris, paprika, cayennepeppar</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">49. Disco</p>
              <p>Skinka, champinjoner, räkor (Dubbelinbakad)</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">50. Tefat</p>
              <p>Skinka, köttfärsås, paprika, vitlök (Dubbelinbakad)</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">51. Blekinge</p>
              <p>Skinka, kyckling, ananas, jordnötter, curry</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">52. Oredslunds Special</p>
              <p>Skinka, salami, bacon, vitlöksost</p>
            </div>
            <p class="text-2xl mt-10 xl:text-3xl">Kebabpizzor</p>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5 border-t-2 pt-2">
                1. Kebabpizza
              </p>
              <p>Kebab eller gyros, valfri sås</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">95:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">210:-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">2. Calzone Kebab</p>
              <p>Skinka, kebab eller gyros, lök (Inbakad)</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">95:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">3. Vikingpizza</p>
              <p>Kebabkött/gyros, skinka, lök, starkt kryddad, valfri sås</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">95:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">210:-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">4. Vikingbåt</p>
              <p>Kebabkött/gyros, skinka, lök, valfri sås (Halvinbakad)</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">95:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">5. Neptun</p>
              <p>Kebabkött/gyros, pommes, valfri sås</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">100:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">220:-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">6. Kebab Special</p>
              <p>
                Kebab/gyros, isbergssallad, tomater, gurska, lök, feferoni,
                valfri sås
              </p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">100:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">220:-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">7. Bagaren Special</p>
              <p>Kebab/gyros, champinjoner, lök, vitlöksost</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">100:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">220:-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">8. Kebab Super</p>
              <p>
                Kebabkött/gyros, pommes, isbergssallad, tomater, gurka, lök,
                feferoni, valfri sås
              </p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">110:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">230:-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">9. Mexikansk Kebabpizza</p>
              <p>Svamp, lök, jalapeno, gyros, vitlök, tacosås, tacokryddmix</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">Vanlig</p>
                  <p class="text-center text-red-600">95:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">Familjepizza</p>
                  <p class="text-center text-red-600">210:-</p>
                </div>
              </div>
              <div class="flex justify-center">
                <div
                  class="flex flex-col bg-orange-500 w-11/12 p-5 text-center text-white rounded-lg shadow-xl mt-20 mr-5 xl:w-3/4 xl:mt-40"
                >
                  <p class="text-xl">Extra tillbehör</p>
                  <p class="text-sm xl:text-md">
                    Jordnötter, sås eller sallad 10:- | Kött 20:-
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--THIRD BOX-->
        <div
          class="w-11/12 border-solid border-2 border-orange-500 pl-5 py-20 mt-10 shadow-2xl xl:w-5/12 xl:px-10 pizza"
        >
          <p class="text-3xl mr-5 xl:text-4xl text-center font-bold mb-5">
            Specialpizzor
          </p>
          <p class="md:text-2xl xl:text-3xl mr-5">
            Vanlig 100:- | Familjepizza 230:-
          </p>
          <p class="xl:text-2xl mr-5">Med mozzarellaost</p>
          <div class="flex flex-col">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">53. Olofström</p>
              <p>Oxfilé, lök, färska tomater, kantareller, bearnaisesås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">54. Grekisk pizza</p>
              <p>
                Oxfilé, fetaost, soltorkade tomater, oliver, ruccola, nymalen
                peppar
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">55. Capricciosa Super</p>
              <p>Skinka, champinjoner, räkor, oxfilé, bearnaisesås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">56. Kyckling Special</p>
              <p>
                Marinerad kyckling, stekt zucchini, ruccola, färsk paprika,
                färska tomater
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">57. Napoli Special</p>
              <p>
                Skinka, champinjoner, bacon, lök, paprika, köttfärsås, tabasco,
                vitlök
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">58. Acapulco</p>
              <p>
                Oxfilé, tacokryddmix/sås, vitlök, lök, champinjoner, jalapeno
              </p>
            </div>
            <p class="text-3xl xl:text-4xl text-center font-bold mt-10 mr-5">
              Plankpizzor
            </p>
            <p class="mt-5 md:text-2xl xl:text-3xl">
              Vanlig 100:- | Familjepizza 230:-
            </p>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Plankpizza 1.</p>
              <p>Potatismos, oxfilé, lök, färsk tomat, bearnaise</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Plankpizza 2.</p>
              <p>
                Potatismos, kebabkött, lök, paprika, champinjoner (Valfri sås)
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">Plankpizza 3.</p>
              <p>
                Oxfilé, potatismos, bacon, färsk tomat, persiljesmör med stark
                krydda
              </p>
            </div>
            <p class="text-center font-bold mt-10 mr-5 xl:text-4xl">
              American Pan Pizza
            </p>
            <p class="md:text-2xl xl:text-3xl text-center mr-5">
              Small 100:- (1 pers) | Medium 140:- (1-2 pers) | Large 220:- (2-4
              pers)
            </p>
            <p class="xl:text-2xl text-center mr-5">
              Tomat, mozarella och ost ingår på alla pizzor
            </p>

            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">1. Miami</p>
              <p>Skinka, svamp, tomater, ananas</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">2. Las Vegas</p>
              <p>Skinka, salami, tomater, paprika, svamp, feferoni, oliver</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">3. New York</p>
              <p>Köttfärs, paprika, tomater, svamp, lök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">4. Dallas</p>
              <p>Kebabkött, svamp, tomater, lök, feferoni, valfri sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">5. Arizona</p>
              <p>Skinka, svamp, paprika, salami, köttfärs</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">6. Detroit</p>
              <p>Skinka, svamp, räkor, bacon</p>
            </div>

            <div class="flex justify-center mb-20">
              <div
                class="flex flex-col bg-orange-500 w-11/12 p-5 text-center text-white rounded-lg shadow-xl mt-20 mr-5 xl:w-3/4"
              >
                <p class="text-xl">Extra tillbehör</p>
                <p class="text-sm xl:text-md">
                  Jordnötter, sås eller sallad 10:- | Kött 20:-
                </p>
              </div>
            </div>

            <p class="text-3xl xl:text-4xl text-center font-bold salad mr-5">
              Sallader
            </p>
            <p class="xl:text-2xl text-center mr-5">
              Nybakad bröd, isbergssallad, tomat och gurka ingår
            </p>
            <p class="text-2xl xl:text-3xl text-center">95:-</p>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">1. Grekisk sallad</p>
              <p>Fetaost, oliver, färsk paprika, lök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">2. Tonfisksallad</p>
              <p>Tonfisk, majs, citron, lök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">3. Kebabsallad</p>
              <p>Kebabkött, feferoni, lök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">4. Kycklingsallad</p>
              <p>Kyckling, majs, ananas</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">5. Räksallad</p>
              <p>Räkor, citron, lök, majs, ägg</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">6. Skinkostsallad</p>
              <p>Skinka, ost, majs, ananas, ägg</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">7. Västkustsallad</p>
              <p>Krabba, musslor, räkor, citron, lök</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">8. Tacosallad</p>
              <p>Tacofärs, tacochips, lök, ost, majs, paprika</p>
            </div>
            <p
              class="text-3xl xl:text-4xl text-center font-bold mt-10 kebab mr-5"
            >
              Kebab, kyckling, falafel &#38; taco
            </p>
            <p class="xl:text-2xl text-center mr-5">
              Tomat, lök och gurka ingår
            </p>
            <p class="text-2xl xl:text-3xl text-center mr-5">95:-</p>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">1. Kebab med bröd</p>
              <p>Nybakat bröd, kebabkött, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">2. Kebabrulle</p>
              <p>Nybakat bröd, kebabkött, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">3. Kebabtallrik</p>
              <p>Kebabkött, pommes, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">4. Kyckling med bröd</p>
              <p>Nybakat bröd, kyckling, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">5. Kycklingrulle</p>
              <p>Nybakat bröd, kyckling, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">6. Kycklingtallrik</p>
              <p>Kyckling, pommes, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">7. Falafel med bröd</p>
              <p>Nybakat bröd, falafel, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">8. Falafelrulle</p>
              <p>Nybakat bröd, falafel, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">9. Falafeltallrik</p>
              <p>Falafel, pommes, sallad, sås</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">10. Tacorulle</p>
              <p>Tacofärs, tacochips, tacosås, majs, sås</p>
            </div>
          </div>
        </div>
        <!--FOURTH BOX-->
        <div
          class="w-11/12 border-solid border-2 border-orange-500 pl-5 py-20 mt-10 shadow-2xl xl:w-5/12 xl:px-10 pizza xl:mt-10"
        >
          <p class="text-3xl xl:text-4xl text-center font-bold potatoe mr-5">
            Bakad Potatis
          </p>
          <p class="text-2xl xl:text-3xl text-center mr-5">95:-</p>
          <div class="flex flex-col">
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">1. Skinka</p>
              <p>Skinka, isbergssallad, tomat, gurka, färsk paprika</p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">2. Räkor</p>
              <p>
                Räkor, citron, isbergssallad, tomat, gurka, färsk paprika, majs
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">3. Kyckling</p>
              <p>
                Kyckling, isbergssallad, tomat, gurka, ananas, färsk paprika
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">4. Tonfisk</p>
              <p>Tonfisk, isbergssallad, tomat, gurka, citron, färsk paprika</p>
            </div>
            <p
              class="text-3xl xl:text-4xl text-center font-bold mb-5 mt-10 hamburger mr-5"
            >
              Hamburgare
            </p>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5 border-t-2 pt-2">
                1. Hamburgare med bröd
              </p>
              <p>Sallad, lök, dressing, tomat</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">90gr</p>
                  <p class="text-center text-red-600">65:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">150gr</p>
                  <p class="text-right text-red-600 mr-5">75:-</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-xl font-bold mt-5">2. Hamburgare med pommes</p>
              <p>Sallad, lök, ost, dressing, tomat</p>
              <div class="flex justify-end mt-5 font-bold border-b-2">
                <div class="flex flex-col">
                  <p class="mr-5 text-red-600">90gr</p>
                  <p class="text-center text-red-600">75:-</p>
                </div>
                <div class="flex flex-col pb-2">
                  <p class="text-red-600 mr-5">150gr</p>
                  <p class="text-right text-red-600 mr-5">85:-</p>
                </div>
              </div>
            </div>
            <p
              class="text-3xl xl:text-4xl text-center font-bold mt-10 steak mr-5"
            >
              Kött &#38; Fiskrätter
            </p>
            <p class="xl:text-2xl text-center mr-5">
              Välj mellan kokt, stekt potatis eller pommes
            </p>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">1. Oxfilé</p>
                  <p class="w-11/12">
                    Purjolöksspäckad med rödvinssås och smörslungade grönsaker
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">239:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">2. Black &#38; White</p>
                  <p class="w-11/12">
                    Oxfilé, fläskfilé, bearnaisesås, rödvinssås, wokade
                    grönsaker
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">239:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">3. Fläskfilé Oskar</p>
                  <p class="w-11/12">
                    Med räkor, sparris, bearnaisesås, och wokade grönsaker
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">239:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">4. Mixed Grill</p>
                  <p class="w-11/12">
                    Oxfilé och fläskfilé med vitlökssås och wokade grönsaker
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">239:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">5. Löfbiff</p>
                  <p class="w-11/12">Med persiljesmör och wokade grönsaker</p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">169:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">6. Snitzel</p>
                  <p class="w-11/12">
                    Med brunsås/bearnaise och wokade grönsaker
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">169:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">7. Rödspätta</p>
                  <p class="w-11/12">Med grönsaker och remouladsås</p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">169:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">8. Laxkotlett</p>
                  <p class="w-11/12">Med hollandaisesås toppad med räkor</p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">189:-</p>
              </div>
            </div>
            <p
              class="text-3xl xl:text-4xl text-center font-bold mt-10 plank mr-5"
            >
              Planka
            </p>

            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">1. Oxfilé på planka</p>
                  <p class="w-11/12">
                    Med potatismos, gorgonzolasås och wokade grönsaker
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">239:-</p>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">2. Fläskfilé på planka</p>
                  <p class="w-11/12">
                    med potatismos, bearnaisesås och wokade grönsaker
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">239:-</p>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">3. Lax på planka</p>
                  <p class="w-11/12">
                    Med potatismos, och vitvinssås toppad med havets läckerheter
                  </p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">239:-</p>
              </div>
            </div>

            <p
              class="text-3xl xl:text-4xl text-center font-bold pasta mt-10 mr-5"
            >
              Pasta
            </p>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">1. Fläskfilé</p>
                  <p>Med svampsås</p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">119:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">2. Kyckling</p>
                  <p>Med ost och baconsås</p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">119:-</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex justify-between items-end">
                <div class="flex flex-col">
                  <p class="text-xl font-bold mt-5">3. Bolognese</p>
                  <p>Köttfärsås</p>
                </div>
                <p class="text-red-600 font-bold text-2xl mr-5">99:-</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-40">
            <img
              src="~assets/images/guy-eating.jpg"
              alt="Stek"
              class="w-11/12 mr-5 xl:max-w-xl shadow-2xl xl:mt-10"
            />
          </div>
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
    goToPizza() {
      jump(".pizza");
    },
    goToKebab() {
      jump(".kebab");
    },
    goToSalad() {
      jump(".salad");
    },
    goToPotatoe() {
      jump(".potatoe");
    },
    goToHamburger() {
      jump(".hamburger");
    },
    goToSteak() {
      jump(".steak");
    },
    goToPlank() {
      jump(".plank");
    },
    goToPasta() {
      jump(".pasta");
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
      background-image: url("~assets/images/hero.jpg");
    }
    &.slide-2 {
      background-image: url("~assets/images/kebab.jpg");
    }
    &.slide-3 {
      background-image: url("~assets/images/salad.jpg");
    }
    &.slide-4 {
      background-image: url("~assets/images/potato.jpg");
    }
    &.slide-5 {
      background-image: url("~assets/images/hamburger.jpg");
    }
    &.slide-6 {
      background-image: url("~assets/images/steak.jpg");
    }
    &.slide-7 {
      background-image: url("~assets/images/plank.jpg");
    }
    &.slide-8 {
      background-image: url("~assets/images/pasta.jpg");
    }
  }
}
</style>
