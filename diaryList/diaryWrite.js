// 클릭시 on/off변환 함수

import clickOnOff from "../func/clickOnOff.js";

// 요소에 날짜를 띄우는 함수
import dateShow from "../func/dateShow.js";

// 데이터 가져오기

// diary 작성 관련 요소 데이터
import diaryWriteElementData from "./data/diaryWriteElementData.js";
// mainHeader 관련 요소 데이터
import mainHeaderElementData from "../mainScreen/mainHeader/data/mainHeaderElementData.js";
// mainContext 관련 요소 데이터
import mainContextElementData from "../mainScreen/mainContext/data/mainContextElementData.js";

// 일기 작성 버튼 관련 이벤트 동작 함수
// 일기 작성 버튼을 클릭시, 오른쪽의 메인화면에

// 일기 작성관련 창이 뜸
const diaryWrite = () => {
  // 만약에 오늘 날짜로 이미 일기를 작성했을 경우,
  // 일기를 더 작성하지 못하게 함(하루에 한번)
  // 즉, 오늘 처음 작성할 때만 clickonoff가 적용되게
  // if(){
  // if문 구현 성공시 clickonoff 넣기
  // }
  // else{
  //   이미 일기를 작성했을 경우
  //   내일 일기를 작성하라고 안내만 띄우기
  //   alert("오늘 이미 일기를 작성했습니다. 내일 다시 와주세요")
  // }
  // 일기작성 버튼 writeDiaryButton 클릭시,
  // mainContext, mainHeader가 on이 되면서
  // 제목과 내용에 대해 작성을 할 수 있음
  clickOnOff(
    diaryWriteElementData.writeDiaryButton,
    [
      mainHeaderElementData.mainHeader,
      mainContextElementData.mainContext,
      mainHeaderElementData.inputTitle,
      mainContextElementData.inputContext,
    ],
    [mainHeaderElementData.title, mainContextElementData.diaryContext]
  );

  // date를 요소에 띄우기
  dateShow(document.getElementById("nowDate") ,new Date())

  // // 메인 화면의 일기의 날짜요소(nowDate)를 오늘 날짜로
  // // 하루에 한번 일기를 작성할 것이기 때문
  // // 날짜요소 가져오기
  // const nowDate = document.getElementById("nowDate");
  // // date 클래스를 가져오기(현재 날짜를 가져옴)
  // const date = new Date();
  // // 년, 월, 일까지만
  // // 년
  // const year = date.getFullYear();
  // // 월(0부터 시작해서 1더함)
  // let month = date.getMonth()+1;
  // // 일
  // let day = date.getDay();
  // // 만약, month, day가 0~9일때,
  // // 앞에 0을 더 붙임
  // if(month < 10){
  //   month = "0" + String(month)
  // }
  // if(day < 10){
  //   day = "0" + String(day)
  // }

  // // nowDate 요소에 년,월,일 기재
  // nowDate.innerHTML = `${year}-${month}-${day}`

  // // writeDiaryButton 가져오기
  // const writeDiaryButton = document.getElementById("writeDiaryButton");
  // // mainContext 가져오기
  // const mainContext = document.getElementById("mainContext");
  // // mainHeader 가져오기
  // const mainHeader = document.getElementById("mainHeader");
  // // 제목 영역의 title 및 내용 영역의 diaryContext off
  // // inputTitle 가져오기
  // const inputTitle = document.getElementById("inputTitle");
  // // inputContext 가져오기
  // const inputContext = document.getElementById("inputContext");
  // // title 가져오기
  // const title = document.getElementById("title");
  // // diaryContext 가져오기
  // const diaryContext = document.getElementById("diaryContext");

  // clickonoff로 구현해보기
  // 특정 요소를 클릭하면?
  // 한쪽은 on클래스 추가 및 off클래스 삭제
  // 다른 한쪽은 off클래스 추가 및 on클래스 삭제
  // 일기를 작성하는 것이기에
  // input관련(inputTitle, inputContext)은 on
  // title, diaryContext off
  // 첫번째 파라미터 : writeDiaryButton(클릭 버튼)
  // 두번째 파라미터 : mainHeader, mainContext, inputTitle, inputContext(on 적용)
  // 세번째 파라미터 : title, diaryContext(off 적용)

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
