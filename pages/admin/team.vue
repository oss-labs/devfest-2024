<template>
  <NuxtLayout name="admin">
    <!-- <h1>Projects Home</h1> -->
    <v-toolbar color="#F8F1F6" style="border-radius: 12px">
      <v-toolbar-title>Team</v-toolbar-title>
      <admin-team-add-edit-team
        type="add"
        @showUpdate="handleUpdateNotification"
      />
    </v-toolbar>

    <v-data-table
      style="background-color: #f8f1f6; border-radius: 12px"
      class="mt-4"
      :headers="headers"
      :items="teamData"
      :loading="loading"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <admin-team-delete-team
          @showUpdate="handleUpdateNotification"
          :docid="item.docid"
        />
        <admin-team-add-edit-team
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
const { getAllTeam } = useTeam();

definePageMeta({
  layout: false,
  requiresAuth: true,
});

let loading = ref(true);
let teamData = ref([]);

onMounted(() => {
  getAllTeamData();
});

const handleUpdateNotification = (message) => {
  console.log("message", message);
  getAllTeamData();
};

const getAllTeamData = async () => {
  try {
    loading.value = true;
    let res = await getAllTeam("team");
    console.log(res);
    teamData.value = res;
    loading.value = false;
  } catch (error) {
    console.log("error", error);
    loading.value = false;
  }
};

var headers = ref([
  { title: "Name", align: "start", key: "name", width: "20%" },
  { title: "Type", align: "start", key: "type", width: "50%" },
  { title: "Actions", align: "start", key: "actions", width: "30%" },
]);
</script>
      
  <style>
</style>