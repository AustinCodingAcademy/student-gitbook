Hand out printed copies of the Developer Resume and pens so attendees can wireframe/diagram h1's, p's, ul's, etc.
Hand out printed cheatsheets of the HTML and CSS terms, tags, elements.

# Wine and Web


## Welcome!
---
Below you will find written instructions for the Wine and Web event.

Instructors will be moving at a leisurely pace, but if you'd like to have a visual reference, this is the place!


### Environment Setup
---
* Download [Atom](https://atom.io/)
* Download [Chrome](https://www.google.com/chrome/browser/desktop/index.html)

<!-- Extension
* Download [iTerm2](https://www.iterm2.com/)
* Start Github account(https://github.com/) -->

### Structure of Class
---
* Meet and Greet
* Ice Breaker
* Coding Lesson
* Presentations


### Objectives
---
* Learn about the basic building blocks of web apps
* Experience a Learning Team environment
* Understand the benefits of the Iterative Design Process


### Key Questions
---
<!-- * What is a web application?
* What is MVC architecture? -->
* What does the browser do?
* What are HTML and CSS and how do they relate to each other?


### Project
---
Most of you are here looking for a new career, so today we're going to create a resume page for your online Portfolio with the skills you'll have as a web developer.

Today the resume will be modeled after
 * One of our graduates
 * A UX designer

Feel free to revisit this document as you learn more and drive additional value.

We will leverage
 * Experience / Previous employment
 * Education
 * Portfolio of apps / sites
 * Languages / Frameworks
 * Tools / Software
 * Development Processes
 * Development / Design Team experience
 * Soft skills

Extension - Host on gh-pages


## Learning Teams & Iterative Design
---
We’re going to be partnering up today, so please sit a little closer to your partner. You should be able to see their computer screen clearly.

Your support network here today will resemble the Learning Teams we have in our Intro classes.

Many people still believe the tropes about developers sitting in a basement or a van, eating HotPockets and drinking Mountain Dew.

In reality, teams of developers, designers, marketers, salespeople, accountants, and managers all work together to create products and features using iterative design cycles involving actionable customer feedback.

Ever seen the apps on your phone ‘updating’? That’s iterative Design and Development teams using feedback from real customers to create new and enjoyable experiences.

Paired programming is one of the most effective ways that Iterative Design teams and web developers learn, so we'll be working in teams today.


## Creating a web page
---
Modern browsers read ‘code’ from servers to create web pages that you see on your computer using commands written in HTML, CSS, and Javascript.

Most developers use Chrome, but some others you might be familiar with are Safari and Internet Explorer.

1. The browser reads and readys the HTML (content - words, images) using semantic
1. The browser uses CSS to style the content (sizing, colors, spacing, alignment, etc)
1. The browser ‘renders’ the formatted content on our computer screens
1. Javascript makes the page dynamic (but we won’t be using JS quite yet)


## HTML
---
[HyperText Markup Language (HTML)](https://en.wikipedia.org/wiki/HTML) is the standard markup language for creating web pages and web applications.

With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.[1]

Web browsers receive HTML documents from a webserver or from local storage and render them into multimedia web pages.

HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

Semantics means that tags are named after things humans are already familiar with.

For example, `<h1>` is based on the word "heading", just like in a newspaper, which _most_ humans have seen before.

| Tags | Meaning |
| ---- | ------- |
| `<h1></h1>` | Largest Heading |
| `<h2></h2>` | Second Largest Heading |
| `<h3></h3>` | Medium Heading |
| `<h4></h4>` | Smaller Heading |
| `<h5></h5>` | Smallest Heading |
| `<p></p>` | Paragraph |
| `<ul></ul>` | Unordered List |
| `<li></li>` | List Item |
| `<a href=""></a>` | Anchor |
| `<img src=""/>` | Image

<!-- * `<h2>` = (smaller than h1) heading, `<h3>` through `<h6>` exist
* `<p>` = paragraph
* `<img>` = image
* `<ul>` = unordered (un-numbered) list
* `<li>` = list item
* `<a>` = anchor (which means link to something, likely another site) -->

#### HTML element structure

![HTML tag diagram](./images/tags.jpg)

Think of these tags as wrappers directing the browser to display the tags' contents in a certain way.

>"Treat this text as a paragraph. Start here, `<p>` and stop here `</p>`."

#### HTML code

Now let us see what happens when we integrate some of the elements to our template. let's try adding the following to our codepens:

```html
<h1>First and Last name</h1>
<h2>Web Developer</h2>
<h3>Lifelong Learner</h3>
<p>Brief Bio</p>
<ul>
 <li></li>
</ul>
<a href="#">email@gmail.com</a>
<section></section>
<img src="" />
```


### Wireframe with your teammate(s)
---
Using a pen (or pencil) and the paper resume we handed out, let's see if we can identify all the elements we just learned about.

![UX Resume](./images/ux_resume.png)
<!-- ![Stenis Resume](./images/stenis_resume.png) -->


* Sections
* Headings  
* Paragraphs
* Lists
* Images
* Links


### Content
---
Using the wireframes as a reference

In our codepens (or Atom)
1. Nest your different content in `<section></section>` tags
1. Use id's to section your content into  
 * header
 * skills
 * languages
 * experience
 * education
 * tools
 *

 <!-- * Experience / Previous employment
 * Education
 * Portfolio of apps / sites
 * Languages / Frameworks
 * Tools / Software
 * Development Processes
 * Development / Design Team experience
 * Soft skills -->

**Example**
```
<section id="skills"></section>
```

Your previous experience is a springboard to your next career.

Let's highlight that with a sentence or some bullet points to show what we bring to the table besides our ideas, time, and resources.

Now let's add some content in between the tags.

* Your name
* Address
* Phone number
* We'll add a brief bio in a bit
* Languages
  * HTML
  * CSS
  * Javascript
  * jQuery
  *



### Demo of Stage 1
---
All of our work today is in its beginning stages.

That's the perfect environment for receiving feedback.

It allows us to understand what's valuable to our User, and build only those marketable features.

This eliminates wasted effort and resources. This practice is called Lean, and at its heart is Iterative Design.

Many freelancers, corporations, entrepreneurs, and startups build products and features this way.

Let's go around the room to showcase some of your products.

We're asking for feedback about our formatting, specifically, to take us to next part of the lesson.



### Feedback
---


### Break
---
If you'd like to take a 5 minute break, please do so.

We'll be walking around to assist and answer questions.



### CSS
---
Now that we've gotten some feedback, let's dive into CSS so we can create a better experience for our readers.



### Demo of Stage 2
---




# Index Portfolio page (Expansion Lesson 1)
---




# MVC Architecture (Expansion Lesson 2)
---
![MVC Architecture](./images/mvc_supersimple.jpg)

> This looks very complicated!

Another way to think of this would be

* View is your table at a restaurant
* Controller is the waiter
* Model is the chef
* Database is the uncooked food
* Your desired webpage is the meal


1. You order a **meal** (Webpage) from the **waiter** (Controller)
1. The **waiter** (Controller) knows how to interpret your words into the shorthand that the **chef** (Model) will use
1. The **waiter** (Controller) gives your order to the **chef** (Model)
1. The **chef** (Model) knows what **food** (Data) to get and how to prepare it
1. The **chef** (Model) gives the **prepared meal** (Webpage) to the **waiter** (Controller)
1. The **waiter** (Controller) then serves your **meal** (Webpage) to your **table** (View), as ordered

Now imagine you could order from any kitchen in the world from the comfort of your couch...

That's the internet. That's how MVC architecture and web apps work.

> Here's an example of a simple full stack application - a To Do list

> [MVC Demo - To Do List](http://todomvc.com/examples/react/#/)

> Try typing in some of the things you need to do this week.



# Environment Setup (Expansion Lesson 3)
---
Install the tech professional web developers use
* Chrome
 * Devtool
 * Bookmarking in Folders
* Atom
 * live-server
 * beautify
* Github
* iTerm2
* Trello


How to learn many difficult things quickly
* Synthesize using Trello Visual Vocabulary
 * Terms
 * Cheatsheets
 * Shortcuts

* Google Slides
 * Processes

* Gitbook
 * Processes


# Deep Dive HTML and CSS (Expansion Lesson 4)
---
## Semantic Elements

A _semantic_ element clearly describes its meaning to both the browser **and** to the developer - that is, the original developer, and any developers who work on the project in the future.

One of the benefits of writing HTML semantically is that it's easy-to-use. The use of semantic HTML elements provides a developer the combined advantage of writing fewer attributes while avoiding inline styles.

All of this makes your code look and feel more structured. Whenever any future developers read or edit your code, they will have an easier time comprehending it since they won't have to waste time figuring out how it works. Plus, your code will be simpler and more condensed.

### Sectioning Elements

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

| Tags | Meaning |
| ---- | ------- |
| [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) | a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on |
| [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) | section of a page that links to other pages or to parts within the page: a section with navigation links |
| [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) | main content of  the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application |
| [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) | generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each `<section>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<section>` element |
| [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) | self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable |
| [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) | section of the page with content connected tangentially to the rest, which could be considered separate from that content. These sections are often represented as sidebars or inserts |
| [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) | nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents |
<!-- | `<li></li>` | List Item |
| `<a href=""></a>` | Anchor |
| `<img src=""/>` | Image -->


### `<h1>`s within `<section>`s
A `<h1>` tag should be used to name what the content in the current sectional semantic element is about. It will auto adjust with the amount of nesting the section has. Notice what happens in the Codepen embedded below:

<p data-height="441" data-theme-id="0" data-slug-hash="OXZaLV" data-default-tab="html,result" data-user="mistakevin" data-embed-version="2" class="codepen" editable="true">See the Pen <a href="http://codepen.io/mistakevin/pen/OXZaLV/">OXZaLV</a> by Kevin Colten (<a href="http://codepen.io/mistakevin">@mistakevin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

It's worth noting that this is **not** a semantically appropriate way of achieving this effect. As a rule of thumb, start with `h1` and work your way down to `h6`, using CSS to achieve the desired aesthetic effect.

### Other benefits
Many of us only consume the web through the web browser, but there is a significant portion of the world that does not. Many users rely on screen readers,  monochrome displays or other assistant technologies. Others will expect a page to be printer-friendly in order for it to be of any use. In these cases we not only concern our design sensibilities with how content is presented, but with how it is _structured_. We compose our HTML _semantically_ so that it renders accurately across a range of browsing platforms - even before adding any CSS styling.
