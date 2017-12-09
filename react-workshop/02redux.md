{% include "../header.md" %}

# Redux
The idea of Redux is that instead of having many components each with their own state,
you actually have a "global" store of all objects, and that all the components
can share it. This is a great idea, because since all components are "plugged in",
no matter where you are in a large app, whatever component you are in will respond
to changes in the store.

We can even see our store in real time!
* Chrome [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
* Firefox [Redux DevTools](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)

and we'll need this in a bit

`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`

## Where did our state go?
An important note here is that we move away from having local data "states" for
each component since we have a global store. BUT we can still have `this.state`
in the component, but it'll only include component-type properties.

## How do we access our store in the component?
We can pass our store into our components with our `mapStateToProps` function below. It does
just that, maps our global state (aka, the store) into our props.

![](https://docs.google.com/drawings/d/e/2PACX-1vTOx0vrAD0P-KZDFIpGwkUN6erquPyQYdfgTNddxxnlWNHEpx0dpK1GcuTxcdpIspjSTivV_YfwDkOf/pub?w=960&h=720)

### Let's add redux to our todos!

[Source](https://github.com/AustinCodingAcademy/react-todo-app/blob/53845ab846b614d886bca14211e4daa399774fac/app.js)


### Let's try adding another action! Make some lists!

[Source](https://github.com/AustinCodingAcademy/react-todo-app/blob/5e9d92365f6199213fc2bd28a26fd668f4d27751/app.js)

{% include "../footer.md" %}
