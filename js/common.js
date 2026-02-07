////////////////////////////
/// 定義
////////////////////////////

/** ルート相対パス  */
const urlRoot = "/";

////////////////////////////
/// 要素
////////////////////////////

/** ヘッダー */
const header = document.getElementById("header");

/** パンくずリスト：TOP */
const breadcrumbsTop = document.getElementById("breadcrumbs_top");

////////////////////////////
/// イベント
////////////////////////////

/** ヘッダーをクリック */
header.addEventListener("click", headerClick);

/** パンくずリスト：TOPをクリック */
breadcrumbsTop.addEventListener("click", breadcrumbsTopClick);

////////////////////////////
/// 関数
////////////////////////////

/** ヘッダーをクリック */
function headerClick() {
  /** トップページに遷移  */
  window.location.href = urlRoot;
}

/** パンくずリスト：TOPをクリック */
function breadcrumbsTopClick() {
  /** トップページに遷移  */
  window.location.href = urlRoot;
}
