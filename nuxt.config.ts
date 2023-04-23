// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {
                    name: "charset",
                    content: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content:
                        "Single page application for creating a tree from JavaScript Object Notation (JSON) format.",
                },
            ],
            title: "Visualijson App",
        },
    },
    extends: ["./ui"],
    
    modules: [
        '@pinia/nuxt',
      ],
    
      imports: {
        dirs: ['./stores'],
      },
    
      pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
});
