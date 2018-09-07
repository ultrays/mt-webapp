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
    }
</script>

<style lang="scss" scoped>
  .listItem{
    margin-top: .1rem;
  }
</style>
