<template>
    <div>
      <Header></Header>
      <Banner></Banner>
      <Location></Location>
      <Reserve class="reserve"></Reserve>
      <Group class="group"></Group>
      <Evaluate class="evaluate"></Evaluate>
    </div>
</template>

<script>
    import Header from '../components/ktv/ktvHeader'
    import Banner from '../components/ktv/ktvBanner'
    import Location from '../components/ktv/ktvLocation'
    import Reserve from '../components/ktv/ktvReserve'
    import Group from '../components/ktv/ktvGroup'
    import Evaluate from "../components/ktv/ktvEvaluate";
    export default {
        name: "ktv",
        components:{
          Header,
          Banner,
          Location,
          Reserve,
          Group,
          Evaluate
        }
    }
</script>

<style lang="scss" scoped>
  .reserve{
    margin-top: .1rem;
  }
  .group{
    margin-top: .1rem;
  }
  .evaluate{
    margin-top: .1rem;
  }
</style>
