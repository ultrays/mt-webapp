<template>
  <div class="list">
    <div v-for="i in item" class="item">
      <div class="item-img">
        <img :src="i.imgSrc" alt=""/>
      </div>
      <div class="item-main">
        <div class="item-name">{{i.name}}</div>
        <div class="item-info">{{i.info}}</div>
        <div class="item-price">
          <span class="price-now"><b>{{i.priceNow}}</b>元</span>
          <span class="price-market">门市价:<b>{{i.priceMarket}}</b>元</span>
          <span class="sale-count">已售<b>{{i.saleCount}}</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "indexIntroItem",
      data(){
        return {
          item:[
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item1.jpg'),name:'鱼厂·专注烤鱼',info:'[小寨]100元代金券1张，可叠加',priceNow:82.6,priceMarket:100,saleCount:141572},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item2.jpg'),name:'一只酸奶牛',info:'[西安等]酸奶牛紫米露3选1',priceNow:9.9,priceMarket:12,saleCount:479123},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item3.jpg'),name:'享遇牛排海鲜自助餐厅',info:'[小寨]午晚通用自助',priceNow:66,priceMarket:79,saleCount:136509},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item4.jpg'),name:'千家粗粮王海鲜烤肉火锅自助',info:'[2店通用]午晚餐夜宵通用',priceNow:67.1,priceMarket:99,saleCount:93810},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item5.jpg'),name:'牛一嘴·中国兰州牛肉拉面',info:'[3店通用]单人餐，提供免费WiFi',priceNow:9.9,priceMarket:14,saleCount:87295},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item6.jpg'),name:'长安大牌档',info:'[3店通用]50元代金券1张，可叠加',priceNow:45,priceMarket:50,saleCount:324388},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item7.jpg'),name:'嗨捞猪肚鸡',info:'[5店通用]100元代金券1张，可叠加',priceNow:89,priceMarket:100,saleCount:95157},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item8.jpg'),name:'花田煮·臻牛',info:'[9店通用]100元代金券1张，可叠加',priceNow:69,priceMarket:100,saleCount:5305},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item9.jpg'),name:'小蹄大作',info:'[2店通用]小吃3选1，提供免费WiFi',priceNow:14.5,priceMarket:16,saleCount:20039},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item10.jpg'),name:'毅祥斋老孙家泡馍',info:'[莲湖区]单人牛肉泡馍，提供免费WiFi',priceNow:9.8,priceMarket:25,saleCount:126146},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item11.jpg'),name:'顶牛兰州牛肉拉面',info:'[2店通用]拉面套餐，建议单人使用',priceNow:8.88,priceMarket:12,saleCount:136409},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item12.jpg'),name:'费尼餐厅',info:'[小寨]100元代金券1张，可叠加2张',priceNow:79,priceMarket:100,saleCount:39048},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item13.jpg'),name:'东东包',info:'[西安等]单人餐',priceNow:15,priceMarket:20,saleCount:51778},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item14.jpg'),name:'拉菲达牛排自助',info:'[小寨]周内雪花肉眼牛排/周末雪花肉眼牛排2选1',priceNow:66,priceMarket:68,saleCount:11130},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item15.jpg'),name:'和谐号海鲜烤肉火锅自助',info:'[小寨]单人自助餐',priceNow:66.8,priceMarket:100,saleCount:94782},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item16.jpg'),name:'新辣道鱼火锅',info:'[8店通用]100元代金券1张，全场通用',priceNow:65,priceMarket:100,saleCount:9249},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item17.jpg'),name:'子午路张记肉夹馍',info:'[5店通用]三秦套餐，建议单人使用',priceNow:13,priceMarket:16,saleCount:24884},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item18.jpg'),name:'呷哺呷哺',info:'[小寨]100元代金券1张，可叠加',priceNow:88,priceMarket:100,saleCount:543},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item19.jpg'),name:'千家粗粮王连锁自助',info:'[电子城]单人自助餐/周五周六周日2选1',priceNow:49.9,priceMarket:59,saleCount:35959},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item20.jpg'),name:'蘭芳園',info:'[4店通用]饮品1选1，包间免费',priceNow:9.9,priceMarket:16,saleCount:4432},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item21.jpg'),name:'仟禧自助涮烤',info:'[政法/师大]单人午/晚市套餐/单人午/晚市套餐2选1',priceNow:45.9,priceMarket:59,saleCount:148484},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item22.jpg'),name:'鑫海汇海鲜烤肉火锅自助',info:'[建工路]单人自助晚餐/节假日全天自助2选1',priceNow:59.9,priceMarket:86,saleCount:163028},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item23.jpg'),name:'李想大虾火锅花园',info:'[8店通用]2-3人餐，提供免费WiFi',priceNow:98,priceMarket:152,saleCount:163337},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item24.jpg'),name:'爱辣屋',info:'[南稍门]美味双人餐，提供免费WiFi',priceNow:49.9,priceMarket:58,saleCount:12733},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item25.jpg'),name:'赛百味',info:'[23店通用]单人餐',priceNow:26,priceMarket:31,saleCount:125033},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item26.jpg'),name:'张氏宽窄巷成都名小吃',info:'[西安等]50元代金券1张，可叠加',priceNow:45,priceMarket:50,saleCount:111125},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item27.jpg'),name:'宽塘·蛙哥虾妹',info:'[6店通用]组合锅套餐，建议2-3人使用',priceNow:169,priceMarket:216,saleCount:1995},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item28.jpg'),name:'古今长安老茶坊',info:'[小寨]50元代金券1张，可叠加',priceNow:45,priceMarket:50,saleCount:55857},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item29.jpg'),name:'玩味音乐海鲜自助火锅',info:'[小寨]单人晚市自助',priceNow:65.8,priceMarket:69,saleCount:2068},
            {url:'#',imgSrc:require('../../assets/yuan/img/index/intro/intro-item30.jpg'),name:'瑞可爷爷的店',info:'[小寨][西安等]起司蛋糕1个，约7英寸，圆形',priceNow:32.9,priceMarket:39,saleCount:280765},
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .item{
    display: flex;
    padding: .1rem .1rem .1rem 0;
    border-bottom: 1px solid #EFEDE9;
    .item-img{
      width: .9rem;
      height: .82rem;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .item-main{
      flex: 1;
      margin-left: .1rem;
      .item-name{
        font-size: .15rem;
        color: #333333;
        margin-top: .03rem;
      }
      .item-info{
        font-size: .12rem;
        color: #666666;
        margin-top: .04rem;
      }
      .item-price{
        font-size: .12rem;
        color: #666666;
        margin-top: .21rem;
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
</style>
