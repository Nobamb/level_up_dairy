// 대입될 변수들을 전부 묶어서 또다른 묶여진 값에 대입함
// 배열을 파라미터로 받음
// inserteds : 값을 받을 파라미터(배열 형태)
// values : 전체적인 값들(배열 형태)
const valueInsert = (inserteds, values) => {

  // 값 입력 잘되는지 테스트
  console.log(inserteds)
  console.log(values)

  // foreach 문을 통해 inserteds를 잘게 쪼갬
  // foreach문으로 값과 인덱스를 모두 가져올 수 있기에
  // inserted에 해당하는 index를 values의 인덱스에 접근하여 대입
  inserteds.forEach((inserted, index) => {
    inserted = values[index]
  });

  return inserteds

}


// export 시킴
export default valueInsert