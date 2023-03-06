# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the combination of HTML and Javascript. One syntax difference between HTML and JSX is the JSX fragment <></> that goes around the things that we want to create JSX in. 

Researched answer: JSX is a markdown syntax extension to JavaScript that works similarly to HTML. It allows us to create user interfaces on React apps. One syntax difference between JSX and HTML is the className (JSX) and class (HTML) syntax which is used to modify the element. The reasoning that JSX uses className rather than class is because "class" is already a word in JavaScript.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn (yet another resource ...?) is a package manager that is required for creating apps. When you run the command yarn in the terminal, the files that are modified and added are the yarn.lock and the .json file.

Researched answer: yarn (yet another resource negotiator) is a package manager that creates the file structure for React apps. It organizes node modules correctly so that you can create the app. When you run the command yarn in the terminal, you are installing the package manager for your project, which consists of the yarn.lock file, package.json file, and the node_modules folder.

3. What is a React component?

Your answer: a React component is like a template that you can call on multiple times without having to type everything out again. React components should never be hard-coded so that it is reusable. They are usually stored in a separate 'components' folder and are .js files. Once a component is created, you can call on the component in the main App.js file using the component call <ComponentName/> and making sure it is imported on the App.js file so that they are able to interact together.

Researched answer: A React component is a type of function that can contain JavaScript logic that can be reusable when called upon without having to type everything out over and over again. Since everything in React is a component, it is best practice to not hard-code the functions so that it has the ability to be reusable. Components are usually stored in a "components" folder for organization and they are .js files. Once a component is created, you can call on the component in the main App.js file using the component call <ComponentName/> and making sure it is imported on the App.js file so that they are able to interact together.

4. What is the difference between state values and props in React?

Your answer: State values and props are different things in React. State values are values that you want to initially start at (the starting point) that you'll be able to change later. Props are items you can call on from the App.js file when you're in a component file to ensure that components are not hard coded. 

Researched answer: State is a variable that stores data and values which determines how components behaves. State values are values that you want to initially start at (the starting point) that you'll be able to change later through logic. When you want to create a state variable in your components, it is important to make sure that state is imported on that file ("import React, {useState} from 'react'). When a component uses state, the component is referred to as a logic component, compared to a component that doesn't use state (display component). Props in React are objects that are used to pass information from one component to another. Props are items you can call on from the App.js file when you're in a component file to ensure that components are not hard coded. Unlike state values, props cannot be changed/updated. We can call on the props to other component files with {props.variableName}.

5. What is the DOM?

Your answer: the DOM is the Document Object Model. It exists so that your code is able to be reflected on the web page.

Researched answer: The DOM is the Document Object Model which is essentially what is on your screen. It is the visual representation of code. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: A way in which programmers can work on a specfic part of a project without affecting the overall larger project. An example of an object-oriented language is Ruby. 

2. Ruby: an object-oriented programming language created by Yukihiro "Matz" Matsumoto. It is a general-purpose, interpreted, dynamic, server-sided scripting language and has many built-in methods. Based on the syllabus of the Ruby intro, it is looking kind of similar to JavaScript.

3. Implicit return: is used in Ruby. This means that when a function doesn't have a specific return, the value of the last line of the function is automatically returned. This is unlike JavaScript where the return would not show up if we don't specify a return.

4. Ruby blocks: are anonymous functions that are passed in order to determine an outcome. Blocks are defined with the Ruby words "do" and "end"

5. Ruby hashes: a hash in Ruby is a collection of keys and their values, similar to an object in JavaScript. Unlike JavaScript though, when you look at the syntax of hashes in the terminal, the output is different. 
