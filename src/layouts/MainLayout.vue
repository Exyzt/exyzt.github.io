<template>
  <q-layout view="lHr Lpr lFr">
    <q-header elevated>
      <q-toolbar class="bg-grey-5">
        <q-toolbar-title v-if="$q.screen.lt.sm" class="text-h5 text-dark q-pa-md q-mx-md q-my-s">
          <router-link to="/" style="text-decoration: none; color: inherit"> Exyzt </router-link>
          <span v-if="currentPageTitle && $route.path !== '/'"> - {{ currentPageTitle }} </span>
        </q-toolbar-title>

        <q-toolbar-title v-else class="text-h4 text-dark q-pa-md q-mx-md q-my-s">
          <router-link to="/" style="text-decoration: none; color: inherit"> Exyzt </router-link>
          <span v-if="currentPageTitle && $route.path !== '/'"> - {{ currentPageTitle }} </span>
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          color="black"
          icon="menu"
          aria-label="Menu"
          size="xl"
          class="q-pa-md q-mx-md q-my-s"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" class="bg-grey-5" show-if-above side="right" bordered>
      <q-list>
        <q-item-label header class="text-h4 text-grey-8 q-pl-sm q-pl-sm q-pr-xs">
          <q-icon name="room" size="lg" /> Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          class="text-h5"
          :style="{
            opacity: linkHover === link.title || $route.path === link.link ? '1' : '0.4',
            color: linkHover === link.title ? 'black' : 'inherit',
            transition: 'all 0.3 ease',
          }"
          @mouseover="linkHover = link.title"
          @mouseleave="linkHover = null"
          @link-clicked="rightDrawerOpen = false"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Projects',
    icon: 'code',
    link: '/projects',
  },
  {
    title: 'Notes',
    icon: 'book',
    link: '/notes',
  },
  {
    title: 'Blog',
    icon: 'chat',
    link: '/blog',
  },
]

const route = useRoute()
const rightDrawerOpen = ref(false)
const linkHover = ref(null)

const currentPageTitle = computed(() => {
  const currentLink = linksList.find((link) => link.link === route.path)
  return currentLink?.title || ''
})

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
