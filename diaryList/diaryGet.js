// 일기의 특정 리스트를 클릭하면
// 그 리스트의 내용을 메인화면으로 불러옴

import clickOnOff from "../func/clickOnOff";

// li의 h2(제목) => title
// li의 span(날짜) => nowDate
// li의 p(내용) => diaryContext

// mainheader, maincontext on
// inputTitle, inputContext off
// title, diaryContext on
// saveButton off
// updateButton, deleteButton off
const diaryGet = () => {
  // diarylist의 li 클릭 시
  clickOnOff()
  // mainheader, maincontext on
  // inputTitle, inputContext off
  // title, diaryContext on
  // saveButton off
  // updateButton, deleteButton off

};

// export
export default diaryGet
