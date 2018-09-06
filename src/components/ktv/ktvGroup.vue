<template>
  <div class="group">
    <div class="header">
      <span class="group-icon">团</span>
      团购
      <span class="group-count">（<span class="count">5</span>）</span>
    </div>
    <div class="item">
      <div class="item-img">
        <img src="../../assets/yuan/img/ktv/group-item1.png" alt=""/>
      </div>
      <div class="info">
        <div class="tit">周一至周日时段3选1欢唱+小吃饮品套餐</div>
        <div class="item-price">
          <span class="price-now"><b>168</b>元</span>
          <span class="price-market">门市价:<b>552</b>元</span>
          <span class="sale-count">已售<b>2389</b></span>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="item-img">
        <img src="../../assets/yuan/img/ktv/group-item1.png" alt=""/>
      </div>
      <div class="info">
        <div class="tit">周一至周日时段3选1欢唱+小吃饮品套餐</div>
        <div class="item-price">
          <span class="price-now"><b>168</b>元</span>
          <span class="price-market">门市价:<b>552</b>元</span>
          <span class="sale-count">已售<b>2389</b></span>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="item-img">
        <img src="../../assets/yuan/img/ktv/group-item1.png" alt=""/>
      </div>
      <div class="info">
        <div class="tit">周一至周日时段3选1欢唱+小吃饮品套餐</div>
        <div class="item-price">
          <span class="price-now"><b>168</b>元</span>
          <span class="price-market">门市价:<b>552</b>元</span>
          <span class="sale-count">已售<b>2389</b></span>
        </div>
      </div>
    </div>
    <div class="group-other">
      查看其他2条团购
      <span class="icon"><img src="../../assets/yuan/img/ktv/icon-go.jpg" alt=""/></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "groupktvGroup"
    }
</script>

<style lang="scss" scoped>
  .group{
    background: white;
    padding-left: .1rem;
    border-top: 1px solid #ECEAE5;
    border-bottom: 1px solid #ECEAE5;
    .header{
      font-size: .18rem;
      display: flex;
      align-items: center;
      height: .45rem;
      border-bottom: 1px solid #ECE9E4;
      .group-icon{
        display: inline-block;
        background: #06C1AE;
        color: #fff;
        font-size: .12rem;
        padding: .03rem;
        border-radius: .02rem;
        line-height: 1;
        margin-right: .1rem;
      }
      .group-count{
        color: #999999;
      }
    }
    .item{
      display: flex;
      padding: .1rem .1rem .1rem 0;
      border-bottom: 1px solid #EFEDE9;
      .item-img{
        width: .9rem;
        height: .82rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          height: 100%;
        }
      }
      .info{
        flex: 1;
        margin-left: .1rem;
        position: relative;
        .tit{
          color: #666666;
        }
        .item-price{
          font-size: .12rem;
          color: #666666;
          margin-top: .45rem;
          position: relative;
          .price-now{
            font-size: .13rem;
            color: #06C1AE;
            b{
              font-size: .18rem;
              font-weight: normal;
            }
          }
          .price-market{
            b{
              font-weight: normal;
            }
          }
          .sale-count{
            position: absolute;
            right: 0;
            b{
              font-weight: normal;
            }
          }
        }
      }
    }
    .group-other{
      height: .4rem;
      font-size: .14rem;
      line-height: .4rem;
      color: #06C1AE;
      position: relative;
      .icon{
        position: absolute;
        right: .15rem;
        top: calc(50% - .09rem);
        img{
          width: .15rem;
          height: .18rem;
        }
      }
    }
  }
</style>
