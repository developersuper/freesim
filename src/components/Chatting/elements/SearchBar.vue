<template>
  <div class="search">
    <div class="search-input">
      <img :src="require('@/assets/images/icons/search.png')" alt="">
      <input type="text" placeholder="Search" :value="value" @input="setValue">
    </div>
    <div v-if="ranges && value?.length > 0" class="autosearch">
      <span v-for="search in searches" :key="search.name" class="autosearch-item">
        <img :src="search.avatar" alt="">
        <span class="name" v-html="search.name"></span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  props: {
    value: String,
    ranges: Array,
  },
  components: {
  },
  computed: {
    searches() {
      return this.ranges.filter(range => {
          return range.name.indexOf(this.value) !== -1 ? true : false
        }).map(item => {
          const index = item.name.indexOf(this.value)
          const name = index > -1 ? (item.name.slice(0, index) + `<span style="color: #FF7777;">${this.value}</span>` + item.name.slice(index + this.value.length, item.length)) : item.name
          console.log(item.name, index, name)
          return {
            avatar: item.avatar,
            name
          }
      })
    },
  },
  methods: {
    setValue(e) {
      this.$emit('value', e.target.value)
    }
  },
  mounted (){
    console.log(this.value)
  },
}
</script>
<style lang="scss" scoped>
div.search {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  div.search-input {
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 12px;
    max-width: 260px;
    min-width: 100px;
    height: 24px;
    width: 100%;
    img {
      height: 11.85px;
      width: 12px;
      margin-right: 7px;
    }
    input {
      outline: none;
      border: none;
      font-size: 11px;
      background-color: #f0f0f0;
      max-width: 200px;
      width: 100%;
    }
    ::placeholder {
      color: #B0B0B0;
    }
  }
  div.autosearch {
    position: absolute;
    top: 35px;
    left: 56px;
    width: 120px;
    height: 147px;
    background: #FFFFFF;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.25);
    z-index: 9999;
    overflow-y: auto;
    span.autosearch-item {
      display: flex;
      padding: 5px;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-right: 9px;
      }
      span.name {
        font-size: 12px;
        line-height: 14px;
        color: #949494;
      }
    }
  }
}
</style>