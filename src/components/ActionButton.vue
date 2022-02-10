<template>
  <q-page-sticky position="bottom-right" :offset="fabPos">
    <q-fab
      icon="las la-plus"
      direction="up"
      color="accent"
      :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab"
    >
      <q-fab-action
        @click="chooseImages"
        color="primary"
        icon="las la-image"
        :disable="draggingFab"
      />
      <q-fab-action
        @click="captureImage"
        color="primary"
        icon="las la-camera-retro"
        :disable="draggingFab"
      />
    </q-fab>
  </q-page-sticky>
</template>

<script>
import { ref, computed } from "vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useStore } from "vuex";

export default {
  name: "ActionButton",

  setup() {
    const store = useStore();

    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    const imageSrc = ref("");

    async function captureImage() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      }).catch((err) => console.log(err));

      imageSrc.value = image.webPath;
    }

    async function chooseImages() {
      const images = await Camera.pickImages({
        quality: 90,
        limit: 0,
        correctOrientation: true,
      }).catch((err) => console.log(err));

      console.log(`images => ${JSON.stringify(images)}`);

      addToUploadQueue(images);
      addToSavedFiles(queue);

      console.log(`store.state => ${JSON.stringify(store.state)}`);
    }

    const addToUploadQueue = (images) =>
      store.commit("uploads/addToUploadQueue", images);

    const queue = computed(() => store.getters["uploads/queue"]);
    console.log(`queue => ${queue.value}`);

    const addToSavedFiles = (queue) =>
      store.commit("uploads/addToSavedFiles", queue.value);

    return {
      store,
      fabPos,
      draggingFab,
      imageSrc,
      addToUploadQueue,
      addToSavedFiles,
      captureImage,
      chooseImages,

      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;

        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y,
        ];
      },
    };
  },
};
</script>
