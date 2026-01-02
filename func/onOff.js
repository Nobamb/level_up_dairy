// on/off 변환
// clickonoff와는 다르게 실행하면 바로 on/off
// 첫번째 파라미터 : on으로 바꿀 배열
// 두번째 파라미터 : off로 바꿀 배열
const onOff = (onElements, offElements) => {
  // on으로 바꿀 요소들에 대해 on 클래스 추가
  // off 클래스 삭제
  for (const on of onElements) {
    on.classList.remove("off");
    on.classList.add("on");
  }
  // off로 바꿀 요소들에 대해 off 클래스 추가
  // on 클래스 삭제
  for (const off of offElements) {
    off.classList.remove("on");
    off.classList.add("off");
  }
};

// export
export default onOff