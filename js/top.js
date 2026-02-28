////////////////////////////
/// 定義
////////////////////////////

/** 文字カウンターページ相対パス */
const urlMojiCounter = urlRoot + "items/moji-counter/";

/** ガチャガチャページ相対パス */
const urlGachaGacha = urlRoot + "items/gacha-gacha/";

/** 時間計算ページ相対パス */
const urlTimeCalculator = urlRoot + "items/time-calculator/";

////////////////////////////
/// 要素
////////////////////////////

/** 文字カウンターボタン */
const btnMojiCounter = document.getElementById("btn-moji-counter");

/** ガチャガチャボタン */
const btnGachaGacha = document.getElementById("btn-gacha-gacha");

/** 時間計算ボタン */
const btnTimeCalculator = document.getElementById("btn-time-calculator");

////////////////////////////
/// イベント
////////////////////////////

/** 文字カウンターボタンをクリック */
btnMojiCounter.addEventListener("click", btnMojiCounterClick);

/** ガチャガチャボタンをクリック */
btnGachaGacha.addEventListener("click", btnGachaGachaClick);

/** 時間計算ボタンをクリック */
btnTimeCalculator.addEventListener("click", btnTimeCalculatorClick);

////////////////////////////
/// 関数
////////////////////////////

/** 文字カウンターボタンをクリック */
function btnMojiCounterClick() {
  /** 文字カウンターページに遷移  */
  window.location.href = urlMojiCounter;
}

/** ガチャガチャボタンをクリック */
function btnGachaGachaClick() {
  /** ガチャガチャページに遷移  */
  window.location.href = urlGachaGacha;
}

/** 時間計算ボタンをクリック */
function btnTimeCalculatorClick() {
  /** 時間計算ページに遷移  */
  window.location.href = urlTimeCalculator;
}
