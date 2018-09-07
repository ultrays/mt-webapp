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
      name: "indexSwiperNav1",
      data(){
        return {
          items:[
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img1.jpg'),name:'美食'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img2.jpg'),name:'猫眼电影'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img3.jpg'),name:'酒店'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img4.jpg'),name:'休闲娱乐'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img5.jpg'),name:'外卖'},
            {url:'#/ktvlist',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img6.jpg'),name:'KTV'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img7.jpg'),name:'周边游'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img8.jpg'),name:'丽人'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img9.jpg'),name:'小吃快餐'},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/nav/nav1_img10.jpg'),name:'火车票'},
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
