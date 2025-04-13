<template>
    <header>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/convert">Конвертация</router-link>
      </nav>
      <select v-model="baseCurrency" @change="updateBaseCurrency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
      </select>
    </header>
  </template>
  
  <script setup>
  import { useCurrencyStore } from '../stores/currency'
  import { computed } from 'vue'
  
  const store = useCurrencyStore()
  
  const baseCurrency = computed({
    get: () => store.baseCurrency,
    set: (value) => store.setBaseCurrency(value)
  })
  
  const updateBaseCurrency = () => {
    store.fetchRates()
  }
  </script>
  
  <style scoped>
  header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background: #f5f5f5;
  }
  nav a {
    margin-right: 1rem;
  }
  </style>