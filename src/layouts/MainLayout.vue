<template>
  <q-layout view="$q.screen.lt.md ? hHh lpR fFf : hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-5">
        <q-toolbar-title
          class="text-dark q-my-s"
          :class="$q.screen.lt.md ? 'text-h5 q-pa-sm q-mx-xs' : 'text-h4 q-pa-md q-mx-md'"
        >
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
          class="q-pa-sm q-mx-xs q-my-s"
          :class="$q.screen.lt.md ? 'q-pa-sm q-mx-xs' : 'q-pa-md q-mx-md'"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      class="bg-grey-5 inset-shadow"
      side="right"
      elevated
      overlay
      :width="$q.screen.lt.sm ? 240 : void 0"
    >
      <q-list>
        <q-item-label header class="text-h4 text-grey-8 q-pl-sm q-pr-xs q-pb-xs">
          <q-icon name="room" size="lg" class="q-pb-sm" /> Navigation
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
      <transition
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slower delay-5s"
      >
        <router-view />
      </transition>
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
