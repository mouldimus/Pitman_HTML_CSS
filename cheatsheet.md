# HTML and CSS Cheat Sheet

Welcome to the HTML and CSS Cheat Sheet! This comprehensive guide is designed to be your go-to reference for all things HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). Whether you're a seasoned web developer looking for quick reminders or a newcomer eager to learn the fundamentals, this cheat sheet has got you covered.

## Contents
### Introduction
- [What is HTML?](#what-is-html)
- [What is CSS?](#what-is-css)
- [How to Use This Cheat Sheet?](#how-to-use-this-cheat-sheet)
- [How to Contribute](#how-to-contribute)
### Cheatsheets
- [HTML Cheatsheet](#html-cheatsheet)
- [CSS Cheatsheet](#css-cheatsheet)
### Details
- [HTML Tag Details](#html-tag-details)
- [HTML Attribute Details](#html-attribute-details)
- [CSS Details](#css-details)

## What is HTML?

HTML is the backbone of the web. It is a markup language used to structure the content of web pages. HTML elements are represented by tags, which define the structure and layout of the content. Each tag serves a specific purpose, such as headings, paragraphs, images, links, and more. By combining these tags, you can create a well-organized and visually appealing web page.

## What is CSS?

CSS is the styling language that brings life and aesthetics to your HTML content. With CSS, you can define how HTML elements should be displayed on the page. It enables you to control colors, fonts, margins, padding, layouts, and many other visual aspects of your web page. By separating content (HTML) from presentation (CSS), you can make your web pages more maintainable and flexible.

## How to Use This Cheat Sheet

This cheat sheet is organized in a user-friendly manner, providing you with quick access to the most commonly used HTML and CSS elements. It includes code snippets and examples to help you understand how each element works in practice. Whether you're looking for a specific HTML tag or a CSS property, you can easily find it here.

The cheat sheet is divided into two main sections:

1. **HTML Cheat Sheet**: This section covers essential HTML tags and their attributes. You'll learn how to structure your content, add links, insert images, create lists, and more. 

It is broken into two sub sections [Tags](#html-meta-tags) and [Attributes](#html-attributes).

The opening tag defines the start of an HTML element (*The name for the combination of the tags, attributes and content between the tags*), and the closing tag defines the end of that element. The content between the opening and closing tags represents the actual content of the element.
```html
<!--Example of a HTML tag pair.-->
<p>This is a paragraph.</p>
```

HTML attributes are used to provide additional information or settings for HTML elements. They are specified within the opening tag of an element and are written as name-value pairs. Attributes provide extra details about how the element should behave, look, or interact with the user.
```html 
<!-- Example of a HTML attribute -->
<a href="https://www.example.com">Example Website</a>
```

2. **CSS Cheat Sheet**: In this section, you'll find a wide range of CSS properties along with their values and usage. From basic text styling to complex layouts, CSS offers a myriad of possibilities, and you'll find them all here.

Feel free to bookmark this cheat sheet for easy access whenever you need it. Whether you're building a personal website, an online portfolio, or a full-fledged web application, having this quick reference guide at your fingertips will save you time and effort.

## How to Contribute

This cheat sheet is a collaborative project, and we welcome contributions from the community. If you find any errors, have suggestions for improvement, or want to add new examples, please feel free to contribute. You can find the GitHub repository for this cheat sheet [here](https://github.com/mouldimus/Pitman_HTML_CSS.git). Your contributions will help make this resource even more valuable for developers worldwide.

Let's dive into the world of HTML and CSS, and make your web development journey a smooth and successful one! Happy coding! 🚀

## HTML Cheatsheet

### HTML Meta Tags
| Tag | Title | Description |
| --- | --- | --- |
| `<!-- -->` | [Comment](#html-comment-tag) | This tag is used to explain the purpose of your code, to yourself and other developers. *Do not* underestimate the power of code commenting. It is one the best tools to making you code easy to understand.
| `<!DOCTYPE>` | [Document Type](#document-type-doctype-tag) | Tells the browser what Document type and version to render the file in. |
| `<html>` | [HyperText Markup Language](#html-html-tag) | The `<html>` tag is a fundamental element in HTML documents. It represents the root element of an HTML document, and it contains all other HTML elements, such as headings, paragraphs, images, and more. |
| `<head>` | [Header](#html-head-tag) | This is the container for the information about the document |
| `<title>` | [Title](#html-title-tag) | This is the title of the document. The title displays inside the browser tab, Search engine results and Social media posts. |


### HTML Browser Displayed Tags
| Tag | Title | Description |
| --- | --- | --- |
| `<body>` | [Body](#html-body-tag) | This is where the main body of the content that is displayed lives in a html document (typically). |
| `<p>` | [Paragraph](#html-p-tag) | Used to define a paragraph of text in a HTML document. The `<p>` tag is a block-level element, which means it starts on a new line and creates a separate block of content. |




### HTML Attributes

| Attribute | Title | 
| --- | --- | 


## CSS Cheatsheet


## HTML Tag Details
In this section I'll go into more detail of how each HTML tag works. I recommend using the linking structure available through the [HTML Tags Cheatsheet](#html-meta-tags).

--- 

### HTML `<body>` Tag
[HTML Tags Cheatsheet](#html-browser-displayed-tags)

The `<body>` tag is a crucial element in HTML documents. It defines the main content area of a web page where all the visible content, such as text, images, links, and other media, is displayed.

#### Syntax:

The `<body>` tag is an opening and closing tag represented by angle brackets:

```html
<body>
  <!-- HTML content goes here -->
</body>
```

#### Example Usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample HTML document.</p>
  <img src="example.jpg" alt="Example Image">
  <a href="https://www.example.com">Visit Example Website</a>
</body>
</html>
```

In this example, the `<body>` tag encloses the main content of the HTML document. Inside the `<body>` section, there are several elements, such as headings (`<h1>`), paragraphs (`<p>`), an image (`<img>`), and a hyperlink (`<a>`). These elements represent the visible content that will be displayed in the web browser when the page is loaded.

The content within the `<body>` tag is what users see and interact with when they visit the web page. It is essential to place all the content that should be displayed on the page within the `<body>` tag.

[HTML Tags Cheatsheet](#html-browser-displayed-tags)

### HTML `<p>` Tag
[HTML Tags Cheatsheet](#html-browser-displayed-tags)

The `<p>` tag in HTML stands for "paragraph." It is used to define a paragraph of text in an HTML document. The `<p>` tag is a block-level element, which means it starts on a new line and creates a separate block of content.

#### Syntax:

The `<p>` tag is an opening and closing tag represented by angle brackets:

```html
<p>Paragraph content goes here.</p>
```

#### Example Usage:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Web Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a sample paragraph. It contains some text that forms a distinct block of content.</p>
  <p>Another paragraph can follow, continuing the flow of content.</p>
</body>
</html>
```

In this example, the `<p>` tags are used to create two separate paragraphs. Each paragraph starts on a new line, and there is spacing between them to visually separate the blocks of text.

#### Rendering:

When rendered in a web browser, the paragraphs will appear as follows:

---

#### Welcome to My Website

This is a sample paragraph. It contains some text that forms a distinct block of content.

Another paragraph can follow, continuing the flow of content.

---

Please note that the actual appearance of the text may vary based on the CSS styles applied to the HTML document.

[HTML Tags Cheatsheet](#html-browser-displayed-tags)


### HTML `<title>` Tag
[Back to HTML Tags Cheatsheet](#html-meta-tags)

The `<title>` tag is an essential element in HTML documents. It is used to define the title of the web page, which appears in the browser's title bar or tab. Additionally, search engines and social media platforms often use the title to display the page's name in search results and shared links.

#### Syntax:

The `<title>` tag is a standalone tag, and it is placed within the `<head>` section of the HTML document:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title Goes Here</title>
</head>
<body>
  <!-- Content of the web page -->
</body>
</html>
```

#### Example Usage:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome to My Website</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample web page.</p>
</body>
</html>
```

In this example, the `<title>` tag is used to set the title of the web page to "Welcome to My Website."

#### Importance:

The content within the `<title>` tag is crucial for several reasons:

1. **Browser Title:** It determines the text that appears in the browser's title bar or tab. This provides users with a quick reference to identify the page when they have multiple tabs open.

2. **Search Engine Results:** The title is a significant factor in search engine optimization (SEO). Search engines often display the page title as the main link in search results, and a well-crafted title can attract more clicks from users.

3. **Social Media Shares:** When a web page is shared on social media platforms like Facebook or Twitter, the title is usually used as the default title for the shared link. Having a descriptive and engaging title can encourage more users to click on shared links.

It's essential to choose a meaningful and descriptive title that accurately reflects the content of the web page. Additionally, keeping the title concise and relevant is beneficial for both users and search engines.

[Back to HTML Tags Cheatsheet](#html-meta-tags)


### HTML `<head>` Tag
[Back to HTML Tags Cheatsheet](#html-meta-tags)


The `<head>` tag is an essential element in HTML documents. It is a container for metadata and provides information about the HTML document, such as its title, character encoding, linked stylesheets, scripts, and more. The content within the `<head>` element is not directly visible on the web page; instead, it serves as a way to convey important information to web browsers and search engines.

#### Syntax:

The `<head>` tag is an opening and closing tag represented by angle brackets:

```html
<head>
  <!-- Metadata and other head-related content go here -->
</head>
```

#### Content:

Inside the `<head>` element, you can include various elements that provide metadata and define the behavior of the web page. Commonly used elements within the `<head>` tag include:

- `<title>`: Specifies the title of the HTML document, which is displayed in the browser's title bar or tab.
- `<meta>`: Provides various meta-information about the document, such as the character encoding, author, description, and viewport settings for mobile responsiveness.
- `<link>`: Links external resources like stylesheets (CSS) and web fonts to the HTML document.
- `<script>`: Embeds or references JavaScript code used for enhancing the page's functionality.

#### Example Usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <!-- Content of the web page goes here -->
</body>
</html>
```

In this example, the `<head>` element contains metadata such as the character encoding (`<meta charset="UTF-8">`), the viewport settings (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`), the document title (`<title>My Web Page</title>`), an external stylesheet (`<link rel="stylesheet" href="styles.css">`), and an external script (`<script src="script.js" defer></script>`).

[Back to HTML Tags Cheatsheet](#html-meta-tags)


### HTML `<html>` Tag
[Back to HTML Tags Cheatsheet](#html-meta-tags)

The `<html>` tag is a fundamental element in HTML documents. It represents the root element of an HTML document, and it contains all other HTML elements, such as headings, paragraphs, images, and more. The `<html>` tag provides the structural foundation for constructing web pages.

#### Syntax:

The `<html>` tag is an opening and closing tag represented by angle brackets:

```html
<html>
  <!-- HTML content goes here -->
</html>
```

#### Attributes:

The `<html>` tag can include certain attributes, but it typically uses the `lang` attribute to specify the language of the document for localization and accessibility purposes:

```html
<html lang="en">
  <!-- HTML content goes here -->
</html>
```

In the example above, the `lang="en"` attribute indicates that the content of the document is in English.

#### Example Usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample HTML document.</p>
  <img src="example.jpg" alt="Example Image">
</body>
</html>
```

In this example, the `<html>` tag encloses the entire HTML document, starting from the `<!DOCTYPE>` declaration and continuing with the `<head>` and `<body>` sections. Inside the `<head>` section, there are meta tags for character encoding and specifying the document title. In the `<body>` section, there are elements like headings, paragraphs, and an image.

[Back to HTML Tags Cheatsheet](#html-meta-tags)

### Document Type `<!DOCTYPE>` Tag
[Back to HTML Tags Cheatsheet](#html-meta-tags)

The `<!DOCTYPE>` declaration, often referred to as the "document type declaration" or "doctype declaration," is an important and required element in an HTML document. It informs web browsers about the version of HTML being used and helps them interpret and render the content correctly.

The `<!DOCTYPE>` declaration is not an HTML tag or element; it's an instruction provided at the very beginning of an HTML document, typically placed before the `<html>` opening tag. It looks like this:

```html
<!DOCTYPE html>
```

The `<!DOCTYPE html>` declaration is used for HTML5 documents. HTML5 is the latest version of HTML and is widely supported by modern web browsers. It is simpler and more standardized compared to previous versions of HTML.

The primary purpose of the `<!DOCTYPE>` declaration is to trigger "standards mode" in web browsers. In standards mode, browsers render the HTML document according to the HTML5 specification, which ensures consistency and compatibility across different browsers.

Before HTML5, different versions of HTML had different doctype declarations. For example:

HTML 4.01 Strict:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

HTML 4.01 Transitional:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

XHTML 1.0 Strict:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

Using the correct `<!DOCTYPE>` declaration is essential because it ensures that web browsers interpret the HTML document correctly and avoid any potential compatibility issues. With HTML5 being widely adopted and supported, the `<!DOCTYPE html>` declaration is the recommended and most commonly used doctype declaration for modern web pages.

[Back to HTML Tags Cheatsheet](#html-meta-tags)

### HTML Comment Tag
[Back to HTML Tags Cheatsheet](#html-meta-tags)

In HTML, the comment tag allows you to add comments within the HTML code that will not be displayed on the web page. Comments are useful for providing notes, explanations, or reminders for yourself or other developers working on the code. They can help make the code more understandable and maintainable.

#### Syntax:

HTML comments are denoted by the `<!--` and `-->` delimiters. Anything between these delimiters is considered a comment and will be ignored by web browsers during rendering.

```html
<!-- This is a comment -->
```

#### Example Usage:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Web Page</title>
</head>
<body>
  <!-- This is a comment explaining the purpose of the heading -->
  <h1>Hello, World!</h1>
  <!-- The following paragraph is for demonstration purposes -->
  <p>This is a sample HTML document.</p>
</body>
</html>
```

In the example above, there are two HTML comments. The first comment explains the purpose of the heading element, and the second comment provides additional information about the paragraph element.

Comments are not displayed on the rendered web page, but they can be viewed by inspecting the page's source code using browser developer tools.

[Back to HTML Tags Cheatsheet](#html-meta-tags)



## HTML Attribute Details
In this section I'll go into more detail of how each HTML attribute works. I recommend using the linking structure available through the [HTML Attributes Cheatsheet](#html-attributes).

## CSS Details
