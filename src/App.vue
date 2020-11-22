<template>
  <v-app>
    <HeaderMenu :nameMenu="nameMenu"></HeaderMenu>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HeaderMenu from "./components/Header-menu";

export default {
  name: "App",
  components: { HeaderMenu },
  data: () => ({
    nameMenu: {
      Home: "/",
      About: "/About"
    }
  })
};
</script>
