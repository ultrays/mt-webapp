<template>
    <div class="selector">
      <ul>
        <li><span>KTV</span></li>
        <li><span>全城</span></li>
        <li><span>默认排序</span></li>
        <li><span>筛选</span></li>
      </ul>
      <div class="selector-hide">
        隐藏的选项
      </div>
    </div>
</template>

<script>
    export default {
        name: "ktvListSelector"
    }
</script>

<style lang="scss" scoped>
  .selector{
    background: white;
    border-bottom: 1px solid #DDD9D1;
    ul{
      display: flex;
      justify-content: space-around;
      li{
        flex: 1;
        text-align: center;
        border-right: 1px solid #D1CDC2;
        span{
          font-size: .14rem;
          line-height: .42rem;
          color: #666666;
        }
        span:after {
          content: "";
          display: inline-block;
          border-top: .08rem solid #B7B7B7;
          border-left: .05rem solid transparent;
          border-right: .05rem solid transparent;
          border-bottom: 0;
          margin-left: .06rem;
        }
      }
      li:last-child{
        border: none;
      }
    }
  }
</style>
