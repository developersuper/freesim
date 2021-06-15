<template>
  <div class="lastblock">
    <div class="left">
      <span class="title">
        Get a real phone number<br>and start 100% forever<br>free calling & texting!
      </span>
      <span class="subtitle">
        Millions of US and Canada<br>numbers for you to choose from
      </span>
      <img :src="require('@/assets/images/googleplay.png')" alt="" class="google-play action" >
    </div>
    <div class="img">
      <img :src="require('@/assets/images/lastblock.png')" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'LastBlock',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.lastblock {
  padding: 120px 135px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  div.left {
    flex: 1;
    span.title {
      display: block;
      margin-bottom: 50px;
      font-weight: bold;
      font-size: 50px;
      color: #515151;
      max-width: 550px;
      letter-spacing: -0.1px;
      // max-height: 160px;
      line-height: 107.99%;
    }
    span.subtitle {
      display: block;
      margin-bottom: 50px;
      font-size: 1.7vw;
      color: #787878;
    }
    img.google-play {
      width: 240px;
      height: 71.2118px;
    }
  }
  div.img img {
    display: flex;
    justify-content: flex-end;
    max-width: 564px;
    width: 100%;
  }
}
@media screen and (max-width: 865px) {
  .lastblock {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 120px 10.208vw;
    div.left {
      span.title {
        font-size: 7vw;
        max-width: unset;
      }
      span.subtitle {
        font-size: 18px;
        line-height: 20px;
        color: #787878;
      }
      img.google-play {
        width: 170px;
        height: 50px;
      }
    }
    div.img{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 39.1vw;
        width: 100%;
      }
    } 
  }
}
</style>