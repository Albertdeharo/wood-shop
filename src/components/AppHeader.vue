<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>SouvenWood</v-toolbar-title>
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
          <v-list-item-title>Español</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeLanguage('en')">
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <!-- Menú lateral en la derecha -->
  <v-navigation-drawer v-model="drawer" app right>
    <v-list>
      <router-link to="/" style="text-decoration: none;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/products" style="text-decoration: none;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/contact" style="text-decoration: none;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Contacto</v-list-item-title>
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
      this.currentLanguage = lang;
      console.log(`Language changed to: ${lang}`);
      // Aquí puedes añadir la lógica para cambiar el idioma
      // Esto podría ser mediante Vue I18n o cualquier librería de manejo de idiomas
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados para el header */
</style>
