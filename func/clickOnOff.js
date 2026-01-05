// 특정 요소를 클릭하면?
// 한쪽은 on클래스 추가 및 off클래스 삭제
// 다른 한쪽은 off클래스 추가 및 on클래스 삭제
// 첫번째 파라미터 : 클릭할 요소
// 두번째 파라미터 : on클래스 추가 및 off 클래스 삭제 요소(배열)

import onOff from "./onOff.js";

// 세번째 파라미터 : off클래스 추가 및 on 클래스 삭제 요소(배열)
const clickOnOff = (button, onElements, offElements) => {
  // 버튼 클릭시,
  button.onclick = (e) => {
    // form 이벤트 임시 차단
    e.preventDefault();
    // on/off 동작 실행
    onOff(onElements, offElements)
    // // onElements 모두 하나씩 가져옴
    // for (const on of onElements) {
    //   // off 클래스 삭제
    //   on.classList.remove("off");
    //   // on 클래스 추가
    //   on.classList.add("on");
    // }
    // // offElements 모두 하나씩 가져옴
    // for (const off of offElements) {
    //   // on 클래스 삭제
    //   off.classList.remove("on");
    //   // off 클래스 추가
    //   off.classList.add("off");
    // }
  };
};

// export
export default clickOnOff;
