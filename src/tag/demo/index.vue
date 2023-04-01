<template>
  <div class="tag-demo">
    <demo-document title="灰色标签" desc="用于QQ基础功能页面，或是会员业务与其它业务中。">
      <v-tag>深圳</v-tag>
      <v-tag class="m-l-6">水瓶座</v-tag>
    </demo-document>
    <demo-document title="线性标签" desc="用于QQ基础功能页面。">
      <v-tag shape="outline">深圳</v-tag>
      <v-tag shape="outline" class="m-l-6">水瓶座</v-tag>
    </demo-document>
    <demo-document title="彩色标签" desc="可用会员或其他业务中。">
      <v-tag color="blue">深圳</v-tag>
      <v-tag color="dark-blue" class="m-l-6">推荐</v-tag>
      <v-tag color="indigo" class="m-l-6">水瓶座</v-tag>
      <v-tag color="green" class="m-l-6">小众电影</v-tag>
      <v-tag color="pink" class="m-l-6">天然呆</v-tag>
      <v-tag color="red" class="m-l-6">王者荣耀</v-tag>
      <v-tag color="orange" class="m-t-12">追剧</v-tag>
      <v-tag color="yellow" class="m-l-6 m-t-12">点赞</v-tag>
    </demo-document>
    <demo-document title="性别标签" desc="标签中含有性别图标">
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
    <demo-document title="未选中态标签" desc="仅限大号标签">
      <v-tag  size="large">芝士爱好者</v-tag>
      <v-tag  size="large" class="m-l-6">水瓶座</v-tag>
    </demo-document>
    <demo-document title="标签尺寸">
      <demo-doc title="小标签_多用于表单">
        <v-tag size="small" color="blue">小标签</v-tag>
        <v-tag size="small" class="m-l-6">
          <v-icon name="Male" size="10px" color="var(--brand-standard)" class="m-r-3"/>22岁
        </v-tag>
      </demo-doc>
      <demo-doc title="中标签_用于页面中需要突出展示的信息">
        <div></div>
        <v-tag color="blue">中标签</v-tag>
        <v-tag class="m-l-6">
          <v-icon name="Male" size="12px" color="var(--brand-standard)" class="m-r-3" />22岁
        </v-tag>
      </demo-doc>
      <demo-doc title="大标签_用于页面中需要突出展示的信息">
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
