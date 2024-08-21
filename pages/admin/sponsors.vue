<template>
  <NuxtLayout name="admin">
    <!-- <h1>Projects Home</h1> -->
    <v-toolbar color="#F8F1F6" style="border-radius: 12px">
      <v-toolbar-title>
        Sponsors
        <span v-if="sponsorsData.length">({{ sponsorsData.length }})</span>
      </v-toolbar-title>
      <admin-sponsors-add-edit-sponsor
        type="add"
        @showUpdate="handleUpdateNotification"
      />
    </v-toolbar>

    <v-data-table
      style="background-color: #f8f1f6; border-radius: 12px"
      class="mt-4"
      :headers="headers"
      :items="sponsorsData"
      :loading="loading"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <admin-sponsors-delete-sponsor
          @showUpdate="handleUpdateNotification"
          :docid="item.docid"
        />
        <admin-sponsors-add-edit-sponsor
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
const { getAllSponsors } = useSponsors();

definePageMeta({
  layout: false,
  requiresAuth: true,
});

let loading = ref(true);
let sponsorsData = ref([]);

onMounted(() => {
  getAllSponsorsData();
});

const handleUpdateNotification = (message) => {
  console.log("message", message);
  getAllSponsorsData();
};

const getAllSponsorsData = async () => {
  try {
    loading.value = true;
    let res = await getAllSponsors("sponsors");
    console.log(res);
    sponsorsData.value = res;
    loading.value = false;
  } catch (error) {
    console.log("error", error);
    loading.value = false;
  }
};

var headers = ref([
  { title: "Name", align: "start", key: "name", width: "20%" },
  // { title: "Community", align: "start", key: "community_title", width: "50%" },
  { title: "Actions", align: "start", key: "actions", width: "30%" },
]);
</script>
      
  <style>
</style>