# webpack-fundamentals

### How to checkout tags

- To list all the tags available - `git tag`
- To checkout a specific tag - `git checkout 04-generate-html`

### features at each tagged versions

1. **01-basic-setup** - webpack webpack-cli
2. **02-webpack-config** -
3. **03-babel-loader** - @babel/core @babel/preset-env babel-loader
4. **04-generate-html** - html-webpack-plugin, webpack watch mode
5. **05-react-setup** - react, react-dom, dev server
6. **06-css-loader** - style-loader css-loader
7. **07-output** - mode option `[development, production]`
8. **08-code-splitting**


### jsconfig.json
Automatically generates jsconfig.json for your vscode workspace with optional support for custom absolute path aliases used for import/export extracted from webpack config resolve alias option.
`npx jsconfig.json -c ./config/webpack/index.js`
