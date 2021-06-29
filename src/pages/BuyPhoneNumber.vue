<template>
  <desktop-layout>
    <template v-slot>
      <div class="buyphonenumber">
        <sidebar />
        <div class="main-body">
          <span v-if="step==='countrycode'" class="title">
            Choose your phone number with country code
          </span>
          <span v-if="step==='number'" class="title number-title">
            Select a number
          </span>
          <span 
            v-if="step === 'number'"
            class="desc">
            Number will be refreshed in 45 seconds
            <span class="action" @click="step = 'countrycode'">Change area code</span>
          </span>
          <div v-if="step==='countrycode'" class="select-areacode">
            <country-code-selector @country="setCountry" />
          </div>
          <div v-if="step === 'number'" class="phonenumbers">
            <div 
              v-for="(phonenumber, index) in phonenumbers"
              :key="index"
              class="phonenumber">
              <span class="number">{{phonenumber.number}}</span>
              <div :class="rightclass(phonenumber.price, index)">
                <span v-if="phonenumber.price === 'free'" class="text">Free</span>
                <span v-else class="text">Buy<span>{{phonenumber.price}}$</span></span>
                <span class="checkbox action" @click="selectNumber(index)">
                  <span class="checkbox-center"></span>
                </span>
              </div>
            </div>
          </div>
          <span v-if="step === 'countrycode'" class="usemylocation action">Use my location</span>
          <div class="btns">
            <span 
              v-if="step === 'countrycode'"
              @click="goStep('number')"
              :class="country ? {'btn-continue action':true} : {'btn-continue disable': true}">
              Continue
            </span>
            <span 
              v-if="step === 'number' && phonenumbers[selected].price === 'free'"
              @click="goStep('number')"
              class="btn-continue action">
              Continue
            </span>
            <span 
              v-if="step === 'number' && phonenumbers[selected].price !== 'free'"
              @click="goStep('number')"
              class="btn-continue btn-buy-number action">
              Buy for {{phonenumbers[selected].price}}$ (year)
            </span>
          </div>
        </div>
      </div>
    </template>
  </desktop-layout>
</template>

<script>
// import {mapGetters} from 'vuex'
import DesktopLayout from '@/components/Layout/DesktopLayout.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
import CountryCodeSelector from '@/components/CountryCodeSelector.vue'

export default {
  name: 'BuyPhoneNumber',
  components: {
    DesktopLayout,
    Sidebar,
    CountryCodeSelector
  },
  computed: {
  },
  data() {
    return  {
      step: 'countrycode',
      country: null,
      phonenumbers: [
        {
          number: '601-779-7721',
          price: 'free'
        },
        {
          number: '601-779-7231',
          price: '10'
        },
        {
          number: '601-779-7031',
          price: 'free'
        },
        {
          number: '601-779-7221',
          price: 'free'
        },
        {
          number: '601-779-7001',
          price: 'free'
        },
      ],
      selected: 0,
    }
  },
  methods: {
    setCountry(country) {
      this.country = country
    },
    goStep(value) {
      this.step = value
    },
    rightclass(price, index) {
      let res = 'right'
      if(price !== 'free') {
        res += ' right-yello'
        if(index === this.selected) {
          res += ' right-yello-active'
        }
      }else {
        if(index === this.selected) {
          res += ' right-active'
        }
      }
      return res
    },
    selectNumber(index) {
      this.selected = index
    }
  }
}
</script>

<style lang="scss" scoped>
div.buyphonenumber {
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 55px);
  -webkit-height: calc(var(--vh, 1vh) * 100 - 55px);
  div.main-body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span.title {
      max-width: 306px;
      margin-bottom: 66px;
      text-align: center;
      font-weight: normal;
      font-size: 25px;
      line-height: 29px;
      text-align: center;
      color: #000000;
      width: 100%;
    }
    span.number-title {
      margin-bottom: 14px;
    }
    span.desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #6B6B6B;
      margin-bottom: 40px;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 179px;
        height: 40px;
        background: #FE3030;
        border-radius: 31.5px;
        font-size: 17px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 14px;
      }
    }
    div.select-areacode {
      margin-bottom: 30px;
    }
    span.usemylocation {
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #FE3030;
      margin-bottom: 103px;
    }
    div.btns {
      span.btn-continue {
        width: 309px;
        height: 63px;
        background: #FE3030;
        border-radius: 31.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        font-weight: 500;
      }
      span.btn-buy-number {
        background: rgba(255, 199, 0, 0.7);
        border-radius: 31.5px;
        color: #000000;
      }
      span.disable {
        opacity: 0.3;
      }
    }
    div.phonenumbers {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      div.phonenumber {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        span.number {
          font-size: 20px;
          line-height: 23px;
          text-align: center;
          color: #000000;
          margin-right: 49px;
        }
        div.right {
          width: 84px;
          height: 36px;
          border: 2px solid #ECECEC;
          box-sizing: border-box;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 6px;
          span.text {
            font-size: 14px;
            line-height: 14px;
            text-align: center;
            color: #000000;
            margin-right: 8px;
            display: flex;
            flex-direction: column;
            span {
              font-size: 12px;
              line-height: 14px;
            }
          }
          span.checkbox {
            border: 3px solid #FE3030;
            border-radius: 100%;
            width: 28px;
            height: 28px;
            min-width: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            span.checkbox-center {
              min-width: 16px;
              width: 16px;
              height: 16px;
              border-radius: 100%;
              background: #FE3030;
              display: none;
            }
          }
        }
        div.right-yello {
          border: 3px solid #FFCA0F;
          span.checkbox {
            border: 3px solid #FFCA0F;
              span.checkbox-center {
                background: #FFCA0F;
                display: none;
            }
          }
        }
        div.right-yello-active {
          border: none;
          background: linear-gradient(101.35deg, rgba(255, 199, 0, 0.7) -24.79%, rgba(255, 202, 15, 0) 127.53%);
          backdrop-filter: blur(50px);
          span.checkbox {
            span.checkbox-center {
              display: block;
            }
          }
        }
        div.right-active {
          border: none;
          background: linear-gradient(97.4deg, rgba(254, 48, 48, 0.37) -12.53%, rgba(235, 91, 91, 0) 132.63%);
          span.checkbox {
            span.checkbox-center {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>

