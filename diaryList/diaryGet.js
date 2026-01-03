// 일기의 특정 리스트를 클릭하면
// 그 리스트의 내용을 메인화면으로 불러옴

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
  // 테스트
  // 부모요소를 클릭시
  diaryListElementData.diaryList.onclick = (e) => {
    // 이벤트 위임(closest를 통해 자식 요소 점검)
    // li인지 확인
    const diary = e.target.closest('li');

    // 자식 요소를 누른 것이 아니면
    // 동작을 중지시킴
    if(!diary){
      return
    }

    console.log("!!!")

  }
  // diarylist의 li 클릭 시
  // clickOnOff(diaryListElementData.diaryListChild)
  // mainheader, maincontext on
  // inputTitle, inputContext off
  // title, diaryContext on
  // saveButton off
  // updateButton, deleteButton off

};

// export
export default diaryGet
