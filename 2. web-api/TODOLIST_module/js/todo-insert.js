import isValidate from './validate.js'
import { todos } from './global_var.js'


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

// renderNewTodoElement는 insertTodoData함수 안에 포함되므로 같이 딸려옴
export default insertTodoData;