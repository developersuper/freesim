<template>
 <div class="phonesandplanesbody">
   <div class="phonesandplanesbody-left">
     <span class="title">Never pay for phone service <span>AGAIN</span></span>
     <span class="subtitle">Buy a sim activation Kit from Free SIM<br>and get free nationwide<br>Talk & Text</span>
     <span class="button action">Get activation Kit</span>
   </div>
   <div class="img">
     <img :src="require('@/assets/images/phonesandplanes.png')" alt="">
   </div>
 </div>
</template>

<script>

export default {
  name: 'PhonesAndPlanesBody',
  components: {
  }
}
</script>

<style lang="scss" scoped>
div.phonesandplanesbody {
  padding: 171px 135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div.phonesandplanesbody-left {
    max-width: 463px;
    width: 100%;
    display: flex;
    flex-direction: column;
    span.title {
      font-weight: 500;
      font-size: 50px;
      color: #515151;
      margin-bottom: 50px;
      span {
        color: #FF7777;
      }
    }
    span.subtitle {
      font-size: 25px;
      color: #787878;
      margin-bottom: 55px;
    }
    span.button {
      max-width: 282px;
      width: 100%;
      height: 70px;
      font-size: 25px;
      border-radius: 35px;
      background: #00DE5E;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div.img {
    img {
      max-width: 646px;
      width: 100%;
    }
  }
}
@media screen and (max-width: 1000px) {
div.phonesandplanesbody {
  padding: 100px 10.208vw;
  height: calc(100vh -100px);
  div.phonesandplanesbody-left {
    max-width: 463px;
    width: 100%;
    span.title {
      font-size: 40px;
      margin-bottom: 35px;
    }
    span.subtitle {
      font-size: 17px;
      margin-bottom: 40px;
    }
    span.button {
        height: 40px;
        max-width: 180px;
        font-size: 15px; 
        padding: 13px 32px;
    }
  }
  div.img {
    img {
      max-width: 646px;
      width: 100%;
    }
  }
}
}
@media screen and (max-width: 768px) {
  div.img {
    display: none;
  }
}
</style>