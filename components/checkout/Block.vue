<template>
    <div class="block">
        <slot />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CheckoutBlock',
})
</script>

<style scoped>
.block {
    background: var(--color-always-white);
    border-radius: 20px;
    padding: 40px;
}
</style>
