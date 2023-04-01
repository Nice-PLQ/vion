<template>
  <div class="badge-demo">
    <demo-doc title="数字红点（强提醒）">
      <v-list-group>
        <v-list title="列表标题" desc="描述文本">
          <template v-slot:left>
            <v-avatar uin="2647439900" class="m-r-12" />
          </template>
          <template v-slot:right>
            <div class="list-right">
              <div class="m-b-5">晚上 8:24</div>
              <v-badge aria-label="56条新消息" class="m-r-4">9</v-badge>
            </div>
          </template>
        </v-list>
        <v-list title="列表标题" desc="描述文本">
          <template v-slot:left>
            <v-avatar uin="2647439900" class="m-r-12" />
          </template>
          <template v-slot:right>
            <div class="list-right">
              <div class="m-b-5">晚上 8:24</div>
              <v-badge type="capsule" aria-label="56条新消息" class="m-r-4">56</v-badge>
            </div>
          </template>
        </v-list>
        <v-list title="列表标题" desc="描述文本">
          <template v-slot:left>
            <v-avatar uin="2647439900" class="m-r-12" />
          </template>
          <template v-slot:right>
            <div class="list-right">
              <div class="m-b-5">晚上 8:24</div>
              <v-badge type="capsule" aria-label="56条新消息" class="m-r-4">99+</v-badge>
            </div>
          </template>
        </v-list>
      </v-list-group>
    </demo-doc>
    <demo-doc title="数字红点（弱提醒）">
      <v-list-group>
        <v-list title="列表标题" desc="描述文本">
          <template v-slot:left>
            <v-avatar uin="2647439900" class="m-r-12" />
          </template>
          <template v-slot:right>
            <div class="list-right">
              <div class="m-b-5">晚上 8:24</div>
              <v-badge aria-label="56条新消息" class="m-r-4" background-color="#CCCCCC">9</v-badge>
            </div>
          </template>
        </v-list>
        <v-list title="列表标题" desc="描述文本">
          <template v-slot:left>
            <v-avatar uin="2647439900" class="m-r-12" />
          </template>
          <template v-slot:right>
            <div class="list-right">
              <div class="m-b-5">晚上 8:24</div>
              <v-badge type="capsule" aria-label="56条新消息" class="m-r-4" background-color="#CCCCCC">56</v-badge>
            </div>
          </template>
        </v-list>
        <v-list title="列表标题" desc="描述文本">
          <template v-slot:left>
            <v-avatar uin="2647439900" class="m-r-12" />
          </template>
          <template v-slot:right>
            <div class="list-right">
              <div class="m-b-5">晚上 8:24</div>
              <v-badge type="capsule" aria-label="56条新消息" class="m-r-4" background-color="#CCCCCC">99+</v-badge>
            </div>
          </template>
        </v-list>
      </v-list-group>
    </demo-doc>
    <demo-doc title="小红点" class="p-b-16">
      <v-list title="列表标题" desc="描述文本">
        <template v-slot:left>
          <v-avatar uin="2647439900" class="m-r-12" />
        </template>
        <template v-slot:right>
          <v-badge type="dot" />
          <v-icon name="ArrowRight" />
        </template>
      </v-list>
    </demo-doc>
  </div>
</template>

<style lang="less">
  .badge-demo {
    .list-right {
      text-align: right;
      font-size: 12px;
      color: var(--text-tertiary);
    }
  }
</style>
