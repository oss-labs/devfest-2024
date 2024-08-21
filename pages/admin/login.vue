<template>
  <NuxtLayout name="admin">
    <v-container class="fill-height">
      <!-- <v-row align="center" justify="center">
        <v-col cols="12">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
      </v-row> -->
      <v-row align="center" justify="center">
        <v-col
          md="4"
          style="background-color: #f8f1f6; border-radius: 12px"
          class="pa-4 text-center"
        >
          <h1>Admin Login</h1>
          <p>Login with Admin</p>
          <v-btn class="my-3" prepend-icon="mdi-google" @click="googleLogin"
            >Sign in with Google</v-btn
          >
          {{ currentUser }}
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>
  
<script setup>
definePageMeta({
  layout: false,
  requiresAuth: false,
});

const { signInWithGoogle, currentUser } = useAuth();

const googleLogin = async () => {
  try {
    let res = await signInWithGoogle();
    console.log("ressss", res);
    navigateTo("/admin");
  } catch (error) {
    console.log("errrrr", error);
  }
};
</script>
  
  <style>
</style>