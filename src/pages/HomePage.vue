<template>
  <q-page
    v-if="$q.screen.lt.sm"
    class="flex flex-column justify-center q-mx-lg q-mt-md fixed-top-full"
  >
    <div class="text-h5 text-grey-1">Just Casually Exyzting.</div>
  </q-page>

  <q-page v-else class="flex flex-column justify-center q-mx-xl q-mt-lg fixed-top-full">
    <div class="q-mx-xl q-px-xl text-h4 text-grey-1">Just Casually Exyzting.</div>
  </q-page>
</template>

<script setup>
//
</script>
