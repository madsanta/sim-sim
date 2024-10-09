export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    server: {
        port: 5501
    },
    router: {
        middleware: 'auth',
        base: '/sim-sim/'
    },

    publicRuntimeConfig: {
        baseApiUrl: process.env.NODE_ENV === 'production' ? process.env.BASE_API_URL : process.env.BASE_DEV_API_URL,
        baseApiSSOUrl: process.env.NODE_ENV === 'production' ? process.env.BASE_API_SSO_URL : process.env.BASE_DEV_API_SSO_URL
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Сим-Сим откройся!',
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon-favicon.ico' },
            { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/icon-apple-touch-icon.png' },
            { rel: 'apple-touch-icon', sizes: '57x57', type: 'image/x-icon', href: '/icon-apple-touch-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', type: 'image/x-icon', href: '/icon-apple-touch-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes: '76x76', type: 'image/x-icon', href: '/icon-apple-touch-icon-76x76.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', type: 'image/x-icon', href: '/icon-apple-touch-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', type: 'image/x-icon', href: '/icon-apple-touch-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', type: 'image/x-icon', href: '/icon-apple-touch-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', type: 'image/x-icon', href: '/icon-apple-touch-icon-152x152.png' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap' }
        ],
        __dangerouslyDisableSanitizers: ['script', 'noscript'],
        script: [
            {
                hid: 'ya-metrika',
                innerHTML: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                           m[i].l=1*new Date();
                           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                           ym(91468266, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true
                           });`,
                type: 'text/javascript',
                charset: 'utf-8'
            }
        ],
        noscript: [
            {
                hid: 'ya-metrika-noscript',
                innerHTML: '<div><img src="https://mc.yandex.ru/watch/94870334" style="position:absolute; left:-9999px;" alt="" /></div>'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'normalize.css/normalize.css',
        '~/assets/css/styles.css'
    ],

    styleResources: {
        scss: [
            '~/assets/css/constants.scss',
            '~/assets/css/mixins.scss'
        ]
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/scale.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/style-resources'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'nuxt-svg-loader'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
