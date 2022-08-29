<template>
  <button @click="counter.add">+1</button>
  {{ num }}
  <button @click="ceshi.add">+1</button>
  {{ ceshi.a }}

  <p>未完成：{{ ceshi.a1 }}</p>
</template>

<script setup>
import { useCounterStore } from './store/counter';
import { useCeshiStore } from './store/ceshi'
import { storeToRefs } from 'pinia';
const counter = useCounterStore()
const ceshi = useCeshiStore()
// 如果直接从pinia中解构数据，会丢失响应式， 使用storeToRefs可以保证解构出来的数据也是响应式的
const { num } = storeToRefs(counter) 
</script>

<style scoped>
</style>
