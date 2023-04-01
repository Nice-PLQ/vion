<template>
  <div class="simulator">
    <div class="simulator-header">
      <div class="address-bar">
        <span>{{ label }}</span>
      </div>
    </div>
    <iframe width="375" height="611" :src="url" frameborder="0" ref="iframe"></iframe>
    <div class="iframe-footer">
      <span @mouseenter="showQrcode = true" @mouseleave="showQrcode = false">
        <QrcodeIcon />
      </span>
      <div class="qrcode" v-show="showQrcode">
        <QrcodeVue :value="qrcodeUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import { Qrcode } from 'vion-svg-icon';
import QrcodeVue from 'qrcode.vue';

export default {
  props: ['url', 'label'],
  components: { QrcodeIcon: Qrcode, QrcodeVue },
  data() {
    return {
      showQrcode: false
    };
  },
  computed: {
    qrcodeUrl() {
      const name = this.url.split('#/').pop();
      return `${name}`;
    }
  },
};
</script>

<style lang="less">
@import './index.less';
</style>
