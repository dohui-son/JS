import React from "react";
import "./styles.css";
import "./time.css";
import Time from "./time";

export default function App() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const odd = <h3 style={{ color: "blue" }}>홀수초</h3>;
  const even = <h3 style={{ color: "blue" }}>짝수초</h3>;
  const asdf = { color: "green", fontStyle: "italic" };
  return (
    <div className="App">
      <h1 style={asdf}>현재 시간은 </h1>
      <Time hour={hour} minute={minute} second={second} />
      {second % 2 === 0 ? even : null}
      {second % 2 !== 0 ? odd : null}
    </div>
  );
}
