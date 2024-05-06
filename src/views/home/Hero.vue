<template>
  <div class="p-4 xl:p-0 row h-140 xl:h-70vh lg:items-center">
    <div class="left xl:mt-[-50px]">
      <div class="font-[--font-primary] uniestate">
        <span class="uni"> Uni </span>
        <div class="estate__wrapper">
          <div class="e text-[--clr-gray] inline-block rotate-[-29deg]">E</div>
          <span class="state"> state </span>
        </div>
      </div>
    </div>
    <div
      class="right xl:bg-black h-full xl:text-white xl:flex xl:flex-col xl:items-center xl: justify-center"
    >
      <div class="xl:mt-[-50px] hero__info">
        <h2 class="xl:text-5xl">
          Find your new
          <span class="block">Home today!</span>
        </h2>
        <p
          class="text-[--clr-gray] xl:text-white xl-w-80 font-light mt-4 mb-10"
        >
          Unistate is a master real estate developer with  over 28 years of
          experience since 1995 in the UAE.
        </p>

        <RouterLink to="/" class="text-black xl:text-white"
          >Learn more about us
          <div class="i-f7:arrow-up-right"></div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" >
.uniestate {
  font-size: 4.5rem;
  width: 100%;
}
.state {
  font-size: 3.5rem;
}
.estate__wrapper {
  margin-top: -17%;
  margin-left: 20%;
}
@media screen and (min-width: 320px) {
  .uniestate {
    font-size: 4.6rem;
  }
  .state {
    font-size: 4rem;
  }
  .estate__wrapper {
    margin-top: -15%;
    // margin-left: 20%;
  }
}
@media screen and (min-width: 350px) {
  .uniestate {
    font-size: 5rem;
  }
  .state {
    font-size: 4.2rem;
  }
  .estate__wrapper {
    margin-top: -13%;
    margin-left: 18%;
  }
}
@media screen and (min-width: 400px) {
  .uniestate {
    font-size: 7rem;
  }

  .estate__wrapper {
    margin-top: -17%;
    margin-left: 22%;
  }
}
@media screen and (min-width: 450px) {
  .uniestate {
    font-size: 7rem;
  }

  .estate__wrapper {
    margin-top: -16%;
    margin-left: 20%;
  }
}
@media screen and (min-width: 500px) {
  .uniestate {
    font-size: 7.7rem;
    width: fit-content;
  }
  .state {
    font-size: 6.5rem;
  }
  .estate__wrapper {
    margin-top: -72px;
    margin-left: 100px;
  }
}

@media screen and (min-width: 1400px) {
  .hero__info {
    h2 {
      font-size: 5rem;
    }
    p {
      font-size: 1.3rem;
      width: 500px;
    }
  }
  .uniestate {
    font-size: 10rem;
    width: fit-content;
  }
  .state {
    font-size: 8rem;
  }
  .estate__wrapper {
    margin-top: -92px;
    margin-left: 120px;
  }
}
</style>