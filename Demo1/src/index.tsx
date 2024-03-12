import React from "./React";
import Item from "./Item"

let App = () => {
  let func = () => {
    let ele = document.getElementsByTagName("ul")[0];
    ele.appendChild(<li>Hello：{ele.children.length + 1}~</li>);
  }
  let arr = [1, 2, 3, 4, 5, 6];
  return (<>
    <div>这是一个列表： </div>
    <ul>
      {arr.map((v, i) => (
        <Item data={v}></Item>
      ))}
    </ul>
    <div onClick={func}>增加一个</div>
  </>);
};
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(<App></App>);
});