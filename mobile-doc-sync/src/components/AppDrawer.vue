<template>
  <q-drawer v-model="isDrawerOpen" side="left" bordered>
      <q-list class="q-pt-xl">
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/timesheets">
          <q-item-section avatar>
            <q-icon name="info" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Timesheets</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/expense-reports">
          <q-item-section avatar>
            <q-icon name="info" size="md" />
          </q-item-section>
          <q-item-section class="text-weight-bold">Expense Reports</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>

<script>
  export default {
    name: 'AppDrawer',
    props: {
      drawerOpen: Boolean
    },
    data(){
      return{
        isDrawerOpen: console.log(`this.drawerOpen => ${this.drawerOpen}`)
      }
    }
  }
</script>