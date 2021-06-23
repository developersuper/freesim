<template>
  <div class="countrycodeselector">
    <div v-if="selected !== null && show === false" class="selected" >
      <img class="flag" :src="selected.flag">
      <span>{{selected.number}}</span>
    </div>
    <input type="text"
      placeholder="Enter your area code or country" 
      ref="input"
      @focus="focused(true)" 
      @blur="focused(false)" 
      v-model="country">
    <span class="dropdownicon" @click="focus">
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L5.96244e-08 0L10 1.19249e-07L7.5 2.5L5 5Z" fill="black"/>
      </svg>
    </span>
    <div v-if="show" class="dropdown">
      <div class="dropdown-inner">        
        <template 
          v-for="(item, index) in countryList" 
          :key="index" >
          <div class="country-item action" @click.prevent="setCountry(item)">
            <img class="flag" :src="item.flag" />
            <span class="country-name">{{item.name}}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import countryList from '@/services/countryList.js'
import { getFlagURL } from '@/services/util.js'

export default {
  name: 'CountryCodeSelector',
  components: {
  },
  data() {
    return {
      country: '',
      show: false,
      selected: null,
    }
  },
  computed: {
    countryList() {
      console.log(this.country)
      return countryList
      .filter( item => {
        return item.name.toLowerCase().includes(this.country.toLowerCase())
      })
      .map(item => {
        return {
          ...item,
          flag: getFlagURL(item.code)
        }
      })
    }
  },
  methods: {
    focused(value) {
      if(value === true) {
        this.show = true
        if(this.selected) {
          this.country = this.selected.name
        }
        return
      }
      setTimeout(() => {
        if(this.selected) {
          this.country = ''
          this.$refs.input.placeholder = ''
        }else {
          this.$refs.input.placeholder = 'Enter your area code or country'
        }
        this.show = value
      }, 200)
    },
    setCountry(item) {
      this.selected = {...item}
      this.country = ''
      this.$emit('country', item)
    },
    focus() {
      this.$refs.input.focus();
    }
  },
  mounted() {
    this.countryList = [...countryList]
  } 
}
</script>

<style lang="scss" scoped>
div.countrycodeselector {
  position: relative;
  max-width: 312px;
  input {
    border: none;
    outline: none;
    border-bottom: 2px solid #FE3030;
    width: 312px;
    padding: 0px 0px 10px 0px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    padding-right: 10px;
  }
  ::placeholder {
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: rgba(0, 0, 0, 0.3);
  }
  span.dropdownicon {
    position: absolute;
    right: 0px;
    bottom: 15px;
  }
  div.selected {
    position: absolute;
    display: flex;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    img {
      margin-right: 15px;
    }
    span {
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      color: #000000;
    }
  }
  div.dropdown {
    z-index: 999;
    position: absolute;
    top: 45px;
    right: 0px;
    background: white;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    max-height: 304px;
    width: 268px;
    padding: 8px;
    div.dropdown-inner {
      max-height: 288px;
      overflow-y: auto;
      div.country-item {
        display: flex;
        align-items: center;
        img {
          width: 32px;
          margin-right: 16px;
        }
        span.country-name {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.5px;
          color: rgba(0, 0, 0, 0.6);
          white-space: nowrap;
        }
      }
    } 
  }
}
</style>