export default defineNuxtRouteMiddleware((to, from) => {
  const noAuthRouters = ["About", "Contact", "Home", "Map", "Volunteer"];

  if (!noAuthRouters.includes(to.name)) {
    return abortNavigation();
  }
});
