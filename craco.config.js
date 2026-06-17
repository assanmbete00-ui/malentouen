const path = require("path")

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@navigations": path.resolve(__dirname, "src/navigations"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@contexts": path.resolve(__dirname, "src/contexts")
    },
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find((rule) =>
        Array.isArray(rule.oneOf)
      ).oneOf

      // Remove default SVG loader
      const fileLoaderRule = oneOfRule.find(
        (rule) => rule.test && rule.test.toString().includes("svg")
      )
      oneOfRule.splice(oneOfRule.indexOf(fileLoaderRule), 1)

      // Add new SVG handling: React component + file
      oneOfRule.unshift({
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve("@svgr/webpack"),
            options: {
              svgo: true,
              titleProp: true,
              ref: true
            }
          },
          {
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash].[ext]"
            }
          }
        ]
      })

      return webpackConfig
    }
  }
}