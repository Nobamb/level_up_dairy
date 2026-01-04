// 일기를 수정해주는 함수
// 수정버튼을 클릭한다면, 해당 일기가 input으로 변경
// saveButton on
// updateButton, deleteButton off
// inputContext, inputTitle on
// diaryContext, title off

// 클릭시 on/off
import clickOnOff from "../func/clickOnOff.js";
// newDiary에 대해 true/false 적용함수
import newDiaryBooleanChange from "../func/newDiaryBooleanChange.js";
// 요소 데이터들
// mainContextElementData 요소
import mainContextElementData from "./mainContext/data/mainContextElementData.js";
// mainHeaderElementData 요소
import mainHeaderElementData from "./mainHeader/data/mainHeaderElementData.js";
// settingButtons 요소
import settingButtons from "./settingButtons/data/buttonsElementsData.js";



// title, diaryContext off
const diaryUpdate = () => {


  // 업데이트 버튼(updateButton) 클릭 시,
  // newDiary false

  newDiaryBooleanChange(settingButtons.updateButton, false)

  // settingButtons.updateButton.addEventListener('click',()=>{

  //   NewDiary.newDiary = false

  // })

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
