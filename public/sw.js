if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const n = document.createElement('script')
              ;(n.src = e), document.head.appendChild(n), (n.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`)
          return n[e]
        })
      )
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e))
    },
    n = { require: Promise.resolve(s) }
  self.define = (s, r, t) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {}
        const a = { uri: location.origin + s.slice(1) }
        return Promise.all(
          r.map((s) => {
            switch (s) {
              case 'exports':
                return n
              case 'module':
                return a
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = t(...e)
          return n.default || (n.default = s), n
        })
      }))
  }
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/ZuOfvW9oSCkFxHylw4Kxx/_buildManifest.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/ZuOfvW9oSCkFxHylw4Kxx/_ssgManifest.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.6242f587ab10033bf87e.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.983db0689e3370dac63f.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/framework.e3de07479da4f2477dea.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/main-c1e732ce101290be74e3.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/pages/_app-8ece67e6969e4f573a75.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/pages/_error-31a4339d956774dffeb9.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/pages/index-2b8eae6a1d4bd68e96f6.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js',
          revision: 'ZuOfvW9oSCkFxHylw4Kxx'
        },
        {
          url: '/img/hero-illustration.svg',
          revision: '5fd5143cba1046a214d9a359fce22e89'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        {
          url: '/img/logo-gh.svg',
          revision: 'e3a0c31390db72fd374570f4a57c56b0'
        },
        { url: '/img/logo.svg', revision: '202525302ad30aca5b2b790d4b0b5796' },
        { url: '/manifest.json', revision: 'c4d8d64468bcf31e13330cd8756c4189' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: r
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    )
})
