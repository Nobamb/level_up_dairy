// input값에 대해 
// 기존 요소의 선택값을 대입함
// 자식요소의 인덱스를 받아내면서
// 요소명도 같이 입력을 받음
const inputThisElementChildText = (inputValue, elementText, index,elementName) => {
  // 특정 순번의 요소
  const elementChild = elementText.children[index];
// 요소의 특정 자식 요소의 값
  const elementValue = elementChild.querySelector(elementName).innerHTML
// input요소의 값을 해당 값에 대입
  inputValue.value = elementValue

}

// export
export default inputThisElementChildText