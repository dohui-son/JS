import React from "react";
import "./styles.css";
import InputSample from "./InputSameple";
//input에 입력하면 입력된 값이 하단에 appear,
//초기화 버튼을 누르면 input이  값이 비워지도록
//onChange 이벤트
//이벤트에 등록하는 함수에서는
//이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있음
// 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르킨다.
//이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있음.
//이 값을 useState 를 통해서 관리 가능

export default function App() {
  return <InputSample />;
}
