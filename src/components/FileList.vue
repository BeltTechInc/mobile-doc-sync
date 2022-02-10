<template>
  <ul>
    <li v-for="(file, index) in getFiles" :key="index">File: {{ file }}</li>
  </ul>
</template>

<script>
//import { computed, ref } from "vue";
import { useStore } from "vuex";


export default {
  name: "FileList",
  setup() {
    const store = useStore();
    //const savedFiles = computed(() => store.getters["upload/files"]);
  

    return {
      store,
    };
  },
};
</script>
