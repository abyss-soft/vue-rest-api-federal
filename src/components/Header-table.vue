<template>
  <thead>
    <tr>
      <th
        class="text-center size"
        v-for="itemTitle in getTitleHeaders"
        :key="itemTitle"
      >
        {{ Object.values(itemTitle).join("") }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "HeaderTable",
  data: () => ({
    titleValue: null
  }),
  computed: {
    getTitleHeaders() {
      return this.$store.getters.getTableHeaderNames;
    }
  }
};
</script>

<style lang="scss" scoped>
.size {
  width: 200px;
}
</style>
