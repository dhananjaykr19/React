/*
    <div id="parent">
        <div id="child">
            <h1>I'm a h1 tag!</h1>
        </div>
    </div>
*/
const parent = React.createElement(
    "div",
    {
        id : "parent",
    },
    React.createElement(
        "div",
        {
            id : "child",
        },
        React.createElement(
            "h1",
            {},
            "I'm a h1 tag!"
        )
    )
);

/*
    <div id="parent">
        <div id="child">
            <h1>I'm a h1 tag!</h1>
            <h2>I'm a h1 tag!</h2>
        </div>
    </div>
*/

const example1 = React.createElement(
    "div",
    {
        id : "parent",
    },
    React.createElement(
        "div",
        {
            id : "child",
        },
        [
            React.createElement(
                "h1",
                {},
                "I'm a h1 tag!"
            ),
            React.createElement(
                "h2",
                {},
                "I'm a h2 tag!"
            )
        ]
    )
);
/*
    <div id="parent">
        <div id="child1">
            <h1>I'm a h1 tag!</h1>
        </div>
        <div id="child2">
            <h1>I'm a h1 tag!</h1>
        </div>
    </div>
*/
const example2 = React.createElement(
    "div",
    {
        id : "parent",
    },
    [
        React.createElement(
            "div",
            {
                id : "child1",
            },
            React.createElement(
                "h1",
                {},
                "I'm a h1 tag!"
            )
        ),
        React.createElement(
            "div",
            {
                id : "child2",
            },
            React.createElement(
                "h1",
                {},
                "I'm a h1 tag!"
            )
        )
    ]
);
const heading = React.createElement(
    "h1",{
        id : "heading1",
        xyz : "example"
    },
    "Hello World from React!"
);
console.log(example2); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(example2);