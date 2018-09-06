<template>
  <div class="evaluate">
    <div class="header">评价</div>
    <div class="item">
      <div class="user">
        <div class="user-head">
          <img src="../../assets/yuan/img/ktv/evaluate-item1-head.jpg" alt=""/>
        </div>
        <div class="user-info">
          <div class="user-name">陈陈陈pearl</div>
          <div class="user-bottom">
            <div class="user-star">
              <em>★</em>
              <em>★</em>
              <em>★</em>
              <em>★</em>
              <em>★</em>
            </div>
            <div class="date">2018-07-22</div>
          </div>
          <div class="postmark">
            <img src="../../assets/yuan/img/ktv/evaluate-icon.png" alt=""/>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-text">
          服务态度挺不错的，刚开始在小包，
          觉得烟味太重了，所以要求换包厢，
          结果竟然换了个中包，我们就三个人，
          里面很宽敞，冷气很足，音响效果也挺不错的，
          歌单里面歌也挺全的，
          但是为什么没有情歌之王？卫生间环境也挺干净的，总之是值得好评的
        </div>
        <div class="content-img">
          <img src="../../assets/yuan/img/ktv/evaluate-item1-img1.jpg" alt=""/>
          <img src="../../assets/yuan/img/ktv/evaluate-item1-img2.jpg" alt=""/>
          <img src="../../assets/yuan/img/ktv/evaluate-item1-img3.jpg" alt=""/>
        </div>
      </div>
      <div class="reply">
        <span class="arrow"></span>
        <div class="reply-header">
          <div class="reply-tit">商家回复：</div>
          <div class="reply-date">2018-07-22</div>
        </div>
        <div class="reply-body">
          <p>亲！非常感激谢您对我们的支持与关注、
            我们会继续努力、为您提供更好的服务、欢迎您再次光临！</p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="user">
        <div class="user-head">
          <img src="../../assets/yuan/img/ktv/evaluate-item1-head.jpg" alt=""/>
        </div>
        <div class="user-info">
          <div class="user-name">陈陈陈pearl</div>
          <div class="user-bottom">
            <div class="user-star">
              <em>★</em>
              <em>★</em>
              <em>★</em>
              <em>★</em>
              <em>★</em>
            </div>
            <div class="date">2018-07-22</div>
          </div>
          <div class="postmark">
            <img src="../../assets/yuan/img/ktv/evaluate-icon.png" alt=""/>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-text">
          服务态度挺不错的，刚开始在小包，
          觉得烟味太重了，所以要求换包厢，
          结果竟然换了个中包，我们就三个人，
          里面很宽敞，冷气很足，音响效果也挺不错的，
          歌单里面歌也挺全的，
          但是为什么没有情歌之王？卫生间环境也挺干净的，总之是值得好评的
        </div>
        <div class="content-img">
          <img src="../../assets/yuan/img/ktv/evaluate-item1-img1.jpg" alt=""/>
          <img src="../../assets/yuan/img/ktv/evaluate-item1-img2.jpg" alt=""/>
          <img src="../../assets/yuan/img/ktv/evaluate-item1-img3.jpg" alt=""/>
        </div>
      </div>
      <div class="reply">
        <span class="arrow"></span>
        <div class="reply-header">
          <div class="reply-tit">商家回复：</div>
          <div class="reply-date">2018-07-22</div>
        </div>
        <div class="reply-body">
          <p>亲！非常感激谢您对我们的支持与关注、
            我们会继续努力、为您提供更好的服务、欢迎您再次光临！</p>
        </div>
      </div>
    </div>
    <div class="evaluate-other">
      查看全部30928条评价
      <span class="icon"><img src="../../assets/yuan/img/ktv/icon-go.jpg" alt=""/></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ktvEvaluate"
    }
</script>

<style lang="scss" scoped>
  .evaluate{
    padding-left: .1rem;
    background: white;
    border-top: 1px solid #ECE9E4;
    border-bottom: 1px solid #ECE9E4;
    .header{
      height: .45rem;
      font-size: .18rem;
      line-height: .45rem;
      color: #999999;
      border-bottom: 1px solid #ECE9E4;
    }
    .item{
      padding-bottom: .1rem;
      border-bottom: 1px solid #EFEDE9;
      .user{
        display: flex;
        align-items: center;
        height: .65rem;
        .user-head{
          width: .37rem;
          height: .37rem;
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .user-info{
          flex: 1;
          position: relative;
          margin-left: .05rem;
          .user-name{
            font-size: .12rem;
            color: #666666;
          }
          .user-bottom{
            display: flex;
            align-items: center;
            .user-star{
              color: #f90;
              em{
                font-size: .2rem;
                font-style: normal;
              }
            }
            .date{
              margin-left: .1rem;
              color: #999999;
            }
          }
          .postmark{
            position: absolute;
            right: .2rem;
            bottom: calc(50% - .25rem);
            img{
              width: .5rem;
              height: .5rem;
            }
          }
        }
      }
      .content{
        padding-right: .1rem;
        margin-bottom: .1rem;
        .content-text{
          font-size: .19rem;
          color: #333333;
        }
        .content-img{
          display: flex;
          img{
            width: .55rem;
            height: .5rem;
            margin-right: .05rem;
          }
        }
      }
      .reply{
        background: #F7F7F6;
        position: relative;
        padding: 0 .1rem .1rem.1rem;
        margin-right: .1rem;
        .arrow{
          display: block;
          width: 0;
          height: 0;
          border: .07rem solid transparent;
          border-bottom-color: #F7F7F6;
          position: absolute;
          left: 0.23rem;
          top: -0.15rem;
        }
        .reply-header{
          height: .38rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ECEBE8;
          .reply-tit{
            font-size: .18rem;
            color: #666666;
          }
          .reply-date{
            color: #999999;
          }
        }
        .reply-body{
          font-size: .17rem;
          color: #ED852C;
          margin-top: .1rem;
        }
      }
    }
    .evaluate-other{
      height: .4rem;
      font-size: .15rem;
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
