<template>
  <nav>
    <a v-for="item in items" :href="item.url" class="item">
      <img :src="item.imgSrc" alt=""/>
      <span>{{item.name}}</span>
    </a>
  </nav>
</template>

<script>
    export default {
      name: "indexSwiperNav2",
      data(){
        return {
          items:[
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img1.jpg'),name:'生活服务'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img2.jpg'),name:'今日新单'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img3.jpg'),name:'足疗/按摩'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img4.jpg'),name:'甜点饮品'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img5.jpg'),name:'母婴亲子'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img6.jpg'),name:'学习培训'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img7.jpg'),name:'结婚'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img8.jpg'),name:'家装'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img9.jpg'),name:'代金券'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav2_img10.jpg'),name:'全部分类'},
          ]
        }
      },
      props:{
        data:{}
      }
    }
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
    padding: .1rem 0rem .05rem;
    background: white;
    .item{
      width: .54rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 .1rem .2rem;
      img{
        width: .4rem;
        margin-bottom: .05rem;
      }
      span{
        color: #666666;
      }
    }
  }
</style>
