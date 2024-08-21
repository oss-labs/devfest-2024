<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        size="x-small"
        @click="dialog = true"
        icon="mdi-delete"
        v-bind="activatorProps"
        color="primary"
        class="mx-2"
        variant="tonal"
      ></v-btn>
    </template>
    <v-card rounded="xl" class="pa-4">
      <v-container fluid>
        <v-row>
          <v-col>
            <h4>Delete Speaker</h4>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col md="12" cols="12" class="my-n2">
            <p>Are you sure?</p>
            <p>Deleted Speaker Can't be Recover!!</p>
          </v-col>
          <v-col md="12" cols="12" class="mt-4">
            <v-btn
              :loading="loading"
              @click="deleteSpeakerData"
              variant="flat"
              color="primary"
              >Delete</v-btn
            >
            <v-btn variant="flat" class="mx-2" @click="dialog=false">Close</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
  
  <script setup>
import { defineEmits } from "vue";
const { deleteSpeaker } = useSpeakers();

let dialog = ref(false);
let loading = ref(false);

const props = defineProps({
  docid: {
    type: String,
    required: true,
  },
});

// Define the emit function
const emit = defineEmits(["showUpdate"]);

const deleteSpeakerData = async () => {
  try {
    loading.value = true;
    console.log("deleting projects whose doc id is::::", props.docid);
    let res = await deleteSpeaker("speakers", props.docid);
    emit("showUpdate", "Hello from Child");
    loading.value = false;
    dialog.value = false;
    console.log("res", res);
  } catch (error) {
    loading.value = false;
    console.log("errpr", error);
  }
};
</script>
  
  <style>
</style>