<template>
  <carousel :items-to-show="1" class="carousel">
    <slide v-for="active in 4" :key="active" style="width: 100%">
      <div class="download" :style="{backgroundImage: `url(${downloads[active-1].imgUrl}`, color: downloads[active-1].color}">
        <div class="download-inner" :style="{background: downloads[active-1].background}">
          <h1 class="title" v-html="downloads[active-1].title"></h1>
          <h5 class="subtitle" v-html="downloads[active-1].subtitle"></h5>
          <div class="download-btn"><a herf="" class="action">Download App</a></div>
        </div>
      </div>
    </slide>
    <template #addons>
      <pagination/>
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: 'Download',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      downloads: [
        {
          title: 'Get a real phone <br> number and start<br>100% forever free <br> calling & texting!',
          subtitle: 'Millions of US and Canada numbers<br>for you to choose from',
          imgUrl: require('@/assets/images/download0.png'),
          background: '#9C7C4B33',
          color: '#ffffff'
        },
        {
          title: 'Low-cost<br/>international<br/>calls',
          subtitle: 'Calls your dearest ones for super<br>lost cost or even free',
          imgUrl: require('@/assets/images/download1.png'),
          background: '#866B4326',
          color: '#515151'
        },
        {
          title: 'Voicemail and<br>Free Transcription',
          subtitle: 'You can write and call your family<br>and friends as much as you want!',
          imgUrl: require('@/assets/images/download2.png'),
          background: '#A495800D',
          color: '#ffffff'
        },
        {
          title: 'Send Text or Images<br>over SMS for FREE!',
          subtitle: 'FreeSIM let you send / receive<br>SMS as well as MMS',
          imgUrl: require('@/assets/images/download3.png'),
          background: '#A4958033',
          color: '#ffffff'
        }
      ],
      timer: null,
    }
  },
}
</script>
<style lang="scss">
.carousel {
  position: relative;
  height: calc(100vh - 100px);
}
.download {
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .download-inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 10vw;
    padding-bottom: 20vh;
    height: calc(100vh - 100px);
    padding-top: 100px;
    text-align: left;
    .title {
      width: 100%;
      font-weight: bold;
      font-size: 4vw;
      line-height: 99.69%;    
      margin: 0;
      margin-bottom: 3.5vw;
    }
    @media screen and (max-width: 1000px) {
      .title {
        font-size: 40px;
        margin-bottom: 35px;
      }
    }
    .subtitle {
      font-weight: bold;
      font-size: 1.7vw;
      line-height: 99.69%;
      margin: 0;
      margin-bottom: 4vw;
    }
    @media screen and (max-width: 1000px) {
      .subtitle {
        font-size: 17px;
        margin-bottom: 40px;
      }
    }
    .download-btn {
      color: white;
      height: 4vw;
      max-width: 16.7vw;
      width: 100%;
      background: rgba(1, 213, 90);
      border-radius: 30px;
      text-decoration: none;
      font-size: 1.5vw; 
      font-weight: bold;
      line-height: 99.69%;
      white-space: nowrap;
      display: flex;
      padding: 1.3vw 3.2vw;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 1000px) {
      .download-btn {
        height: 40px;
        max-width: 167px;
        font-size: 15px; 
        padding: 13px 32px;
      }
    }
  }
}
.carousel__pagination {
  display: flex;
  position: absolute;
  bottom: 3.5vw;
  right: 10vw;
  padding: 0;
  width: 13vw;
  justify-content: space-between;
  li button.carousel__pagination-button--active  {
    background-color: #ff7777 !important;
  }
  li button{
    outline: none;
    width: 2vw;
    height: 2vw;
    border: 0.2vw solid #ff7777;
    border-radius: 100px;
    background: none;
  }
}
@media screen and (max-width: 865px) {
  .carousel__pagination {
    width: 127px;
    li button{
      width: 19px;
      height: 19px;
      border: 1px solid #ff7777;
    }
  }
}
</style>