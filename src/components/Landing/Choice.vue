<template>
  <div class="choice">
    <h1 class="title">
      By choosing us you will receive
    </h1>
    <div class="cards">
        <template v-for="({iconUrl, title, subtitle}, index) in cards" :key="index">
        <div class="card">
          <div class="icon">
            <img :src="iconUrl" alt="" :style="index == 0 ? {paddingRight: '32px'} : {}">
            <span v-if="index === 0" class="one">1</span>
            <span v-if="index === 0" class="two">2</span>
          </div>
          <div class="card-title" v-html="title"></div>
          <div class="card-subtitle" v-html="subtitle"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Choice',
  components: {
  },
  data() {
    return {
      cards: [
        {
          iconUrl: require('@/assets/images/card-first.png'),
          title: 'Get a second line for your side business',
          subtitle: 'FreeSIM let’s you get a professional presense with for totally<br> FREE of charge.'
        },
       {
          iconUrl: require('@/assets/images/card-third.png'),          
          title: 'Give yourselves<br>a bit of privacy',
          subtitle: 'Everyone has some secret that they want to keep away from their normal phone line.'
        },
        {
          iconUrl: require('@/assets/images/card-second.png'),
          title: 'Separate your contacts',
          subtitle: 'Use FreeSIM number to move contacts to different<br>channel to reach you at.'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.choice {
  padding: 80px 135px 100px; 
  h1.title {
    color: #515151;
    font-weight: bold;
    font-size: 3.5vw;
    line-height: 99.69%;
    margin: 0;
    margin-bottom: 90px;
  }
  @media screen and (max-width: 1000px) {
    h1.title {
      font-size: 35px;
    }
  }
  div.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 30px;
    row-gap: 50px;
    width: 100%;
    margin: auto;
    div.card {
      flex: 1;
      display: flex;
      flex-direction: column;;
      align-items: center;
      max-width: 343px;
      width: 100%;
      padding: 50px 3.5vw;
      box-shadow: 0px 4px 40px -2px rgba(0, 0, 0, 0.15);
      border-radius: 56px;
      text-align: center;
      .icon {
        position: relative;
        width: 144px;
        height: 144px;
        background-color: #f5f5f5;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        span {
          position: absolute;
          color: white;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span.one {
          width: 23px;
          height: 23px;
          top: 65px;
          right: 45px;
          background-color: #ff7777;
          z-index: 10;
          opacity: 0.9;
        }
        span.two {
          width: 29px;
          height: 29px;
          top: 49px;
          right: 27px;
          background-color: #00DE5E;
        }
      }
      .card-title {
        font-weight: bold;
        font-size: 25px;
        line-height: 110%;
        color: #000000;
        margin: 0;
        margin-bottom: 30px;
        max-width: 233px;
        width: 100%;
      }
      .card-subtitle {
        font-size: 15px;
        color: #949494;
        max-width: 237px;
        width: 100%;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 865px) {
    div.cards {
      flex-direction: column !important;
      div.card {
        max-width: 400px;
        margin: auto;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .choice {
    padding: 80px 10.208vw 100px;
  }
}
</style>