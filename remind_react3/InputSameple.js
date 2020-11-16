import React, { useState } from "react";
//input에 입력하면 입력된 값이 하단에 appear,
//초기화 버튼을 누르면 input이  값이 비워지도록
//onChange 이벤트
//이벤트에 등록하는 함수에서는
//이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있음
// 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르킨다.
//이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있음.
//이 값을 useState 를 통해서 관리 가능
function InputSample() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}> Click INITIALIZE </button>
      <div>
        <b> the Value of INPUT : {text} </b>
      </div>
    </div>
  );
}
//input 상태 관리시 input태그의 value값도 설정해주는것이 중요.
//그래야지 상태가 바뀌었을때 input의 내용도 없데이트됨
export default InputSample;
