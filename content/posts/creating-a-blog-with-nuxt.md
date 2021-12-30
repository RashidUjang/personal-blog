---
title: Creating a blog with Nuxt
---

What better way to kick-off a blog than to write about how you're building the blog that... you're going to write on? Delightful. Creating this blog has been a learning experience. Running primarily on Nuxt.js and deployed on Netlify, this has been a real experience. In this article I'll be detailing how this blog gets made, along with all the hiccups, wishes and interesting ideas that crop up along the way.

<!--more-->

## Why start a blog in 2021
No matter what your goal is, I think that [learning in public](https://www.swyx.io/learn-in-public/) and doing spaced-repetition are two tenets to make things stick in your mind when learning. I'd also realized that to create, rather than consume is a much better way to learn something.

I'm also well aware of the trade-offs by writing things on a self-hosted blog rather than Medium would give, but here's a chance to learn those things 

### Sub Point
This is a sub point to explain why.

## Process

I decided to start this blog by designing it in Figma. I am by no means a designer, but a combination of stealthy plagiarism and a keen eye would do the trick! I find that designing helps.

## Development

Example figure:
![alt text](/fig1.png)

Example of an unordered list:
- Nuxt.js
- Netlify
- Bulma
- Sass

Example of an ordered list:
1. Nuxt.js
2. Netlify
3. Bulma
4. Sass

Some example code:
```js{1,3-5}[server.js]
const http = require("http");
const bodyParser = require("body-parser");

http.createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```



## Learnings