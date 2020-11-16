import React from "react";
import "./styles.css";
import Counter from "./index.jsx";
//리액트 16.8 에서 Hooks 기능이 도입되면서
//함수형 컴포넌트에서도 상태를 관리 가능.
//useState 함수 ( 리액트 Hooks 중 하나 )

export default function App() {
  return <Counter />;
}

//export default App;
