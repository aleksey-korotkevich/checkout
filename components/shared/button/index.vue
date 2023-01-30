<template>
    <button class="button" :type="type" :class="{ 'button--disabled': disabled }" @click="$emit('click')">
        {{ title }}
    </button>
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
    name: 'SkillButton',
    props: {
        title: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<'submit' | 'button'>,
            default: 'button'
        }
    },
    emits: ['click'],
}
</script>

<style scoped>
.button {
    background: var(--color-brand);
    color: var(--color-always-white);
    border-radius: 12px;
    padding: 18px 48px;
    font-family: 'Graphik LC TT';
    font-weight: 500;
    border: none;
    font-size: 18px;
    line-height: 20px;
    transition: background 0.3s;
    cursor: pointer;
}

.button:hover {
    background: var(--color-always-black);
}

.button--disabled {
    background: var(--bg-color-secondary-accent);
    color: var(--text-color-disable);
    pointer-events: none;
}
</style>
