<template>
  <v-dialog v-model="dialog" width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        size="x-small"
        @click="dialog = true"
        v-bind="activatorProps"
        color="primary"
        variant="tonal"
        class="mx-4"
        :icon="props.type == 'add' ? 'mdi-plus' : 'mdi-pencil'"
      >
      </v-btn>
    </template>

    <v-card rounded="xl" class="pa-4">
      <v-container fluid>
        <v-row>
          <v-col>
            <h4>
              {{ props.type === "add" ? "Add Sponsor" : "Edit Sponsor" }}
            </h4>
          </v-col>
        </v-row>
        <v-row class="my-5">
          <v-col md="4" cols="12" class="my-n2">
            <v-select
              label="Sponsor Type"
              v-model="formData.type"
              variant="outlined"
              :items="['x', 'y']"
            ></v-select>
          </v-col>
          <v-col md="8" cols="12" class="my-n2">
            <v-text-field
              label="Sponsor Name"
              v-model="formData.name"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col md="12" cols="12" class="my-n2">
            <v-text-field
              label="Logo"
              v-model="formData.image"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col md="12" cols="12" class="my-n2">
            <v-text-field
              label="Sponsor Link"
              v-model="formData.link"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col md="12" cols="12" class="my-n2">
            <v-textarea
              label="Description"
              v-model="formData.description"
              variant="outlined"
              rows="3"
            ></v-textarea>
          </v-col>

          <v-col md="12" cols="12" class="my-n2">
            <v-btn
              :loading="loading"
              @click="submit()"
              variant="flat"
              color="primary"
            >
              {{ props.type === "add" ? "Add Sponsor" : "Edit Sponsor" }}</v-btn
            >
            <v-btn variant="flat" class="mx-2" @click="dialog = false"
              >Close</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineEmits } from "vue";
const { addSponsor, updateSponsor } = useSponsors();

let dialog = ref(false);
let loading = ref(false);
let formData = ref({
  name: "",
  description: "",
  image: "",
  link: "",
  type: "",
});

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: false,
  },
});

watch(
  () => dialog.value,
  () => {
    if (props.item && Object.keys(props.item).length) {
      formData.value = props.item;
    }
  }
);

// Define the emit function
const emit = defineEmits(["showUpdate"]);

const submit = async () => {
  console.log("sibmity", props.type);
  if (props.type == "add") {
    console.log("sibmity addinnng");
    // Logic for Add
    await addSponsorData();
  }
  if (props.type == "edit") {
    console.log("sibmity editttt");
    // Logic for Edit
    await updateSponsorData();
  }
};

const addSponsorData = async () => {
  try {
    loading.value = true;
    let res = await addSponsor("sponsors", formData.value);
    emit("showUpdate", "Hello from Child");
    loading.value = false;
    dialog.value = false;
    console.log("res", res);
  } catch (error) {
    loading.value = false;
    console.log("errpr", error);
  }
};

const updateSponsorData = async () => {
  try {
    console.log("formData edit", formData.value);

    loading.value = true;
    let res = await updateSponsor(
      "sponsors",
      formData.value.docid,
      formData.value
    );
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