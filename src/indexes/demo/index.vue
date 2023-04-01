<template>
  <v-indexes :list="dataSource" :default-index="5" @select="handleSelect">
    <template v-slot:row="scope">
      <v-list :title="`${scope.row.name}`" @click="handleClick(scope.row.name)"></v-list>
    </template>
  </v-indexes>
</template>

<script>
import data from './data';

export default {
  data() {
    return {
      dataSource: data
    };
  },
  methods: {
    handleClick(name) {
      console.log(name);
    },
    handleSelect(index) {
      console.log(index);
    },
  }
};
</script>
