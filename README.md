Commands for init react

    npm init -y
    npm install --save-dev webpack webpack-cli
    npm install react react-dom
    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

    npm install --save-dev webpack-dev-server // for restart project and make changes

1. Create .babelrc
   {
   "presets": [
   ["@babel/preset-env", { "targets": { "node": "current" } }],
   "@babel/react"
   ]
   }
2. Create webpack.config.js
   module.exports = {
   module: {
   rules: [
   {
   test: /\.js$/,
   exclude: /node_modules/,
   use: { loader: '"babel-loader' },
   },
   ],
   },
   };
3. For minified code
   npm install --save-dev html-webpack-plugin

Initial config exist in branch init-1

### Structure of directories in this project

The movie list application will use a hybrid approach, where files are structured by filetype first and by feature second. In practice, this means that there will be two types ofcomponents: top-level components, which are called containers, and low-level components,which relate to these top-level components.
