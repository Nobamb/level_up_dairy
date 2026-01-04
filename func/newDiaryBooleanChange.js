// newDiary의 값을 true, 또는 false로 변경

// newDiary를 가져옴
import NewDiary from "../data/newDiary.js"

// button : 클릭시 적용시킬 함수
// bool : true 또는 false 적용시킬 값
const newDiaryBooleanChange = (button, bool) => {

  // button 클릭 시
  button.addEventListener('click',()=>{

    NewDiary.newDiary = bool

  })

}

// export
export default newDiaryBooleanChange