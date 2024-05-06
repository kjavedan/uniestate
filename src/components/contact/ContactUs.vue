<template>
  <div class="row">
    <div class="left">
      <h2>contact us</h2>
    </div>
    <div class="right">
      <div class="grid grid-cols-4 gap-1 h-40">
        <div class="social__box">
          <div class="i-ic:twotone-whatsapp w-3em h-3em"></div>
          <span>Whatsapp</span>
        </div>
        <div class="social__box">
          <div class="i-line-md:email w-3em h-3em"></div>
          <span>Email</span>
        </div>
        <div class="social__box">
          <div class="i-carbon:phone-filled w-3em h-3em"></div>
          <span>Call</span>
        </div>
        <div class="social__box">
          <div class="i-material-symbols:video-call w-3em h-3em"></div>
          <span>Meeting</span>
        </div>
      </div>

      <div class="bg-black text-white mt-1 xl:flex xl:items-start px-4 py-12">
        <div class="left-column xl:w-[50%]">
          <div class="contact__box">
            <h2>LINKS</h2>

            <ul class="mt-4 flex flex-col gap-1 links">
              <li>buy</li>
              <li>rent</li>
              <li>Home</li>
              <li>Projects</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="contact__box">
            <h2>FOLLOW US</h2>
            <div class="flex items-center gap-2 mt-4">
              <div class="i-et:facebook w-2.5em h-2.5em"></div>
              <div class="i-et:linkedin w-2.5em h-2.5em"></div>
              <div class="i-arcticons:youtube-music w-2.8em h-2.8em"></div>
              <div class="i-teenyicons:instagram-outline w-2.3em h-2.3em"></div>
              <div class="i-pajamas:twitter w-2.3em h-2.3em"></div>
            </div>
          </div>
        </div>

        <div class="right-column xl:w-[50%]">
          <div class="contact__box">
            <h2>REACH OUT</h2>
            <ul class="mt-4">
              <li>
                P.O. Box 4373, Uniestate Building, Oman Street Al Nakheel Ras Al
                Khaimah, UAE
              </li>
              <li class="mt-3">TELEPHONE : 800 776 776</li>
              <li class="mt-1">EMAIL : info@uniestate.com</li>
            </ul>
          </div>
          <div class="contact__box">
            <h2>
              <img
                src="../../assets/images/logo.png"
                alt="logo"
                class="w-[70%]"
              />
            </h2>
            <ul>
              <li>We build real homes</li>
              <li class="mt-1">© 2024 uniestate.com. All Rights Reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.social__box {
  width: 100%;
  height: 100%;
  color: white;
  background: black;
  padding: 8px;
  padding-top: 50px;
  text-align: right;
  span {
    display: block;
    font-family: var(--font-primary);
    font-size: 12px;
  }
}

.contact__box {
  padding: 1rem;
}

.links {
  li {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
@media screen and (min-width: 380px) {
  .social__box {
    span {
      font-size: 1rem;
    }
  }
}
@media screen and (min-width: 1280px) {
  .social__box {
    padding-top: 65px;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 8px;
    span {
      display: inline;
      width: fit-content;
    }
  }
  .contact__box {
    padding: 2rem;
  }
}
</style>