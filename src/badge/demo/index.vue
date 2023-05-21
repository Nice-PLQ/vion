<template>
  <div>
    <demo-doc title="红点">
      <v-badge type="dot" aria-label="新消息" />
    </demo-doc>
    <demo-doc title="圆形和胶囊形状">
      <v-badge type="normal" aria-label="9条新消息">9</v-badge>
      <v-badge type="capsule" aria-label="99+条新消息">99+</v-badge>
      <v-badge type="capsule" aria-label="新消息">新</v-badge>
    </demo-doc>
    <demo-doc title="不同的颜色">
      <v-badge type="normal" background-color="#67C23A" aria-label="9条新消息">9</v-badge>
      <v-badge type="capsule" background-color="#B0B3BF" text-color="#000" aria-label="99+条新消息">99+</v-badge>
    </demo-doc>
    <demo-doc title="自定义大小">
      <v-badge type="normal" size="16px" aria-label="9条新消息">9</v-badge>
      <v-badge type="capsule" size="16px" aria-label="99+条新消息">99+</v-badge>
    </demo-doc>
  </div>
</template>
