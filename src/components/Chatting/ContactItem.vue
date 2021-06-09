<template>
  <div class="contactitem menuhover">
    <div class="contactitem-each">
      <div class="left">
        <img :src="item?.avatar" alt="">
        <div class="nameandmessage">
          <span class="name">
            {{item?.name}}
          </span>
          <span :class="item.lastView === 'online' ? {'lastview-green': true} : {'lastview': true}">
            {{item.lastView }}
          </span>
          <span v-if="item.fav" class="favicon">
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6063 4.72813L9.39115 4.11553L7.50687 0.295514C7.4554 0.190924 7.37074 0.106256 7.26615 0.0547913C7.00384 -0.0747009 6.68509 0.0332093 6.55394 0.295514L4.66966 4.11553L0.454525 4.72813C0.338314 4.74473 0.232064 4.79952 0.150716 4.88253C0.0523714 4.98361 -0.00182104 5.1196 4.67266e-05 5.26061C0.00191449 5.40163 0.0596897 5.53614 0.160677 5.63458L3.21038 8.60792L2.48988 12.8065C2.47298 12.9041 2.48379 13.0046 2.52107 13.0964C2.55836 13.1882 2.62063 13.2678 2.70083 13.326C2.78103 13.3843 2.87594 13.4189 2.97481 13.4259C3.07367 13.433 3.17254 13.4122 3.26019 13.3659L7.0304 11.3837L10.8006 13.3659C10.9035 13.4207 11.0231 13.439 11.1376 13.419C11.4265 13.3692 11.6207 13.0953 11.5709 12.8065L10.8504 8.60792L13.9001 5.63458C13.9831 5.55323 14.0379 5.44698 14.0545 5.33077C14.0994 5.04024 13.8968 4.7713 13.6063 4.72813Z" fill="#F2C94C"/>
            </svg>
          </span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactItem',
  props: {
    item: Object,
  },
  components: {
  },
  mounted() {
    console.log(this.item)
  }
}
</script>
<style lang="scss" scoped>
div.contactitem {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 12px 20px;
  div.contactitem-each {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 45px;
        height: 45px;
        margin-right: 15px;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
      }
      div.nameandmessage {
        max-width: 189px;
        width: 100%;
        position: relative;
        span {
          display: block;
          text-overflow: ellipsis;
          line-height: 1;
        }
        span.name {
          position: relative;
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
          width: fit-content;
          margin-bottom: 2px;
        }
        span.lastview-green {
          font-weight: 500;
          font-size: 13px;
          line-height: 15px;
          color: #00DE5E;
        }
        span.lastview {
          font-size: 13px;
          line-height: 15px;
          color: #8A8A8A;
        }
        span.favicon {
          position: absolute;
          top: -10px;
          right: -20px;
        }
      }
    }
  }
  div.callback {
    width: 90px;
    height: 25px;
    display: flex;
    align-items: center;
    background: #fbdbdb;
    border: 1px solid #EB5757;
    border-radius: 12.5px;
    padding: 5px 9px;
    margin-left: 60px;
    span {
      color: #FF005E;
      font-size: 13px;
      margin-left: 5px;
    }
  } 
}
</style>