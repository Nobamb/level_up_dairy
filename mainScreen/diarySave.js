// 일기를 저장하도록 함
// saveButton(저장 버튼)을 클릭할 시,
// inputTitle(제목 입력창), inputContext(내용 입력창)의 값을
// title(제목), diaryContext(내용)에 적용
// 그 후, 메인 화면은 작성 완료한 상태의 일기를 보여줌
// inputTitle, inputContext off
// title, diaryContext on
// saveButton off,
// updateButton, deleteButton on

import Diary from "../diaryList/class/Diary.js";
import diaryListData from "../diaryList/data/diaryListData.js";
import onOff from "../func/onOff.js";
import diaryListAppend from "./func/diaryListAppend.js";
import mainContextElementData from "./mainContext/data/mainContextElementData.js";
import mainHeaderElementData from "./mainHeader/data/mainHeaderElementData.js";
import settingButtons from "./settingButtons/data/buttonsElementsData.js";

const diarySave = () => {
  // saveButton 가져옴
  const saveButton = settingButtons.saveButton;
  // saveButton 클릭시,
  saveButton.onclick = () => {
    // input으로 작성했던 title, context 출력(기능 동작 테스트)
    // console.log(mainHeaderElementData.inputTitle.value)
    // console.log(mainContextElementData.inputContext.value)
    
    // 제목 값
    const titleValue = mainHeaderElementData.inputTitle.value
    // 내용 값
    const contextValue = mainContextElementData.inputContext.value
    // 일기 추가
    diaryListAppend(
      titleValue, contextValue
    );


    // // 새로 저장한 일기를 리스트에 추가
    // // 제목과 내용이 각각 들어감
    // const diary = new Diary(titleValue, contextValue)
    // // diarylist 전체 데이터에 값 push
    // diaryListData.push(diary)

    // // diaryListData의 마지막 인덱스 값
    // const maxDiaryIndex = diaryListData.length-1

    // // console 테스트
    // console.log(diaryListData[maxDiaryIndex])

    // inputTitle(제목 입력창), inputContext(내용 입력창)의 값을
    // title(제목), diaryContext(내용)에 적용
    mainHeaderElementData.title.innerHTML = titleValue;
    mainContextElementData.diaryContext.innerHTML = contextValue;
    // 그 후, 메인 화면은 작성 완료한 상태의 일기를 보여줌
    // inputTitle, inputContext off
    // title, diaryContext on
    // saveButton off,
    // updateButton, deleteButton on
    onOff(
      [title, diaryContext, updateButton, deleteButton],
      [inputTitle, inputContext, saveButton]
    );
  };
};

// export
export default diarySave;
