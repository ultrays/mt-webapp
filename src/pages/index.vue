<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <Swiper></Swiper>
  </div>
</template>

<script>
  import Header from '../components/index/indexHeader'
  import Banner from '../components/index/indexBanner'
  import Swiper from '../components/index/indexSwiper'
  export default {
    name: "index",
    components:{
      Header,
      Banner,
      Swiper
    }
  }
</script>

<style scoped>

</style>
