<!-- ⚠️ FILE AUTOMATICALLY GENERATED. PLEASE DO NOT EDIT. CHANGE README.md.tpl INSTEAD! ⚠️  -->

# 01. Intro

In this chapter we will try to explain some of the main concepts in the JavaScript ecosystem. JavaScript has a long and complicated history with a lot of innovation. It might be hard to keep track of all the different buzzwords and concepts and make sense of all of them.

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
- [caniuse.com](https://caniuse.com/) is a great place to check which features are supported by specific engines
- Most of the time, a JavaScript engine only runs pure JavaScript code, but you might want to interact with the underlying platform (operative system, network, etc).
- This is where JavaScript runtimes come in. Every browser will provide a runtime that implement the web platform (all the web specific APIs like `fetch` and DOM manipulation functions)
- **Node.js** is a runtime for the backend. It offers a set of core modules to interact with filesystem, network, etc.
- Recently new backend runtimes have appeared: **Deno** (created by Ryan Dahl, the same author of Node.js) and **Bun** are the most promising ones.


## JavaScript dialects: TypeScript and JSX

- JavaScript is a quite powerful general purpose language which is always evolving, but depending what's your business context, there might be missing features that you'd like to have today!
- The community has been very eager to experiment with different ideas while still retaining JavaScript as the runtime language (because of its wide ecosystem and supporting platforms).
- This created the case for **transpilers**: tools that can take higher level code and convert it to plain JavaScript. A bit like compilers, but rather than create machine code, they generate JavaScript code.
- One of the first famous transpilers was **CoffeeScript**, an entire new language built on top of JavaScript (which will be transpiled to JavaScript code).
- But transpilers are not useful only to create new language on top of JavaScript, but they can be used to extend JavaScript itself.
- The most interesting use case is the case of **Babel**. **Babel** is a transpiler that can be used to implement new language constructs that haven't been standardise yet (or implemented in the most common engines). For instance, Babel allowed developers to use `async/await` before it became part of the standard and it was implemented by all the engines.
- Other interesting use cases are **TypeScript** which extends the JavaScript syntax with powerful gradual typing support.
- Finally there's the case of **JSX** an entier new language that allows to mix `HTML` syntax directly in JavaScript code and it is very convenient for frontend development.


## How to manage external dependencies

- One of the main reasons for JavaScript success is its huge ecosystem of open source packages.
- These packages are generally stored in the **npm** registry.
- In 2017 **npm** became the largest ecosystem of libraries with more than **350.000 packages**
- It passed **1mln packages in 2018** and it counts **almost 2mln packages today**!
- `npm` is also the name of the package manager that ships by default with Node.js and that allows to install libraries from npm (the registry).
- `npm` manages the entire dependency tree and it can even handle different versions of the same library in the same project (as transient dependencies).
- `npm` is not the only package manager available. Famous alternatives are `yarn` and `pnpm`.


## Module bundlers

- One common thing that happens in JavaScript (especially in the frontend world) is to combine all the project files (application code and dependencies) into one single JavaScript file (or a few files).
- This is done to give developers the freedom to structure the code in the most convenient way, while giving the final users only a handful of files to be downloaded through the browser.
- The process of packaging all the files together is called **module bundling** and the tools used for this process **module bundlers**.
- The most famous module bundlers are **Webpack** and **Rollup**.
- Module bundlers can also pre-process your source code. For instance they can convert TypeScript to JavaScript before the bundling, or remove code that is not utilised (tree-shacking).


---


|    | [🏠](/README.md) | [02-basics ➡️](/02-basics/README.md) |
|:--|:---------------:|------------------------------------:|

