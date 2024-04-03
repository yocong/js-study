// 1. 버튼눈르거나 엔터누르면 일정 추가됨
// 아무것도 안쓰면 '필수 입력사항입니다.' 출력

// const $add = document.getElementById("add");
// const $input = document.querySelector("input");
// const $todoText = document.getElementById("todo-text");
// const $todoList = document.querySelector(".todo-list");
// const $todoListItem = document.querySelectorAll('.todo-list-item');

// // 버튼 클릭했을 때 할 일 추가
// $add.addEventListener("click", (e) => {
//   e.preventDefault();
//   // 아무것도 입력되지 않았을 때 or 공백을 입력했을 때
//   if($todoText.value.trim() === '') {
//     $input.style.backgroundColor = 'red';
//     $input.placeholder = '필수 입력사항입니다.';
//   } else {
//     $input.style.backgroundColor = '';
//     $input.placeholder = '할 일을 입력하세요.';

//     const $newLi = document.createElement('li'); // 태그 생성

//     // id가 +1씩 되게함
//     const newId = $todoListItem.length + 1;
//     $newLi.dataset.id = newId;

//     $newLi.classList.add("todo-list-item");
//     const text = $todoText.value.trim();

//     $newLi.innerHTML += `
//     <label class="checkbox">
//         <input type="checkbox">
//         <span class="text">${text}</span>
//     </label>
//     <div class="modify">
//         <span class="lnr lnr-undo"></span>
//     </div>
//     <div class="remove">
//         <span class="lnr lnr-cross-circle"></span>
//     </div>
//     `;
//     $todoList.appendChild($newLi);
//     $todoText.value = ''; // 입력칸 비우기
//   }
// });

// 2. 할일 체크 기능 (아무데나 눌러도됨)
// 3. 수정기능







//============ 전역 변수 영역 ============//

// 현재 수정모드에 진입하셨나요?
let isEnterEditMode = false;

// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: "할 일1",
    done: false,
  },
  {
    id: 2,
    text: "할 일2",
    done: false,
  },
  {
    id: 3,
    text: "할 일3",
    done: false,
  },
];

//============ 함수 정의 영역 ============//

// 새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수
function renderNewTodoElement({id, text}) {
  // 2. li태그 생성하기
  const $newTodoLi = document.createElement("li");
  // 2-1. 생성한 태그에 텍스트 추가하기
  // 2-2. 클래스, data-id 추가하기
  $newTodoLi.dataset.id = id;
  $newTodoLi.classList.add("todo-list-item");
  // 2-3. li의 자식들 추가하기
  $newTodoLi.innerHTML = `
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

  // 3. 생성한 태그 ul에 추가하기
  const $todoListUl = document.querySelector(".todo-list");
  $todoListUl.appendChild($newTodoLi);
}


// 입력값이 유효한지 검증
function isValidate($textInput) {
  const text = $textInput.value;

  // 입력값이 비었거나 10글자 이상이면 유효하지 않다.
  if (text.trim() === '' || text.length > 10) {
    $textInput.style.background = 'orangered';
    $textInput.setAttribute('placeholder', '필수 입력사항입니다 (10자 이내)');
    $textInput.value = ''; // 공백
    return false;
  }
  $textInput.style.background = '';
  $textInput.setAttribute('placeholder', '할 일을 입력하세요.');
  return true;
}






// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById("todo-text");
  const inputText = $todoText.value; // 텍스트 내용

  
  // 혹시 입력을 안하셨나요? 집에 가세요
  if (!isValidate($todoText)) return;


  // 새 할 일의 아이디 값을 생성하는 함수
  const makeNewId = () => {
    // 할 일을 다 지웠을 때 길이가 -가 되므로 0이됐을 때 id가 1로 고정되게함
    return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  };

  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기

  // todos 배열에 새로운 할 일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false,
  };

  // 2. 배열에 추가하기
  todos.push(newTodo);
  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);
}


// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoDate(dataId) {
  
  const index = todos.findIndex(todo => todo.id === dataId);
  todos.splice(index, 1);
}

// 체크 해주는 함수
function checked(target) {
  target.classList.add('checked');
}

// 체크 지워주는 함수
function unChecked(target) {
  target.classList.remove('checked');
}

// 할 일 완료 상태 데이터 처리
function toggleDone(dataId) {
  // 체크박스 체크 및 해제시 todos 배열에 있는 특정 객체의 done프로퍼티를
  // 반대값으로 변경해야함

  // 1. 클릭한 체크박스가 갖고 있던 id 파라미터로 받기
  const todo = todos.find(todo => todo.id === dataId);
  // 2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 찾아내기
  todo.done = !todo.done; // 체크할 때 마다 반대값을 넣어줌
  console.log(todo);
}

// 수정 모드 진입 처리
function toggleModifyMode($modifyBtn) {

  // 지금 수정모드 진입상태인지 수정을 해야하는 상태인지 확인
  const isModifying = $modifyBtn.classList.contains('lnr-undo');

  // 다른 항목이 이미 수정중이면 이 함수를 종료한다.
  if (isEnterEditMode && isModifying) return;
  isEnterEditMode = isModifying;


  // 1. 수정 모드 진입
  // 1-1. span.lnr-undo를 span.lnr-checkmark-circle로 클래스 교체
  // toggle을 2번 써서 하나는 추가, 하나는 제거 ! (교환)
  $modifyBtn.classList.toggle('lnr-undo');
  $modifyBtn.classList.toggle('lnr-checkmark-circle');


  const $label = $modifyBtn.parentElement.previousElementSibling;

  if (isModifying) {
    // 1-2. span.text를 input.modify-input으로 태그 교체
    // 부모태그.replaceChild(새롭게들어올태그, 없어질태그);
    const $textSpan = $label.lastElementChild;
  
    const $modifyInput = document.createElement('input');
    $modifyInput.classList.add('modify-input');
    $modifyInput.setAttribute('type', 'text');
    // span.text의 텍스트를 input.modify-input에 저장
    $modifyInput.value = $textSpan.textContent;

    $label.replaceChild($modifyInput, $textSpan);
  } else {
    // 2. 수정 완료 처리
    // input.modify-input에 있는 value를 읽어서 새로운 span.text를 생성하여 교체
    const $modifyInput = $label.querySelector('.modify-input');
    const $newTextSpan = document.createElement('span');
    $newTextSpan.classList.add('text');
    $newTextSpan.textContent = $modifyInput.value;

    $label.replaceChild($newTextSpan, $modifyInput);

    // 실제 배열 데이터 수정
    // 수정하려면 클릭한 버튼 근처 li에 있는 data-id가져와서 배열 탐색
    const dataId = +$label.parentElement.dataset.id;
    
    const foundTodo = todos.find(todo => todo.id === dataId);
    foundTodo.text = $newTextSpan.textContent;

    console.log(todos);
  }
}





//======= 함수 실행 영역 - 함수 호출, 이벤트 리스너 등록 ======//

// 추가 버튼 클릭 이벤트
document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault(); // form의 submit 중단
  insertTodoData();
});

// 삭제 버튼 클릭 이벤트
document.querySelector('.todo-list').addEventListener('click', e => {

  // 클릭한 버튼이 포함된 li를 탐색
  const $targetLi = e.target.closest('.todo-list-item');
  // 데이터 아이디 추출
  const dataId = +$targetLi.dataset.id;

  if (e.target.matches('.remove span')) {
    // 삭제 처리 진행

  
    // 화면에서 제거
    document.querySelector('.todo-list').removeChild($targetLi);
    // $targetLi.remove();
  
    // 배열에서 데이터 제거
    removeTodoDate(dataId);
  } else if (e.target.matches('.checkbox input[type=checkbox]')) { // 체크박스를 클릭하면
    // 체크 화면 렌더링 처리
    e.target.closest('.checkbox').classList.toggle('checked');
    // 체크 데이터 처리
    toggleDone(dataId);

  } else if (e.target.matches('.modify span')) {


    toggleModifyMode(e.target);





  //   // 1. 수정모드 진입
  //   // 1-1. span. lnr-undo -> lnr-checkmark-circle로 '클래스' 교체
  //   const target = e.target;
  //   target.classList.replace('lnr-undo','lnr-checkmark-circle');

  //   // 1-2. span.text를 input.modify-input으로 '태그' 교체
  //   // 내가 타겟한 것의 checkbox로 설정되어야 
  //   const $checkbox = target.parentElement.previousElementSibling;
  //   const $spanText = $checkbox.lastElementChild;
  //   const $inputModify = document.createElement('input');
  //   $inputModify.classList.add('modify-input');
  //   $inputModify.type = 'text';

  //   // // 1-2-1. 교체된 input태그 내부에는 기존 span의 텍스트가 그대로 들어가야함
  //   $inputModify.value = $spanText.textContent;

  //   $checkbox.replaceChild($inputModify, $spanText);

  //   // 2. 수정 완료 처리

  }

  
});



// document.querySelector('.todo-list').addEventListener('change', e => {
//   // 내가 타겟한 곳의 가장 가까운 checkbox 가져오기
//   const $label = e.target.closest(".checkbox");
//   if (!e.target.matches(".todo-list .todo-list-item input")) return;
//   // 가장 가까운 checkbox에 체크되지 않았다면?
//   if(!$label.classList.contains('checked')) {
//     checked($label);
//   } else {
//     unChecked($label);
//   }
// });

// document.querySelector('.todo-list').addEventListener('click', e => {
// });