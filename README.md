# Webpack Simple
Simple Webpack Build Template

### Installation 
``` bash
git clone https://github.com/vkdg/webpack-simple webpack-simple
cd webpack-simple
npm install
```

### Run DevServer
```
npm run dev
```

### Build Production Version
```
npm run build
```

### Features
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Autoprefixer via [postcss-loader](https://github.com/postcss/postcss-loader)
* Babel via [babel](https://babeljs.io)
* Font Face fix


### Working Structure
```
| build
| - webpack.base.conf.js (main webpack config)
| - webpack.build.conf.js
| - webpack.dev.conf.js
| dist 
| - assets
| - - css
| - - - app.min.css
| - - js
| - - - app.min.js
| - - - vendor.min.js
| - - img
| - - fonts
| - src
| - - assets
| - - - css
| - - - - main.css
| - - - fonts
| - - - scss
| - - - - modules
| - - - - - header.scss
| - - - - - footer.scss
| - - - - utils
| - - - - - fonts.scss
| - - - - - libs.scss
| - - - - - mixins.scss
| - - - - - reset.scss
| - - - - - vars.scss
| - - - - main.scss (Main scss file)
| - - - img
| - - - svg
| - - js
| - - _ index.js
| - index.js (Entrypoint)
| index.htm
| package.json
| postcss.config.js
```

### Base repo
[vedees](https://github.com/vedees/webpack-template)