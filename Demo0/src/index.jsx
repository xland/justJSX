import React from "./React";
let App = () => {
    return (
      <div>Hello World!</div>
    );
};
document.addEventListener("DOMContentLoaded", async () => {
    document.body.appendChild(<App />);
});