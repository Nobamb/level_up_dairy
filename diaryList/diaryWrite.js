// 일기 작성 버튼 관련 이벤트 동작 함수
// 일기 작성 버튼을 클릭시, 오른쪽의 메인화면에
// 일기 작성관련 창이 뜸
const diaryWrite = () => {
  // 일기작성 버튼 writeDiaryButton 클릭시,
  // mainContext, mainHeader가 on이 되면서
  // 제목과 내용에 대해 작성을 할 수 있음
  // writeDiaryButton 가져오기
  const writeDiaryButton = document.getElementById("writeDiaryButton");
  // mainContext 가져오기
  const mainContext = document.getElementById("mainContext");
  // mainHeader 가져오기
  const mainHeader = document.getElementById("mainHeader");

  // writeDiary 클릭시 이벤트 발생
  writeDiaryButton.onclick = () => {
    // mainHeader 영역 on 클래스 추가
    mainHeader.classList.add("on");
    // off 클래스 삭제
    mainHeader.classList.remove("off");
    // mainContext 영역 on 클래스 추가
    mainContext.classList.add("on");
    // off 클래스 삭제
    mainContext.classList.remove("off");
  };
};


// export 
export default diaryWrite