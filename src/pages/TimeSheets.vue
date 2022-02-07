<template>
  <q-page class="">
    <q-item>TimeSheets</q-item>
    {{ store.state.savedFiles }}
    <file-list></file-list>
    <action-button />
  </q-page>
</template>

<script>
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
    return {
      store,
    };
  },
};
</script>
