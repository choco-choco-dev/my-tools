////////////////////////////
/// 定義
////////////////////////////

////////////////////////////
/// 要素
////////////////////////////

/** テキストエリア */
const textarea = document.getElementById("text");

/** 文字数表示 */
const count = document.getElementById("count");

////////////////////////////
/// イベント
////////////////////////////

/** テキストエリアに入力 */
textarea.addEventListener("input", textareaInput);

////////////////////////////
/// 関数
////////////////////////////

/** テキストエリアに入力 */
function textareaInput() {
  /** テキストエリアの文字数を、文字数表示に反映 */
  count.textContent = textarea.value.length;
}
