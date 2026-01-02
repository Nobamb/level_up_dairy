// 레벨 관련 import
import Level from "../class/Level.js";
// 레벨 요소 관련 import 
import LevelElements from "../class/LevelElements.js";


// 레벨 관련 환경설정
const levelPreference = () =>{
  
  // level, levelElements 생성자 생성
  const level = new Level(1, 100)
  const levelElements = new LevelElements(document.getElementById("level"), document.getElementById("allExp"), document.getElementById("accumulateExp"))
  
  //  요소에 level 관련 값 지정
  // level 표시
  levelElements.level.innerHTML = level.levelValue;
  // 최대 경험치량 표시
  levelElements.allExp.innerHTML = level.levelExpMaxValue;
  // 현재 경험치량 표시
  // 임의로 0 표시
  levelElements.accumulateExp.innerHTML = 0;
  
  
  // 하루에 처음 접속했을 때,
  // 경험치 제공
  // 추후 서버로 변경


}


// export
export default levelPreference