import diaryListData from "../diaryList/data/diaryListData.js";
import diaryListElementData from "../diaryList/data/diaryListElementData.js";
import NewDiary from "../data/newDiary.js";
import mainHeaderElementData from "../mainScreen/mainHeader/data/mainHeaderElementData.js";
import mainContextElementData from "../mainScreen/mainContext/data/mainContextElementData.js";
import elementsValueInsert from "./elementsValueInsert.js";

// diaryIndex에 해당하는 요소 및 데이터 변경

const diaryTextChange = () => {
  //diaryListData의 maxIndex가져옴
  const maxIndex = diaryListData.length - 1;

  // diaryList를 가져오고,
  // 그 리스트의 index를 찾아냄
  // 찾아낸 요소를 diaryUpdateElement로 지정
  // 가장 오래된 데이터가 0번째,
  // 가장 최근 데이터가 마지막 index이기에
  // dairyList는 최근의 값을 push하기 때문
  // 반면, diaryIndex는 최근의 값이 0,
  // 가장 오래된 데이터는 0번째로 되어있기에
  // diaryIndex에서 나오는 diaryList 요소의 li는
  // 맨위에서부터 쌓아올라가는 식(afterbegin이기에)
  // maxIndex에서 diaryIndex를 빼는 식으로 index를 찾아야 됨
  const diaryUpdateData = diaryListData[maxIndex - NewDiary.diaryIndex];

  // 테스트

  // console.log(diaryListData);
  // console.log(NewDiary.diaryIndex);

  // console.log(diaryUpdateElement);

  // 기준은 inputContext, inputTitle부터
  // title
  diaryUpdateData.title = mainHeaderElementData.inputTitle.value;
  // diaryContext
  diaryUpdateData.context = mainContextElementData.inputContext.value;

  // 테스트
  console.log(diaryListData);

  // diaryList의 특정 인덱스의 요소를 가져오고 수정하기
  // children을 사용하여 특정 인덱스(diaryIndex)의 요소를 불러옴
  // 요소 기준의 index이기에 maxIndex를 빼지 않고 그대로 가져옴
  const diarySelect =
    diaryListElementData.diaryList.children[NewDiary.diaryIndex];
  // h2, p변경
  // h2에 inputTitle 값 대입

  elementsValueInsert(
    [diarySelect.querySelector("h2"), diarySelect.querySelector("p")],
    [
      mainHeaderElementData.inputTitle.value,
      mainContextElementData.inputContext.value,
    ]
  );

  // diarySelect.querySelector("h2").innerHTML =
  //   mainHeaderElementData.inputTitle.value;
  // // p에 inputContext 값 대입
  // diarySelect.querySelector("p").innerHTML =
  //   mainContextElementData.inputContext.value;
};

// export

export default diaryTextChange;
