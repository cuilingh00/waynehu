// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['Android >= 4.0', 'iOS >= 7'],
      //是否美化属性值 默认：true
      cascade: true,
      //是否去掉不必要的前缀 默认：true
      remove: true
    },
    // 'postcss-pxtorem': {
    //   rootValue: 37.5,
    //   propList: ['*'],
    //   minPixelValue: 2,
    //   selectorBlackList:[]
    // }
  }
}
