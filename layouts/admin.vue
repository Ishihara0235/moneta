<template>
  <v-app>
    <app-drawer></app-drawer>
    <v-app-bar app dark clipped-left>
      <v-app-bar-nav-icon @click.stop="toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>管理者画面</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appDrawer from "~/components/layouts/app-drawer";

export default {
  components: {
    appDrawer,
  },
  data: () => ({
    drawer: true,
  }),
  computed: {
    ...mapGetters("login", ["account", "branch", "bank"]),
  },
  methods: mapActions("nav/drawer", ["toggle"]),
};
</script>
