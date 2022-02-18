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
    

    const update = () => {
<<<<<<< HEAD
      console.log(`state => ${JSON.stringify(store.state)}`);
      
=======
      //console.log(` state => ${JSON.stringify(store.state)}`);
      console.log(getUploadQueue.value);
>>>>>>> 1acc7e90f8a3d6d8cd6047445d4b50e3cf703395
    };
    return {
      store,
      update,
    };
  },
};
</script>
