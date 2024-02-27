import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">Namaste React using JSX (another way of writing JSX)</h1>

const number = 1000;
const HeadingComponent = () => {
    return <div id="container">
        <Title />
        <h2>{number}</h2>
        <h1 className="Head">Functional component</h1>
    </div>;
    //putting component inside another component <Title />
    //we can inject javascript inside jsx using {}
    // if we have an element also we can include that using {}
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);