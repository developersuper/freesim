<template>
  <div class="footer">
    <div class="footer-love">
      <span class="title">Free SIM  phone service</span>
      <span class="subtitle">in US and Canada</span>
    </div>
    <div class="footer-phonenum">
      <span><img :src="require('@/assets/images/icons/phone.png')" alt="">484-424-9683</span>
    </div>
    <div class="footer-address">
      <span class="title">Address:</span>
      <span class="address">3524 Silverside Road Suite 35B,<br>Wilmington, Delaware, 19810</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 0px 10.208vw;
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #727272;
  span {
    display: block;
  }
  div.footer-love {
    span.title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    span.subtitle {
      font-size: 15px;
    }
  }
  div.footer-phonenum  {
    span {
      display: flex;
      align-items: center;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: bold;
      img {
        width: 20px;
        transform: matrix(0.99, 0.16, -0.17, 0.99, 0, 0);
        margin-right: 10px;
      }
    }
  }
  div.footer-address  {
    .title {
      display: block;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .address {
      display: block;
      font-size: 15px;
    }
  }
}
@media screen and (max-width: 1000px) {
  .footer {
    padding: 50px 10vw;
    height: unset;
    flex-direction: column;
    align-items: flex-start;
    div.footer-love {
      span.title {
        font-size: 20px;
        margin-bottom: 18px;
      }
      span.subtitle {
        font-size: 17px;
      }
      margin-bottom: 20px;
    }
    div.footer-phonenum  {
      span {
        font-size: 18px;
        font-weight: bold;
        img {
          width: 18px;
          transform: matrix(0.99, 0.16, -0.17, 0.99, 0, 0);
          margin-right: 10px;
        }
      }
      margin-bottom: 20px;
    }
    div.footer-address  {
      .title {
        font-size: 20px;
      }
      .address {
        font-size: 17px;
      }
    }
  }
}
</style>