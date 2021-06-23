<template>
  <div class="contacts">
    <div class="tab-header">
      <div class="tab-header-left">
        <span :class="tab === 'all' ? {'active action': true} : {'action': true}" @click="handleTab('all')">All</span>
        <span :class="tab === 'fav' ? {'active action': true} : {'action': true}" @click="handleTab('fav')">Favorite</span>
      </div>
      <span class="action" @click="addContact">Add Contact</span>
    </div>
    <div class="tab-body">
      <template v-for="(contact, index) in (tab === 'all' ? chats : chats.filter(item => item.fav))" :key="index">
        <contact-item :item="contact" @click="goChat(index)"></contact-item>
      </template>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ContactItem from '../ContactItem'

export default {
  name: 'Contacts',
  components: {
    ContactItem,
  },
  computed: {
    ...mapGetters(['chats'])
  },
  data() {
    return {
      tab: 'all',
    }
  },
  methods: {
    handleTab(tab) {
      this.tab = (tab === 'all' ? 'all' : 'fav')
    },
    addContact() {
      this.$store.commit('setModal', 'addcontact')
    },
    goChat(index) {
      this.$store.commit('setModal', '')
      this.$store.commit('setMode', 'chats')
      this.$store.commit('setActiveChatter', index)
    }
  }
}
</script>

<style lang="scss" scoped>
div.contacts {
  height: 496px;
  div.tab-header {
    widows: 100%;
    height: 40px;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0px 20px;
    div.tab-header-left {
      display: flex;
      span {
        margin-right: 14px;
      }
      span.active {
        color: rgba(255, 50, 50, 0.6);
        border-bottom: 1.5px solid rgba(255, 50, 50, 0.6);
      }
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      color: rgba(153, 153, 153, 0.7);
    }
    
  }
  div.tab-body {
    height: 446px;
    padding-top: 10px;
    overflow-y: auto;
  }
}
</style>