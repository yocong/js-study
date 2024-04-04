import { todos } from "./global_var.js";

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

export default toggleDone;