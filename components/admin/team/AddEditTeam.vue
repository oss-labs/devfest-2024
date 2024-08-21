<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        size="x-small"
        @click="dialog = true"
        v-bind="activatorProps"
        color="primary"
        variant="tonal"
        class="mx-1"
        :icon="props.type == 'add' ? 'mdi-plus' : 'mdi-pencil'"
      >
      </v-btn>
    </template>

    <v-card rounded="xl">
      <v-container fluid>
        <v-row>
          <v-col>
            <h4>
              {{ props.type === "add" ? "Add Project" : "Edit Project" }}
            </h4>
          </v-col>
        </v-row>
        <v-row class="my-5">
          <v-col md="12" cols="12" class="my-n2">
            <v-text-field
              label="Name"
              v-model="formData.name"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="12" cols="12" class="my-n2">
            <v-textarea
              label="Description"
              v-model="formData.desc"
              variant="outlined"
            ></v-textarea>
          </v-col>
          <v-col md="12" cols="12" class="my-n2">
            <v-btn
              :loading="loading"
              @click="submit()"
              variant="flat"
              color="primary"
            >
              {{ props.type === "add" ? "Add Project" : "Edit Project" }}</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineEmits } from "vue";
const { addProject, updateProject } = useProjects();

let dialog = ref(false);
let loading = ref(false);
let formData = ref({
  name: "",
  desc: "",
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

const submit = async() => {
  console.log('sibmity', props.type);
  if (props.type == "add") {
    console.log('sibmity addinnng');
    // Logic for Add
    await addProjectData();
  }
  if (props.type == "edit") {
    console.log('sibmity editttt');
    // Logic for Edit
    await updateProjectData();
  }
};

const addProjectData = async () => {
  try {
    loading.value = true;
    let res = await addProject("projects", formData.value);
    emit("showUpdate", "Hello from Child");
    loading.value = false;
    dialog.value = false;
    console.log("res", res);
  } catch (error) {
    loading.value = false;
    console.log("errpr", error);
  }
};

const updateProjectData = async () => {
  try {
    loading.value = true;
    let res = await updateProject("projects", formData.value);
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