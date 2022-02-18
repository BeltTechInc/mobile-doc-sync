<template>
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

export default {
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