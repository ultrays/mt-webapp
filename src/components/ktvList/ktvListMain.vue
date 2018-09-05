<template>
    <div class="list">
      <Selector></Selector>
      <ListItem class="listItem"></ListItem>
      <Page></Page>
    </div>
</template>

<script>
    import Selector from './ktvListSelector'
    import ListItem from './ktvListItem'
    import Page from './ktvListPage'
    export default {
      name: "ktvListMain",
      components:{
        Selector,
        ListItem,
        Page
      }
      // data(){
      //   return{
      //     a:false
      //   }
      // },
      // methods:{
      //   func(){
      //     this.a=!this.a;
      //   }
      // }
    }
</script>

<style lang="scss" scoped>
  .listItem{
    margin-top: .1rem;
  }
</style>


<!--<div>-->
  <!--<div1 @click="func"></div1>-->
  <!--<div1></div1>-->
  <!--<div1></div1>-->
  <!--<div1></div1>-->

  <!--<box v-show="a"></box>-->
  <!--<box></box>-->
  <!--<box></box>-->
  <!--<box></box>-->

<!--</div>-->
