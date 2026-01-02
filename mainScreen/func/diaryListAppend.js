// Diary 클래스 가져옴
import Diary from "../../diaryList/class/Diary.js";
// diaryListData 가져옴
import diaryListData from "../../diaryList/data/diaryListData.js";

// diary 리스트 데이터 추가 함수
// 텍스트와 내용을 지정
// diaryListData에 추가
// 제목 titleValue
// 내용 contextValue
const diaryListAppend = (titleValue, contextValue) => {
  // 새로 저장한 일기를 리스트에 추가
  // 제목과 내용이 각각 들어감
  const diary = new Diary(titleValue, contextValue);
  // diarylist 전체 데이터에 값 push
  diaryListData.push(diary);

  // diaryListData의 마지막 인덱스 값
  const maxDiaryIndex = diaryListData.length - 1;
  // 테스트
  // 최근 작성한 데이터의 제목, 내용이 나오는지
  console.log(diaryListData[maxDiaryIndex])
};

export default diaryListAppend