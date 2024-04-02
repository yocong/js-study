// 1. 버튼눈르거나 엔터누르면 일정 추가됨
// 아무것도 안쓰면 '필수 입력사항입니다.' 출력

const $add = document.getElementById("add");
const $input = document.querySelector("input");
const $todoText = document.getElementById("todo-text");
const $todoList = document.querySelector(".todo-list");
const $todoListItem = document.querySelectorAll('.todo-list-item');


// 버튼 클릭했을 때 할 일 추가 (id 1씩 늘어나게 실패)
$add.addEventListener("click", (e) => {
  
  // 아무것도 입력되지 않았을 때
  if($todoText.value === '') {
    $input.style.backgroundColor = 'red';
    $input.placeholder = '필수 입력사항입니다.';
  }

  const $newLi = document.createElement('li'); // 태그 생성

  // id가 +1씩 되게함
  const newId = $todoListItem.length + 1;
  $newLi.dataset.id = newId;

  $newLi.classList.add("todo-list-item");
  const text = $todoText.value;
  e.preventDefault();


  $newLi.innerHTML += `
  <label class="checkbox">
      <input type="checkbox">
      <span class="text">${text}</span>
  </label>
  <div class="modify">
      <span class="lnr lnr-undo"></span>
  </div>
  <div class="remove">
      <span class="lnr lnr-cross-circle"></span>
  </div>
  `;
  $todoList.appendChild($newLi);
  $todoText.value = ''; // 입력칸 비우기
});

// 2. 할일 체크 기능 (아무데나 눌러도됨)
// 3. 수정기능



