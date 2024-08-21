<template>
  <NuxtLayout name="admin">
    <h1>Admin Home</h1>
    asd> {{ adminDrawer }}
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, libero. Eius
      sed ex impedit sit dolorum quae earum nobis nemo quaerat sint illo, sequi
      assumenda adipisci eveniet animi inventore aut!
    </p>
    {{ currentUser }}
  </NuxtLayout>
</template>
  
  <script setup>
const { currentUser } = useAuth();
const { adminDrawer } = useAdminSideBar();
definePageMeta({
  layout: false,
  requiresAuth: true,
});
</script>
  
  <style>
</style>