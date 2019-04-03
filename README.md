# Gulp Build System #
This repo uses Gulp to handle js/sass in development

Required Tech for local dev

## Node 
```
node --version
```

## Gulp
```
npm install --global gulp-cli
```


## Notes

Download and run NPM install.

### npm run server ###
local server on port 8888
### gulp watchFiles ###
Compiles Sass with autoprefixer and concatenates js scripts 
When developing locally run gulp watchFiles this will detect changes in src folder and output changes to parent directory

### gulp build ### 
compiles Sass with autoprefixer and minifies css - concatenates transpiles from es6 and minifies js and outputs finished project to dist folder


## Folder Structure

```
Gulp-Build-System/
    README.md
    .babelrc
    gulpfile.js
    package.json
    css/
      styles.css
      styles.css.map
    js/
      app.js
      app.js.map
    src/
      javascript/
        main.js
      sass/
        0-plugins/
        1-base/
          mixins/
        2-modules/
        3-layouts/
        styles.scss
    index.html
  
```
