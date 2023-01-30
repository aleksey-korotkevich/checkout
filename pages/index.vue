<template>
  <div style="display: flex; flex-direction:column;gap:20px;justify-content:center;align-items:center;">
    <a href="/fake-storybook">Fake storybook</a>
    <a href="/checkout?paymentsCount=1">Checkout with 1 payment</a>
    <a href="/checkout?paymentsCount=2">Checkout with 2 payments</a>
    <a href="/checkout?paymentsCount=3">Checkout with 3 payments</a>
    <a href="/checkout?paymentsCount=4">Checkout with 4 payments</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
