// 今日の日付を取得
const today = new Date();
// 年を取得
const year = today.getFullYear();
// 月を取得
const month = today.getMonth() + 1;
// 日を取得
const date = today.getDate();

// 2024年10月12日みたいな形式で出力
console.log(year + '年' + month + '月' + date + '日' );