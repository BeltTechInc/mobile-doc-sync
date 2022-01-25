<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-space />
          <q-img src="../assets/logo.png" alt="BeltTech" style="max-width:150px" fit="scale-down" />
        <q-space />
      <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-header>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      leftDrawerOpen: Boolean
    },
    data(){
      return{
        leftOpen: this.leftDrawerOpen,
        isRightDrawerOpen: false
      }
    },
    methods: {
      toggleLeftDrawer () {
        this.$emit('leftDrawerOpen', !this.leftOpen)
      },
      toggleRightDrawer () {
        this.$emit('rightDrawerOpen', !this.isRightDrawerOpen)
      } 
    }  
  }
</script>