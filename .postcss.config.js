module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue({ file }) {
      //   return file.indexOf('vant') !== -1 ? 37.5 : 75
      // },
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.van', '.text'], // 过滤掉.norem-开头的class，不进行rem转换
    },
  },
}
