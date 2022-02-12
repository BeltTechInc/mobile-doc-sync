<template>
  <q-page class="">
    <q-item>TimeSheets</q-item>
    {{ store.state.savedFiles }}
    <file-list></file-list>
    <button @click="update">Update</button>
    <action-button></action-button>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ActionButton from "../components/ActionButton";
import FileList from "../components/FileList.vue";

export default {
  name: "TimeSheets",

  components: {
    ActionButton,
    FileList,
  },

  setup() {
    const store = useStore();
    const getUploadQueue = computed(() => store.getters["uploads/queue"]);

    const update = () => {
      //console.log(` state => ${JSON.stringify(store.state)}`);
      console.log(getUploadQueue.value);
    };
    return {
      store,
      update,
    };
  },
};
</script>
