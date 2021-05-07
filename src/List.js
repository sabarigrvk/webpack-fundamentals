import React from "react";
import { add } from "./utils";
import "./list.css";
export default function List() {
  // uncomment this line to see webpack with code splitting
  // import(/* webpackChunkName: "utils" */ "./utils").then((comp) => {
  //   console.log(comp.add(15, 5));
  // });

  // uncomment this line to see webpack without code splitting
  console.log(add(15, 5));
  return (
    <ul>
      <li>one</li>
      <li>two</li>
    </ul>
  );
}
