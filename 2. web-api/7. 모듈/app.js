// app.js나 main.js 파일 하나 만들어놓고 내 파일 or 팀원들 것 import해서 협업

// 변수가 겹칠 경우 as로 기존 변수를 새로운 변수로 변경해서 불러올 수 있음
import { $btn, $btn as $button } from "./getDom.js";
import { clickHandler } from "./event.js";
import hahahaha  from "./pow.js"; // pow 이름을 hahahaha 변경


const $btn = '123'; // 내가 만든 변수
// 백틱으로는 태그 못가져옴
console.log(`내가 만든 btn: ${$btn}`);
console.log(`불러온 btn:`, $button);

// hahahaha는 객체이므로 객체형태로 출력
console.log(hahahaha.pow(5));
console.log(hahahaha.add(3,6));

// // event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);