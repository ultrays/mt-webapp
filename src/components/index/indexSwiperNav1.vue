<template>
  <nav>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#/ktvlist" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>KTV</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
    <a href="#" class="item">
      <img src="../../assets/yuan/img/index/nav1_img1.jpg" alt=""/>
      <span>美食</span>
    </a>
  </nav>
</template>

<script>
    export default {
        name: "indexSwiperNav1"
    }
</script>

<style lang="scss" scoped>
  nav{
    display: flex;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
    padding: .1rem 0rem .05rem;
    background: pink;
    .item{
      width: .4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 .17rem .2rem;
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
