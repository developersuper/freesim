<template>
    <div class="social-auth-btn action">
      <img :src="iconUrl" alt="" />
      <span>{{text}}</span>
    </div>  
</template>

<script>

export default {
  name: 'Signup',
  components: {
  },
  props: {
    iconUrl: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>
 .social-auth-btn {
    cursor: pointer;
    position: relative;
    border: 1.2px solid #000000;
    border-radius: 30px;
    height: 50px;
    max-width: 340px;
    min-width: 240px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    img {
      position: absolute;
      left: 21px;
      top: 50%;
      transform: translateY(-50%);
    }
    span {
      text-align: center;
      width: 100%;
      font-size: 14px;
      font-family: 'Roboto';
      font-weight: 500;
    }
 }
</style>>

