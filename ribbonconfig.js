export var ribbonConfig = {
  ribbon: [
    {
      id: "contactUs",
      text: "自由なカスタマイズ",
      buttonGroups: [
        {
          label:
            "リボンコンテナでは、リボンの表示だけでなくタブの追加や非表示、ボタンの追加などを自由に行うことが可能です。",
          commandGroup: {}
        }
      ]
    },
    {
      id: "settings",
      text: "独自のボタン設定",
      buttonGroups: [
        {
          label: "ファイル保存のデモ",
          commandGroup: {
            children: [
              {
                //direction: "vertical",
                commands: ["cmdSaveData"]
              }
              // {
              //   direction: "vertical",
              //   commands: [
              //     //"spreadSettingScrollBar",
              //     "test",
              //     //"spreadSettingCalculation",
              //     //"spreadSettingTabStrip"
              //   ]
              // }
            ]
          }
        }
        // {
        //   label: "このタブでは独自に作成したボタンを表示する例を示します。",
        //   commandGroup: {}
        // }
      ]
    },
    {
      id: "home",
      text: "ホーム",
      buttonGroups: [
        {
          label: "元に戻す",
          thumbnailClass: "ribbon-thumbnail-undoredo",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                commands: ["undo", "redo"]
              }
            ]
          }
        },
        {
          label: "クリップボード",
          thumbnailClass: "ribbon-thumbnail-clipboard",
          commandGroup: {
            children: [
              {
                commands: ["paste"]
              },
              {
                direction: "vertical",
                commands: ["cut", "copy"]
              }
            ]
          }
        },
        {
          label: "フォント",
          indicator: "indicatorFonts",
          thumbnailClass: "ribbon-thumbnail-fonts",
          commandGroup: {
            direction: "vertical",
            children: [
              {
                commands: [
                  "fontFamily",
                  "fontSize",
                  "increaseFontsize",
                  "decreaseFontsize"
                ]
              },
              {
                commands: [
                  "fontWeight",
                  "fontItalic",
                  "fontUnderline",
                  "fontDoubleUnderline",
                  "separator",
                  "border",
                  "separator",
                  "backColor",
                  "foreColor"
                ]
              }
            ]
          }
        },
        {
          label: "配置",
          indicator: "indicatorAlignment",
          thumbnailClass: "ribbon-thumbnail-alignment",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                children: [
                  {
                    commands: [
                      "topAlign",
                      "middleAlign",
                      "bottomAlign",
                      "separator",
                      "orientationList"
                    ]
                  },
                  {
                    commands: [
                      "leftAlign",
                      "centerAlign",
                      "rightAlign",
                      "separator",
                      "decreaseIndent",
                      "increaseIndent"
                    ]
                  }
                ]
              },
              {
                type: "separator"
              },
              {
                direction: "vertical",
                children: [
                  {
                    commands: ["wrapText"]
                  },
                  {
                    commands: ["mergeCenter", "alignmentMergeList"]
                  }
                ]
              }
            ]
          }
        },
        {
          label: "数値",
          indicator: "indicatorNumbers",
          thumbnailClass: "ribbon-thumbnail-numbers",
          commandGroup: {
            direction: "vertical",
            children: [
              {
                commands: ["ribbonNumberFormat"]
              },
              {
                commands: [
                  "formatPercentage",
                  "formatComma",
                  "separator",
                  "increaseDecimal",
                  "decreaseDecimal"
                ]
              }
            ]
          }
        },
        {
          label: "セル型",
          thumbnailClass: "ribbon-thumbnail-celltype",
          commandGroup: {
            children: [
              {
                commands: ["cellType", "cellDropdowns"]
              }
            ]
          }
        }
        // {
        //   label: "スタイル",
        //   thumbnailClass: "ribbon-thumbnail-styles",
        //   commandGroup: {
        //     commands: [
        //       "conditionFormat",
        //       "formatTable2",
        //       "cellStyles",
        //       "cellStates"
        //     ]
        //   }
        // },
        // {
        //   label: "セル",
        //   thumbnailClass: "ribbon-thumbnail-cells",
        //   commandGroup: {
        //     commands: ["cellsInsert", "cellsDelete", "cellsFormat"]
        //   }
        // },
        // {
        //   label: "編集",
        //   thumbnailClass: "ribbon-thumbnail-editing",
        //   commandGroup: {
        //     children: [
        //       {
        //         direction: "vertical",
        //         children: [
        //           {
        //             commands: ["editingAutoSum", "editingAutoSumList"]
        //           },
        //           {
        //             commands: ["editingFillDown", "editingFillDownList"]
        //           },
        //           {
        //             commands: ["clear", "editingClearAllList"]
        //           }
        //         ]
        //       },
        //       {
        //         commands: ["editingSortFilter"]
        //       },
        //       {
        //         commands: ["editingFind"]
        //       }
        //     ]
        //   }
        // }
      ]
    },
    // {
    //   id: "insert",
    //   text: "挿入",
    //   buttonGroups: [
    //     {
    //       label: "テーブル",
    //       thumbnailClass: "ribbon-thumbnail-table",
    //       commandGroup: {
    //         commands: ["insertTable"]
    //       }
    //     },
    //     {
    //       label: "チャート",
    //       thumbnailClass: "ribbon-thumbnail-chart",
    //       commandGroup: {
    //         commands: ["insertChart"]
    //       }
    //     },
    //     {
    //       label: "図",
    //       thumbnailClass: "ribbon-button-picture",
    //       commandGroup: {
    //         commands: ["insertPicture"]
    //       }
    //     },
    //     {
    //       label: "シェイプ",
    //       thumbnailClass: "ribbon-thumbnail-shapes",
    //       commandGroup: {
    //         commands: ["insertShape"]
    //       }
    //     },
    //     {
    //       label: "バーコード",
    //       thumbnailClass: "ribbon-thumbnail-barcode",
    //       commandGroup: {
    //         commands: ["insertBarCode"]
    //       }
    //     },
    //     {
    //       label: "ハイパーリンク",
    //       thumbnailClass: "ribbon-thumbnail-barcode",
    //       commandGroup: {
    //         commands: ["insertHyperLink"]
    //       }
    //     },
    //     {
    //       label: "スパークライン",
    //       thumbnailClass: "ribbon-thumbnail-sparklines",
    //       commandGroup: {
    //         commands: [
    //           "sparklinesLineSparkline",
    //           "sparklinesColumnSparkline",
    //           "sparklinesWinLossSparkline",
    //           "sparklinesPieSparkline",
    //           "sparklinesAreaSparkline",
    //           "sparklinesScatterSparkline",
    //           "sparklinesSpreadsSparkline",
    //           "sparklinesStackedSparkline",
    //           "sparklinesBoxPlotSparkline",
    //           "sparklinesCascadeSparkline",
    //           "sparklinesParetoSparkline",
    //           "sparklinesBulletSparkline",
    //           "sparklinesHBarSparkline",
    //           "sparklinesVBarSparkline",
    //           "sparklinesVarianceSparkline",
    //           "sparklinesMonthSparkline",
    //           "sparklinesYearSparkline",
    //           "sparklinesRangeBlockSparkline"
    //         ]
    //       }
    //     }
    //   ]
    // },
    // {
    //   id: "formulas",
    //   text: "数式",
    //   buttonGroups: [
    //     {
    //       label: "関数",
    //       thumbnailClass: "ribbon-button-insertfunction",
    //       commandGroup: {
    //         commands: ["insertFunction"]
    //       }
    //     },
    //     {
    //       label: "関数ライブラリ",
    //       thumbnailClass: "ribbon-thumbnail-functions",
    //       commandGroup: {
    //         commands: [
    //           "formulaAutoSum",
    //           "formulaFinancial",
    //           "logicalFormula",
    //           "formulaText",
    //           "formulaDateTime",
    //           "formulaLookupReference",
    //           "formulaLookupReferenceAllowDynamicArray",
    //           "formulaMathTrig",
    //           "formulaMathTrigAllowDynamicArray",
    //           "moreFunctions"
    //         ]
    //       }
    //     },
    //     {
    //       label: "名前",
    //       thumbnailClass: "ribbon-thumbnail-names",
    //       commandGroup: {
    //         commands: ["nameManager"]
    //       }
    //     },
    //     {
    //       label: "数式の表示",
    //       thumbnailClass: "ribbon-thumbnail-functions",
    //       commandGroup: {
    //         commands: ["showFormulas"]
    //       }
    //     }
    //   ]
    // },
    // {
    //   id: "data",
    //   text: "データ",
    //   buttonGroups: [
    //     {
    //       label: "ソートとフィルター",
    //       thumbnailClass: "ribbon-thumbnail-sortAndFilter",
    //       commandGroup: {
    //         children: [
    //           {
    //             direction: "vertical",
    //             commands: ["sortAZData", "sortZAData"]
    //           },
    //           {
    //             commands: ["customSortData"]
    //           },
    //           {
    //             type: "separator"
    //           },
    //           {
    //             commands: ["setFilterData"]
    //           },
    //           {
    //             direction: "vertical",
    //             commands: ["clearFilterData", "reapplyFilterData"]
    //           }
    //         ]
    //       }
    //     },
    //     {
    //       label: "データツール",
    //       thumbnailClass: "ribbon-thumbnail-datatools",
    //       commandGroup: {
    //         children: [
    //           {
    //             commands: ["dataValidation", "dataValidationList"]
    //           }
    //         ]
    //       }
    //     },
    //     {
    //       label: "アウトライン",
    //       indicator: "indicatorOutline",
    //       thumbnailClass: "ribbon-thumbnail-outline",
    //       commandGroup: {
    //         children: [
    //           {
    //             commands: ["group", "ungroup", "subtotal"]
    //           },
    //           {
    //             type: "separator"
    //           },
    //           {
    //             direction: "vertical",
    //             commands: ["showDetail", "hideDetail"]
    //           }
    //         ]
    //       }
    //     },
    //     {
    //       label: "デザインモード",
    //       thumbnailClass: "ribbon-thumbnail-designmode",
    //       commandGroup: {
    //         children: [
    //           {
    //             commands: ["templateDesignMode"]
    //           },
    //           {
    //             type: "separator"
    //           },
    //           {
    //             direction: "vertical",
    //             commands: ["loadSchema", "saveSchema", "clearBindingPath"]
    //           },
    //           {
    //             type: "separator"
    //           },
    //           {
    //             commands: ["autoGenerateLabel"]
    //           }
    //         ]
    //       }
    //     }
    //   ]
    // },
    // {
    //   id: "view",
    //   text: "表示",
    //   buttonGroups: [
    //     {
    //       label: "表示",
    //       thumbnailClass: "ribbon-thumbnail-showhide",
    //       commandGroup: {
    //         children: [
    //           {
    //             direction: "vertical",
    //             commands: ["showHideRowHeader", "showHideColumnHeader"]
    //           },
    //           {
    //             type: "separator"
    //           },
    //           {
    //             direction: "vertical",
    //             commands: ["showHideVGridLine", "showHideHGridLine"]
    //           },
    //           {
    //             type: "separator"
    //           },
    //           {
    //             direction: "vertical",
    //             commands: ["showHideTabStrip", "showHideNewTab"]
    //           }
    //         ]
    //       }
    //     },
    //     {
    //       label: "ズーム",
    //       thumbnailClass: "ribbon-thumbnail-zoom",
    //       commandGroup: {
    //         commands: ["zoom", "zoomDefault", "zoomSelection"]
    //       }
    //     },
    //     {
    //       label: "ウインドウ",
    //       thumbnailClass: "ribbon-thumbnail-viewport",
    //       commandGroup: {
    //         commands: ["ViewportFreezePanes", "unfreezePanes"]
    //       }
    //     }
    //   ]
    // },

    {
      id: "tableDesign",
      text: "テーブル ツール",
      buttonGroups: [
        {
          label: "プロパティ",
          thumbnailClass: "ribbon-thumbnail-properties",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                commands: ["tableName", "resizeTable"]
              }
            ]
          }
        },
        {
          label: "ツール",
          thumbnailClass: "ribbon-thumbnail-tools",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                commands: ["convertToRange", "tableAllowAutoExpand"]
              },
              {
                commands: ["insertSlicer"]
              }
            ]
          }
        },
        {
          label: "テーブル スタイルのオプション",
          thumbnailClass: "ribbon-thumbnail-tablestyleoptions",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                commands: [
                  "tableStyleHeaderRow",
                  "tableStyleTotalRow",
                  "tableStyleBandedRows"
                ]
              },
              {
                direction: "vertical",
                commands: [
                  "tableStyleFirstColumn",
                  "tableStyleLastColumn",
                  "tableStyleBandedColumns"
                ]
              },
              {
                direction: "vertical",
                commands: [
                  "tableStyleResizeHandler",
                  "tableStyleFilterButton",
                  "tableStyleTotalRowList"
                ]
              }
            ]
          }
        },
        {
          label: "テーブル スタイル",
          thumbnailClass: "ribbon-thumbnail-tablestyles",
          commandGroup: {
            commands: ["formatTable"]
          }
        }
      ],
      visibleWhen: "TableSelected"
    },
    {
      id: "chartDesign",
      text: "チャート ツール",
      buttonGroups: [
        {
          label: "チャートのレイアウト",
          thumbnailClass: "ribbon-thumbnail-chartlayouts",
          commandGroup: {
            commands: ["addChartElement", "quickLayout"]
          }
        },
        {
          label: "チャートスタイル",
          thumbnailClass: "ribbon-thumbnail-chartstyles",
          commandGroup: {
            commands: ["changeColors", "chartStyle"]
          }
        },
        {
          label: "データ",
          thumbnailClass: "ribbon-thumbnail-chartdata",
          commandGroup: {
            commands: ["switchRowColumn", "selectData"]
          }
        },
        {
          label: "種類",
          thumbnailClass: "ribbon-thumbnail-charttype",
          commandGroup: {
            commands: ["changeChartType"]
          }
        },
        {
          label: "場所",
          thumbnailClass: "ribbon-thumbnail-chartlocation",
          commandGroup: {
            commands: ["moveChart"]
          }
        },
        {
          label: "アクセシビリティ",
          thumbnailClass: "ribbon-thumbnail-chart-alt-text",
          commandGroup: {
            commands: ["chartAltText"]
          }
        }
      ],
      visibleWhen: "singleChartSelected"
    },
    {
      id: "pictureDesign",
      text: "デザイン",
      buttonGroups: [
        {
          label: "アクセシビリティ",
          thumbnailClass: "ribbon-thumbnail-chart-alt-text",
          commandGroup: {
            commands: ["pictureAltText"]
          }
        }
      ],
      visibleWhen:
        "pictureSelected && !IsProtected || pictureSelected && AllowEditObject"
    },
    {
      id: "shapeDesign",
      text: "デザイン",
      buttonGroups: [
        {
          label: "シェイプの挿入",
          thumbnailClass: "ribbon-thumbnail-shapeinsertshape",
          commandGroup: {
            commands: ["insertShapeList", "changeShape"]
          }
        },
        {
          label: "シェイプのスタイル",
          thumbnailClass: "ribbon-thumbnail-shapeStyles",
          commandGroup: {
            commands: ["changeShapeStyle"]
          }
        },
        {
          label: "アクセシビリティ",
          thumbnailClass: "ribbon-thumbnail-chart-alt-text",
          commandGroup: {
            commands: ["shapeAltText"]
          }
        },
        {
          label: "回転",
          thumbnailClass: "ribbon-thumbnail-shaperotate",
          commandGroup: {
            commands: ["shapeRotate"]
          }
        },
        {
          label: "グループ",
          thumbnailClass: "ribbon-thumbnail-shapegroup",
          commandGroup: {
            commands: ["shapeCommandGroup"]
          }
        },
        {
          class: "gc-ribbon-panelgroup-shapeSize",
          label: "サイズ",
          thumbnailClass: "ribbon-thumbnail-shapesize",
          commandGroup: {
            direction: "vertical",
            commands: ["shapeSizeHeight", "shapeSizeWidth"]
          }
        }
      ],
      visibleWhen:
        "ShapeSelected && !IsProtected || ShapeSelected && AllowEditObject"
    },
    {
      id: "slicerDesign",
      text: "オプション",
      buttonGroups: [
        {
          class: "slicer_panel",
          label: "スライサー",
          thumbnailClass: "ribbon-thumbnail-properties",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                type: "group",
                commands: ["captionName", "slicerSetting"]
              }
            ]
          }
        },
        {
          label: "スライサースタイル",
          thumbnailClass: "ribbon-thumbnail-tablestyles",
          commandGroup: {
            commands: ["slicerFormat"]
          }
        },
        {
          class: "slicer_buttons",
          label: "ボタン",
          thumbnailClass: "ribbon-thumbnail-properties",
          commandGroup: {
            direction: "vertical",
            commands: ["columnCount", "itemHeight", "itemWidth"]
          }
        },
        {
          class: "slicer_size",
          label: "サイズ",
          thumbnailClass: "ribbon-thumbnail-sliceSize",
          commandGroup: {
            direction: "vertical",
            commands: ["slicerHeight", "slicerWidth"]
          }
        }
      ],
      visibleWhen:
        "SlicerSelected && !IsProtected || SlicerSelected && AllowEditObject"
    },
    {
      id: "formulaSparkLineDesign",
      text: "デザイン",
      buttonGroups: [
        {
          label: "引数",
          thumbnailClass: "ribbon-thumbnail-argument",
          commandGroup: {
            commands: ["formulaSparklineSetting"]
          }
        }
      ],
      visibleWhen: "FormulaSparklineSelected"
    },
    {
      id: "sparkLineDesign",
      text: "スパークライン",
      buttonGroups: [
        {
          label: "種類",
          thumbnailClass: "ribbon-thumbnai-sparkline-type",
          commandGroup: {
            commands: ["lineSparkline", "columnSparkline", "winLossSparkline"]
          }
        },
        {
          label: "表示",
          thumbnailClass: "ribbon-thumbnail-sparkline-show",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                commands: ["showHighpoint", "showLowPoint", "showNegativePoint"]
              },
              {
                direction: "vertical",
                commands: ["showFirstPoint", "showLastPoint", "showMarkers"]
              }
            ]
          }
        },
        {
          label: "スタイル",
          thumbnailClass: "ribbon-thumbnail-sparkline-style",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                children: [
                  {
                    direction: "vertical",
                    commands: ["sparklineColor", "sparklineMarkerColor"]
                  },
                  {
                    commands: ["sparklineWeight"]
                  }
                ]
              }
            ]
          }
        },
        {
          label: "グループ化",
          thumbnailClass: "ribbon-thumbnail-sparkline-groups",
          commandGroup: {
            children: [
              {
                direction: "vertical",
                children: [
                  {
                    direction: "vertical",
                    commands: ["sparklineGroup", "sparklineUnGroup"]
                  },
                  {
                    commands: ["clearSparkline", "clearSparklineDropdown"]
                  }
                ]
              }
            ]
          }
        }
      ],
      visibleWhen: "SparklineSelected"
    },
    {
      id: "barcodeDesignId",
      text: "チャート ツール",
      buttonGroups: [
        {
          label: "引数",
          thumbnailClass: "ribbon-thumbnail-argument",
          commandGroup: {
            commands: ["barCodeSetting"]
          }
        }
      ],
      visibleWhen: "BarCodeSelected"
    }
  ],
  contextMenu: [
    "customContextMenu",
    "contextMenuCut",
    "contextMenuCopy",
    "contextMenuPaste",
    "designerPasteAll",
    "pasteFormula",
    "designerPasteValues",
    "designerPasteFormatting",
    "pasteValuesFormatting",
    "pasteFormulaFormatting",
    "floatingObjectCut",
    "floatingObjectCopy",
    "contextMenuCutShapes",
    "contextMenuCopyShapes",
    "PasteShapes",
    "separator",
    "resetChartColor",
    "changeChartTypeDialog",
    "selectChartDataDialog",
    "moveChartDialog",
    "formatChart",
    "separator",
    "insertDialog",
    "deleteDialog",
    "gc.spread.contextMenu.insertColumns",
    "gc.spread.contextMenu.deleteColumns",
    "gc.spread.contextMenu.insertRows",
    "gc.spread.contextMenu.deleteRows",
    "tableInsert",
    "tableDelete",
    "gc.spread.contextMenu.clearContents",
    "separator",
    "gc.spread.contextMenu.rowHeaderinsertCopiedCells",
    "gc.spread.contextMenu.rowHeaderinsertCutCells",
    "gc.spread.contextMenu.colHeaderinsertCopiedCells",
    "gc.spread.contextMenu.colHeaderinsertCutCells",
    "insertCopiedCells",
    "insertCutCells",
    "separator",
    "gc.spread.contextMenu.insertSheet",
    "gc.spread.contextMenu.deleteSheet",
    "unprotectSheet",
    "protectSheet",
    "separator",
    "gc.spread.contextMenu.filter",
    "sort",
    "table",
    "separator",
    "gc.spread.contextMenu.insertComment",
    "gc.spread.contextMenu.editComment",
    "gc.spread.contextMenu.deleteComment",
    "gc.spread.contextMenu.toggleComment",
    "formatComment",
    "separator",
    "formatCells",
    "editCellType",
    "editCellDropdowns",
    "link",
    "editHyperlink",
    "openHyperlink",
    "removeHyperlink",
    "removeHyperlinks",
    "separator",
    "richText",
    "defineName",
    "cellTag",
    "rowTag",
    "colTag",
    "columnWidth",
    "rowHeight",
    "gc.spread.contextMenu.hideColumns",
    "gc.spread.contextMenu.hideRows",
    "gc.spread.contextMenu.unhideColumns",
    "gc.spread.contextMenu.unhideRows",
    "columnHeaders",
    "contextMenuOutlineColumn",
    "rowHeaders",
    "separator",
    "showTabColor",
    "gc.spread.contextMenu.hideSheet",
    "gc.spread.contextMenu.unhideSheet",
    "sheetTag",
    "separator",
    "gc.spread.contextMenu.cut",
    "gc.spread.contextMenu.copy",
    "slicerPasteOptions",
    "gc.spread.contextMenu.pasteAll",
    "gc.spread.contextMenu.slicerSortAscend",
    "gc.spread.contextMenu.slicerSortDescend",
    "gc.spread.contextMenu.removeSlicer",
    "slicerProperty",
    "contextMenuSlicerSetting",
    "separator",
    "groupShape",
    "formatShapes",
    "designerMoreFunctions"
  ],
  fileMenu: "fileMenuButton",
  sidePanels: [
    {
      position: "top",
      allowResize: true,
      command: "formulaBarPanel",
      uiTemplate: "formulaBarTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "fieldListTreePanel",
      uiTemplate: "filedListTemplate"
    },
    {
      position: "bottom",
      command: "statusBarPanel",
      uiTemplate: "statusBarPanelTemplate"
    },
    {
      position: "full",
      command: "fileMenuPanel",
      uiTemplate: "fileMenuPanelTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "shapePanel",
      uiTemplate: "shapeTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "columnChartPanel",
      uiTemplate: "columnChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "lineChartPanel",
      uiTemplate: "lineChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "pieChartPanel",
      uiTemplate: "pieChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "barChartPanel",
      uiTemplate: "barChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "areaChartPanel",
      uiTemplate: "areaChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "scatterChartPanel",
      uiTemplate: "scatterChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "stockChartPanel",
      uiTemplate: "stockChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "radarChartPanel",
      uiTemplate: "radarChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "sunburstChartPanel",
      uiTemplate: "sunburstChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "treeMapChartPanel",
      uiTemplate: "treeMapChartPanelTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "funnelChartPanel",
      uiTemplate: "funnelChartPanelTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "comboChartPanel",
      uiTemplate: "comboChartTemplate"
    },
    {
      position: "right",
      width: "315px",
      command: "chartAltTextPanel",
      uiTemplate: "altTextTemplate",
      showCloseButton: true
    },
    {
      position: "right",
      width: "315px",
      command: "pictureAltTextPanel",
      uiTemplate: "altTextTemplate",
      showCloseButton: true
    },
    {
      position: "right",
      width: "315px",
      command: "shapeAltTextPanel",
      uiTemplate: "altTextTemplate",
      showCloseButton: true
    }
  ]
};
