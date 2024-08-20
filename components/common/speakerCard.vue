<template>
  <v-dialog v-model="dialog" width="auto" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <div
        v-bind="activatorProps"
        style="border: 1.5px solid black; border-radius: 12px; cursor: pointer"
        class="text-center py-5"
      >
        <v-avatar size="120">
          <v-img
            src="https://raw.githubusercontent.com/vrijraj/devfest-website-2023/main/src/assets/img/common/avatar.jpg"
          ></v-img>
        </v-avatar>
        <p>Full Name</p>
        <p>Designation</p>
      </div>
    </template>

    <v-card
      max-width="800"
      rounded="xl"
    >
      <v-container fluid>
        <h1>Heading</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur deleniti impedit aliquam, veritatis quasi, numquam voluptate fugit excepturi nihil eum. Quasi maiores laborum doloremque mollitia dolor optio eum aspernatur.</p>
      </v-container>
      <template v-slot:actions>
        <v-btn text @click="dialog = false">Close</v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
  
  <script setup>
// Props
defineProps({
  id: String,
});

// Reactive variables
const dialog = ref(false);
</script>
  
  <style></style>
  