module.exports = {
  title: 'Persönliche Sachen',
  description: `This is Izza's Personal Web`,
  themeConfig: {
    navbar: false
  },
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap",
        rel: "stylesheet",
      },
    ]
  ],

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
