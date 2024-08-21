export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await useState("user");
  console.log('user', user.value);

  // If the user is not logged in and is trying to access a protected route
  if (!user.value && to.meta.requiresAuth) {
    console.log('aaa');
    // Redirect to login page
    return navigateTo("/admin/login");
  }

  // If the user is logged in and trying to access login/register pages
  if (user.value && to.path === "/admin/login") {
    // Redirect to home page or dashboard
    return navigateTo("/admin");
    // return navigateTo(from.)
  }

  // if (user.value && to.path === !"/admin/login") {
  //   // Redirect to home page or dashboard
  //   console.log('cc');
  //   return true
  // }

  // if (to.path.includes("admin")) {
  //   // if(!currentUser.value && !to.path.includes("login") ){
  //   //   return navigateTo('/admin/login')
  //   // }
  //   console.log("this admin");
  // }

  // console.log("to", to);
});
