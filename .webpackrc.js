
module.exports= {
  entry: 'src/index.js',
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
  theme: './src/theme.js',
  html: {template: "./src/index.ejs"},
  extraBabelPlugins : [
    [
      "import" ,
      { libraryName : "antd-mobile" , "libraryDirectory" : "lib" , "style" : true }
    ]
  ],
};
