<template>
  <div class="aboutus">
    <div class="img">
      <img :src="require('@/assets/images/aboutus.png')" alt="">
    </div>
    <div class="right">
      <div class="right-inner">
        <h1 class="title">About Us</h1>
        <p class="subtitle">
          We believe in using innovative technology<br>to make calling and texting freely<br>accessible by everyone<br>in the world.
        </p>
      </div>
    </div>
    <div class="img-2">
      <img :src="require('@/assets/images/aboutus.png')" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutUs',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.aboutus {
  padding: 80px 10.208vw 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div.img {
    flex: 1;
    text-align: center;
    img {
      max-width: 37.5vw;
    }
  }
  div.img-2 {
    display: none;
  }
  div.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div.right-inner {
      .title {
        width: 100%;
        font-weight: bold;
        font-size: 3.5vw;
        color: #515151;
        margin: 0;
        margin-bottom: 3.5vw;
      }
      .subtitle {
        font-size: 1.7vw;
        display: flex;
        align-items: center;
        color: #787878;
        max-width: 460px;
      }
    }
  }
}
@media screen and (max-width: 865px){
  .aboutus {
    flex-direction: column;
    div.img{
      display: none;
    }
    div.img-2 {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      img {
        max-width: 500px;
        width: 100%;
      }
    }
    div.right {
      width: 100%;
      align-items: flex-start;
      div.right-inner {
        .title {
          font-size: 40px;
          margin-bottom: 35px;
        }
        .subtitle {
          font-size: 20px;
        }
      }
    }
  }
}
</style>