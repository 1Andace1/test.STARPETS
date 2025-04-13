<template>
  <div>
    <h1>Курсы валют (базовая: {{ store.baseCurrency }})</h1>
    <div v-for="(rate, currency) in store.rates" :key="currency">
      1 {{ currency }} = {{ rate }} {{ store.baseCurrency }}
    </div>
  </div>
</template>

<script setup>
import { useCurrencyStore } from '../stores/currency'

const store = useCurrencyStore()
store.fetchRates()
</script>