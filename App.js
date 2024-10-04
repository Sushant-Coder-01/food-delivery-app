import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
    <div>
        <h1 id="heading" >
            Hello World am using JSX!
        </h1>
    </div>
);


const HeadingComponent = () => (
    <div>
        <Heading />
        {Heading()}
        <Heading></Heading>
        <h2> this is a functional component </h2>
    </div>
);
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);