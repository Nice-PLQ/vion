<template>
  <div>
    <demo-doc title="单一头像">
      <v-avatar uin="2647439500" />
      <v-avatar url="https://qzonestyle.gtimg.cn/aoi/sola/20200314113311_co3AxlROWA.png" />
    </demo-doc>
    <demo-doc title="群头像">
      <v-avatar group uin="325710777" />
    </demo-doc>
    <demo-doc title="设置头像大小">
      <ul class="avatar-list">
        <li>
          <v-avatar uin="2647439600" />
          <p>默认大小</p>
        </li>
        <li>
          <v-avatar uin="2647439600" size="28px" />
          <p>28px</p>
        </li>
        <li>
          <v-avatar uin="2647439800" size="36px" />
          <p>36px</p>
        </li>
      </ul>
    </demo-doc>
    <demo-doc title="多个头像合集">
      <v-avatar size="28px" :uin="[2647439700, 2647439800]" />
      <v-avatar size="28px" :uin="[2647439500, 2647439600, 2647439800]" />
      <v-avatar size="28px" :uin="[2647439500, 2647439600, 2647439700, 2647439800]" />
    </demo-doc>
    <demo-doc title="轮播头像">
      <v-avatar size="28px" :uin="[2647439500, 2647439600, 2647439700, 2647439800, 2647439900]" carousel />
    </demo-doc>
  </div>
</template>

<style lang="less">
.avatar-list {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #989eb4;

  li {
    margin-right: 20px;
    text-align: center;

    p {
      margin-top: 4px;
    }
  }
}
</style>
