<template>
  <div class="about">
    <v-card class="mx-auto pa-10" max-width="70%">
      <v-container class="lighten-5 mb-6">
        <v-row class="mb-10">
          <v-col>
            <h1 class="d-flex justify-center">Александр Панов</h1>
            <h3 class="d-flex justify-center">Frontend, Web-разработчик</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4 class="mb-4">Contact info</h4>
            <p>alexpanovcan@gmail.com</p>
            <a href="https://github.com/abyss-soft">Github.com</a> <br />
            <a href="https://career.habr.com/alexpanovcan">Portfolio</a>
          </v-col>
          <v-col>
            <h4 class="mb-4">Skills</h4>
            <ul class="l-no-marker">
              <li v-for="item in Skills" :key="item">{{ item }}</li>
            </ul>
          </v-col>
          <v-col>
            <h4 class="mb-4">Certificates</h4>
            <ul class="l-no-marker">
              <li v-for="item in Certificates" :key="item">{{ item }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    Certificates: [
      "Microsoft Certified Professional",
      "Microsoft CERTIFIED - MCITP",
      "Microsoft CERTIFIED - MCTS"
    ],
    Skills: [
      "Vue.js",
      "Vue-Router",
      "VueX",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "BitBucket",
      "Адаптивная верстка",
      "Управление проектами",
      "Ведение переговоров",
      "Информационные технологии",
      "PHP",
      "JQuery",
      "Twitter Bootstrap",
      "SPA (single page application)"
    ]
  })
};
</script>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  padding-top: 3rem;
}

.l-no-marker {
  list-style-type: none;
}
</style>
