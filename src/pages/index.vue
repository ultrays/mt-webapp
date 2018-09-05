<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <Swiper class="swiper"></Swiper>
    <Intro></Intro>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/index/indexHeader'
  import Banner from '../components/index/indexBanner'
  import Swiper from '../components/index/indexSwiper'
  import Intro from '../components/index/indexIntro'
  import Footer from '../components/index/indexFooter'
  export default {
    name: "index",
    components:{
      Header,
      Banner,
      Swiper,
      Intro,
      Footer
    }
  }
</script>

<style scoped>
  .swiper{
    margin-bottom: .1rem;
  }
</style>
