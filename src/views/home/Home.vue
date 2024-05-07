<template>
  <div class="lg:ml-[10.5%]">
    <Hero />
    <Buy />
    <Rent />
    <Projects />
    <Gallery />
    <Testimonials />
    <FactsAboutUs />
    <ContactUs />
  </div>
</template>

<script setup>
import Hero from "./Hero.vue";
import Buy from "./Buy.vue";
import Rent from "./Rent.vue";
import Projects from "./Projects.vue";
import Gallery from "./Gallery.vue";
import Testimonials from "./Testimonilas.vue";
import FactsAboutUs from "./FactsAboutUs.vue";
import ContactUs from "~/components/contact";
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.left {
  width: 100%;

  h2 {
    text-align: right;
    font-size: 2rem;
    padding-right: 16px;
    text-transform: capitalize;
  }
}
.right {
  margin-top: 1rem;
  width: 100%;
}
.facts__box {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: capitalize;

  h4 {
    font-size: 2rem;
  }

  span {
    color: gray;
    font-weight: lighter;
  }
}
@media screen and (min-width: 1280px) {
  .row {
    flex-direction: row;
    margin-top: 4px;
  }
  .left {
    width: 45.5%;

    h2 {
      text-align: left;
    }
  }
  .right {
    max-width: 57%;
    margin-top: 0;
  }
}
</style>

