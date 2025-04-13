<template>
  <q-item
    clickable
    :tag="isExternal ? a : undefined"
    :target="isExternal ? '_blank' : undefined"
    :to="!isExternal ? props.link : undefined"
    @click="handleClick"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    default: '',
  },

  icon: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['link-clicked'])

const isExternal = computed(() => {
  return props.link.startsWith('http') || props.link.startsWith('mailto:')
})

const handleClick = () => {
  emit('link-clicked')
}
</script>
