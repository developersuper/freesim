<template>
  <div class="context-menu" v-show="show" :style="style" ref="context" tabindex="0" @blur="close" @contextmenu.prevent="">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'ContextMenu',
  props: {
    display: Boolean,
  },
  data() {
    return {
      left: 'unset',
      top: 'unset',
      right: 'unset',
      bottom: 'unset',
      show: false,
    };
  },
  computed: {
    style() {
      return {
        top: this.top,
        left: this.left,
        right: this.right,
        bottom: this.bottom 
      };
    },
  },
  methods: { 
    close() {
        this.show = false
        this.left = 'unset'
        this.top = 'unset'
        this.right = 'unset'
        this.bottom = 'unset'
    },
    open(evt) {
      // updates position of context menu
      const ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
      const x = evt.pageX || evt.clientX;
      const y = evt.pageY || evt.clientY;
      if(x <= ww - x) {
        this.left = x + 'px'
        this.right = 'unset'
      }else {
        this.right = (ww - x) + 'px'
        this.left = 'unset'
      }
      if(y <= wh - y) {
        this.top = y + 'px'
        this.bottom = 'unset'
      }else {
        this.bottom = (wh - y) + 'px'
        this.top = 'unset'
      }
      console.log(x, y, this.top, this.right, this.left, this.bottom)
      // make element focused 
      this.$nextTick(() => this.$el.focus());
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.context-menu {
  position: fixed;
  background: white;
  z-index: 999;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
</style>