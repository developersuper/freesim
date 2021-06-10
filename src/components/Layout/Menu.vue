<template>
  <div class="toolbarmenu">
    <span class="title action" @click.stop="clickMenu">{{title}}</span>
    <div v-if="show" class="menubody">
      <template v-for="(item, index) in items" :key="index">
        <div v-if="item.text !== null" class="menubodyitem menuhover">
          <span class="itemtext">{{item.text}}</span>
          <span class="hotkey">{{item.hotkey}}</span>
        </div>
        <div v-else class="divider">
          <hr>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    items: Array,
  },
  name: 'Menu',
  components: {
  },
  created() {
    document.body.addEventListener('click', this.onOutClick)
    
  },
  mounted() {
    this.show = false
    this.emitter.on('menu', (e) => {
      if(e.title != this.title) {
        this.show = false;
      } 
    })
  },
  beforeUnmount() {
    document.body.removeEventListener('click', this.onOutClick)
  }
  ,
  data() {
    return {
      show: false,
    }
  },
  methods: {
    onOutClick() {
      this.show = false
    },
    clickMenu() {
      this.show = !this.show
      if(this.show) {
        this.emitter.emit('menu', {title: this.title})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
div.toolbarmenu {
  position: relative;
  margin-right: 22px;
  span.title {
    font-size: 11px;
    color: #4A4A4A;
    line-height: 13px;
  }
  div.menubody {
    background: white;
    z-index: 9999;
    position: absolute;
    border: 1px solid #C1C1C1;
    display: flex;
    flex-direction: column;
    padding: 3px 0px;
    width: 150px;
    left: -15px;
    div.menubodyitem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3px 15px;
      font-size: 11px;
      color: #4A4A4A;
      span {
        white-space: nowrap;
      }
      span.hotkey {
        min-width: 39px;
      }
    }
    div.divider {
      hr {
        margin: 3px 5px;
        border: none;
        border-bottom: 1px solid #C1C1C1;
      }
    }
  }
}
</style>