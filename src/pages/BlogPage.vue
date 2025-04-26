<template>
  <q-page v-if="$q.screen.lt.sm" class="flex flex-column q-mx-lg q-mt-md fixed-top-full">
    <div class="text-h5 text-grey-1">This is the blog page.</div>
  </q-page>

  <q-page v-else class="flex flex-column q-mx-xl q-mt-lg fixed-top-full">
    <div class="q-mx-xl q-px-xl text-h4 text-grey-1">This is the blog page.</div>
  </q-page>
</template>

<script setup>
//
</script>
