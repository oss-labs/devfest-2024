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
              {{ props.type === "add" ? "Add Team" : "Edit Team" }}
            </h4>
          </v-col>
        </v-row>
        <v-row class="my-5">
          <v-col md="4" cols="12" class="my-n2">
            <v-select
              label="Team Type"
              v-model="formData.type"
              variant="outlined"
              :items="['Core', 'Volunteer']"
            ></v-select>
          </v-col>
          <v-col md="6" cols="12" class="my-n2">
            <v-text-field
              label="Full Name"
              v-model="formData.name"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="12" class="my-n2">
            <v-text-field
              label="Community Title"
              v-model="formData.community_title"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col md="12" cols="12" class="my-n2">
            <v-text-field
              label="Profile Image"
              v-model="formData.image"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col md="6" cols="12" class="my-n2">
            <v-text-field
              label="Company Name"
              v-model="formData.company.name"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="12" class="my-n2">
            <v-text-field
              label="Company Designation"
              v-model="formData.company.designation"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="12" cols="12" class="my-n2">
            <v-textarea
              label="Bio"
              v-model="formData.bio"
              variant="outlined"
              rows="3"
            ></v-textarea>
          </v-col>

          <v-col md="4" cols="12" class="my-n2">
            <v-text-field
              label="Linkedin"
              v-model="formData.social.linkedin"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="4" cols="12" class="my-n2">
            <v-text-field
              label="Instagram"
              v-model="formData.social.instagram"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="4" cols="12" class="my-n2">
            <v-text-field
              label="Twitter"
              v-model="formData.social.twitter"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="4" cols="12" class="my-n2">
            <v-text-field
              label="Web"
              v-model="formData.social.web"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="4" cols="12" class="my-n2">
            <v-text-field
              label="Github"
              v-model="formData.social.github"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col md="12" cols="12" class="my-n2">
            <v-btn
              :loading="loading"
              @click="submit()"
              variant="flat"
              color="primary"
            >
              {{ props.type === "add" ? "Add Team" : "Edit Team" }}</v-btn
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
const { addTeam, updateTeam } = useTeam();

let dialog = ref(false);
let loading = ref(false);
let formData = ref({
  name: "",
  bio: "",
  image: "",
  type: "",
  company: {
    name: "",
    designation: "",
  },
  community_title: "",
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    github: "",
    web: "",
  },
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
    await addTeamData();
  }
  if (props.type == "edit") {
    console.log("sibmity editttt");
    // Logic for Edit
    await updateTeamData();
  }
};

const addTeamData = async () => {
  try {
    loading.value = true;
    let res = await addTeam("team", formData.value);
    emit("showUpdate", "Hello from Child");
    loading.value = false;
    dialog.value = false;
    console.log("res", res);
  } catch (error) {
    loading.value = false;
    console.log("errpr", error);
  }
};

const updateTeamData = async () => {
  try {
    console.log("formData edit", formData.value);

    loading.value = true;
    let res = await updateTeam("team", formData.value.docid, formData.value);
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