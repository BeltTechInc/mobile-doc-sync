<template>
  <q-page-sticky position="bottom-right" :offset="fabPos">
    <q-fab
      icon="add"
      direction="up"
      color="accent"
      :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab"
    >
      <q-fab-action @click="onClick" color="primary" icon="person_add" :disable="draggingFab" />
      <q-fab-action @click="onClick" color="primary" icon="mail" :disable="draggingFab" />
    </q-fab>
  </q-page-sticky>  
</template>

<script>
  import { ref } from 'vue'
  
  export default {
    name: "ActionButton",
    setup () {
      const fabPos = ref([ 18, 18 ])
      const draggingFab = ref(false)

      return {
        fabPos,
        draggingFab,

        onClick () {
          console.log('Clicked on a fab action')
        },

        moveFab (ev) {
          draggingFab.value = ev.isFirst !== true && ev.isFinal !== true

          fabPos.value = [
            fabPos.value[ 0 ] - ev.delta.x,
            fabPos.value[ 1 ] - ev.delta.y
          ]
        }
      }
    }
  }
</script>