// 날짜에 대해 요소를 통해 포매팅되어 보여주는 함수
import formatZero from "./formatZero.js";

// 첫번째 파라미터 : 보여줄 요소의 위치
// 두번째 파라미터 : 어떤 날짜를 전달할 지 결정
const dateShow = (dateElement, dateValue) => {
  // 메인 화면의 일기의 날짜요소(nowDate)를 오늘 날짜로
  // 하루에 한번 일기를 작성할 것이기 때문
  // 날짜요소 가져오기
  const nowDate = dateElement;
  // date 클래스를 가져오기(현재 날짜를 가져옴)
  const date = dateValue;
  // 년, 월, 일까지만
  // 년
  const year = date.getFullYear();
  // 월(0부터 시작해서 1더함)
  const month = date.getMonth() + 1;
  // 일
  const day = date.getDay();
  // 만약, month, day가 0~9일때,
  // 앞에 0을 더 붙임
  const formatZeroData = formatZero([month, day]);
  // if(month < 10){
  //   month = "0" + String(month)
  // }
  // if(day < 10){
  //   day = "0" + String(day)
  // }

  // nowDate 요소에 년,월,일 기재
  // formatZeroData[0] = month
  // formatZeroData[1] = day
  nowDate.innerHTML = `${year}-${formatZeroData[0]}-${formatZeroData[1]}`;
};

// export
export default dateShow;
