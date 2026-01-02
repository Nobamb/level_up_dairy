// formatZero
// 배열 형태의 파라미터들을 점검하고, 0~9인지 확인
// 만약, 파라미터 배열들의 각 값이 0~9일때,
// 앞에 0을 더 붙임
const formatZero = (checkValues)=>{
  // 임의의 배열 추가
  // 0이 추가되었을 때 값이 추가되며
  // return될 때 이 값들을 return
  let formatList = [];
  // for of문으로 하나씩 가져옴
  for (let checkValue of checkValues){
    // 0~9의 값일 때
    // 앞자리에 0 추가
    if (checkValue < 10) {
      checkValue = "0" + String(checkValue);
    }
    // formatList에 추가
    formatList.push(checkValue)
    
  }
  // formatList 리턴
  // 0으로 변환된 모든 값들
  return formatList

}


// export 
export default formatZero