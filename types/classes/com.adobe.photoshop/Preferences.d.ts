/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Preferences for Photoshop */
		class Preferences extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * @type {File}
			 */
			public additionalPluginFolder: File;
			/**
			 * @type {Adobe.Photoshop.SaveBehavior}
			 */
			public appendExtension: Adobe.Photoshop.SaveBehavior;
			/**
			 * @type {boolean}
			 */
			public askBeforeSavingLayeredTIFF: boolean;
			/**
			 * @type {boolean}
			 */
			public autoUpdateOpenDocuments: boolean;
			/**
			 * @type {boolean}
			 */
			public beepWhenDone: boolean;
			/**
			 * @type {boolean}
			 */
			public colorChannelsInColor: boolean;
			/**
			 * @type {Adobe.Photoshop.ColorPicker}
			 */
			public colorPicker: Adobe.Photoshop.ColorPicker;
			/**
			 * gutter of columns (in points)
			 * @type {number}
			 */
			public columnGutter: number;
			/**
			 * width of columns (in points)
			 * @type {number}
			 */
			public columnWidth: number;
			/**
			 * automatically make first snapshot when a new document is 
			 * created?
			 * @type {boolean}
			 */
			public createFirstSnapshot: boolean;
			/**
			 * @type {boolean}
			 */
			public dynamicColorSliders: boolean;
			/**
			 * options for edit log items
			 * @type {Adobe.Photoshop.EditLogItemsType}
			 */
			public editLogItems: Adobe.Photoshop.EditLogItemsType;
			/**
			 * @type {boolean}
			 */
			public exportClipboard: boolean;
			/**
			 * show font previews in the type tool font menus
			 * @type {Adobe.Photoshop.FontPreviewType}
			 */
			public fontPreviewSize: Adobe.Photoshop.FontPreviewType;
			/**
			 * @type {boolean}
			 */
			public fullSizePreview: boolean;
			/**
			 * @type {number}
			 */
			public gamutWarningOpacity: number;
			/**
			 * @type {Adobe.Photoshop.GridSize}
			 */
			public gridSize: Adobe.Photoshop.GridSize;
			/**
			 * @type {Adobe.Photoshop.GridLineStyle}
			 */
			public gridStyle: Adobe.Photoshop.GridLineStyle;
			/**
			 * @type {number}
			 */
			public gridSubDivisions: number;
			/**
			 * @type {Adobe.Photoshop.GuideLineStyle}
			 */
			public guideStyle: Adobe.Photoshop.GuideLineStyle;
			/**
			 * @type {boolean}
			 */
			public iconPreview: boolean;
			/**
			 * @type {boolean}
			 */
			public imageCacheForHistograms: boolean;
			/**
			 * @type {number}
			 */
			public imageCacheLevels: number;
			/**
			 * @type {Adobe.Photoshop.SaveBehavior}
			 */
			public imagePreviews: Adobe.Photoshop.SaveBehavior;
			/**
			 * @type {Adobe.Photoshop.ResampleMethod}
			 */
			public interpolation: Adobe.Photoshop.ResampleMethod;
			/**
			 * @type {boolean}
			 */
			public keyboardZoomResizesWindows: boolean;
			/**
			 * @type {boolean}
			 */
			public macOSThumbnail: boolean;
			/**
			 * maximize compatibility for Photoshop (PSD) files
			 * @type {Adobe.Photoshop.QueryStateType}
			 */
			public maximizeCompatibility: Adobe.Photoshop.QueryStateType;
			/**
			 * Maximum percentage of available RAM used by Photoshop ( 5 - 
			 * 100 )
			 * @type {number}
			 */
			public maxRAMuse: number;
			/**
			 * allow non-linear history?
			 * @type {boolean}
			 */
			public nonLinearHistory: boolean;
			/**
			 * number of history states to remember (between 1 and 100)
			 * @type {number}
			 */
			public numberOfHistoryStates: number;
			/**
			 * @type {Adobe.Photoshop.OtherPaintingCursors}
			 */
			public otherCursors: Adobe.Photoshop.OtherPaintingCursors;
			/**
			 * @type {Adobe.Photoshop.PaintingCursors}
			 */
			public paintingCursors: Adobe.Photoshop.PaintingCursors;
			/**
			 * @type {boolean}
			 */
			public pixelDoubling: boolean;
			/**
			 * size of point/pica
			 * @type {Adobe.Photoshop.PointType}
			 */
			public pointSize: Adobe.Photoshop.PointType;
			/**
			 * number of items in the recent file list (between 0 and 30)
			 * @type {number}
			 */
			public recentFileListLength: number;
			/**
			 * Note: this is the unit that the scripting system will use 
			 * when receiving and returning values
			 * @type {Adobe.Photoshop.Units}
			 */
			public rulerUnits: Adobe.Photoshop.Units;
			/**
			 * options for saving the history items
			 * @type {Adobe.Photoshop.SaveLogItemsType}
			 */
			public saveLogItems: Adobe.Photoshop.SaveLogItemsType;
			/**
			 * file to save the history log
			 * @type {File}
			 */
			public saveLogItemsFile: File;
			/**
			 * @type {boolean}
			 */
			public savePaletteLocations: boolean;
			/**
			 * @type {boolean}
			 */
			public showAsianTextOptions: boolean;
			/**
			 * @type {boolean}
			 */
			public showEnglishFontNames: boolean;
			/**
			 * @type {boolean}
			 */
			public showSliceNumber: boolean;
			/**
			 * @type {boolean}
			 */
			public showToolTips: boolean;
			/**
			 * @type {boolean}
			 */
			public smartQuotes: boolean;
			/**
			 * size of the small font used in panels and dialogs
			 * @type {Adobe.Photoshop.FontSize}
			 */
			public textFontSize: Adobe.Photoshop.FontSize;
			/**
			 * @type {Adobe.Photoshop.TypeUnits}
			 */
			public typeUnits: Adobe.Photoshop.TypeUnits;
			/**
			 * @type {boolean}
			 */
			public useAdditionalPluginFolder: boolean;
			/**
			 * @type {boolean}
			 */
			public useDiffusionDither: boolean;
			/**
			 * Turn on and off the history logging
			 * @type {boolean}
			 */
			public useHistoryLog: boolean;
			/**
			 * should the file extension be lowercase
			 * @type {boolean}
			 */
			public useLowerCaseExtension: boolean;
			/**
			 * @type {boolean}
			 */
			public useShiftKeyForToolSwitch: boolean;
			/**
			 * this option requires hardware support
			 * @type {boolean}
			 */
			public useVideoAlpha: boolean;
			/**
			 * @type {boolean}
			 */
			public windowsThumbnail: boolean;
		}
	}
}