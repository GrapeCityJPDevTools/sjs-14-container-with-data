/****************************************
 *  インポート
 ****************************************/

// スタイル
import "./style.css";
// ライセンス
import "./license.js";
// SpreadJS関連モジュール
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets-designer-resources-ja";
import * as GC from "@grapecity/spread-sheets-designer";
// リボンコンテナのカスタム情報
import { ribbonConfig } from "./ribbonconfig.js";
// データ
import { data } from "./data.js";

// コンポーネント初期化
GC.Spread.Common.CultureManager.culture("ja-jp");

/****************************************
 *  リボンコンテナのカスタム処理
 ****************************************/
// コマンドの作成
ribbonConfig.commandMap = {
  cmdSaveData: {
    title: "Save data to server",
    text: "保存",
    iconClass: "cmdSaveData",
    bigButton: "true",
    commandName: "cmdSaveData",
    execute: async (context, propertyName, fontItalicChecked) => {
      // customize operator
      alert("データの保存に成功しました");
    }
  },
  customContextMenu: {
    text: "カスタムメニュー",
    commandName: "customContextmenu",
    execute: async (context, propertyName, fontItalicChecked) => {
      // customize operator
      alert("カスタムコンテキストメニューが実行されました");
    }
  }
};

/****************************************
 *  処理内でグローバルに利用する変数の定義
 ****************************************/

// ページ内のDOM要素
var elemRibbon = document.getElementById("ribbonHost");
var elemSpread = document.getElementById("spreadHost");
var elemOnButton = document.getElementById("ribboncontaineron");
var elemOffButton = document.getElementById("ribboncontaineroff");
var elemCustomButton = document.getElementById("ribboncontainercustom");

// 表示モード（1:SpreadJSを単体表示 2:リボンコンテナを表示 3:カスタムしたリボンコンテナを表示）
var ribbonFlag = 1;

// SpreadJS
var spread = new GC.Spread.Sheets.Workbook(elemSpread);

// リボンコンテナ
var ribbonContainer = new GC.Spread.Sheets.Designer.Designer(elemRibbon);
var ribbonContainerSpread = ribbonContainer.getWorkbook();
var ribbonContainerSheet = ribbonContainerSpread.getActiveSheet();

// リボンコンテナ設定の規定値
var defaultConfig = GC.Spread.Sheets.Designer.DefaultConfig;

// リボンコンテナ設定の規定値
var defaultConfig = GC.Spread.Sheets.Designer.DefaultConfig;

/****************************************
 *  DOM要素の表示処理
 *
 *  @param  {Object} elem
 *  表示するDOM情報
 *
 *  @return  {Void}
 ****************************************/
function showElement(elem) {
  elem.style.visibility = "visible";
  elem.style.display = "";
}
/****************************************
 *  DOM要素の非表示処理
 *
 *  @param  {Object} elem
 *  非表示にするDOM情報
 *
 *  @return  {Void}
 ****************************************/
function hideElement(elem) {
  elem.style.display = "none";
  elem.style.visibility = "hidden";
}
/****************************************
 *  リボンコンテナの表示処理
 *
 *  @return  {Void}
 ****************************************/
function showRibbonContainer() {
  showElement(elemRibbon);
  hideElement(elemSpread);
}
/****************************************
 *  SpreadJS単体の表示処理
 *
 *  @return  {Void}
 ****************************************/
function showSpread() {
  showElement(elemSpread);
  hideElement(elemRibbon);
}
/****************************************
 *  画面の表示処理
 *
 *  @param  {Object} flag
 *  表示モードフラグ
 *
 *  @return  {Void}
 ****************************************/
function display(flag) {
  if (flag == 1) {
    ribbonContainerSheet.reset();

    ribbonContainerSpread.fromJSON(data);
    ribbonContainerSpread.options.allowUserZoom = false;
    var sheet = ribbonContainerSpread.getActiveSheet();
    sheet.zoom(0.9);

    // リボンコンテナの表示
    showRibbonContainer();
    ribbonContainer.setConfig(defaultConfig);
  } else if (flag == 2) {
    spread.fromJSON(data);
    var sheet = spread.getActiveSheet();
    sheet.zoom(0.9);

    // SpreadJS単体の表示
    showSpread();
  } else {
    ribbonContainerSheet.setValue(
      0,
      0,
      "リボンとコンテキストメニューのカスタムが有効になっています。"
    );
    ribbonContainerSheet.setValue(1, 0, "コンテキストメニューを開き、");
    ribbonContainerSheet.setValue(
      2,
      0,
      "独自に実装したメニュー項目「カスタムメニュー」の動作をご確認ください。"
    );
    ribbonContainerSheet.setActiveCell(0, 0);

    // カスタムしたリボンコンテナの表示
    ribbonContainer.setConfig(ribbonConfig);
    showRibbonContainer();
  }
}

display(1);

/****************************************
 *  ボタン押下時の処理
 ****************************************/

//「リボンコンテナを有効にする」ボタン押下時の処理
elemOnButton.addEventListener("click", function() {
  ribbonFlag = 1;
  display(ribbonFlag);
});

//「リボンコンテナを無効にする」ボタン押下時の処理
elemOffButton.addEventListener("click", function() {
  ribbonFlag = 2;
  display(ribbonFlag);
});

//「コンテナのカスタマイズ例を見る」ボタン押下時の処理
elemCustomButton.addEventListener("click", function() {
  ribbonFlag = 3;
  display(ribbonFlag);
});
