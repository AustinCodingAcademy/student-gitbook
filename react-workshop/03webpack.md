{% include "../header.md" %}

# Webpack

Our one file will quickly become very large and hard to manage. It would be nice
to break our file up into smaller files so we can organize what's going on, especially
once our app starts to grow. This is where [Webpack](https://webpack.js.org/) comes in.
Webpack "bundles" all of our JavaScript files into a single file. It can be as
simple, or as complex, as you like to do amazing things!

## Install
Using `npm` we can install everything we need 

To install Webpack, we can use

```bash
npm install webpack --global
```

Let's initialize our npm package.

```bash
npm init
```
press enter a bunch of times.

Now let's install our dependencies

```bash
npm install webpack babel-loader babel-core babel-preset-stage-2 babel-preset-react react react-dom redux react-redux --save
```

## Configure
Configuration of our Webpack can feel like it requires a four-year degree sometimes. BUT
here is everything we will need in ours! Simply put this in a file called `webpack.config.js`

```js
module.exports = {
  entry: './app.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ ,
        options: {
          presets: ['stage-2', 'react']
        }
      }
    ]
  }
};
```

And we'll need to update our `index.html` and `app.js`.

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
  <title>React Workshop</title>
</head>
<body>
  <div id="app"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

### `app.js`
```js
// At the top
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//...
```

[source](https://github.com/AustinCodingAcademy/react-todo-app)

{% include "../footer.md" %}
