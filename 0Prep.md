{% include "./header.md" %}

# 101 Intro to Web Pre-Work
* Bring your questions to student orientation.
* Pre-work for other classes can be found in your class textbook by signing into our Campus Manager platform.

## Prepare your Machine
You'll need 3 essential utilities: a **web browser**, a **text editor**, and a **terminal emulator** (AKA Command Line Interface).
1. Install [Google Chrome](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB)
  - Chrome is a robust browser with fantastic development tooling, as you'll soon find out.
2. Install [Atom](http://atom.io/). [Video: How to install Atom.](https://youtu.be/8sIwQabXSM8)
  - Atom is GitHub's official open source text editor. It is easy to set up and highly customizable.
  - The default *font* and *color scheme* in Atom are highly functional. If you choose to customize the font, we ask that you make sure to only use a `monospace` font optimized for readability. [Here's](http://wesbos.com/programming-fonts/) a list of good options.
  - Install your first atom extension: `atom-live-server`
  * [Video: How to install Atom extensions](https://youtu.be/qeMMO7wkecs)
4. Install a **terminal emulator** depending on your OS of choice:

macOS | Windows | Linux
--------------|------------|-------
Use your terminal | Install Gitbash - which happens automatically when you install git| The default terminal in both GNOME and KDE will be more than sufficient.
Install Git by typing this command into your terminal: `brew install git` | [Install git](https://git-for-windows.github.io/) | Use your package manager to install the latest version of [Git](https://git-scm.com/): ```sudo apt-get install git```

## Prepare your Mind

As you go through the Pre-Work, we ask that you:

1. Jot down your questions on [Google Keep](https://keep.google.com/) or wherever works best for you. Keep a record of what you're not understanding. We'll be reviewing these in class on day one.
2. Google everything you're not understanding. When you find something that you find useful, **bookmark it to an appropriate folder**.
  * Let's say you're struggling to grasp *floats* in CSS.
  * After a bit of Googling, you find a good resource.
  * Bookmark the page (`⌘ + d` / `control + d`), and in this dialogue box, either *select* a corresponding bookmarks folder from the dropdown menu or [*create* a new one](https://support.google.com/chrome/answer/188842?co=GENIE.Platform%3DDesktop&hl=en).

> This is also a great way to cut back on the number of open tabs in your browser.

## Prepare Github

* Create an account on [GitHub](http://www.github.com) using your real name. Please choose a *normal* username - this is, after all, something that you'll be sending to your future employers.

<iframe width="420" height="315" src="https://www.youtube.com/embed/l5c2MXy7aOU" frameborder="0" allowfullscreen></iframe>

## HTML

From wikipedia:
> [HyperText Markup Language (HTML)](https://en.wikipedia.org/wiki/HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web-server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

Does any of that sound familiar? Already we see concepts of MVC coming into play!

*  Essential tags and elements *required* for a webpage
  * `<!DOCTYPE html>`
  * `<html>...</html>`
  * `<head>...</head>`
  * `<title>...</title>`
  * `<body>...</body>`

When we put them all together it looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
  </body>
</html>
```

It doesn't look like much, but the important thing to note here is that it meets the *minimum requirements* necessary in order to be rendered as a webpage.

**Note how elements are *nested* inside other elements. `title`, for example, is *nested* within the `head`**

#### HTML element structure

![Element Anatomy](./images/01/tags.jpg)

#### Playing with the code

Use [CodePen](http://codepen.io/) to follow along, adding these elements in the `<body>`. Use the HTML pane to add the elements to the template they've provided.

* `<div></div>`
* `<p></p>`
* `<img />`
* `<a></a>`

A `<div>` will allow us to group or encapsule common elements on a page. A `<p>` is meant to hold text in groups of 'paragraphs'. The `<img />` needs a `src` attribute to provide the image we want to display, written as `<img src="http://www.myimagesite.com/myimage.jpg">`. Similarly, the anchor tag `<a>` needs an `href` attribute - a _**h**ypertext **ref**erence_ - if we want it to link to another location.

#### Read about Semantic Elements

A _semantic_ element clearly describes its meaning to both the browser **and** to the developer - that is, the original developer, and any developers who work on the project in the future.

One of the benefits of writing HTML semantically is that it's easy-to-use. The use of semantic HTML elements provides a developer the combined advantage of writing fewer attributes while avoiding inline styles.

All of this makes your code look and feel more structured. Whenever any future developers read or edit your code, they will have an easier time comprehending it since they won't have to waste time figuring out how it works. Plus, your code will be simpler and more condensed.

![semantic elements drawing](https://docs.google.com/drawings/d/1K9e8OgUnoZOWxDE18LCPK3hTRfEbiVbB0Bvd0Pe5MIg/pub?w=2251&h=1216)

```html
<body>
  <header><h1>My Awesome Blog!</h1></header>
  <nav>Home<br>About<br>Events<br>Contact</nav>
  <main>
    <section>
      <h1>Posts</h1>
      <article>My First Post!</article>
      <article>My Second Post!</article>
      <article>My Third Post!</article>
    </section>
    <section>
      <h1>Calendar</h1>
      <table>...</table>
    </section>
  </main>
  <aside>You Win!!!</aside>
  <footer>© 2016 Austin Coding Academy</footer>
</body>
```

The [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.

A [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) element (HTML Navigation Element) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

The [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) element represents the main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application.

A [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) element represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each `<section>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<section>` element.

The [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable.

The [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) element represents a section of the page with content connected tangentially to the rest, which could be considered separate from that content. These sections are often represented as sidebars or inserts.

The [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.

#### `<h1>`s within `<section>`s
A `<h1>` tag should be used to name what the content in the current sectional semantic element is about. It will auto adjust with the amount of nesting the section has. Notice what happens in the Codepen embedded below:

<p data-height="441" data-theme-id="0" data-slug-hash="OXZaLV" data-default-tab="html,result" data-user="mistakevin" data-embed-version="2" class="codepen" editable="true">See the Pen <a href="http://codepen.io/mistakevin/pen/OXZaLV/">OXZaLV</a> by Kevin Colten (<a href="http://codepen.io/mistakevin">@mistakevin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

It's worth noting that this is **not** a semantically appropriate way of achieving this effect. As a rule of thumb, start with `h1` and work your way down to `h6`, using CSS to achieve the desired aesthetic effect.

#### Semantic elements help with screen readers and search engine optimization.
Many of us only consume the web through the web browser, but there is a significant portion of the world that does not. Many users rely on screen readers,  monochrome displays or other assistant technologies. Others will expect a page to be printer-friendly in order for it to be of any use. In these cases we not only concern our design sensibilities with how content is presented, but with how it is _structured_. We compose our HTML _semantically_ so that it renders accurately across a range of browsing platforms - even before adding any CSS styling.

* Read about [accessibility and screen readers](http://www.clarissapeterson.com/2012/11/html5-accessibility/)
* Read about [search engine optimization](http://dannyrb.com/posts/the-programmers-guide-to-better-seo-semantic-markup-and-html5/)

#### Complete these tutorials:
* [Egghead.io - Chrome DevTools](https://egghead.io/courses/using-chrome-developer-tools-elements)
* [Learn Git in 15 Minutes](https://try.github.io/levels/1/challenges/1)

## Weekly Career Readiness

* Create or update [LinkedIn](https://www.linkedin.com/) with a picture/bio. You will present your LinkedIn profile on the first day of class.
* Update your resume. You will present it on your 2nd day of class.

{% include "./footer.md" %}
