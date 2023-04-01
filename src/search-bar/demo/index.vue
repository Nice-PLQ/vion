<template>
  <div class="search-bar-demo">
    <demo-document title="胶囊型搜索" desc="一级搜索">
      <v-search-bar
        type="capsule"
        cancel-btn-visible
        @back-btn-click="onBackBtnClick"
        v-model="searchText1"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
        @search="onSearch"
      ></v-search-bar>
    </demo-document>
    <demo-document desc="二级搜索">
      <v-search-bar v-model="searchText2" type="capsule" back-btn-visible></v-search-bar>
    </demo-document>
    <demo-document title="表单型搜索">
      <v-search-bar v-model="searchText3" type="form"></v-search-bar>
    </demo-document>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const searchText1 = ref('');
    const searchText2 = ref('');
    const searchText3 = ref('');
    function onBackBtnClick() {
      console.log('back');
    }
    function onChange(value) {
      console.log(value);
    }
    function onFocus() {
      console.log('focus');
    }
    function onBlur() {
      console.log('blur');
      console.log(searchText1.value);
    }
    function onSearch() {
      console.log('search');
    }
    return {
      searchText1,
      searchText2,
      searchText3,
      onBackBtnClick,
      onChange,
      onFocus,
      onBlur,
      onSearch,
    };
  }
});
</script>

<style lang="less">
.q-search-bar {
  margin: 0 -16px;
}
</style>
