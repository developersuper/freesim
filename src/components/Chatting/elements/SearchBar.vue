<template>
  <div class="search">
    <div class="search-input">
      <img :src="require('@/assets/images/icons/search.png')" alt="">
      <input type="text" placeholder="Search" >
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="scss" scoped>
div.search {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  div.search-input {
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 12px;
    max-width: 260px;
    min-width: 100px;
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
}
</style>