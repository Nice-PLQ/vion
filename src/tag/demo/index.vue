<template>
  <div class="tag-demo">
    <demo-document title="灰色标签">
      <v-tag>深圳</v-tag>
      <v-tag class="m-l-6">水瓶座</v-tag>
    </demo-document>
    <demo-document title="线性标签">
      <v-tag shape="outline">深圳</v-tag>
      <v-tag shape="outline" class="m-l-6">水瓶座</v-tag>
    </demo-document>
    <demo-document title="性别标签">
      <v-tag>
        <v-icon name="Male" size="12px" class="m-r-3" color="var(--brand-standard)" />22岁
      </v-tag>
      <v-tag class="m-l-6">
        <v-icon name="Female" size="12px" class="m-r-3" color="var(--pink-6)" />22岁
      </v-tag>
      <v-tag color="blue" class="m-l-6">
        <v-icon name="Male" size="12px" class="m-r-3"/>22岁
      </v-tag>
      <v-tag color="pink" class="m-l-6">
        <v-icon name="Female" size="12px" class="m-r-3"/>22岁
      </v-tag>
    </demo-document>
    <demo-document title="标签尺寸">
      <demo-doc title="小标签">
        <v-tag size="small" color="blue">小标签</v-tag>
        <v-tag size="small" class="m-l-6">
          <v-icon name="Male" size="10px" color="var(--brand-standard)" class="m-r-3"/>22岁
        </v-tag>
      </demo-doc>
      <demo-doc title="中标签">
        <div></div>
        <v-tag color="blue">中标签</v-tag>
        <v-tag class="m-l-6">
          <v-icon name="Male" size="12px" color="var(--brand-standard)" class="m-r-3" />22岁
        </v-tag>
      </demo-doc>
      <demo-doc title="大标签">
        <v-tag size="large" color="blue">大标签</v-tag>
        <v-tag size="large" class="m-l-6">
          <v-icon name="Male" size="16px" color="var(--brand-standard)" class="m-r-6" />22岁
        </v-tag>
      </demo-doc>
    </demo-document>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('click-----');
    },
    handleClose() {
      console.log('close-----');
    }
  }
};
</script>

<style lang="less">
@media (prefers-color-scheme: light) {
  .tag-demo {
    background-color: #FEFEFE;
  }
}
@media (prefers-color-scheme: dark) {
  .tag-demo {
    background-color: #000;
  }
}
.tag-demo {
  .demo-document__title {
    padding-bottom: 8px;
  }
  .demo-doc {
    padding: 0;
    &__title {
      padding-top: 16px;
    }
  }
}
</style>
