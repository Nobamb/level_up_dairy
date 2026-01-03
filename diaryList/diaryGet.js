// 일기의 특정 리스트를 클릭하면
// 그 리스트의 내용을 메인화면으로 불러옴

// 함수 import
// 요소들에 값 대입
import elementsValueInsert from "../func/elementsValueInsert.js";
// on/off 적용
import onOff from "../func/onOff.js";
// data들 모두 가져옴
// mainscreen 요소 관련
import mainContextElementData from "../mainScreen/mainContext/data/mainContextElementData.js";
// mainheader 요소 관련
import mainHeaderElementData from "../mainScreen/mainHeader/data/mainHeaderElementData.js";
// settingbuttons 요소 관련
import settingButtons from "../mainScreen/settingButtons/data/buttonsElementsData.js";
// diaryListelement 가져옴
import diaryListElementData from "./data/diaryListElementData.js";

// li의 h2(제목) => title
// li의 span(날짜) => nowDate
// li의 p(내용) => diaryContext

// mainheader, maincontext on
// inputTitle, inputContext off
// title, diaryContext on
// saveButton off
// updateButton, deleteButton off
const diaryGet = () => {
  // // 테스트
  // // 부모요소를 클릭시
  // diaryListElementData.diaryList.onclick = (e) => {
  //   // 이벤트 위임(closest를 통해 자식 요소 점검)
  //   // li인지 확인
  //   const diary = e.target.closest('li');

  //   // 자식 요소를 누른 것이 아니면
  //   // 동작을 중지시킴
  //   if(!diary){
  //     return
  //   }

  //   console.log("!!!")

  // }
  // diarylist 요소 클릭 시
  diaryListElementData.diaryList.onclick = (e) => {
    // 하위 요소 지정(li)
    const diary = e.target.closest("li");

    // diary(li)가 아닐 시 return
    if (!diary) return;

    // diary가 맞다면

    // mainheader, maincontext on
    // inputTitle, inputContext off
    // title, diaryContext on
    // saveButton off
    // updateButton, deleteButton on

    onOff(
      [
        mainHeaderElementData.mainHeader,
        mainContextElementData.mainContext,
        mainHeaderElementData.title,
        mainContextElementData.diaryContext,
        settingButtons.updateButton,
        settingButtons.deleteButton,
      ],
      [
        mainHeaderElementData.inputTitle,
        mainContextElementData.inputContext,
        settingButtons.saveButton,
      ]
    );

    // li의 h2(제목) => title
    // li의 span(날짜) => nowDate
    // li의 p(내용) => diaryContext
    // 자식 요소들의 innerhtml을 가져옴
    const titleText = diary.querySelector("h2").innerHTML;
    const nowDateText = diary.querySelector("span").innerHTML;
    const diaryContextText = diary.querySelector("p").innerHTML;
    // 그 후 innerHTML을 통해 대입
    mainHeaderElementData.title.innerHTML = titleText;
    mainHeaderElementData.nowDate.innerHTML = nowDateText;
    mainContextElementData.diaryContext.innerHTML = diaryContextText;

    // elementsValueInsert를 통해 li 내부의 h2, span, p 값들 모두
    // title, nowDate, diaryContext에 대입
    elementsValueInsert(
      [
        mainHeaderElementData.title,
        mainHeaderElementData.nowDate,
        mainContextElementData.diaryContext,
      ],
      [
        diary.querySelector("h2").innerHTML,
        diary.querySelector("span").innerHTML,
        diary.querySelector("p").innerHTML,
      ]
    );
  };
};

// export
export default diaryGet;
