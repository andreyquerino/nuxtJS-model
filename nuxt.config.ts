// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    ssr: false,

    target: 'static',

    app: {
        // for compilation
        //baseURL: './',
        head: {
            title: 'NuxtJS by Andrey',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    
                // METATAG
                { name: 'author', content: '@andreyquerino' },
                { hid: 'description', content: '' },
                { hid: 'name', content: 'andrey querino' },
                
                // Open Graph
                { hid: 'og-type', property: 'og:type', content: 'website' },
                { hid: 'og-title', property: 'og:title', content: '' },
                { hid: 'og-url', property: 'og:url', content: 'url' },
                { hid: 'og-desc', property: 'og:description', content: '' },
                { hid: 'og-image', property: 'og:image', content: 'https://super.abril.com.br/wp-content/uploads/2016/12/immortan.jpg?quality=90&strip=info&w=680&h=453&crop=1' },
                { hid: 'og-locale', property: 'og:locale', content: 'pt_BR' },
                { hid: 'og-site_nome', property: 'og:site_name', content: '' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
                { rel: 'stylesheet', type: 'text/css', href: './assets/css/main.css' },
            ]
        }
    },

    modules: [
        '@pinia/nuxt'
    ]
})
