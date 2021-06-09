<template>
  <div class="header">
    <h1 class="title">Free SIM <span>phone service</span></h1>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #ff7777;
  font-family: Roboto;
  font-style: normal;
  padding-left: 135px;
  .title {
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    span {
      margin-left: 7px;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }
  }
}
@media screen and (max-width: 1000px) {
  .header {
    padding-left: 10.208vw;
  }
}
</style>