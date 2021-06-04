<template>
  <div class="chat-box">
    <chat-box-header />
    <chat-box-msg-box />
    <chat-box-bottom />
  </div>
</template>

<script>
import ChatBoxHeader from './ChatBoxHeader'
import ChatBoxMsgBox from './ChatBoxMsgBox'
import ChatBoxBottom from './ChatBoxBottom'

export default {
  name: 'ChatBox',
  components: {
    ChatBoxHeader,
    ChatBoxMsgBox,
    ChatBoxBottom
  }
}
</script>

<style lang="scss" scoped>
div.chat-box {
  min-width:320px;
  width: 100%;
  border-top: 1px solid #C1C1C1;
  border-right: 1px solid #C1C1C1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
}
</style>