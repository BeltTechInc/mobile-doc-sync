<template>
  <ul>
    Files:
    <li v-for="(file, index) in getFiles" :key="index">File: {{ file }}</li>
  </ul>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "FileList",
  setup() {
    const store = useStore();
    const files = ref([]);
    const getFiles = computed(() => store.getters.files);

    console.log(`files: ${getFiles.value}`);
    return {
      getFiles,
      files,
    };
  },
};
</script>
