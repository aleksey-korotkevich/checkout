<template>
  <div
    class="panel"
    :class="{ 'panel--active': isActive }"
    @click="$emit('click')"
  >
    <div class="panel__title">{{ title }}</div>
    <div class="panel__payments">
      <slot name="payments" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Panel',
  props: {
    title: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
}
</script>

<style scoped>
.panel {
  background: var(--color-always-white);
  border: 1px solid var(--stroke-color-main);
  border-radius: 12px;
  padding: 16px;
  max-width: 230px;
  transition: border 0.3s;
}
.panel:hover {
  border-color: var(--color-brand);
  cursor: pointer;
}

.panel--active {
  border: 2px solid var(--color-brand);
}

.panel__title {
  font-family: 'Graphik LC TT';
  font-size: 14px;
  line-height: 20px;
  padding-right: 50px;
  padding-bottom: 16px;
}

.panel__payments {
  height: 16px;
  display: flex;
  gap: 4px;
}

@media screen and (max-width: 768px), (max-height: 320px) {
  .panel {
    padding: 12px;
  }

  .panel__title {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
