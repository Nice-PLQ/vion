<template>
  <div class="list-demo">
      <demo-document title="单行列表" desc="在单行列表中，所有元素横向排列，最多包含一行文本，可根据需要添加头像、图标、辅助信息等元素">
        <v-list-group>
          <v-list title="列表标题"></v-list>
          <v-list title="列表标题" help="辅助信息" arrow-direction="right" @click="handleClick"></v-list>
          <v-list title="列表标题">
            <template v-slot:right>
              <v-badge type="dot" />
              <v-icon name="ArrowRight" />
            </template>
          </v-list>
          <v-list title="列表标题">
            <template v-slot:right>
              <v-switch v-model="checked" />
            </template>
          </v-list>
          <v-list title="列表标题">
            <template v-slot:icon>
              <v-icon name="Check" size="20px" color="var(--brand-standard)" />
            </template>
          </v-list>
          <v-list title="链接操作" title-color="var(--text-link)" @click="handleClick"></v-list>
        </v-list-group>

        <v-list-group>
          <v-list title="列表标题" @click="handleClick">
            <template v-slot:right>
              <v-avatar uin="2647439900" size="16px" class="m-r-8" />
              <v-icon name="ArrowRight" size="16px" color="#979EB6"></v-icon>
            </template>
          </v-list>
          <v-list title="列表标题" @click="handleClick">
            <template v-slot:right>
              <div class="avatar-dot">
                <v-avatar uin="2647439900" size="16px" class="m-r-8" />
                <v-badge type="dot" />
              </div>
              <v-icon name="ArrowRight" size="16px" color="#979EB6"></v-icon>
            </template>
          </v-list>
        </v-list-group>

         <v-list-group>
          <v-list title="列表标题" @click="handleClick">
            <template v-slot:left>
              <v-checkbox :checked="true" class="m-r-14" />
            </template>
          </v-list>
          <v-list title="列表标题" @click="handleClick">
            <template v-slot:left>
              <v-icon name="Qq" class="m-r-10" />
            </template>
          </v-list>
        </v-list-group>

        <v-list-group>
          <v-list title="列表标题">
            <template v-slot:left>
              <v-avatar uin="2647439900" class="m-r-12" />
            </template>
          </v-list>
          <v-list title="列表标题">
            <template v-slot:left>
              <v-avatar uin="2647439900" class="m-r-12" />
            </template>
            <template v-slot:right>
              <v-button size="small">添加</v-button>
            </template>
          </v-list>
        </v-list-group>
      </demo-document>

      <demo-document title="双行列表" desc="双行列表最多包含两行文本，可根据需要增加辅助信息、操作控件等元素。">
        <v-list-group>
          <v-list title="列表标题" desc="描述文本" />
          <v-list title="列表标题" desc="描述文本" help="辅助信息" arrow-direction="right" />
        </v-list-group>
        <v-list-group>
          <v-list title="列表标题" desc="列表摘要列表摘要列表摘要列表摘要列" style="padding-top:10px;padding-bottom:10px;">
            <template v-slot:left>
              <v-avatar uin="2647439900" size="26px" class="m-r-12" />
            </template>
          </v-list>
          <v-list title="列表标题" desc="列表摘要列表摘要列表摘要列表摘要列" style="padding-top:10px;padding-bottom:10px;">
            <template v-slot:left>
              <v-avatar uin="2647439900" size="26px" class="m-r-12" />
            </template>
            <template v-slot:right>
              <v-button size="small" class="m-l-12">添加</v-button>
            </template>
          </v-list>
        </v-list-group>

        <v-list-group>
          <v-list title="列表标题" desc="列表摘要列表摘要列表摘要列表摘要列">
            <template v-slot:left>
              <div class="picture-placeholder" style="width:48px;height:48px"></div>
            </template>
          </v-list>
          <v-list title="列表标题" desc="列表摘要列表摘要列表摘要列表摘要列">
            <template v-slot:right>
              <div class="picture-placeholder right" style="width:48px;height:48px"></div>
            </template>
          </v-list>
        </v-list-group>
      </demo-document>

      <demo-document title="多行列表" desc="多行列表包含两行以上信息，可根据需要增加辅助信息、操作控件等元素。">
        <v-list-group>
          <v-list
            title="列表标题"
            desc="描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本"
            desc-ellipsis="multiple"
          />
        </v-list-group>
        <v-list-group>
          <v-list
            title="列表标题"
            desc="描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本"
            desc-ellipsis="multiple"
          >
            <template v-slot:left>
              <v-avatar uin="2647439900" size="30px" class="m-r-12" />
            </template>
          </v-list>
          <v-list
            title="列表标题"
            desc="描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本"
            desc-ellipsis="multiple"
          >
            <template v-slot:left>
              <div class="picture-placeholder"></div>
            </template>
          </v-list>
          <v-list
            title="列表标题"
            desc="描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本"
            desc-ellipsis="multiple"
          >
            <template v-slot:right>
              <div class="picture-placeholder right"></div>
            </template>
          </v-list>
        </v-list-group>
      </demo-document>

      <demo-document title="列表说明及收折" desc="列表说明包含顶部标题和底部附加说明两种。" class="p-b-32">
        <v-list-group title="顶部标题说明" extra="底部附加说明底部附加说明" class="m-t-10">
          <v-list title="列表标题" help="辅助信息" arrow-direction="right" />
        </v-list-group>
      </demo-document>
  </div>
</template>

<script>
import DemoDocument from '../../../site/demo/components/DemoDocument.vue';
export default {
  components: { DemoDocument },
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: true
    };
  },
  methods: {
    handleClick() {
      console.log('click');
    }
  }
};
</script>

<style lang="less">
.list-demo {
  .avatar-dot {
    position: relative;
    .q-badge {
      position: absolute;
      top: 0;
      right: 2px;
    }
  }
  .picture-placeholder {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    margin-right: 12px;
    margin-left: 0;
    background: var(--brand-standard);

    &.right {
      margin-right: 0;
    }
  }
}

</style>
