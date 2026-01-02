// Diary 클래스 가져옴
import Diary from "../../diaryList/class/Diary.js";
// diaryListData 가져옴
import diaryListData from "../../diaryList/data/diaryListData.js";
// diaryListElementData 가져옴
import diaryListElementData from "../../diaryList/data/diaryListElementData.js";
import diaryWriteElementData from "../../diaryList/data/diaryWriteElementData.js";


// diary 리스트 데이터 추가 함수
// 텍스트와 내용을 지정
// diaryListData에 추가
// 제목 titleValue
// 내용 contextValue
// 날짜 date
const diaryListAppend = (titleValue, contextValue, date) => {
  // 새로 저장한 일기를 리스트에 추가
  // 제목과 내용, 날짜가 각각 들어감
  const diary = new Diary(titleValue, contextValue, date);
  // diarylist 전체 데이터에 값 push
  diaryListData.push(diary);

  // diaryListData의 마지막 인덱스 값
  const maxDiaryIndex = diaryListData.length - 1;
  // 테스트
  // 최근 작성한 데이터의 제목, 내용이 나오는지
  // console.log(diaryListData[maxDiaryIndex]);

  // diaryList에 li로 값들 추가
  // diaryList에 li로 title이랑 context내용 추가
  const diaryList = diaryListElementData.diaryList
  // insertAdjectHTML 적용해보기
  // diaryList에 적용
  // li태그 추가
  // 내용은 diaryListData의 마지막 값(최신값)
  // 추가 위치는 diaryList의 내부 제일 첫번째 위치
  // begin의 after 위치
  diaryList.insertAdjacentHTML("afterbegin",
    `<li>
      <h2>${diaryListData[maxDiaryIndex].title}</h2>
      <span>${diaryListData[maxDiaryIndex].date}</span>
      <p>${diaryListData[maxDiaryIndex].context}</p>
    </li>`)
};

export default diaryListAppend;
