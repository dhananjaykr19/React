import React from "react";
import ReactDOM from "react-dom/client";   
const jsxHeading =( <h1 id="heading">Namaste React using JSX</h1>);
console.log(jsxHeading);   

// React Element
const heading = (
    <h1 className="head">
        Namaste React using JSX
    </h1>
);
function test(){
    return(
        <h1>
            This is testing JSX
        </h1>
    )
}

// React Component
const Heading = () => (
    <h1 className="head">
        React Component
    </h1>
);

// React Functional Component
const HeadingComponent = () => {
    return (
        <>
            {heading}
            {test()}
            {/* {Heading()} */}
            <h1 className="head">Namaste React Functional Component!</h1>
            {/* Component Composition */}
            <Heading />
        </> 
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
