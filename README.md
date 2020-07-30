Commands for init react

    npm init -y
    npm install react react-dom
    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

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

Initial config exist in branch init-1
