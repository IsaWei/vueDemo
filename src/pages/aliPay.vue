<!--模仿支付宝页面做的单页练习-->

<template lang="html">

   <div class="container">

     <div class="box1 box-item">
        <ul>
        <li><img src="../assets/image/iconfont/scan.png" alt="安全整改"></li>
        <li><img src="../assets/image/iconfont/other.png" alt="培训计划off"></li>
        <li><img src="../assets/image/iconfont/redpacket.png" alt="收藏off"></li>
        <li><img src="../assets/image/iconfont/search.png" alt="搜索off"></li>
         </ul>
         <img class="add_i" src="../assets/image/iconfont/add.png" alt="添加">

</div>
     <div class="box2 box-item">
<alipay-function v-for="(item,key) in logoList"  :key="key"  :item="item" :imgBase="imgBase"></alipay-function>
</div>
     <div class="box3 box-item">
        <img src="../assets/image/iconfont/ant.png" class="logo_i"/>
        <ul>
          <li v-for="(item,key) in msgList">
          <span>{{item.content}}</span>
          <span class="time_span">{{item.time}}</span></li>
        </ul>
      </div>
     <div class="box4 box-item">4</div>
     <div class="box5 box-item">5</div>
     <div class="box6 box-item">6</div>

</div>

</template>

<script>

   import AlipayFunction from '../components/alipayfunction.vue';
   let logoList = [
     {
       'name':'转账',
       'img':'../assets/image/iconfont/转账汇款.png'
     },
     {
       'name':'信用卡还款',
       'img':'../assets/image/iconfont/信用卡还款.png'
     },
     {
       'name':'充值中心',
       'img':'../assets/image/iconfont/充值.png'
     },
     {
       'name':'余额宝',
       'img':'../assets/image/iconfont/余额宝.png'
     },
     {
       'name':'滴滴出行',
       'img':'../assets/image/iconfont/滴滴出行.png'
     },
     {
       'name':'芝麻信用',
       'img':'../assets/image/iconfont/芝麻信用.png'
     },
     {
       'name':'火车票机票',
       'img':'../assets/image/iconfont/火车票.png'
     },
     {
       'name':'蚂蚁借呗',
       'img':'../assets/image/iconfont/借呗.png'
     },
     {
       'name':'ofo小黄车',
       'img':'../assets/image/iconfont/OFO.png'
     },
     {
       'name':'花呗',
       'img':'../assets/image/iconfont/蚂蚁花呗.png'
     },
     {
       'name':'共享单车',
       'img':'../assets/image/iconfont/共享单车.png'
     },
     {
       'name':'更多',
       'img':'../assets/image/iconfont/更多.png'
     },
   ];
   let msgList = [
     {
       content:'我要离家出走，再见！',
       time:'21小时前'
     },
     {
       content:'你有一个新的快递信息',
       time:'23小时前'
     },
     {
       content:'你有一个新的快递信息2',
       time:'24小时前'
     },
     {
       content:'你有一个新的快递信息2',
       time:'24小时前'
     },
     {
       content:'我要离家出走，再见！',
       time:'21小时前'
     },
     {
       content:'你有一个新的快递信息',
       time:'23小时前'
     },
     {
       content:'你有一个新的快递信息2',
       time:'24小时前'
     },
     {
       content:'你有一个新的快递信息2',
       time:'24小时前'
     },
   ];

  export default{
    data(){
      return {
        logoList:logoList,
        imgBase:'./assets/image/iconfont/',
        msgList:msgList
      };
    },
    components:{
      AlipayFunction
    }
  }

</script>

<style lang="css" scoped>

  .container{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width:100%;
  }
  .container .box-item{
    width:100%;
    background: #fff;
    border-bottom:1px solid #000;
  }

   .container .box1{
     height: 2rem;
     background: #1983d1;
   }
   .container .box1  ul{
      list-style: none;
   }
   .container .box1  .add_i{
     height: 1.5rem;
     width: 1.5rem;
     float: right;
     position: absolute;
     top: 0.25rem;
     right: 1.5rem;
   }
  .container .box1  ul li{
    float: left;
    margin: 0.2rem 0.5rem;
  }
   .container .box1  ul li img{
     height: 1.5rem;
     width: 1.5rem;
   }
  .container .box1 i{
    height:2rem;
    width: 2rem;
  }
   .container .box2{
     height:10rem;
     background: #fff;
     display:flex;
     justify-content: flex-start;
     flex-wrap: wrap;
   }
   .container .box3{
     height: 4rem;
     position: relative;
   }
   .container .box3 .logo_i{
     height: 3rem;
     width: 3rem;
     margin: 0.5rem 0.5rem 0 0;
     float: left;
   }
  .container .box3 ul{
    float: left;
    font-weight: bold;
    overflow: hidden;
    height: 3rem;
    width: 60%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    left: 50%;
  }
  .container .box3 ul li{
    padding-bottom: 0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 0.6rem;
  }
  .container .box3 ul li .time_span{
    padding-bottom: 0.2rem;
    color: #b8b8b8;
    margin-left: 1em;
  }
   .container .box4{
     height: 5.1rem;
   }
   .container .box5{
     height: 6.1rem;
   }
   .container .box6{
     height: 2rem;
   }
</style>
