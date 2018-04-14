

<template lang="html">

    <div class="container">
      <img src="../assets/image/iconfont/box2_i/1.png">
      <span class="i_span">{{item.name}}</span>
</div>
</template>

<script>
   export default{
     props:["item","imgBase"]
   }

</script>

<style lang="css" scoped>

   .container{
     height: 3rem;
     width:3rem;
     background: #fff;
     position: relative;
   }
   .container img{
     height: 2rem;
     width: 2rem;
   }
  .container .i_span{
    position: absolute;
    top: 2.4rem;
    font-weight: bold;
  }
</style>
