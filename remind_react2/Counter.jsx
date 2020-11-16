import React, { useState } from "react";
//버튼 클릭 이벤트 살생시 , 특정 함수 호출
function Counter() {
  const [number, setNumber] = useState(0); //상태 기본값을 파라미터로 넣어서 호출-->배열반환
  //배열의 첫번째 원소는 현재 상태, 두번째 원소는 Setter함수
  //==>(배열 비구조화 할당으로 각 원소 추출했기 때문)

  const onIncrease = () => {
    //console.log(+1);
    //setNumber(number + 1); //Setter함수 사용시, 업데이트할 새로운 값을 파라미터로 넣어주는 방식

    //기존 값을 어떻게 업데이트하는지에 대한 함수를 등록하는 방식으로 값 없데이트 방법
    setNumber((prevNumber) => prevNumber + 1); //  함수형 업데이트
  };
  const onDecrease = () => {
    //console.log(-1);
    //setNumber(number - 1);//업데이트할 새로운 값을 파라미터로 넣어주는 방식
    setNumber((prevNumber) => prevNumber - 1); //  함수형 업데이트
  };
  return (
    <div>
      <h1> {number} </h1>
      <button onClick={onIncrease}> + 1</button>
      <button onClick={onDecrease}> - 1</button>
    </div>
  );
}
export default Counter;
