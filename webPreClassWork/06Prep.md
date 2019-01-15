{% include "../includes/header.md" %}

# Step 6 - HTML  and its Semantic Elements
<!-- This is how each subject should be introduced. Give the students structure so they know they can start trusting the process sooner!  -->
> [HyperText Markup Language (HTML)](https://en.wikipedia.org/wiki/HTML) is the standard markup language for creating web pages and web applications. HTML describes the structure of a web page [semantically](https://www.merriam-webster.com/dictionary/semantic) and originally included cues for the appearance of the document.

Note: With Cascading Style Sheets (CSS), and JavaScript(JS), it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web-server or from local storage and render them into multimedia web pages. 

### Read It - HTML Structure
<!-- Give them our writting of the subject then link to a few articles: Medium, Wikipedia, CSS-Tricks, W3S, MozillaDev, etc... that help give more perspective on the subject  -->
HTML, quite simply put is markup language read by all browsers! It is the index.html file is one that is orginally requested by the browser and sent by the server. It is the point of entry for all web applications. That why we need to spend some time learning it.

HTML is simple but has structure. Which means *all* webpages are *required* to have the following tags:
  * `<!DOCTYPE html>`
  * `<html>...</html>`
  * `<head>...</head>`
  * `<title>...</title>`
  * `<body>...</body>`

Also there is order! Aside from the ```<!DOCTYPE html>``` tag all other html tags MUST go in-between the html tags. See below

```<html> Other tags go here.</html>``` 

so your **index.html** file would look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
  <header> All other semantic tags go inside the body tags. </header>
  <article>Like this</article>
  </body>
</html>
```

Tags, or elements, are simply dedicated words we recognize as humans but are also built into the browser's understanding as well. For example, an ```<article> text goes here </article>``` tag would probably mean there is text of an article inside. Because the browser knows these keywords Google's web crawler also knows these keywords and can analyze millions of pages and categorize and rank them for search results.

A _semantic_ element clearly describes its meaning to both the browser **and** to the developer - that is, the original developer(you), and any developers who work on the project in the future(your coworkers).

One of the benefits of writing HTML semantically is that it's easy-to-use. The use of semantic HTML elements provides a developer the combined advantage of writing fewer attributes while avoiding inline styles. More on this later when we see how CSS plays into this. 

All of this makes your code look and feel more structured. Whenever any future developers read or edit your code, they will have an easier time comprehending it since they won't have to waste time figuring out how it works. Plus, your code will be simpler and more condensed.

### Practice It - HTML Structure
Look at the code below to see if you can translate it into what you see in the picture further down. 

```html
<body>
  <header><h1>My Awesome Blog!</h1></header>
  <nav>Home<br>About<br>Events<br>Contact</nav>
  <main>
    <section>
      <h2>Posts</h2>
      <article>My First Post!</article>
      <article>My Second Post!</article>
      <article>My Third Post!</article>
    </section>
    <section>
      <h2>Calendar</h2>
      <table>...</table>
    </section>
  </main>
  <aside>You Win!!!</aside>
  <footer>© 2016 Austin Coding Academy</footer>
</body>
```

![semantic elements drawing](https://docs.google.com/drawings/d/1K9e8OgUnoZOWxDE18LCPK3hTRfEbiVbB0Bvd0Pe5MIg/pub?w=2251&h=1216)

*Before moving on notice how the tags are typed:* 

An opening tag looks like this: ```<footer>``` and a closing tag look like this: ```</footer>```. What difference to you see?

<hr/>

### Read It - Semantic Elements
To meet Google's requirements for SEO, as you have already read up on, we need to know the semantic tags used in HTML, let's get started. 

The [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.

A [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) element (HTML Navigation Element) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

The [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) element represents the main content of the `<body>` of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application.

A [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) element represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each `<section>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<section>` element.

The [`<article>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable.

The [`<aside>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) element represents a section of the page with content connected tangentially to the rest, which could be considered separate from that content. These sections are often represented as sidebars or inserts.

The [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.

### See It - HTML Structure
<!-- Can be a video on youTube as long as it doesn't go to another code school. Eventually all video content should come from ACA. -->
<iframe src="https://player.vimeo.com/video/292802698" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<hr/>

### Read It - Header tags: `<h1>`s within Section tags: `<section>`s
A `<h1>` tag should be used to name what the content in the current sectional semantic element is about. It will auto adjust with the amount of nesting the section has. Notice what happens in the Codepen embedded below when you change h1 to h3 or h5...

Here is an in-depth article about this technique [The Truth About Multiple H1 Tags in the HTML5 Era](https://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824)

### Practice It - Header tags
<!-- Section for Code Pen -->

#### CodePen Instructions
Use [CodePen](http://codepen.io/) to play with the common text you see inside the tags to identify what code on the left is creating the outcome on the right.

<p data-height="441" data-theme-id="0" data-slug-hash="OXZaLV" data-default-tab="html,result" data-user="mistakevin" data-embed-version="2" class="codepen" editable="true">See the Pen <a href="http://codepen.io/mistakevin/pen/OXZaLV/">OXZaLV</a> by Kevin Colten (<a href="http://codepen.io/mistakevin">@mistakevin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<hr/>

### Read It - Block And Special Elements

* div tags: `<div>These are general blocks (dividers or divs) you can use anywhere.</div>`
* paragraph tags: `<p>These are like divs, but will give you a little space around them, like **paragraphs** in a book.</p>`
* image tags: `<img src="http://placekitten.com/200/300"/>`
* anchor or link tags: `<a href="https://google.com">Search the web!</a>`

A `<div>` will allow us to group or encapsule common elements on a page. A `<p>` is meant to hold text in groups of 'paragraphs'. The `<img />` needs a `src` attribute to provide the image we want to display, written as `<img src="http://www.myimagesite.com/myimage.jpg">`. Similarly, the anchor tag `<a>` needs an `href` attribute - a _**h**ypertext **ref**erence_ - if we want it to link to another location.

### Practice It - Header tags
Go back to the codePen above and see if you can add in any of these tags. Play around and see what you come up with. FYI: for an ```<a href="just paste url of your favorite website here">Link</a>```

### Further Thinking

*If you copy/paste the code from the **Practice It - HTML Structure** example into a new codePen; why do you think the styling of the page isn't the same as it looks in the blue picture of that example? The hmtl code is exactly what you'd use to build those elements...*

##Go to [Pre-Work Step 7 >](07Prep.md)

{% include "../includes/footer.md" %}

<!-- 

## Project 1 - First web page

* Today you will build your first website.
* You are here for a new career, and so your first website will be a resume using semantic elements in an html file.
* Later on your resume will be used to gain employment and will be updated as you move through this program.
* Normally a web page is hosted on a server (a large and powerful computer) and then requested by a client (your computer). For now you will do both which means you will host your resume locally, which means on your local machine, which means on the computer you are using now. Follow me?
* Use the video below to navigate through the creation of your first web page.

<iframe src="https://player.vimeo.com/video/292956427" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

**Follow these steps to get started:**
1. Create a new folder on your desktop called "first-project"

  <img src="/images/folder.png" width="250" height="150"/>

1. Open VS Code, your text editor for this course. You can download Visual Studio Code [here](https://code.visualstudio.com/).

1. Select "File" and then "New File".

  <img src="/images/file.png" width="250" height="100"/>

1. Once your file is open, it is automatically given the title "untitled".

1. Then select "File" and then "Save As".

1. Name the file "index.html" and save it inside of your folder called "first project" on your Desktop.

  <img src="/images/save.png" width="250" height="150"/>

1. Type "Hello, World!" into the index.html file.

  <img src="/images/helloworld.png" width="300" height="200"/>

1. Save your work.

1. Go to your desktop, right click on the file named "index.html" and select "open with google chrome".

  <img src="/images/chrome.png" width="250" height="100"/>

1. Congratulations! You've built your first website!!

1. Now let's add the proper structure. You will use the following structure for every single html file. Copy the following code into your index.html file.

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
  </html>  
  ```

1. Notice that the title element is not seen in the webpage, but is seen in the top of the browser in the tab. It will also show up in your bookmark. Search Engines analyze this information.

1. The elements inside of the body tags are what will actually be seen.

1. Save your document and open it in google chrome. You should see this:

  <img src="/images/site-preview.png" width="300" height="200"/>

1. A css file is used to style your html. In VS Code, open a new file, save it inside the "first-project" folder on your desktop and call it "style.css". It's super important that you save the css file to your desktop, so it's in the same folder as your html file. Notice the ".html" and ".css" indicates the type of file you are creating. In the future, we will also create ".js" files to hold our JavaScript code.

1. Paste the following code into your "style.css" file to give your resume a background image.

  ```css
  body {
    background-image: url("https://goo.gl/gm4PKC");
  }
  ```

1. Link your css file to your html file by pasting the following code into the head of your html file.

  ```html
  <link rel="stylesheet" href="./style.css">
  ```

  <img src="/images/background.png" width="300" height="200"/>

1. Notice the "./" before "style.css". The "./" tells the computer that the css file is in the same folder as the html file. The single "." indicates the current directory.

1. Usually developers create their own css folder for each project to stay organized. Inside of the first "first-project" folder, create a folder called "css".

  <img src="/images/css-folder.png" width="400" height="200"/>

1. Move the file "style.css" into the css folder. Open the "index.html" file in our browser.

  <img src="/images/project-layout.png" width="300" height="200"/>

1. Since we moved our css file into a new folder, we need to update the file path.

  ```html
  <link rel="stylesheet" href="./css/style.css">
  ```

1. Save an image you'd like to use in your project to your desktop.

  <img src="/images/desktop-image.png" width="200" height="150"/>

1. Use the following syntax to add your image to your project.

  ```html
  <img src="../desktop-image.jpg">
  ```

1. Notice this time it's "../" - 2 dots. This means move up one folder to the parent directory. Thus we go from "first-project", up one folder to "Desktop" and then the computer finds the file that matches the name "desktop-image.jpg".

2. Now that you've got the structure of your webpage established, start creating your resume. Be sure to use semantic elements. They are important for code readability and if someone is using a screen reader. Take a look at this [menu of elements](/lessons/elements.html) to choose from.

  * Hint: For icons, you can use FontAwesome! Just include this code in your `<head></head>`
    ```html
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    ```
    and you can search for icons [here](https://fontawesome.com/v4.7.0/icons/), and when you click on an icon, it'll give you the code to use eg: `<i class="fa fa-anchor" aria-hidden="true"></i>`

<img src="/images/resume.png" style="max-width: 800px"/>

1. Great job on your first project! Continue to work on your resume. The more things you try, the more you will learn. -->
