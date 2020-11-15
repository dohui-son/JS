import React from "react";
import "./time.css";
//import App from "./App";

function CustomComponent(props) {
  return (
    <h2 className="custom-class">
      {props.hour}시 {props.minute}분 {props.second}초 입니다!!
    </h2>
  );
}
export default CustomComponent;
