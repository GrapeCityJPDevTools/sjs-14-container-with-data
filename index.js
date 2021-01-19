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

// コンポーネント初期化
GC.Spread.Common.CultureManager.culture("ja-jp");


/****************************************
 *  処理内でグローバルに利用する変数の定義
 ****************************************/

// ページ内のDOM要素
var elemRibbon = document.getElementById("ribbonHost");

// リボンコンテナ
var ribbonContainer = new GC.Spread.Sheets.Designer.Designer(elemRibbon);
var ribbonContainerSpread = ribbonContainer.getWorkbook();
var ribbonContainerSheet = ribbonContainerSpread.getActiveSheet();
