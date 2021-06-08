<template>
  <div class="contactitem menuhover">
    <div class="callhistoryitem-history">
      <div class="left">
        <img :src="item?.avatar" alt="">
        <div class="nameandmessage">
          <span class="name">
            {{item?.name}}
          </span>
          <span class="log">
            <span class="log-icon">
              <svg v-if="item.type === 'Incoming'" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.9791 1.65628L3.4091 2.66978C3.5961 3.11178 3.4926 3.63128 3.1521 3.95428L2.2051 4.85328C2.2631 5.39078 2.4441 5.92028 2.7471 6.44178C3.03504 6.9457 3.42116 7.38674 3.8826 7.73878L5.0201 7.35978C5.4516 7.21578 5.9211 7.38078 6.1851 7.76978L6.8016 8.67478C7.1091 9.12678 7.0541 9.74978 6.6726 10.1328L6.2636 10.5428C5.8566 10.9518 5.2751 11.0998 4.7376 10.9323C3.4681 10.5363 2.3011 9.36078 1.2361 7.40528C0.169598 5.44728 -0.206902 3.78628 0.107098 2.42178C0.239098 1.84728 0.647598 1.39028 1.1816 1.21978L1.7196 1.04778C2.2246 0.886279 2.7631 1.14678 2.9796 1.65628H2.9791ZM5.5441 4.21928L8.6546 1.10778C8.72143 1.04051 8.81126 1.00105 8.90601 0.997356C9.00076 0.993657 9.09339 1.02599 9.16526 1.08785C9.23713 1.1497 9.2829 1.23649 9.29335 1.33073C9.3038 1.42497 9.27816 1.51968 9.2216 1.59578L9.1851 1.63778L6.0756 4.74978H8.4211C8.51172 4.74978 8.59927 4.7826 8.66756 4.84216C8.73586 4.90172 8.78027 4.984 8.7926 5.07378L8.7961 5.12478C8.79609 5.2154 8.76328 5.30295 8.70371 5.37124C8.64415 5.43954 8.56188 5.48395 8.4721 5.49628L8.4206 5.49978H5.1431L5.0941 5.49278L5.0466 5.47978L5.0126 5.46528C4.97229 5.44713 4.93568 5.42171 4.9046 5.39028L4.8846 5.36878L4.8721 5.35278L4.8481 5.31828L4.8251 5.27278L4.8091 5.22678L4.8006 5.19178L4.7956 5.15128L4.7951 5.12478V1.87228C4.79513 1.77727 4.83122 1.68581 4.89608 1.61638C4.96095 1.54696 5.04975 1.50474 5.14454 1.49827C5.23933 1.49179 5.33304 1.52154 5.40675 1.5815C5.48045 1.64145 5.52865 1.72715 5.5416 1.82128L5.5451 1.87228L5.5446 4.21928L8.6546 1.10778L5.5446 4.21928H5.5441Z" fill="#24FF20"/>
              </svg>
              <span v-if="item.type === 'Outgoing'">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.9791 0.659074L3.4091 1.67257C3.5961 2.11457 3.4926 2.63407 3.1521 2.95707L2.2051 3.85607C2.2631 4.39357 2.4441 4.92307 2.7471 5.44457C3.03504 5.9485 3.42116 6.38953 3.8826 6.74157L5.0201 6.36257C5.4516 6.21857 5.9211 6.38357 6.1851 6.77257L6.8016 7.67757C7.1091 8.12957 7.0541 8.75257 6.6726 9.13557L6.2636 9.54557C5.8566 9.95457 5.2751 10.1026 4.7376 9.93507C3.4681 9.53907 2.3011 8.36357 1.2361 6.40807C0.169598 4.45007 -0.206902 2.78907 0.107098 1.42457C0.239098 0.850074 0.647598 0.393074 1.1816 0.222574L1.7196 0.050574C2.2246 -0.110926 2.7626 0.149574 2.9791 0.659074Z" fill="#24FF20"/>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.712178 4.87706L4.16788 1.42192L4.16677 4.02813L4.17065 4.08476C4.18504 4.18928 4.23859 4.28445 4.32047 4.35103C4.40235 4.41761 4.50647 4.45064 4.61178 4.44345C4.71709 4.43626 4.81574 4.38938 4.88781 4.31229C4.95987 4.2352 4.99997 4.13364 5 4.02813V0.416416L4.99944 0.386989L4.99389 0.342017L4.98445 0.303151L4.96667 0.252071L4.94112 0.201545L4.91445 0.163235L4.90057 0.145468L4.87835 0.121593C4.84381 0.0866957 4.80314 0.0584626 4.75836 0.0383105L4.72059 0.0222087L4.66782 0.00777292L4.61338 0H0.972147L0.914931 0.0038867C0.815191 0.0175719 0.723783 0.0668936 0.657611 0.142731C0.591439 0.218567 0.554979 0.315789 0.554975 0.416416L0.558864 0.473049C0.572556 0.572741 0.621901 0.664105 0.697774 0.730246C0.773647 0.796386 0.870916 0.832828 0.971592 0.832832H3.57739L0.122805 4.28853L0.0822539 4.33517C0.0194097 4.41967 -0.00907326 4.52484 0.00254059 4.62949C0.014154 4.73414 0.065002 4.83051 0.144847 4.8992C0.224691 4.96789 0.327604 5.00379 0.432868 4.99968C0.538133 4.99558 0.637933 4.95176 0.712178 4.87706Z" fill="#24FF20"/>
                </svg>
              </span>
              <span v-if="item.type === 'Missed'">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.01917 1.709L3.52229 2.68827C3.74118 3.11537 3.67603 3.64106 3.36012 3.98815L2.48155 4.95413C2.57878 5.48593 2.7981 6.00075 3.13851 6.49864C3.46261 6.98011 3.88001 7.39166 4.366 7.70893L5.47267 7.24759C5.89246 7.07235 6.37279 7.2025 6.66459 7.57111L7.34575 8.4285C7.68555 8.85674 7.67635 9.4821 7.32395 9.89203L6.9461 10.3309C6.57016 10.7686 6.00107 10.9588 5.45274 10.8312C4.15764 10.5293 2.90763 9.44247 1.70218 7.57028C0.495054 5.69571 -0.00216099 4.06676 0.210996 2.68292C0.300539 2.10029 0.674448 1.61458 1.19452 1.40541L1.71847 1.19444C2.21027 0.996368 2.76592 1.21674 3.01917 1.709Z" fill="#EB5757"/>
                </svg>
                <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.19027 3.83334L0.356934 1M3.19027 1L0.356934 3.83334" stroke="#EB5757" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </span>
            <span class="log-text">
              {{ `${item.type} (${item?.duration})` }}
            </span>
          </span>
      </div>
      </div>
      <div class="status">
        <span class="top">
          <span class="time">{{item?.time}}</span>
        </span>
        <span v-if="item?.day !== 'Today'" class="bottom">
          {{item?.day}}
        </span>
      </div>
    </div>
    <div v-if="item.type === 'Missed'" class="callback">
      <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.27178 1.34304L4.98364 2.72858C5.29334 3.33289 5.20116 4.07668 4.75418 4.56776L3.51111 5.93452C3.64868 6.68696 3.95899 7.41536 4.44062 8.11982C4.89919 8.80104 5.48977 9.38334 6.17739 9.83225L7.7432 9.1795C8.33715 8.93156 9.01676 9.11571 9.42962 9.63725L10.3934 10.8503C10.8742 11.4563 10.8612 12.3411 10.3625 12.9211L9.82792 13.542C9.29602 14.1614 8.49083 14.4305 7.715 14.2499C5.88258 13.8227 4.11396 12.285 2.40839 9.63607C0.700445 6.98376 -0.00305758 4.679 0.298535 2.72102C0.425227 1.89667 0.954267 1.20945 1.6901 0.913489L2.43143 0.614997C3.12728 0.334744 3.91345 0.646545 4.27178 1.34304Z" fill="#EB5757"/>
      </svg>
      <span>Call Back</span>
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
  div.callhistoryitem-history {
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
        span.log {
          display: flex;
          span.log-text {
            font-size: 13px;
            color: #8A8A8A;
            margin-left: 8px; 
          }
          span.log-icon {
            width: 10px;
            height: 10px;
            min-width: 10px;
            position: relative;
            svg:nth-child(2) {
              position: absolute;
              top: 2px;
              right: 0px;
            }
          }
        } 
      }
    }
    div.status {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 55px;
      width: 100%;
      span.top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span.time {
          font-size: 10px;
          font-weight: 500;
          color: #B7B7B7;
          margin-left: 4.5px;
        }
      }
      span.bottom {
        font-size: 10px;
        font-weight: 500;
        color: #B7B7B7;
        text-align: right;
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