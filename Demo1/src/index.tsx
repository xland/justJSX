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
        <Item data={v}>{i + 1}</Item>
      ))}
    </ul>
    <div onClick={func}>增加一个</div>
  </>);
};
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(<App></App>);
});



// let container = document.getElementById("container");
// for(let i=0;i<6;i++){
//     let row = <div class="row"></div>
//     for(let j=0;j<7;j++){
//         let cell = <div><div class="cellHeader">{obj.content}</div></div>
//         row.appendChild(cell)
//     }
//     container.append(row)
// }