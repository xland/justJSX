import React from "./React";
import "./Item.scss";
export default function (props) {
  let func = (e) => {
    let target = e.currentTarget as HTMLInputElement;
    alert(target.innerText);
  }
  return (
    <li onClick={func} class="Item">Hello：{props.data}-{props.children}</li>
  );
};