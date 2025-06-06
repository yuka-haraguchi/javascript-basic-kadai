// h2要素とボタンの要素を取得（text id）
const textElement = document.getElementById('text');
const button = document.getElementById('btn');

// ボタンをクリックしたときの処理
button.addEventListener('click',() => {
  textElement.textContent = 'クリックしました！';
});
