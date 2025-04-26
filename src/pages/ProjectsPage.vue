<template>
  <q-page
    v-if="$q.screen.lt.sm"
    class="flex flex-column justify-center q-mx-lg q-mt-md fixed-top-full"
  >
    <div class="text-body2 text-grey-1">
      This page is where I will upload recreational projects that I plan to work on and I'll update
      and post the projects in this page once it has been completed. <br /><br />
      The projects that I will do are mostly computer science related projects. Currently my
      interests lies on building projects that are machine learning & AI based applications.
    </div>
  </q-page>

  <q-page v-else class="flex flex-column justify-center q-mx-xl q-mt-lg fixed-top-full">
    <div class="q-mx-xl q-px-xl text-h6 text-grey-1">
      This page is where I will upload recreational projects that I plan to work on and I'll update
      and post the projects in this page once it has been completed. The projects that I will do are
      mostly computer science related projects. Currently my interests lies on building projects
      that are machine learning & AI based applications.
    </div>
  </q-page>
</template>

<script setup>
//
</script>
