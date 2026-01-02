// 일기를 저장하도록 함
// saveButton(저장 버튼)을 클릭할 시,
// inputTitle(제목 입력창), inputContext(내용 입력창)의 값을
// title(제목), diaryContext(내용)에 적용
// 그 후, 메인 화면은 작성 완료한 상태의 일기를 보여줌
// inputTitle, inputContext off
// title, diaryContext on
// saveButton off,
// updateButton, deleteButton on

import onOff from "../func/onOff.js";
import mainContextElementData from "./mainContext/data/mainContextElementData.js";
import mainHeaderElementData from "./mainHeader/data/mainHeaderElementData.js";

const diarySave = () => {
  // saveButton 가져옴
  const saveButton = document.getElementById("saveButton");
  // saveButton 클릭시,
  saveButton.onclick = () => {

    // input으로 작성했던 title, context 출력(기능 동작 테스트)
    // console.log(mainHeaderElementData.inputTitle.value)
    // console.log(mainContextElementData.inputContext.value)
    // 제목 값
    const titleValue = mainHeaderElementData.inputTitle.value
    // 내용 값
    const contextValue = mainContextElementData.inputContext.value
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
