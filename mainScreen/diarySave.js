// 일기를 저장하도록 함
// saveButton(저장 버튼)을 클릭할 시,
// inputTitle(제목 입력창), inputContext(내용 입력창)의 값을
// title(제목), diaryContext(내용)에 적용
// 그 후, 메인 화면은 작성 완료한 상태의 일기를 보여줌
// inputTitle, inputContext off
// title, diaryContext on
// saveButton off,
// updateButton, deleteButton on

import NewDiary from "../data/newDiary.js";

import diaryTextChange from "../func/diaryTextChange.js";
import onOff from "../func/onOff.js";
import diaryListAppend from "./func/diaryListAppend.js";
import mainContextElementData from "./mainContext/data/mainContextElementData.js";
import mainHeaderElementData from "./mainHeader/data/mainHeaderElementData.js";
import settingButtons from "./settingButtons/data/buttonsElementsData.js";

const diarySave = () => {
  // saveButton 가져옴
  const saveButton = settingButtons.saveButton;
  // saveButton 클릭시,
  saveButton.onclick = (e) => {
    // form 이벤트 임시 차단
    e.preventDefault();
    // 제목 값
    const titleValue = mainHeaderElementData.inputTitle.value;
    // 내용 값
    const contextValue = mainContextElementData.inputContext.value;
    // 날짜 값
    const dateValue = mainHeaderElementData.nowDate.innerHTML;
    // 현재 수정 버튼을 클릭한 상태에서 저장을 하면
    // 기존 일기가 수정이 안되고 새 일기로 저장이 되는 상태
    // 따로 true, false를 가르는 변수(newDiary)를 export한후
    // true일때 diarySave는 저장할 시 새로운 일기를 추가,
    // false일 땐 diarySave는 저장할 시 선택한 일기를 수정

    // newDiary가 true일 때(새로운 일기를 저장시)
    if (NewDiary.newDiary) {
      // 일기 추가
      diaryListAppend(titleValue, contextValue, dateValue);
    }
    // false일 때(기존의 내용을 수정하려고 할 때)
    else {
      // 테스트
      // console.log('수정!')

      // 일기내용 관련 수정 함수
      diaryTextChange();

      // //diaryListData의 maxIndex가져옴
      // const maxIndex = diaryListData.length - 1;

      // // diaryList를 가져오고,
      // // 그 리스트의 index를 찾아냄
      // // 찾아낸 요소를 diaryUpdateElement로 지정
      // // 가장 오래된 데이터가 0번째,
      // // 가장 최근 데이터가 마지막 index이기에
      // // dairyList는 최근의 값을 push하기 때문
      // // 반면, diaryIndex는 최근의 값이 0,
      // // 가장 오래된 데이터는 0번째로 되어있기에
      // // diaryIndex에서 나오는 diaryList 요소의 li는
      // // 맨위에서부터 쌓아올라가는 식(afterbegin이기에)
      // // maxIndex에서 diaryIndex를 빼는 식으로 index를 찾아야 됨
      // const diaryUpdateData = diaryListData[maxIndex - NewDiary.diaryIndex];

      // // 테스트

      // // console.log(diaryListData);
      // // console.log(NewDiary.diaryIndex);

      // // console.log(diaryUpdateElement);

      // // 기준은 inputContext, inputTitle부터
      // // title
      // diaryUpdateData.title = mainHeaderElementData.inputTitle.value;
      // // diaryContext
      // diaryUpdateData.context = mainContextElementData.inputContext.value;

      // // 테스트
      // console.log(diaryListData)

      // // diaryList의 특정 인덱스의 요소를 가져오고 수정하기
      // // children을 사용하여 특정 인덱스(diaryIndex)의 요소를 불러옴
      // // 요소 기준의 index이기에 maxIndex를 빼지 않고 그대로 가져옴
      // const diarySelect = diaryListElementData.diaryList.children[NewDiary.diaryIndex]
      // // h2, p변경
      // // h2에 inputTitle 값 대입
      // diarySelect.querySelector('h2').innerHTML = mainHeaderElementData.inputTitle.value
      // // p에 inputContext 값 대입
      // diarySelect.querySelector('p').innerHTML = mainContextElementData.inputContext.value
    }

    // input으로 작성했던 title, context 출력(기능 동작 테스트)
    // console.log(mainHeaderElementData.inputTitle.value)
    // console.log(mainContextElementData.inputContext.value)

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
