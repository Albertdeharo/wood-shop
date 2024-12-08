<template>
  <v-container>
    <h1>Listado de Productos</h1>

    <!-- Barra de búsqueda y filtro -->
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="searchQuery"
          label="Buscar productos"
          clearable
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-select
          v-model="select"
          :items="items"
          item-title="category"
          item-value="category"
          label="Filtrar por estado"
          return-object
          single-line
        />
      </v-col>
    </v-row>

    <!-- Mensaje si no hay productos -->
    <v-row v-if="filteredProducts.length === 0">
      <v-col cols="12">
        <v-alert
          type="info"
          prominent
        >
          No se han encontrado productos que coincidan con la búsqueda o el filtro.
        </v-alert>
      </v-col>
    </v-row>

    <!-- Listado de productos -->
    <v-row v-else>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card>
          <v-img
            :src="product.image"
            height="200px"
            alt="Imagen del producto"
          />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>Precio: ${{ product.price }}</v-card-subtitle>
          <v-card-subtitle>Estado: {{ product.category }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="primary"
              @click="viewProduct(product.id)"
            >
              Ver más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      select: { category: 'Todos los estados' }, // Opción por defecto para mostrar todos los estados
      items: [
        { category: 'Todos los estados' }, // Opción para todos los estados
        { category: 'Skylines' },
        { category: 'Imanes' },
        { category: 'Decoraciones' },
        { category: 'Trofeos' },
        { category: 'Iluminación' },
        { category: 'Bodas' },
      ],
      searchQuery: '',
      products: [
        { id: 1, name: 'Producto 1', categoryId: 1, price: 20, category: 'Skylines', image: 'https://via.placeholder.com/300x200' },
        { id: 2, name: 'Producto 2', categoryId: 2, price: 15, category: 'Imanes', image: 'https://via.placeholder.com/300x200' },
        { id: 3, name: 'Producto 3', categoryId: 3, price: 30, category: 'Trofeos', image: 'https://via.placeholder.com/300x200' },
        { id: 4, name: 'Producto 4', categoryId: 4, price: 40, category: 'Trofeos', image: 'https://via.placeholder.com/300x200' },
        { id: 5, name: 'Producto 5', categoryId: 5, price: 50, category: 'Bodas', image: 'https://via.placeholder.com/300x200' },
      ],
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;

      // Filtrar por nombre
      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      // Filtrar por categoría si no se selecciona "Todos los estados"
      if (this.select && this.select.category !== 'Todos los estados') {
        filtered = filtered.filter(product => product.category === this.select.category);
      }

      return filtered;
    },
  },
  methods: {
    viewProduct(id) {
      console.log('Ver producto con ID:', id);
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: transform 0.3s;
}
.v-card:hover {
  transform: scale(1.05);
}
</style>
