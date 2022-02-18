<template>
<<<<<<< HEAD
  <q-page class="">
    <q-separator size="10px" />
    <q-list bordered separator>
      <q-item-label header>File Uploads</q-item-label>
      <q-item>
        <file-list />
      </q-item>
      <q-item>
        <q-item-section top>
          <q-item-label caption class="text-grey-9">
            file
          </q-item-label>
        </q-item-section>
        <q-item-section top side>
          <div class="text-grey-9 q-gutter-xs">
            <q-btn size="13px" flat dense round icon="las la-times-circle" />
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section top>
          <q-item-label caption class="text-grey-9">
            file
          </q-item-label>
        </q-item-section>
        <q-item-section top side>
          <div class="text-grey-9 q-gutter-xs">
            <q-btn size="13px" flat dense round icon="las la-times-circle" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import FileList from "src/components/FileList.vue";
=======
  <q-page class="column justify-start">
    <div class="row justify-center q-my-xl">
      <img alt="Quasar logo" src="~assets/logo.png" height="326px" width="300px">
    </div>
    <div class="q-px-lg text-h6 text-center">
      <router-link to="auth/register" class="text-primary">Register</router-link> a new account or
      <router-link to="auth/login" class="text-primary">log in</router-link>.
    </div>
  </q-page>
</template>
>>>>>>> 1acc7e90f8a3d6d8cd6047445d4b50e3cf703395

<script>
export default {
<<<<<<< HEAD
  name: "PageIndex",

  components: {
    FileList
  },

  setup(){
    const store = useStore();
    return{
      store
    }
  }
};
</script>
=======
  name: 'PageIndex'
}
</script>
>>>>>>> 1acc7e90f8a3d6d8cd6047445d4b50e3cf703395
