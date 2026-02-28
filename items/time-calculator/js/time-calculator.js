// ////////////////////////////
// /// 定義
// ////////////////////////////

// ////////////////////////////
// /// 要素
// ////////////////////////////

// /** テキストエリア */
// const textarea = document.getElementById("text");

// /** 文字数表示 */
// const count = document.getElementById("count");

// ////////////////////////////
// /// イベント
// ////////////////////////////

// /** テキストエリアに入力 */
// textarea.addEventListener("input", textareaInput);

// ////////////////////////////
// /// 関数
// ////////////////////////////

// /** テキストエリアに入力 */
// function textareaInput() {
//   /** テキストエリアの文字数を、文字数表示に反映 */
//   count.textContent = textarea.value.length;
// }

function calculateTime() {
  const baseTime = document.getElementById("baseTime").value;
  const operation = document.getElementById("operation").value;
  const addHours = parseInt(document.getElementById("addHours").value) || 0;
  const addMinutes = parseInt(document.getElementById("addMinutes").value) || 0;

  if (!baseTime) {
    alert("元の時間を入力してください");
    return;
  }

  const [hours, minutes] = baseTime.split(":").map(Number);

  let totalMinutes = hours * 60 + minutes;
  const changeMinutes = addHours * 60 + addMinutes;

  if (operation === "add") {
    totalMinutes += changeMinutes;
  } else {
    totalMinutes -= changeMinutes;
  }

  // 24時間対応
  totalMinutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);

  const resultHours = Math.floor(totalMinutes / 60);
  const resultMinutes = totalMinutes % 60;

  document.getElementById("result").textContent =
    `結果：${String(resultHours).padStart(2, "0")}:${String(resultMinutes).padStart(2, "0")}`;
}
