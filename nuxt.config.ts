// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['composables/*/index.{ts,js,mjs,mts}'],
  },

  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      },
    },
  },

  ssr: true,
})
