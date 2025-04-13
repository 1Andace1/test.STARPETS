import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    baseCurrency: 'RUB',
    rates: {
      USD: 0,
      EUR: 0,
      RUB: 1
    }
  }),
  actions: {
    async fetchRates() {
      try {
        this.rates = {
          USD: 91.45,
          EUR: 101.74,
          RUB: 1
        }
      } catch (error) {
        console.error('Ошибка загрузки курсов:', error)
      }
    },
    setBaseCurrency(currency) {
      this.baseCurrency = currency
    }
  }
})