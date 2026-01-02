// 레벨 관련 환경설정 가져오기
import levelPreference from "./level/levelPreference.js";
// 일기 리스트 관련 데이터 추가
// 일기 작성
import diaryWrite from "./diaryList/diaryWrite.js";
// 일기 저장
import diarySave from "./mainScreen/diarySave.js";

// 테스트
// console.log("!")

// 하루에 한번 들어왔을 때,
// 경험치 지급 10
// 레벨 1
// 레벨 1 기준 최대 경험치 100(레벨 1당 100)
// id level 가져오기
// levelValue : 레벨
// levelExpMaxValue : 레벨 최대 경험치량 
// let levelValue = 1
// const levelExpMaxValue = 100
// const level = document.getElementById("level");
// // 최대 경험치 가져오기
// const expBar = document.getElementById("allExp");
// // 현재 경험치 가져오기
// const nowExpBar = document.getElementById("accumulateExp");
// // 현재 레벨
// level.innerHTML = levelValue;
// // 다름 레벨로 진화하기 위한 요구 경험치량
// expBar.innerHTML = levelExpMaxValue * levelValue
// // 클래스화
// // 레벨 값 관련
// class Level {

//   constructor(levelValue, levelMaxValue) {
//     // 현재 레벨
//     this.levelValue = levelValue;
//     this.levelExpMaxValue = levelMaxValue
//   }

// }
// // 레벨 요소 관련
// class LevelElements {

//   constructor(level, allExp, accumulateExp) {
//     this.level = level;
//     this.allExp = allExp;
//     this.accumulateExp = accumulateExp
//   }

// }
// // level, levelElements 생성자 생성
// const level = new Level(1, 100)
// const levelElements = new LevelElements(document.getElementById("level"), document.getElementById("allExp"), document.getElementById("accumulateExp"))

// //  요소에 level 관련 값 지정
// // level 표시
// levelElements.level.innerHTML = level.levelValue;
// // 최대 경험치량 표시
// levelElements.allExp.innerHTML = level.levelExpMaxValue;
// // 현재 경험치량 표시
// // 임의로 0 표시
// levelElements.accumulateExp.innerHTML = 0;


// // 하루에 처음 접속했을 때,
// // 경험치 제공
// // 추후 서버로 변경
// 레벨 환경설정 가져오기
levelPreference()
// 일기 작성
diaryWrite()
// 일기 작성 후 저장
diarySave()