<template>
  <v-app-bar flat style="width: 100%" class="mt-0 ma-0" color="#fdfbff">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="toggleDrawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <nuxt-link
        to="/"
        style="text-decoration: none;color:black"
      >
        Application Admin
      </nuxt-link>
    </v-app-bar-title>
    <!-- <v-btn
      @click="toggleTheme"
      class="mx-3"
      size="small"
      icon="mdi-theme-light-dark"
      variant="flat"
    ></v-btn> -->
    <v-btn class="mx-2" rounded variant="flat" to="/" color="primary"
      >Main Website</v-btn
    >
    <v-btn rounded variant="flat" @click="logout" color="primary">Logout</v-btn>
  </v-app-bar>
</template>
    
<script setup>
// import { useTheme } from "vuetify";
const adminDrawer  = useAdminSideBar();

const { logoutUser, currentUser } = useAuth();

// const theme = useTheme();

// function toggleTheme() {
//   theme.global.name.value =
//     theme.global.name.value == "light" ? "dark" : "light";
// }

// const toggleDrawer = ()=>{
//   adminDrawer.value = !adminDrawer.value
// }

const logout = async () => {
  try {
    let res = await logoutUser();
    console.log("logout ", res);
    navigateTo("/admin/login");
  } catch (error) {
    console.log(error);
  }
};

</script>