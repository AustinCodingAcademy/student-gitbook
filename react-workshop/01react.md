% include "../header.md" %}

# Prep
Create a directory called something like `react-todo-app`, and in that folder
create two files: `index.html` and `app.js`.

Here is what you can copy and paste into your html. It looks like a lot, but
we are just going to bring in everything we'll need for the workshop.

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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.6/react-redux.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  <script src="app.js" type="text/babel"></script>
</body>
</html>
```

# Getting start with React
What important when learning React is to understand the **one** problem React
solves: binding the view (your html/css) to your data (a JavaScript array or object).
That's it. When something in your object changes, the view should auto-magically
update with it.

Let's see a very basic example in action. Download this extension for your browser
* Chrome [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* Firefox [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

add this to your `app.js`
```js
  class App extends React.Component {
    constructor() {
      this.state = {
        text: ''
      };
    }

    handleChange = (e) => {
      this.setState({
        text: e.target.value
      });
    }

    render() {
      return (
        <div>
          <div>{this.state.text.toUpperCase()}!</div>
          <input type="text" onChange={this.handleChange} placeholder="What would you like to scream?"/>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.querySelector('#app'));
```
Here we see that the "screaming" text is bound to the the `text` in the `state`,
and that we are changing the state with a simple `input` change.


Let's start building a Todo List app.

You can see the source code [here](https://github.com/AustinCodingAcademy/react-todo-app/blob/63a6766bd27fb6f3de935590db8d01870a6fdca4/app.js).


{% include "../footer.md" %}
