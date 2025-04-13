<template>
    <div>
      <h1>Конвертер валют</h1>
      <div class="converter">
        <div class="row">
          <input type="number" v-model="inputValue" @input="convert('from')" />
          <select v-model="fromCurrency">
            <option v-for="currency in currencies" :key="currency" :value="currency">
              {{ currency }}
            </option>
          </select>
        </div>
        <div class="row">
          <input type="number" v-model="outputValue" @input="convert('to')" />
          <select v-model="toCurrency">
            <option v-for="currency in currencies" :key="currency" :value="currency">
              {{ currency }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import { useCurrencyStore } from '../stores/currency'
  
  const store = useCurrencyStore()
  const currencies = ['USD', 'EUR', 'RUB']
  
  const fromCurrency = ref('RUB')
  const toCurrency = ref('USD')
  const inputValue = ref(0)
  const outputValue = ref(0)
  
  const convert = (direction) => {
    const rateFrom = store.rates[fromCurrency.value]
    const rateTo = store.rates[toCurrency.value]
  
    if (direction === 'from') {
      outputValue.value = ((inputValue.value * rateFrom) / rateTo).toFixed(2)
    } else {
      inputValue.value = ((outputValue.value * rateTo) / rateFrom).toFixed(2)
    }
  }
  
  watch([fromCurrency, toCurrency], () => {
    convert('from')
  })
  </script>
  
  <style scoped>
  .converter .row {
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
  }
  </style>