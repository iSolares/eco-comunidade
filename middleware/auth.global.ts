export default defineNuxtRouteMiddleware((to, from) => {
  const noAuthRouters = ["About", "Contact", "Home", "Map"];

  if (!noAuthRouters.includes(to.name)) {
    return abortNavigation();
  }
});
