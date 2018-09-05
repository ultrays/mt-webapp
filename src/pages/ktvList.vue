<template>
    <div>
      <Header></Header>
      <Banner></Banner>
      <List></List>
      <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/ktvList/ktvListHeader'
    import Banner from '../components/ktvList/ktvListBanner'
    import List from '../components/ktvList/ktvListMain'
    import Footer from '../components/ktvList/ktvListFooter'
    export default {
        name: "ktvList",
        components:{
          Header,
          Banner,
          List,
          Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>
