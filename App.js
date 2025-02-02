//- React is a library not a framework, it can be used for small portion of your app, and remaining will be written in some other lang. 
//- it is just piece of javascript code written by facebook developer.  
//- it gives simple helpers to make website fast
//- U can add react in exixting app(jquery,...) just by adding CDN link, for small portion of code in big app, this is the beuty of react 
//- Framework comes with a lot of bagage
//- it is just a library but we can create large application using this small library


//----------------------------------------- Section 1 -----------------------------------------//

// //- Concept behind react, manipulate DOM using JS
// //- Most costly operation in browser is DOM manipulation
// //- it is just created h1 element in react 
// //- Creating an element is core of react thing therefore we write React.createElement
// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Welcome from react")
// //- it is similar to js document.createElement, it takes 3 arguments an element, an object and innerHtml(whatever we want to put inside h1)
// //- 1st parameter is the type of tag
// //- 2nd parameter {} - to give attributes to tag eg. {id:"heading"} 
// //- 3rd parameter is children, either single element of array of elements

// //- React.createElement("h1", {id: "heading"},"Welcome from react") creates a React element representing an <h1> element with a className attribute set to 'title' and containing the text 'Welcome from react'

// console.log(React) //- core react library


// console.log(heading) //- this is not a h1 tag, React element of type javascript object, props are children and attributes

// //- To put above h1 element to root id's child, we use ReactDOM library
// //- So reacts need to have root to do all DOM rendering
// //- we have to tell react that where to rendor code in dom
// const root = ReactDOM.createRoot(document.getElementById("root"))
// //- this will create a root for our react library
// //- this is the place where all react code will be rendor

// console.log(ReactDOM) //- 
// console.log(root) //- it is a object

// root.render(heading) //- it will replace root div chindren by heading element
// //- to rendor heading inside root
// //- take the object and put inside root
// //- render method is converting an js object and create h1 tag and put it inside root element

//----------------------------------------- Section 2 -----------------------------------------//

// //- Supoose we want to create a nested structure
// {/* <div id="parent">
//     <div id="child">
//         <h1>I am h1</h1>
//         <h2>I am h2</h2>
//     </div>
// </div> */}

// //- React element is object and that becomes html when browser understands
// //- while it is rendering at that time it is converting to html

// const code = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am H1"),React.createElement("h2",{},"I am H2")]))

// //- react will throw an error for array Warning: Each child in a list should have a unique "key" prop.


// const root = ReactDOM.createRoot(document.getElementById('root'))


// root.render(code)


//----------------------------------------- Section 3 -----------------------------------------//

//- Supoose we want to create a nested structure with siblings
{
    /* <div id="parent">
        <div id="child1">
            <h1>I am h1</h1>
            <h2>I am h2</h2>
        </div>
        <div id="child2">
            <h1>I am h1</h1>
            <h2>I am h2</h2>
        </div>
    </div> */
}

//- code will look like mess
//- it is making hard to read stuff
//- therefore to remove this mess, JSX exist
//- then why dis written here ? ==> a lot of people think react is only written using JSX
//- no, we can write react code here too, but JSX makes our life easy, readable, maintainable

const code = React.createElement("div", {
    id: "parent"
}, [React.createElement("div", {
    id: "child1"
}, [React.createElement("h1", {}, "I am H1"), React.createElement("h2", {}, "I am H2")]), React.createElement("div", {
    id: "child2"
}, [React.createElement("h1", {}, "I am H1"), React.createElement("h2", {}, "I am H2")])])


const root = ReactDOM.createRoot(document.getElementById('root'))
const root2 = ReactDOM.createRoot(document.getElementById('header'))

root2.render(code)
root.render(code)