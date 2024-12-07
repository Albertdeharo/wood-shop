<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>Wood Shop</v-toolbar-title>
    <v-spacer />

    <!-- Dropdown para cambiar de idioma -->
    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          text
        >
          {{ currentLanguage }}
          <v-icon right>
            mdi-chevron-down
          </v-icon>
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

  <v-navigation-drawer
    v-model="drawer"
    app
    right
  >
    <v-list>
      <router-link
        to="/"
        style="text-decoration: none;"
      >
        <v-list-item @click="closeDrawer">
          <v-list-item-title>{{ $t('menu_link_home') }}</v-list-item-title>
        </v-list-item>
      </router-link>
      <router-link
        to="/products"
        style="text-decoration: none;"
      >
        <v-list-item @click="closeDrawer">
          <v-list-item-title>{{ $t('menu_link_products') }}</v-list-item-title>
        </v-list-item>
      </router-link>
      <v-list-group value="Categorias">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Categorias"
          />
        </template>

        <v-list-item
          v-for="([title, icon], i) in Categories"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        />
      </v-list-group>
      <router-link
        to="/contact"
        style="text-decoration: none;"
      >
        <v-list-item @click="closeDrawer">
          <v-list-item-title>{{ $t('menu_link_contact') }}</v-list-item-title>
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
      currentLanguage: 'es',
      Categories: [
        ['Skylines', 'mdi-city-variant-outline'],
        ['Imanes', 'mdi-magnet'],
        ['Decoraciones', 'mdi-spa'],
        ['Trofeos', 'mdi-trophy'],
        ['Especiales', 'mdi-printer-3d'],
        ['Iluminacion', 'mdi-lamps'],
        ['Bodas', 'mdi-dance-ballroom'],
      ],
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
