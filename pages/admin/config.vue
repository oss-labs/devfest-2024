<template>
    <NuxtLayout name="admin">
      <!-- <h1>Projects Home</h1> -->
      <v-toolbar color="#F8F1F6" style="border-radius: 12px">
        <v-toolbar-title>Speakers</v-toolbar-title>
        <admin-speakers-add-edit-speaker
          type="add"
          @showUpdate="handleUpdateNotification"
        />
      </v-toolbar>
  
      <v-data-table
        style="background-color: #f8f1f6; border-radius: 12px"
        class="mt-4"
        :headers="headers"
        :items="projectsData"
        :loading="loading"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <admin-speakers-delete-speaker
            @showUpdate="handleUpdateNotification"
            :docid="item.docid"
          />
          <admin-speakers-add-edit-speaker
            type="edit"
            :item="item"
            @showUpdate="handleUpdateNotification"
          />
        </template>
      </v-data-table>
    </NuxtLayout>
  </template>
        
    <script setup>
  const { currentUser } = useAuth();
  const { addProject, deleteProject, getAllProjects, updateProject } =
    useProjects();
  
  definePageMeta({
    layout: false,
    requiresAuth: true,
  });
  
  let loading = ref(true);
  let addProjectLoader = ref(false);
  let projectsData = ref([]);
  
  onMounted(() => {
    getAllProjectsData();
  });
  
  const handleUpdateNotification = (message) => {
    console.log("message", message);
    getAllProjectsData();
  };
  
  const getAllProjectsData = async () => {
    try {
      loading.value = true;
      let res = await getAllProjects("projects");
      console.log(res);
      projectsData.value = res;
      loading.value = false;
    } catch (error) {
      console.log("error", error);
      loading.value = false;
    }
  };
  
  var headers = ref([
    { title: "Name", align: "start", key: "name", width: "20%" },
    { title: "Description", align: "end", key: "desc", width: "50%" },
    { title: "Actions", align: "start", key: "actions", width: "30%" },
  ]);
  </script>
        
    <style>
  </style>