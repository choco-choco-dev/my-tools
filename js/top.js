////////////////////////////
/// 定義
////////////////////////////

/** 文字カウンターページ相対パス */
const urlMojiCounter = urlRoot + "items/moji-counter/";

/** ガチャガチャページ相対パス */
const urlGachaGacha = urlRoot + "items/gacha-gacha/";

////////////////////////////
/// 要素
////////////////////////////

/** 文字カウンターボタン */
const btnMojiCounter = document.getElementById("btn-moji-counter");

/** ガチャガチャボタン */
const btnGachaGacha = document.getElementById("btn-gacha-gacha");

////////////////////////////
/// イベント
////////////////////////////

/** 文字カウンターボタンをクリック */
btnMojiCounter.addEventListener("click", btnMojiCounterClick);

/** ガチャガチャボタンをクリック */
btnGachaGacha.addEventListener("click", btnGachaGachaClick);

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
  /** 文字カウンターページに遷移  */
  window.location.href = urlGachaGacha;
}
