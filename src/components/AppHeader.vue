<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Wood Shop</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Dropdown para cambiar de idioma -->
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text>
          {{ currentLanguage }}
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="changeLanguage('es')">
          <v-list-item-title>{{ $t('language_spanish') }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeLanguage('en')">
          <v-list-item-title>{{ $t('language_english') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app right>
    <v-list>
      <router-link to="/" style="text-decoration: none;">
        <v-list-item @click="closeDrawer">
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu_link_home') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/products" style="text-decoration: none;">
        <v-list-item @click="closeDrawer">
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu_link_products') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/contact" style="text-decoration: none;">
        <v-list-item @click="closeDrawer">
          <v-list-item-content>
            <v-list-item-title>{{ $t('menu_link_contact') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      currentLanguage: 'es'
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.currentLanguage = lang;

    },
    closeDrawer() {
      this.drawer = false; // Cierra el menú lateral
    }
  }
};
</script>
