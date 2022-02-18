<template>
  <ul>
<<<<<<< HEAD
    Files:
    <li v-for="(file, index) in fileList" :key="index">File: {{ file }}</li>
=======
    <li v-for="(file, index) in getFiles" :key="index">File: {{ file }}</li>
>>>>>>> 1acc7e90f8a3d6d8cd6047445d4b50e3cf703395
  </ul>
</template>

<script>
//import { computed, ref } from "vue";
import { useStore } from "vuex";
import db from "src/boot/firebase"
import { collection, query, where, onSnapshot } from "firebase/firestore";



export default {
  name: "FileList",
  setup() {
    const store = useStore();
<<<<<<< HEAD
    const fileList = store.state.imagesToUpload;
    const file = ref;
  
    db.collection('uploads').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New timesheet: ", change.doc.data());
        }
        if (change.type === "modified") {
            console.log("Modified timesheet: ", change.doc.data());
        }
        if (change.type === "removed") {
            console.log("Removed timesheet: ", change.doc.data());
        }
      });
    });
    
    console.log(`fileList => ${fileList}`);

    return {
      db,
      store,
      fileList
=======
    //const savedFiles = computed(() => store.getters["upload/files"]);
  

    return {
      store,
>>>>>>> 1acc7e90f8a3d6d8cd6047445d4b50e3cf703395
    };
  },
};
</script>
