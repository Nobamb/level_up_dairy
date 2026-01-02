// 클릭시 on/off변환 함수

import clickOnOff from "../func/clickOnOff.js";

// 일기 작성 버튼 관련 이벤트 동작 함수
// 일기 작성 버튼을 클릭시, 오른쪽의 메인화면에

// 일기 작성관련 창이 뜸
const diaryWrite = () => {
  // 일기작성 버튼 writeDiaryButton 클릭시,
  // mainContext, mainHeader가 on이 되면서
  // 제목과 내용에 대해 작성을 할 수 있음
  // writeDiaryButton 가져오기
  const writeDiaryButton = document.getElementById("writeDiaryButton");
  // mainContext 가져오기
  const mainContext = document.getElementById("mainContext");
  // mainHeader 가져오기
  const mainHeader = document.getElementById("mainHeader");
  // 일기를 작성하는 것이기에
  // input관련(inputTitle, inputContext)은 on
  // 제목 영역의 title 및 내용 영역의 diaryContext off
  // inputTitle 가져오기
  const inputTitle = document.getElementById("inputTitle");
  // inputContext 가져오기
  const inputContext = document.getElementById("inputContext");
  // title 가져오기
  const title = document.getElementById("title");
  // diaryContext 가져오기
  const diaryContext = document.getElementById("diaryContext");

  // clickonoff로 구현해보기
  // 특정 요소를 클릭하면?
  // 한쪽은 on클래스 추가 및 off클래스 삭제
  // 다른 한쪽은 off클래스 추가 및 on클래스 삭제
  // 첫번째 파라미터 : writeDiaryButton(클릭 버튼)
  // 두번째 파라미터 : mainHeader, mainContext, inputTitle, inputContext(on 적용)
  // 세번째 파라미터 : title, diaryContext(off 적용)

  clickOnOff(
    writeDiaryButton,
    [mainHeader, mainContext, inputTitle, inputContext],
    [title, diaryContext]
  );

//   // writeDiary 클릭시 이벤트 발생
//   writeDiaryButton.onclick = () => {
//     // mainHeader 영역 on 클래스 추가
//     mainHeader.classList.add("on");
//     // off 클래스 삭제
//     mainHeader.classList.remove("off");
//     // mainContext 영역 on 클래스 추가
//     mainContext.classList.add("on");
//     // off 클래스 삭제
//     mainContext.classList.remove("off");
//     // inputTitle, inputContext on 클래스추가
//     // off 클래스 삭제
//     inputTitle.classList.add("on");
//     inputTitle.classList.remove("off");
//     inputContext.classList.add("on");
//     inputContext.classList.remove("off");
//     // title, diaryContext off 클래스 추가
//     // on 클래스 삭제
//     title.classList.add("off");
//     title.classList.remove("on");
//     diaryContext.classList.add("off");
//     diaryContext.classList.remove("on");
//   };
};

// export
export default diaryWrite;
