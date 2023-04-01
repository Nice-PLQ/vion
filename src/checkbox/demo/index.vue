<template>
  <div class="checkbox-demo">
    <demo-document title="普通型" desc="在一组列表或信息中，进行单选/多选操作">
      <div class="checkbox-normal">
        <div>
          <v-checkbox :checked="false" />
          <p>未选中</p>
        </div>
        <div>
          <v-checkbox checked />
          <p>已选中</p>
        </div>
        <div>
          <v-checkbox checked :count="1" />
          <p>已选中_数字</p>
        </div>
        <div>
          <v-checkbox checked disabled="" />
          <p>不可更改</p>
        </div>
        <div>
          <v-checkbox disabled />
          <p>禁止态</p>
        </div>
      </div>
    </demo-document>

    <demo-document title="图片型" desc="覆盖在图片上使用">
      <div class="checkbox-normal">
        <div>
          <v-checkbox shape="circle-filled" :checked="false" />
          <p>未选中</p>
        </div>
        <div>
          <v-checkbox shape="circle-filled" checked />
          <p>已选中</p>
        </div>
        <div>
          <v-checkbox shape="circle-filled" checked :count="1" />
          <p>已选中_数字</p>
        </div>
        <div>
          <v-checkbox shape="circle-filled" checked disabled="" />
          <p>不可更改</p>
        </div>
        <div>
          <v-checkbox shape="circle-filled" disabled />
          <p>禁止态</p>
        </div>
      </div>
    </demo-document>

    <demo-document title="大小" desc="不同的尺寸">
      <div class="checkbox-normal">
        <div>
          <v-checkbox size="24px" v-model="checked" />
          <p>24PX</p>
        </div>
        <div>
          <v-checkbox size="18px" v-model="checked1" />
          <p>18PX</p>
        </div>
      </div>
    </demo-document>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      checked1: true,
    };
  },
};
</script>

<style lang="less">
.checkbox-demo {
  .checkbox-normal {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    >div {
      width: 33.333333%;
    }

    p {
      font-size: 14px;
      margin-top: 12px;
      margin-bottom: 40px;
      color: var(--text-secondary);
    }
  }
}
</style>
