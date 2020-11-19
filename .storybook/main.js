const path = require('path')

module.exports = {
  stories: [
    '../packages/**/src/**/*.stories.[tj]sx',
    '../packages/**/src/**/*.stories.mdx',
    '../packages/**/story/**/*.stories.[tj]sx',
    '../docs/**/*.stories.mdx',
  ],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../packages'),
    })

    // 这里配置属于一个 monorepo 下同时开发多个包联动的解决方案
    config.resolve.alias = {
      ...config.resolve.alias,
    }

    // Return the altered config
    return config
  },
}
