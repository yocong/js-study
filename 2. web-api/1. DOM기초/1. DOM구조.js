/*

<html>
<head>
</head>
<body>
  <div class='wrap'>
    <ul id='list'>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</body>
</html>

*/

let html, head, body, div, ul, li;

html = {
  tagNmae: 'html',
  children: [head, body]
};

head = {
  tagNmae: 'head',
  children: null,
  parentNode: html,
  nextSibling: body
};
body = {
  tagNmae: 'body',
  children: null,
  parentNode: html,
  nextSibling: null, // 다음 형제
  preSibling: head // 이전 형제
}
div = {
  tagNmae: 'body',
  children: [ul],
  parentNode: body,
  nextSibling: null,
  preSibling: null,
  className: 'wrap clearfix',
  classList: ['wrap', 'clearfix'],
  attributes: {
    'class' : 'wrap clearfix',
    'title' : 'abc'
  }
}

console.log(div.parentNode);