<template>
  <div class="msgbox">

  </div>
</template>

<script>

export default {
  name: 'ChatBoxMsgBox',
  components: {
  }
}
</script>
<style lang="scss" scoped>
div.msgbox {
  height: calc(100% - 70px);
  overflow-y: auto;
}
@media screen and (max-width: 900px) {
  div.msgbox {
  height: calc(100% - 168px);
}
}
</style>