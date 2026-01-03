// 일기를 수정해주는 함수
// 수정버튼을 클릭한다면, 해당 일기가 input으로 변경
// saveButton on
// updateButton, deleteButton off
// inputContext, inputTitle on
// diaryContext, title off

import clickOnOff from "../func/clickOnOff.js";
import mainContextElementData from "./mainContext/data/mainContextElementData.js";
import mainHeaderElementData from "./mainHeader/data/mainHeaderElementData.js";
import settingButtons from "./settingButtons/data/buttonsElementsData.js";

// title, diaryContext off
const diaryUpdate = () => {
  // 현재 수정 버튼을 클릭한 상태에서 저장을 하면
  // 기존 일기가 수정이 안되고 새 일기로 저장이 되는 상태
  // 따로 true, false를 가르는 변수(newDiary)를 export한후
  // true일때 diarySave는 저장할 시 새로운 일기를 추가,
  // false일 땐 diarySave는 저장할 시 선택한 일기를 수정
  // 

  // updateButton 클릭시
  // saveButton on
  // updateButton, deleteButton off
  // inputContext, inputTitle on
  // diaryContext, title off
  clickOnOff(
    settingButtons.updateButton,
    [
      settingButtons.saveButton,
      mainHeaderElementData.inputTitle,
      mainContextElementData.inputContext,
    ],
    [
      settingButtons.deleteButton,
      settingButtons.updateButton,
      mainHeaderElementData.title,
      mainContextElementData.diaryContext
    ]
  );
};

// export 
export default diaryUpdate
