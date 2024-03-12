import React from "./React";
let App = () => {
    let str = `World`;
    return (
      <div>Hello {str} !!!</div> //createElement tag string
    );
};
document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(<App />); //createElement tag function
});