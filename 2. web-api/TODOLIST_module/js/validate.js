// 입력값이 유효한지 검증
function isRight($textInput) {
  const text = $textInput.value;

  // 입력값이 비었거나 10글자 이상이면 유효하지 않다.
  if (text.trim() === '' || text.length > 10) {
    $textInput.style.background = 'orangered';
    $textInput.setAttribute('placeholder', '필수 입력사항입니다 (10자 이내)');
    $textInput.value = '';
    return false;
  }
  $textInput.style.background = '';
  $textInput.setAttribute('placeholder', '할 일을 입력하세요.');
  return true;
}


export default isRight;