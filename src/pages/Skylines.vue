<template>
  <v-container>
    <h1>{{ $t('skylines_title') }}</h1>
    <p>{{ $t('skylines_description') }}</p>
  
    <!-- Tarjetas de productos de la categoría "Skylines" -->
    <v-row>
      <v-col
        v-for="(product, index) in skylinesProducts"
        :key="index"
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
              {{ $t('view_more') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  export default {
    name: "Skylines",
    data() {
      return {
        skylinesProducts: [
          {
            id: 1,
            name: 'Skyline 1',
            price: 100,
            category: 'Skylines',
            image: 'https://via.placeholder.com/300x200',
          },
          {
            id: 2,
            name: 'Skyline 2',
            price: 120,
            category: 'Skylines',
            image: 'https://via.placeholder.com/300x200',
          },
          {
            id: 3,
            name: 'Skyline 3',
            price: 150,
            category: 'Skylines',
            image: 'https://via.placeholder.com/300x200',
          },
        ],
      };
    },
    methods: {
      viewProduct(id) {
        console.log('Ver producto con ID:', id);
        // Aquí podrías redirigir a una página de detalles del producto
        this.$router.push({ name: 'product-detail', params: { id } });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el contenedor de productos */
  .v-card {
    transition: transform 0.3s;
  }
  .v-card:hover {
    transform: scale(1.05);
  }
  </style>
  