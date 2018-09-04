<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        1111
      </div>
      <div class="swiper-slide">
        2222
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper"
  export default {
      name: "indexSwipper",
      mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })
      }
  }
</script>

<style lang="scss" scoped>
  @import "swiper/dist/css/swiper.css";
  .swiper-container{
    height: 3rem;
    .swiper-wrapper{
      height: 2rem;
      .swiper-slide{
        color: red;
      }
    }
  }
</style>
