<template>
  <q-layout view="hHh lpR fFf">

    <nav-bar @leftDrawerOpen="toggleLeftDrawer($event)" @rightDrawerOpen="toggleRightDrawer($event)" />

    <q-drawer v-model="isLeftDrawerOpen" side="left" behavior="mobile" bordered>
      <q-list class="q-pt-xl">
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="las la-home" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/timesheets">
          <q-item-section avatar>
            <q-icon name="las la-business-time" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Timesheets</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/expense-reports">
          <q-item-section avatar>
            <q-icon name="las la-file-invoice-dollar" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Expense Reports</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="isRightDrawerOpen" side="right" behavior="mobile" bordered>
      <q-list class="q-pt-xl">
        <q-item>
          <q-item-section class="text-weight-bold">This will be for file previews</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import NavBar from '../components/NavBar'
//import AppDrawer from '../components/AppDrawer'

export default {
  name: 'MainLayout',
  components: {
    NavBar,
    //AppDrawer
  },
  data(){
    return{
      isLeftDrawerOpen: false,
      isRightDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer(e){
      this.isLeftDrawerOpen = e
      console.log(`e => ${e}`)
    },
    toggleRightDrawer(e){
      this.isRightDrawerOpen = e
      console.log(`e => ${e}`)
    }
  }
}
</script>

