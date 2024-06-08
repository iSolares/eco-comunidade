// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:true,
  nitro: {
    baseURL: "http://localhost:3000",
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  }
})
