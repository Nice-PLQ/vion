<template>
  <div>
    <demo-doc title="单一头像">
      <v-avatar  />
      <v-avatar color="var(--brand-standard)" />
    </demo-doc>
    <demo-doc title="设置头像大小">
      <ul class="avatar-list">
        <li>
          <v-avatar />
          <p>默认大小</p>
        </li>
        <li>
          <v-avatar size="28px" />
          <p>28px</p>
        </li>
        <li>
          <v-avatar size="36px" />
          <p>36px</p>
        </li>
      </ul>
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
