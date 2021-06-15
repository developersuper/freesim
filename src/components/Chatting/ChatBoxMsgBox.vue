<template>
  <context-menu :display="true" ref="msgMenu">
    <ul class="contextmenu">
      <li @click="contextAction($event, 'reply')"> Reply </li>
      <li @click="contextAction($event, 'copy')"> Copy </li>
      <li @click="contextAction($event, 'select')"> Select </li>
      <li @click="contextAction($event, 'info')"> Info </li>
      <li @click="contextAction($event, 'showinfolder')"> Show in Folder </li>
      <hr class="solid">
      <li @click="contextAction($event, 'delete')"> Delete </li>
    </ul>
  </context-menu>
  <context-menu :display="true" ref="msgBoxMenu">
    <ul class="contextmenu">
      <li @click="contextAction($event, 'select')"> Select </li>
      <hr class="solid">
      <li @click="contextAction($event, 'clear')"> Clear all</li>
    </ul>
  </context-menu>
  <div class="msgbox" @contextmenu="openMsgBoxMenu">
    <template v-for="(message, index) in messages" :key="index">
      <div v-if="index === 0 || (index > 0 && messages[index-1].day !== message.day)" class="msgbox-day">
        <span>{{message.day}}</span>
      </div>
      <div 
        v-if="mode === 'chats' || (mode === 'voicemail' && message.type === 'voice' || mode === 'chatscalling')" 
        class="message"
      >
        <div class="message-upper">
          <span v-if="action === 'select'" @click="selectMsg(index)" :class="selected.has(index) ? {'select-check-active action': true} : {'select-check action': true}"></span>
          <div :class="message.received ? {'msg-box-wrapper received': true} : {'msg-box-wrapper sent': true}">
            <div :class="message.type === 'text' ? { 'msg-box': true } : {'msg-box voice-padding': true}" @contextmenu="openMsgMenu($event, index)">
              <div v-if="action === 'reply' && id === index" class="reply action" @click="goBack">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.96663 1.57893C8.00115 1.56374 8.03893 1.55747 8.0765 1.56069C8.11408 1.56391 8.15024 1.57652 8.18166 1.59737C8.21309 1.61822 8.23877 1.64663 8.25635 1.67999C8.27393 1.71335 8.28284 1.7506 8.28226 1.78831V3.58987C8.28226 3.79707 8.36457 3.99579 8.51108 4.1423C8.65759 4.28881 8.85631 4.37112 9.06351 4.37112C10.1057 4.37112 12.2088 4.37893 14.2198 5.6555C15.7573 6.6305 17.3291 8.4055 18.2744 11.7117C16.6807 10.1758 14.8604 9.343 13.2666 8.90081C12.287 8.63024 11.2803 8.46987 10.2651 8.42268C9.84952 8.40443 9.43329 8.4086 9.0182 8.43518H8.99788L8.99007 8.43675H8.98851L9.06351 9.21487L8.98538 8.43675C8.79254 8.45613 8.61379 8.54649 8.48385 8.69029C8.35391 8.8341 8.28206 9.02106 8.28226 9.21487V11.0164C8.28226 11.1852 8.11038 11.2914 7.96663 11.2258L1.74163 6.643C1.7205 6.62732 1.6986 6.61272 1.67601 6.59925C1.64203 6.57883 1.61392 6.54997 1.5944 6.51547C1.57489 6.48097 1.56463 6.44201 1.56463 6.40237C1.56463 6.36273 1.57489 6.32377 1.5944 6.28927C1.61392 6.25477 1.64203 6.22591 1.67601 6.2055C1.69861 6.19203 1.72051 6.17743 1.74163 6.16175L7.96663 1.57893ZM9.84476 9.97425C9.95101 9.97425 10.0682 9.97893 10.1932 9.98362C10.8713 10.0149 11.8088 10.118 12.8494 10.4071C14.9213 10.9821 17.3744 12.2852 19.0057 15.2196C19.0939 15.378 19.2345 15.5007 19.4033 15.5669C19.5721 15.633 19.7587 15.6383 19.931 15.582C20.1033 15.5257 20.2507 15.4112 20.3478 15.2581C20.445 15.105 20.4859 14.9229 20.4635 14.743C19.7385 8.94612 17.5166 5.89612 15.0573 4.33675C13.1119 3.10237 11.1088 2.86487 9.84476 2.81956V1.78831C9.8449 1.46654 9.75819 1.1507 9.59377 0.874112C9.42935 0.597524 9.19333 0.370446 8.91059 0.216838C8.62785 0.0632294 8.3089 -0.0112126 7.98738 0.00136679C7.66585 0.0139462 7.35369 0.11308 7.08382 0.288309L0.843195 4.88206C0.585195 5.0431 0.372424 5.26716 0.224911 5.53313C0.0773993 5.7991 0 6.09823 0 6.40237C0 6.70651 0.0773993 7.00564 0.224911 7.27161C0.372424 7.53758 0.585195 7.76164 0.843195 7.92268L7.08382 12.5164C7.35369 12.6917 7.66585 12.7908 7.98738 12.8034C8.3089 12.816 8.62785 12.7415 8.91059 12.5879C9.19333 12.4343 9.42935 12.2072 9.59377 11.9306C9.75819 11.654 9.8449 11.3382 9.84476 11.0164V9.97425Z" fill="#8A8A8A"/>
                </svg>
              </div>
              <div v-if="message.type === 'text'" class="msg-text">
                <span>{{message.text}}</span>
              </div>
              <div v-if="message.type === 'voice'" class="msg-voice">
                <span class="play-btn action">
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16.1212V0L14 8.06061L0 16.1212Z" fill="white"/>
                  </svg>
                </span>
                <div class="msg-voice-right">
                  <span class="icon">
                    <svg width="102" height="22" viewBox="0 0 102 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" width="2" height="22" rx="1" fill="#CBCBCB"/>
                      <rect x="28" width="2" height="22" rx="1" fill="#CBCBCB"/>
                      <rect x="68" y="7" width="2" height="15" rx="1" fill="#CBCBCB"/>
                      <rect x="32" width="2" height="22" rx="1" fill="#CBCBCB"/>
                      <rect x="72" width="2" height="22" rx="1" fill="#CBCBCB"/>
                      <rect x="76" width="2" height="22" rx="1" fill="#CBCBCB"/>
                      <rect x="80" width="2" height="22" rx="1" fill="#CBCBCB"/>
                      <rect x="36" y="6" width="2" height="16" rx="1" fill="#CBCBCB"/>
                      <rect x="84" y="6" width="2" height="16" rx="1" fill="#CBCBCB"/>
                      <rect x="40" y="11" width="2" height="11" rx="1" fill="#CBCBCB"/>
                      <rect x="44" y="15" width="2" height="7" rx="1" fill="#CBCBCB"/>
                      <rect x="60" y="14" width="2" height="8" rx="1" fill="#CBCBCB"/>
                      <rect x="24" y="12" width="2" height="10" rx="1" fill="#CBCBCB"/>
                      <rect x="64" y="11" width="2" height="11" rx="1" fill="#CBCBCB"/>
                      <rect x="16" y="16" width="2" height="6" rx="1" fill="#CBCBCB"/>
                      <rect x="56" y="16" width="2" height="6" rx="1" fill="#CBCBCB"/>
                      <rect x="12" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="100" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="8" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="96" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="4" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="92" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="52" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="88" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                      <rect x="48" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                    </svg>
                  </span>
                  <span class="duration">{{message.duration}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!(action === 'reply' && id === index)" :class="message.received ? {'status received': true} : {'status sent': true}">
          <span class="status">
            <span class="time">{{message.time}}</span>
            <span v-if="message.checked1">
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0H10.4323L2.98065 5.90806L0.503199 4.45323H0L2.98065 9.29677L11 0Z" fill="#00DE5E"/>
              </svg>
            </span>
            <span v-if="message.checked2">
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0H10.4323L2.98065 5.90806L0.503199 4.45323H0L2.98065 9.29677L11 0Z" fill="#00DE5E"/>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </template>
    <div 
      v-if="call"
      class="chatscalling"
    >
      <div class="chatscalling-inner">
        <img :src="require('@/assets/images/videocalluser.png')" alt="" class="">
        <span class="endcall-btn" @click.stop="endCall">
          <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="33" cy="33" r="33" fill="#FF352D"/>
            <path d="M33.5706 30.7971C37.1425 30.7983 40.9209 31.1594 40.9209 32.7958C40.9209 35.1364 40.6229 36.8789 45.2805 37.3856C49.9358 37.8924 49.3365 34.5259 49.3354 32.2586C49.3354 29.6404 43.2163 25.9996 33.5706 25.9985C23.9248 25.9996 17.8092 29.6437 17.8103 32.2631C17.8092 34.5326 17.2043 37.8912 21.8596 37.3845C26.516 36.8789 26.2192 35.1375 26.2181 32.7935C26.2214 31.1605 29.9987 30.7983 33.5706 30.7971Z" fill="white"/>
          </svg>
        </span>
        <div class="chatscall-hover" @click="backToCall">
          Back to<br>video call
        </div>
      </div>
    </div>
  </div>
  <div class="chatboxbottom">
    <div v-if="action === 'reply'" class="floating">
      <div class="floating-text">
        <span class="floating-text-name">Jane Fisher</span>
        <span class="floating-text-msg">Then let's go together if you succeed!</span>
      </div>
      <span class="close-btn action" @click="closeReply">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L1 13M13 13L1 1L13 13Z" stroke="#9A9A9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <template v-if="chatmode === 'message' && mode === 'chats'">
      <div class="chatboxbottom-msg-left">
        <span class="icon action">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.375 0C4.20547 0 0 4.20547 0 9.375C0 14.5445 4.20547 18.75 9.375 18.75C14.5445 18.75 18.75 14.5445 18.75 9.375C18.75 4.20547 14.5445 0 9.375 0ZM9.375 1.5625C13.6992 1.5625 17.1875 5.05078 17.1875 9.375C17.1875 13.6992 13.6992 17.1875 9.375 17.1875C5.05078 17.1875 1.5625 13.6992 1.5625 9.375C1.5625 5.05078 5.05078 1.5625 9.375 1.5625ZM5.85938 6.25C5.54857 6.25 5.2505 6.37347 5.03073 6.59323C4.81097 6.813 4.6875 7.11107 4.6875 7.42188C4.6875 7.73268 4.81097 8.03075 5.03073 8.25052C5.2505 8.47029 5.54857 8.59375 5.85938 8.59375C6.17018 8.59375 6.46825 8.47029 6.68802 8.25052C6.90778 8.03075 7.03125 7.73268 7.03125 7.42188C7.03125 7.11107 6.90778 6.813 6.68802 6.59323C6.46825 6.37347 6.17018 6.25 5.85938 6.25ZM12.8906 6.25C12.5798 6.25 12.2818 6.37347 12.062 6.59323C11.8422 6.813 11.7188 7.11107 11.7188 7.42188C11.7188 7.73268 11.8422 8.03075 12.062 8.25052C12.2818 8.47029 12.5798 8.59375 12.8906 8.59375C13.2014 8.59375 13.4995 8.47029 13.7193 8.25052C13.939 8.03075 14.0625 7.73268 14.0625 7.42188C14.0625 7.11107 13.939 6.813 13.7193 6.59323C13.4995 6.37347 13.2014 6.25 12.8906 6.25ZM5.32188 11.7188L3.97969 12.5C5.06016 14.3648 7.06797 15.625 9.375 15.625C11.682 15.625 13.6898 14.3648 14.7703 12.5L13.4281 11.7188C13.0187 12.4316 12.4282 13.0238 11.7165 13.4353C11.0048 13.8469 10.1971 14.0632 9.375 14.0625C8.55289 14.0632 7.74516 13.8469 7.03347 13.4353C6.32177 13.0238 5.73135 12.4316 5.32188 11.7188Z" fill="#9A9A9A"/>
          </svg>
        </span>
        <span class="icon action">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5278 1.72485C13.228 -0.574951 9.48292 -0.574951 7.18556 1.72485L0.813499 8.09204C0.771995 8.13354 0.750023 8.1897 0.750023 8.24829C0.750023 8.30688 0.771995 8.36304 0.813499 8.40454L1.71438 9.30542C1.75556 9.34642 1.8113 9.36944 1.86941 9.36944C1.92751 9.36944 1.98326 9.34642 2.02444 9.30542L8.3965 2.93823C9.18752 2.14722 10.2398 1.71265 11.3579 1.71265C12.4761 1.71265 13.5283 2.14722 14.3169 2.93823C15.1079 3.72925 15.5425 4.78149 15.5425 5.89722C15.5425 7.01538 15.1079 8.06519 14.3169 8.8562L7.82277 15.3479L6.77052 16.4001C5.78664 17.384 4.18752 17.384 3.20363 16.4001C2.72756 15.9241 2.46633 15.2917 2.46633 14.6179C2.46633 13.9441 2.72756 13.3118 3.20363 12.8357L9.6465 6.39526C9.81007 6.23413 10.0249 6.1438 10.2544 6.1438H10.2569C10.4863 6.1438 10.6987 6.23413 10.8599 6.39526C11.0234 6.55884 11.1113 6.77368 11.1113 7.00317C11.1113 7.23022 11.021 7.44507 10.8599 7.6062L5.59377 12.8674C5.55226 12.9089 5.53029 12.9651 5.53029 13.0237C5.53029 13.0823 5.55226 13.1384 5.59377 13.1799L6.49465 14.0808C6.53582 14.1218 6.59157 14.1448 6.64968 14.1448C6.70778 14.1448 6.76353 14.1218 6.8047 14.0808L12.0684 8.81714C12.5542 8.3313 12.8203 7.68677 12.8203 7.00073C12.8203 6.3147 12.5518 5.66772 12.0684 5.18433C11.065 4.18091 9.4341 4.18335 8.43068 5.18433L7.80568 5.81177L1.99026 11.6248C1.59556 12.0171 1.28268 12.484 1.06979 12.9982C0.856888 13.5124 0.748199 14.0638 0.750023 14.6204C0.750023 15.7507 1.19192 16.8127 1.99026 17.6111C2.81789 18.4363 3.90188 18.8489 4.98586 18.8489C6.06984 18.8489 7.15383 18.4363 7.97902 17.6111L15.5278 10.0671C16.6387 8.95386 17.2539 7.47192 17.2539 5.89722C17.2564 4.32007 16.6411 2.83813 15.5278 1.72485Z" fill="#9A9A9A"/>
          </svg>
        </span>
        <input type="text" placeholder="Message" class="msg" v-model="newMessage">
      </div>
      <span :class="newMessage === '' ? {'action': true} : {'send-icon action': true}">
        <svg v-if="newMessage === ''" @click="chatmode = 'voice'" width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.75 4.40001C9.75 2.52224 8.183 1 6.25 1C4.317 1 2.75 2.52224 2.75 4.40001V8.65003C2.75 10.5278 4.317 12.05 6.25 12.05C8.183 12.05 9.75 10.5278 9.75 8.65003V4.40001Z" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.5 13.1482C10.8438 13.8725 10.036 14.4525 9.13071 14.8495C8.22537 15.2464 7.24328 15.4511 6.25 15.45C5.25672 15.4511 4.27463 15.2464 3.36929 14.8495C2.46395 14.4525 1.65621 13.8725 1 13.1482" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.25 15.45V18" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.5 18H8" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="newMessage !== ''" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.4012 0.563709L20.5949 10.0212C20.6996 10.0728 20.7878 10.1526 20.8494 10.2517C20.911 10.3508 20.9437 10.4651 20.9437 10.5818C20.9437 10.6985 20.911 10.8129 20.8494 10.912C20.7878 11.011 20.6996 11.0909 20.5949 11.1425L1.39995 20.6C1.29241 20.6528 1.17196 20.6736 1.05294 20.6599C0.933912 20.6462 0.821332 20.5986 0.728604 20.5227C0.635876 20.4468 0.566909 20.3459 0.529916 20.232C0.492923 20.118 0.489463 19.9958 0.519949 19.88L2.9812 10.5875L0.518699 1.28496C0.487709 1.16885 0.490847 1.04627 0.52774 0.931904C0.564633 0.817536 0.633714 0.716229 0.72671 0.640117C0.819706 0.564006 0.932672 0.516318 1.05208 0.502767C1.17148 0.489215 1.29226 0.510374 1.39995 0.563709H1.4012ZM2.07995 2.29246L4.09245 9.89496L4.16995 9.87996L4.24995 9.87496H12.9999C13.1561 9.87467 13.3068 9.93287 13.4222 10.0381C13.5376 10.1433 13.6094 10.2879 13.6235 10.4435C13.6377 10.599 13.593 10.7542 13.4984 10.8785C13.4038 11.0028 13.2661 11.0871 13.1124 11.115L12.9999 11.125H4.24995C4.21139 11.1251 4.1729 11.1218 4.13495 11.115L2.0812 18.8725L18.9037 10.5825L2.07995 2.29246Z" fill="white"/>
        </svg>
      </span>
    </template>
    <template v-if="chatmode === 'voice' && mode === 'chats'">
      <span class="text">Record a voice message</span>
      <div class="voicemsg-left">
        <span class="recorded">
          <span class="close action" @click="chatmode = 'message'">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.1998 0.800049L0.799805 7.20005M7.1998 7.20005L0.799805 0.800049L7.1998 7.20005Z" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="alarm"></span>
          <span class="time">00:02</span>
          <span class="status">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.2002 4.40005L4.8002 8.00005L10.8002 0.800049" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </span>
        <span class="microphone action">
          <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 4.40001C9.75 2.52224 8.183 1 6.25 1C4.317 1 2.75 2.52224 2.75 4.40001V8.65003C2.75 10.5278 4.317 12.05 6.25 12.05C8.183 12.05 9.75 10.5278 9.75 8.65003V4.40001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.5 13.1482C10.8438 13.8725 10.036 14.4525 9.13071 14.8495C8.22537 15.2464 7.24328 15.4511 6.25 15.45C5.25672 15.4511 4.27463 15.2464 3.36929 14.8495C2.46395 14.4525 1.65621 13.8725 1 13.1482" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.25 15.45V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 18H8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </template>
    <template v-if="mode === 'voicemail'">
      <div class="voicemail-left">
        <span v-if="action === ''" class="text">Voice mail</span>
        <div v-if="action === 'recording'" class="recording">
          <span class="duration">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="#F60000"/>
            </svg>
            00:07
          </span>
          <span class="wave">
            <svg width="70" height="41" viewBox="0 0 70 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="44" y="7" width="2" height="28" rx="1" fill="#FFB4B4"/>
              <rect x="40" y="13" width="2" height="16" rx="1" fill="#FFB4B4"/>
              <rect x="36" y="6" width="2" height="30" rx="1" fill="#FFB4B4"/>
              <rect x="32" y="1" width="2" height="40" rx="1" fill="#FFB4B4"/>
              <rect x="28" y="3" width="2" height="36" rx="1" fill="#FFB4B4"/>
              <rect x="24" y="1" width="2" height="40" rx="1" fill="#FFB4B4"/>
              <rect x="20" y="8" width="2" height="26" rx="1" fill="#FFB4B4"/>
              <rect x="16" y="13" width="2" height="16" rx="1" fill="#FFB4B4"/>
              <rect x="12" y="15" width="2" height="12" rx="1" fill="#FFB4B4"/>
              <rect x="48" y="8" width="2" height="25" rx="1" fill="#FFB4B4"/>
              <rect x="52" width="2" height="39" rx="1" fill="#FFB4B4"/>
              <rect x="56" y="10" width="2" height="22" rx="1" fill="#FFB4B4"/>
              <rect x="60" y="13" width="2" height="16" rx="1" fill="#FFB4B4"/>
              <rect x="64" y="15" width="2" height="12" rx="1" fill="#FFB4B4"/>
              <rect x="68" y="18" width="2" height="6" rx="1" fill="#FFB4B4"/>
              <rect x="4" y="18" width="2" height="8" rx="1" fill="#FFB4B4"/>
              <rect x="8" y="16" width="2" height="11" rx="1" fill="#FFB4B4"/>
              <rect y="19" width="2" height="6" rx="1" fill="#FFB4B4"/>
            </svg>
          </span>
        </div>
        <div v-if="action === 'recorded'" class="recorded">
          <span class="close-recorded action" @click="action = ''">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="11" fill="#FF3232"/>
              <path d="M15 7L7 15M15 15L7 7L15 15Z" stroke="white" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <div class="recorded-iconandduration">
            <svg width="102" height="22" viewBox="0 0 102 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" width="2" height="22" rx="1" fill="#7A7A7A"/>
              <rect x="28" width="2" height="22" rx="1" fill="#7A7A7A"/>
              <rect x="68" y="7" width="2" height="15" rx="1" fill="#7A7A7A"/>
              <rect x="32" width="2" height="22" rx="1" fill="#7A7A7A"/>
              <rect x="72" width="2" height="22" rx="1" fill="#7A7A7A"/>
              <rect x="76" width="2" height="22" rx="1" fill="#7A7A7A"/>
              <rect x="80" width="2" height="22" rx="1" fill="#7A7A7A"/>
              <rect x="36" y="6" width="2" height="16" rx="1" fill="#7A7A7A"/>
              <rect x="84" y="6" width="2" height="16" rx="1" fill="#7A7A7A"/>
              <rect x="40" y="11" width="2" height="11" rx="1" fill="#7A7A7A"/>
              <rect x="44" y="15" width="2" height="7" rx="1" fill="#7A7A7A"/>
              <rect x="60" y="14" width="2" height="8" rx="1" fill="#7A7A7A"/>
              <rect x="24" y="12" width="2" height="10" rx="1" fill="#7A7A7A"/>
              <rect x="64" y="11" width="2" height="11" rx="1" fill="#7A7A7A"/>
              <rect x="16" y="16" width="2" height="6" rx="1" fill="#7A7A7A"/>
              <rect x="56" y="16" width="2" height="6" rx="1" fill="#7A7A7A"/>
              <rect x="12" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="100" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="8" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="96" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="4" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="92" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="52" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="88" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
              <rect x="48" y="20" width="2" height="2" rx="1" fill="#7A7A7A"/>
            </svg>
            <span class="duration">00:37</span>
          </div>
        </div>
      </div>
      <div class="voicemail-right">
        <span class="record action">
          <svg v-if="action === '' || action === 'recorded'" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" @click="action = 'recording'">
            <circle cx="23" cy="23" r="23" fill="#FF3232"/>
            <path d="M27 17.4C27 15.5222 25.433 14 23.5 14C21.567 14 20 15.5222 20 17.4V21.65C20 23.5278 21.567 25.05 23.5 25.05C25.433 25.05 27 23.5278 27 21.65V17.4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.5 26.1484C27.8438 26.8728 27.036 27.4528 26.1307 27.8497C25.2254 28.2467 24.2433 28.4514 23.25 28.4502C22.2567 28.4514 21.2746 28.2467 20.3693 27.8497C19.464 27.4528 18.6562 26.8728 18 26.1484" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 28C24.1642 28 24.5 28.3358 24.5 28.75V31.3C24.5 31.7142 24.1642 32.05 23.75 32.05C23.3358 32.05 23 31.7142 23 31.3V28.75C23 28.3358 23.3358 28 23.75 28Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 31.2998C21 30.8856 21.3358 30.5498 21.75 30.5498H25.25C25.6642 30.5498 26 30.8856 26 31.2998C26 31.714 25.6642 32.0498 25.25 32.0498H21.75C21.3358 32.0498 21 31.714 21 31.2998Z" fill="white"/>
          </svg>
          <span v-if="action === 'recording'" class="recording-icon" @click="action = 'recorded'">
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37.5" cy="37.5" r="36.5" fill="white" stroke="#FF3232" stroke-width="2"/>
              <circle cx="37.5" cy="37.5" r="31.5" fill="#FF3232"/>
              <path d="M42.5 30.8572C42.5 28.1746 40.2614 26 37.5 26C34.7386 26 32.5 28.1746 32.5 30.8572V36.9286C32.5 39.6111 34.7386 41.7858 37.5 41.7858C40.2614 41.7858 42.5 39.6111 42.5 36.9286V30.8572Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M45 43.3555C44.0626 44.3902 42.9086 45.2188 41.6153 45.7859C40.322 46.3529 38.919 46.6454 37.5 46.6438C36.081 46.6454 34.678 46.3529 33.3847 45.7859C32.0914 45.2188 30.9374 44.3902 30 43.3555" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M37.5 46.6436V50.2864" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M35 50.2861H40" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>

        </span>
        <span class="send action">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="23" fill="#00DE5E"/>
            <path d="M34.3029 22.2772L16.4279 13.3397C16.2878 13.2697 16.1304 13.2416 15.9747 13.2589C15.819 13.2762 15.6717 13.3381 15.5504 13.4372C15.4345 13.5343 15.3481 13.6618 15.3007 13.8053C15.2533 13.9488 15.2469 14.1027 15.2823 14.2497L17.6873 23.0003L15.2498 31.7266C15.2166 31.8493 15.2128 31.9781 15.2385 32.1026C15.2642 32.2271 15.3187 32.3438 15.3978 32.4434C15.4768 32.543 15.5781 32.6226 15.6935 32.6759C15.8089 32.7293 15.9352 32.7547 16.0623 32.7503C16.1894 32.7496 16.3147 32.719 16.4279 32.661L34.3029 23.7235C34.436 23.6553 34.5477 23.5517 34.6257 23.4241C34.7036 23.2965 34.7449 23.1499 34.7449 23.0003C34.7449 22.8508 34.7036 22.7042 34.6257 22.5766C34.5477 22.449 34.436 22.3454 34.3029 22.2772ZM17.3216 30.4022L19.1173 23.8128H26.6248V22.1878H19.1173L17.3216 15.5985L32.1173 23.0003L17.3216 30.4022Z" fill="white"/>
          </svg>
        </span>
      </div>
    </template>
    <template v-if="action === 'select'">
      <div class="select-left">
        <span>{{selected.size}} selected</span>
        <span class="select-close action" @click="selected.clear()">
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83366 1.16675L1.16699 5.83341M5.83366 5.83341L1.16699 1.16675L5.83366 5.83341Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="select-right">
        <span class="action" @click="contextAction($event, '')">
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.2716 4.17519V0L3.68082 4.54081L0 8.18156L3.74616 11.2695L8.2716 15V10.9145C16.2165 10.3222 19 14.8698 19 14.8698C19 12.0365 18.764 9.09608 16.512 6.86957C13.8943 4.27938 10.1032 4.09608 8.2716 4.17519Z" fill="#FF7777"/>
          </svg>
        </span>
        <span class="action">
          <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2857 20V21.7857C14.2857 22.3775 13.806 22.8571 13.2143 22.8571H1.07143C0.479688 22.8571 0 22.3775 0 21.7857V5.35714C0 4.7654 0.479688 4.28571 1.07143 4.28571H4.28571V17.5C4.28571 18.8785 5.40719 20 6.78571 20H14.2857ZM14.2857 4.64286V0H6.78571C6.19397 0 5.71429 0.479688 5.71429 1.07143V17.5C5.71429 18.0917 6.19397 18.5714 6.78571 18.5714H18.9286C19.5203 18.5714 20 18.0917 20 17.5V5.71429H15.3571C14.7679 5.71429 14.2857 5.23214 14.2857 4.64286ZM19.6862 3.25763L16.7424 0.313795C16.5414 0.112876 16.2689 1.4857e-06 15.9848 0L15.7143 0V4.28571H20V4.01522C20 3.73107 19.8871 3.45856 19.6862 3.25763Z" fill="#FF7777"/>
          </svg>
        </span>
        <span class="action">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0806 4.5C19.0806 4.74493 18.9903 4.98134 18.8268 5.16437C18.6634 5.34741 18.4382 5.46434 18.1939 5.493L18.0764 5.5H17.2278L15.9916 18.02C15.9243 18.6994 15.6056 19.3295 15.0976 19.7879C14.5896 20.2462 13.9285 20.5001 13.243 20.5H5.83767C5.15212 20.5001 4.49105 20.2462 3.98303 19.7879C3.47501 19.3295 3.15636 18.6994 3.08905 18.02L1.85283 5.5H1.00424C0.737901 5.5 0.482468 5.39464 0.294136 5.20711C0.105804 5.01957 0 4.76522 0 4.5C0 4.23478 0.105804 3.98043 0.294136 3.79289C0.482468 3.60536 0.737901 3.5 1.00424 3.5H6.02546C6.02546 3.04037 6.11637 2.58525 6.29301 2.16061C6.46965 1.73597 6.72855 1.35013 7.05494 1.02513C7.38132 0.700121 7.76879 0.442313 8.19524 0.266422C8.62168 0.0905302 9.07873 0 9.54031 0C10.0019 0 10.4589 0.0905302 10.8854 0.266422C11.3118 0.442313 11.6993 0.700121 12.0257 1.02513C12.3521 1.35013 12.611 1.73597 12.7876 2.16061C12.9642 2.58525 13.0552 3.04037 13.0552 3.5H18.0764C18.3427 3.5 18.5982 3.60536 18.7865 3.79289C18.9748 3.98043 19.0806 4.23478 19.0806 4.5ZM11.7999 7.75C11.6179 7.75001 11.442 7.81564 11.3048 7.93477C11.1677 8.05389 11.0785 8.21845 11.0537 8.398L11.0467 8.5V15.5L11.0537 15.602C11.0785 15.7815 11.1677 15.946 11.3049 16.0651C11.4421 16.1842 11.6179 16.2498 11.7999 16.2498C11.9818 16.2498 12.1576 16.1842 12.2948 16.0651C12.432 15.946 12.5212 15.7815 12.546 15.602L12.553 15.5V8.5L12.546 8.398C12.5213 8.21845 12.432 8.05389 12.2949 7.93477C12.1577 7.81564 11.9819 7.75001 11.7999 7.75ZM7.28076 7.75C7.09876 7.75001 6.92291 7.81564 6.78574 7.93477C6.64857 8.05389 6.55936 8.21845 6.53461 8.398L6.52758 8.5V15.5L6.53461 15.602C6.55941 15.7815 6.64865 15.946 6.78581 16.0651C6.92297 16.1842 7.09879 16.2498 7.28076 16.2498C7.46274 16.2498 7.63855 16.1842 7.77572 16.0651C7.91288 15.946 8.00211 15.7815 8.02692 15.602L8.03395 15.5V8.5L8.02692 8.398C8.00216 8.21845 7.91295 8.05389 7.77579 7.93477C7.63862 7.81564 7.46277 7.75001 7.28076 7.75ZM9.54031 2C9.1408 2 8.75765 2.15804 8.47515 2.43934C8.19265 2.72064 8.03395 3.10218 8.03395 3.5H11.0467C11.0467 3.10218 10.888 2.72064 10.6055 2.43934C10.323 2.15804 9.93982 2 9.54031 2Z" fill="#FF7777"/>
          </svg>
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ContextMenu from './elements/ContextMenu'

export default {
  name: 'ChatBoxMsgBox',
  components: {
    ContextMenu,
  },
  computed: {
    ...mapGetters(['messages', 'mode', 'call']),
  },
  data() {
    return {
      action: '',
      id: -1,
      selected: new Set(),
      chatmode: 'message',
      newMessage: '',
    }
  },
  methods: {
    init() {
      this.action = ''
      this.chatmode = 'message'
      this.newMessage = ''
      this.selected.clear()
      this.id = -1 
    },
    openMsgMenu(e, id) {
      this.action = ''
      this.id = id;
      e.stopPropagation();
      e.preventDefault();
      this.$refs.msgMenu.open(e)
    },
    openMsgBoxMenu(e) {
      this.action = ''
      this.id = -1;     
      e.preventDefault();
      this.$refs.msgBoxMenu.open(e)
    },
    closeReply() {
      this.action = ''
      this.id = -1
    },
    contextAction(e, action) {
      this.action = action;
      if(action === '') {
        this.id = -1
        this.selected.clear()
        this.$refs.msgBoxMenu.close()
        this.$refs.msgMenu.close()
        return
      }
      if(action === 'reply') {
        console.log(action)
        console.log(e, action, this.id)
        this.$refs.msgBoxMenu.close()
        this.$refs.msgMenu.close()
        return
      }
      if(action === 'copy') {
        console.log(action)
      }
      if(action === 'select') {
        this.selected.clear();
        if(this.id !== -1) this.selected.add(this.id)
        console.log(action, this.selected)
        this.id = -1;
        this.$refs.msgBoxMenu.close()
        this.$refs.msgMenu.close()
        return
      }
      if(action === 'info') {
        console.log(action)
      }
      if(action === 'showinfolder') {
        console.log(action)
      }
      if(action === 'delete') {
        console.log(action, this.id)
        this.messages = this.messages.filter((message, index) => index !== this.id)
      }
      if(action === 'clear') {
        this.messages = []
      }
      this.action = ''
      this.id = -1;
      this.$refs.msgBoxMenu.close()
      this.$refs.msgMenu.close()
    },
    selectMsg(id) {
      this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id)
    },
    endCall() {
      this.$store.commit('setMode', 'chats')
      this.$store.commit('setCall', false)
    },
    backToCall() {
      this.$store.commit('setModal', 'videocall')
    },
    goBack() {
      this.action = ''
      this.id = -1
    }
  },
  mounted() {
    console.log(this.messages)
  }
}
</script>
<style lang="scss" scoped>
div.msgbox {
  position: relative;
  // height: calc(100% - 70px);
  height: calc(var(--vh, 1vh) * 100 - 70px);
  -webkit-height: calc(var(--vh, 1vh) * 100 - 70px);
  overflow-y: auto;
  padding: 18px 30px;
  div.msgbox-day {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 28px;
    span {
      font-weight: 500;
      font-size: 14px;
      color: #B7B7B7;
    }
  }
  div.message {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 28px;
    div.message-upper {
      display: flex;
      align-items: center;  
      span.select-check {
        min-width: 14px;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        border: 1px solid #C4C4C4;
        margin-right: 12px;
      }
      span.select-check-active{
        min-width: 14px;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        border: none;
        background-color:#FF7777;
        margin-right: 12px;
      }
      div.msg-box-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        div.msg-box {
          max-width: 310px;
          padding: 20px 20px 20px 35px;
          border-radius: 26px;
          position: relative;
          display: inline;
          position: relative;
          div.msg-text {
            span {
              font-size: 15px;
              color: #4F4F4F;
            }
          }
          div.msg-voice {
            display: flex;
            span.play-btn {
              min-width: 45px;
              width: 45px;
              height: 45px;
              border-radius: 100%;
              background-color: #FF3232;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 20px;
            }
            div.msg-voice-right {
              display: flex;
              flex-direction: column;
              justify-content: center;
              span.duration {
                margin-top: 0px;
                color: #9E9E9E;
                font-size: 12px;
              }
            }
          }
          div.reply {
            position: absolute;
            bottom: -11px;
            left: -12px;
          }
        }
        div.voice-padding {
          padding: 10px 24px 10px 30px;
        }
      }

    }
    div.status {
      display: flex;
      span.status {
        margin: 7px 0;
        span.time {
          color: #B7B7B7;
          font-size: 12px;
          margin-right: 3px;
        }
  
      }
    }
  }
  div.received {
    justify-content: flex-start;
    div.msg-box {
      background-color: #EBEBEB;
      border-top-left-radius: 0px !important;
    }
    div.msg-box::after {
      background-color: white;
      border-radius: 0 100% 50% 0;
      border-right: 0;
      top: 3px;
      content: "";
      height: 137px;
      margin-top: -5px;
      margin-right: -8px;
      position: absolute;
      left: -11px;
      transform: rotate(-10deg);
      width: 30px;
      z-index: -1;
    }
    div.msg-box::before {
      background-color: #EBEBEB;
      border-radius: 0;
      border-right: 0;
      top: 5.2px;
      content: '';
      height: 30px;
      margin-top: -5px;
      margin-right: -5px;
      position: absolute;
      left: -11px;
      width: 30px;
      z-index: -1;
    }
  }
  div.sent {
    justify-content: flex-end;
    div.msg-box {
      background-color: #D6FFD6;
      border-top-right-radius: 0px !important;
    }
    div.msg-box::after {
      background-color: white;
      border-radius: 100% 0 50% 0;
      border-right: 0;
      top: -5px;
      content: "";
      height: 137px;
      margin-top: -5px;
      margin-right: -8px;
      position: absolute;
      right: -5px;
      transform: rotate(10deg);
      width: 30px;
      z-index: -1;
    }
    div.msg-box::before {
      background-color: #D6FFD6;
      border-radius: 0;
      border-right: 0;
      top: 5.2px;
      content: '';
      height: 30px;
      margin-top: -5px;
      margin-right: -5px;
      position: absolute;
      right: -11px;
      width: 30px;
      z-index: -1;
    }
  }

  div.chatscalling {
    position: fixed;
    top: 140px;
    right: 5px;
    div.chatscalling-inner {
      width: 198px;
      height: 198px;
      min-width: 198px;
      position: relative;
      img {
        width: 198px;
        height: 198px;
        min-width: 198px;
        border-radius: 100%;
      }
      span.endcall-btn {
        z-index: 1000;
        position: absolute;
        bottom: 0;
        right: 6px;
      }
      span.endcall-btn:hover {
        cursor: pointer;
      }
      div.chatscall-hover {
        display: none;
      }
    }
    div.chatscalling-inner:hover {
      div.chatscall-hover {
        z-index: 100;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        font-size: 20px;
        color: #FFFFFF;
        border-radius: 100%;
        backdrop-filter: blur(8px);
      }
    }
  }
  @media screen and (max-width: 900px) {
    div.chatscalling {
      top: 200px;
    }
  }
  @media screen and (max-width: 500px) {
    div.chatscalling {
      top: 200px;
      right: 10px;
      div.chatscalling-inner {
        width: 100px;
        height: 100px;
        min-width: 100px;
        img {
          width: 100px;
          height: 100px;
          min-width: 100px;
        }
        span.endcall-btn {
          right: 0px;
          svg {
            width: 40px;
            height: 40px;
          }
        }
      }
      div.chatscalling-inner:hover {
        div.chatscall-hover {
          font-size: 15px;
          padding-bottom: 15px;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
    div.msgbox {
      // height: calc(100% - 168px);
      height: calc(var(--vh, 1vh) * 100 - 222px);
      -webkit-height: calc(var(--vh, 1vh) * 100 - 222px);
    }
}
div.chatboxbottom {
  min-height: 57px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #C1C1C1;
  padding: 5px 30px;
  font-size: 14px;
  position: relative;
  div.chatboxbottom-msg-left {
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;
    margin-right: 20px;
    span.icon {
      margin-right: 20px;
    }
    input.msg {
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      max-width: 500px;
      width: 100%;
    }
    ::placeholder {
      color: #9C9C9C;
    }
  }
  span.send-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 100%;
    background-color: #00DE5E;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span.text {
    font-size: 14px;
    color: #9C9C9C;
  }
  div.voicemsg-left {
    display: flex;
    align-items: center;
    span.recorded {
      display: flex;
      align-items: center;
      margin-right: 30px;
      span.close {
        min-width: 16px;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        border: 1px solid #C4C4C4;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 21px;
      }
      span.alarm {
        min-width: 6px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #ff7777;
        margin-right: 3px;
      }
      span.time {
        font-size: 16px;
        color: #9C9C9C;
        margin-right: 10px;
      }
      span.status {
        min-width: 16px;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-color: #00DE5E;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    span.microphone {
      min-width: 38px;
      width: 38px;
      height: 38px;
      border-radius: 100%;
      background-color: #FF7777;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div.select-left {
    display: flex;
    align-items: center;
    span.select-close {
      margin-left: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div.select-right {
    display: flex;
    align-items: center;
    max-width: 120px;
    width: 100%;
    justify-content: space-between;
  }
  div.voicemail-left {
    div.recording {
      display: flex;
      align-items: center;
      span.duration {
        svg {
          margin-right: 12px;
        }
        font-weight: 500;
        font-size: 19px;
        line-height: 22px;
        color: #B7B7B7;
        margin-right: 24px;
      }
    }
    div.recorded {
      display: flex;
      align-items: center;
      span.close-recorded {
        margin-right: 20px;
      }
      div.recorded-iconandduration {
        display: flex;
        flex-direction: column;
        span.duration {
          margin-top: 5px;
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          color: #9E9E9E;
        }
      }
    }
  }
  div.voicemail-right{
    display: flex;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      align-self: stretch;
      position: relative;
    }
    svg {
      width: 40px;
      height: 40px;
      min-width: 40px;
    }
    span.recording-icon {
      position: absolute;
      right: -10px;
      bottom: 0;
      svg {
        width: 60px;
        height: 60px;
        min-width: 60px;
      }
    }
    span.record {
      margin-right: 24px
    }
  }
  div.floating {
    position: absolute;
    top: -41px;
    background: #FFEDED;
    height: 40px;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    div.floating-text {
      display: flex;
      flex-direction: column;
      span.floating-text-name {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        margin-bottom: 1px;
      }
      span.floating-text-msg {
        font-size: 12px;
        line-height: 14px;
        color: #4F4F4F;
      }
    }
    span.close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 12px;
    }
  }
}
// @media screen and (max-width: 374px) {
//   div.msgbox {
//     position: relative;
//     height: calc(100% - 70px);
//     overflow-y: auto;
//     padding: 18px 5px;
//   }
// }
</style>