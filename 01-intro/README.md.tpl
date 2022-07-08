# 01. Intro

In this chapter we will try to explain some of the main concepts in the JavaScript ecosystem.

JavaScript has a long and complicated history with a lot of innovation.

It might be hard to keep track of all the different buzzwords and concepts and make sense of all of them.

We will try to put the main concepts in order so that we can have a solid understanding of the JavaScript ecosystem as it stands today!


## The rise of JavaScript

- Created at **Netscape Communications** by **Brendan Eich** in 1995.
- Designed as a **scripting language** for use with the company's flagship web browser, Netscape Navigator.
- After its release, more browsers started adding JavaScript support.
- For much of its history JavaScript was not regarded as a serious programming language for performance and security reasons.
- But there were no alternatives on the web...
- In 2008, Google creates an open-source high-performance JavaScript engine: **Chrome V8**
- Other browsers followed alogn and created their own high performant JavaScript engines.
- This opened the gate for the web to become a place to host more sophisticated applications that could compete with desktop applications!
- In 2009, **Ryan Dahl** released an open-source, cross-platform environment called **Node.js**.
- Node.js provided a way to run JavaScript code from outside a browser which freed JavaScript from the browser's confines and led directly to JavaScript's current popularity.
- Today, you can use JavaScript to write all kinds of applications, including **browser**, **server**, **mobile**, and **desktop** applications. You can even run JavaScript on **embedded** devices or as a language **to provision cloud resources**!
- Most major online companies today, including Facebook, Twitter, Netflix, and Google, all use JavaScript in their products.


## JavaScript vs EcmaScript

- [Ecma International](https://en.wikipedia.org/wiki/Ecma_International) is a body that defines technology standards, operating since 1961!
- [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) is a standard that defines a general purpose scripting language: EcmaScript.
- We can think of EcmaScript as a blueprint to create a scripting language. JavaScript is an implementation of that blueprint!
- Since 2015, there has been a lot of activity to update ECMA-262 to give it new features and capabilities. This has lead to the creation of a new major EcmaScript edition every year (ES2015 to ES2022 today).
- JavaScript implementation might have different degrees of compatibility with specific editions of the EcmaScript standard.


## How can we execute JavaScript code: engines and runtimes

- To run JavaScript code we need a **JavaScript engine**: an interpreter that can read JavaScript source code and execute them.
- Every major browser has a JavaScript engine: Chrome uses **V8**, Firefox **SpiderMonkey**, Safary **Javascript Core Webkit**, Microsoft Edge used **Chakra** (but has recently switched to Chromium and V8).
- Different engines might run JavaScript code differently, they might have different optimization strategies but also different bugs or subtle implementation details!
- For this reason, newest features of EcmaScript might land on different browsers at different times. It really depends on when their engine implements these features!
- [caniuse.com](https://caniuse.com/) is a great place to check which features are supported by specific enginers
- TODO: explain JS runtimes
- JavaScript runtimes (browsers, node.js, deno, bun)


## JavaScript dialects: TypeScript and JSX

TODO:

- TypeScript
- JSX
- Babel (and other transpilers)





## How to manage external dependencies

TODO:

- npm
- yarn
- pnpm


## Module bundlers

TODO:

- Webpack
- Rollup


---

{{{navigation}}}
