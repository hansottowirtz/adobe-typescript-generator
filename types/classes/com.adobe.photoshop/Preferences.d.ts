/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Preferences for Photoshop */
		class Preferences extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			public additionalPluginFolder: File;
			public appendExtension: Adobe.Photoshop.SaveBehavior;
			public askBeforeSavingLayeredTIFF: boolean;
			public autoUpdateOpenDocuments: boolean;
			public beepWhenDone: boolean;
			public colorChannelsInColor: boolean;
			public colorPicker: Adobe.Photoshop.ColorPicker;
			/** gutter of columns (in points) */
			public columnGutter: number;
			/** width of columns (in points) */
			public columnWidth: number;
			/**
			 * automatically make first snapshot when a new document is 
			 * created?
			 */
			public createFirstSnapshot: boolean;
			public dynamicColorSliders: boolean;
			/** options for edit log items */
			public editLogItems: Adobe.Photoshop.EditLogItemsType;
			public exportClipboard: boolean;
			/** show font previews in the type tool font menus */
			public fontPreviewSize: Adobe.Photoshop.FontPreviewType;
			public fullSizePreview: boolean;
			public gamutWarningOpacity: number;
			public gridSize: Adobe.Photoshop.GridSize;
			public gridStyle: Adobe.Photoshop.GridLineStyle;
			public gridSubDivisions: number;
			public guideStyle: Adobe.Photoshop.GuideLineStyle;
			public iconPreview: boolean;
			public imageCacheForHistograms: boolean;
			public imageCacheLevels: number;
			public imagePreviews: Adobe.Photoshop.SaveBehavior;
			public interpolation: Adobe.Photoshop.ResampleMethod;
			public keyboardZoomResizesWindows: boolean;
			public macOSThumbnail: boolean;
			/** maximize compatibility for Photoshop (PSD) files */
			public maximizeCompatibility: Adobe.Photoshop.QueryStateType;
			/**
			 * Maximum percentage of available RAM used by Photoshop ( 5 - 
			 * 100 )
			 */
			public maxRAMuse: number;
			/** allow non-linear history? */
			public nonLinearHistory: boolean;
			/** number of history states to remember (between 1 and 100) */
			public numberOfHistoryStates: number;
			public otherCursors: Adobe.Photoshop.OtherPaintingCursors;
			public paintingCursors: Adobe.Photoshop.PaintingCursors;
			public pixelDoubling: boolean;
			/** size of point/pica */
			public pointSize: Adobe.Photoshop.PointType;
			/** number of items in the recent file list (between 0 and 30) */
			public recentFileListLength: number;
			/**
			 * Note: this is the unit that the scripting system will use 
			 * when receiving and returning values
			 */
			public rulerUnits: Adobe.Photoshop.Units;
			/** options for saving the history items */
			public saveLogItems: Adobe.Photoshop.SaveLogItemsType;
			/** file to save the history log */
			public saveLogItemsFile: File;
			public savePaletteLocations: boolean;
			public showAsianTextOptions: boolean;
			public showEnglishFontNames: boolean;
			public showSliceNumber: boolean;
			public showToolTips: boolean;
			public smartQuotes: boolean;
			/** size of the small font used in panels and dialogs */
			public textFontSize: Adobe.Photoshop.FontSize;
			public typeUnits: Adobe.Photoshop.TypeUnits;
			public useAdditionalPluginFolder: boolean;
			public useDiffusionDither: boolean;
			/** Turn on and off the history logging */
			public useHistoryLog: boolean;
			/** should the file extension be lowercase */
			public useLowerCaseExtension: boolean;
			public useShiftKeyForToolSwitch: boolean;
			/** this option requires hardware support */
			public useVideoAlpha: boolean;
			public windowsThumbnail: boolean;
		}
	}
}