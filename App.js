// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World"
// );
const  parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement("h1", {id: "heading"}, "This is h1 Tag"), 
        React.createElement("h1", {id: "heading"}, "This is h1 Tag")
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);