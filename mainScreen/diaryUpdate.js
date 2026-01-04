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
// diaryListElementData 요소
import diaryListElementData from "../diaryList/data/diaryListElementData.js";
import NewDiary from "../data/newDiary.js";
import inputThisElementChildText from "./func/inputThisElementChildText.js";

// title, diaryContext off
const diaryUpdate = () => {
  // 업데이트 버튼(updateButton) 클릭 시,
  // newDiary false

  newDiaryBooleanChange(settingButtons.updateButton, false);

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
      mainContextElementData.diaryContext,
    ]
  );

  // update버튼 클릭시

  settingButtons.updateButton.addEventListener("click", () => {
    // inputTitle, inputContext의 값을
    // diaryList의 특정 인덱스 순번의 li의 h2, p로 변경

    // inputText의 값을
    // diaryList라는 요소의 자식 요소중에
    // diaryIndex 순번의
    // h2의 값을 받음
    inputThisElementChildText(
      inputTitle,
      diaryListElementData.diaryList,
      NewDiary.diaryIndex,
      "h2"
    );

    // inputContext의 값을
    // diaryList라는 요소의 자식 요소중에
    // diaryIndex 순번의
    // p의 값을 받음
    inputThisElementChildText(
      inputContext,
      diaryListElementData.diaryList,
      NewDiary.diaryIndex,
      "p"
    );

    // mainHeaderElementData.inputTitle.value =
    //   diaryListElementData.diaryList.children[NewDiary.diaryIndex].querySelector(
    //     "h2"
    //   ).innerHTML;
    // mainContextElementData.inputContext.value =
    //   diaryListElementData.diaryList.children[NewDiary.diaryIndex].querySelector(
    //     "p"
    //   ).innerHTML;
  });
};

// export
export default diaryUpdate;
