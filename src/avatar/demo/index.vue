<template>
  <div class="avatar-demo">
    <demo-document title="类型" desc="可由1张或多张图片组合而成">
      <div class="avatar-list">
        <div>
          <v-avatar uin="2647439500" />
          <p>1个头像</p>
        </div>
        <div>
          <v-avatar :uin="[2647439500, 2647439600]" />
          <p>2个头像</p>
        </div>
        <div>
          <v-avatar :uin="[2647439500, 2647439600, 2647439700]" />
          <p>3个头像</p>
        </div>
        <div>
          <v-avatar :uin="[2647439500, 2647439600, 2647439700, 2647439800]" />
          <p>4个头像</p>
        </div>
        <div>
          <v-avatar :uin="[2647439500, 2647439600, 2647439700, 2647439800, 2647439900]" carousel />
          <p>轮播头像</p>
        </div>
        <div>
          <v-avatar />
          <p>兜底头像</p>
        </div>
      </div>
    </demo-document>
    <demo-document title="尺寸" desc="在相应的列表、弹窗、页面等场景中使用">
      <div class="avatar-list flex-middle">
        <div>
          <v-avatar size="16px" />
          <p>32px</p>
        </div>
        <div>
          <v-avatar />
          <p>40px</p>
        </div>
        <div>
          <v-avatar size="26px" />
          <p>52px</p>
        </div>
        <div>
          <v-avatar size="30px" />
          <p>60px</p>
        </div>
        <div>
          <v-avatar size="45px" />
          <p>90px</p>
        </div>
      </div>
    </demo-document>
  </div>
</template>

<style lang="less">
.avatar-demo {
  .avatar-list {
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
