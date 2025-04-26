<template>
  <q-page
    class="flex flex-column fixed-top-full"
    :class="$q.screen.lt.md ? 'q-mx-lg q-mt-md' : 'q-mx-xl q-mt-lg'"
  >
    <div class="text-grey-1" :class="$q.screen.lt.md ? 'text-h5' : 'q-mx-xl q-px-xl text-h4'">
      This is the blog page.
    </div>
  </q-page>
</template>

<script setup>
//
</script>
