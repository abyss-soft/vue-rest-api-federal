<template>
  <div>
    <v-app-bar class="d-flex justify-center" ax-height="48" dense>
      <router-link
        class="l-no-text-decoration mr-16"
        v-for="(linkMenu, nameMenu) in nameMenu"
        :key="nameMenu.id"
        :to="linkMenu"
        exact
        active-class="active-link"
      >
        {{ nameMenu }}
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  props: {
    nameMenu: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.l-no-text-decoration {
  text-decoration: none;
}
.active-link {
  color: #030566;
}
</style>
