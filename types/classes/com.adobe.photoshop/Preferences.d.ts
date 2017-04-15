/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Preferences extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * The path to the additional plug-in folder. Valid only when 
			 * 'use additional plugin folder' = true.
			 */
			public additionalPluginFolder: File;
			/** Save files with extensions on Windows. */
			public appendExtension: Adobe.Photoshop.SaveBehavior;
			/**
			 * If true, asks the user to verify layer preservation options 
			 * when saving a file in TIFF format.
			 */
			public askBeforeSavingLayeredTIFF: boolean;
			/** If true, automatically updates open documents. */
			public autoUpdateOpenDocuments: boolean;
			/** If true, alerts the user when a process finishes. */
			public beepWhenDone: boolean;
			/**
			 * If true, displays component channels in the Channels palette 
			 * in color.
			 */
			public colorChannelsInColor: boolean;
			/** The color picker to use. */
			public colorPicker: Adobe.Photoshop.ColorPicker;
			/** The gutter of columns (in points) */
			public columnGutter: number;
			/** The width of columns (in points) */
			public columnWidth: number;
			/**
			 * If true, automatically makes the first snapshot when a new 
			 * document is created.
			 */
			public createFirstSnapshot: boolean;
			/** If true, dynamic color sliders appear in the Color palette. */
			public dynamicColorSliders: boolean;
			/** Options for edit log items. */
			public editLogItems: Adobe.Photoshop.EditLogItemsType;
			/**
			 * If true, retains Adobe Photoshop contents on the clipboard 
			 * after you exit the application.
			 */
			public exportClipboard: boolean;
			/**
			 * Options for showing font previews in the type tool font 
			 * menus.
			 */
			public fontPreviewSize: Adobe.Photoshop.FontPreviewType;
			/** If true, shows the image preview as a full size image. */
			public fullSizePreview: boolean;
			/**
			 * The opacity (as a percentage) of the warning color for 
			 * out-of-gamut colors. Range: 0 to 100.
			 */
			public gamutWarningOpacity: number;
			/** The size of grid squares. */
			public gridSize: Adobe.Photoshop.GridSize;
			/** The formatting style for non-printing grid lines. */
			public gridStyle: Adobe.Photoshop.GridLineStyle;
			/** The value by which to subdivide the grid. */
			public gridSubDivisions: number;
			/** The formatting style for non-printing guide lines. */
			public guideStyle: Adobe.Photoshop.GuideLineStyle;
			/** If true, shows the image preview as a thumbnail. */
			public iconPreview: boolean;
			/**
			 * If true, shows the current image cache used to create the 
			 * histogram.
			 */
			public imageCacheForHistograms: boolean;
			/** The number of images to hold in the cache. Range: 1 to 8. */
			public imageCacheLevels: number;
			/** The behavior mode to use when saving files. */
			public imagePreviews: Adobe.Photoshop.SaveBehavior;
			/**
			 * The method to use to assign color values to any new pixels 
			 * created when an image is resampled or resized.
			 */
			public interpolation: Adobe.Photoshop.ResampleMethod;
			/**
			 * If true, automatically resizes the window when zooming in or 
			 * out using keyboard shortcuts.
			 */
			public keyboardZoomResizesWindows: boolean;
			/**
			 * If true, creates a thumbnail when saving the image in Mac 
			 * OS.
			 */
			public macOSThumbnail: boolean;
			/**
			 * The behavior to use to check whether to maximize 
			 * compatibility when opening Adobe Photoshop (PSD) files.
			 */
			public maximizeCompatibility: Adobe.Photoshop.QueryStateType;
			/**
			 * Maximum percentage of available RAM used by Photoshop. ( 5 - 
			 * 100 )
			 */
			public maxRAMuse: number;
			/** If true, allows non-linear history. */
			public nonLinearHistory: boolean;
			/** The number of history states to preserve. Range: 1 to 100. */
			public numberOfHistoryStates: number;
			/** The type of pointer to use. */
			public otherCursors: Adobe.Photoshop.OtherPaintingCursors;
			/** The type of pointer to use. */
			public paintingCursors: Adobe.Photoshop.PaintingCursors;
			/**
			 * If true, halves the resolution or (doubles the size of 
			 * pixels) to make previews display more quickly.
			 */
			public pixelDoubling: boolean;
			/** The point/pica size. */
			public pointSize: Adobe.Photoshop.PointType;
			/**
			 * The number of items in the recent file list. Range: 0 to 30.
			 */
			public recentFileListLength: number;
			/**
			 * The unit that the scripting system uses when receiving and 
			 * returning values.
			 */
			public rulerUnits: Adobe.Photoshop.Units;
			/** Options for saving the history log items. */
			public saveLogItems: Adobe.Photoshop.SaveLogItemsType;
			/** The path to the history log file. */
			public saveLogItemsFile: File;
			/** If true, makes new palette locations the default location. */
			public savePaletteLocations: boolean;
			/**
			 * If true, Asian text options are displayed in the Paragraph 
			 * palette.
			 */
			public showAsianTextOptions: boolean;
			/** If true, Asian font names are listed in English. */
			public showEnglishFontNames: boolean;
			/**
			 * If true, displays slice numbers in the document window when 
			 * using the Slice tool.
			 */
			public showSliceNumber: boolean;
			/** If true, pop-up definitions are displayed on mouseover. */
			public showToolTips: boolean;
			/** If true, curly quote marks are used. */
			public smartQuotes: boolean;
			/** size of the small font used in panels and dialogs */
			public textFontSize: Adobe.Photoshop.FontSize;
			/**
			 * The unit type-size that the numeric inputs are assumed to 
			 * represent.
			 */
			public typeUnits: Adobe.Photoshop.TypeUnits;
			/**
			 * If true, uses an additional folder for compatible plug-ins 
			 * stored with a different application.
			 */
			public useAdditionalPluginFolder: boolean;
			/** If true, uses diffusion dither. */
			public useDiffusionDither: boolean;
			/** If true, history logging is enabled. */
			public useHistoryLog: boolean;
			/** If true, the file extension is lowercase. */
			public useLowerCaseExtension: boolean;
			/** If true, enables cycling through a set of hidden tools. */
			public useShiftKeyForToolSwitch: boolean;
			/**
			 * If true, enables Adobe Photoshop to send transparency 
			 * information to your computer?s video board. (Requires 
			 * hardware support.)
			 */
			public useVideoAlpha: boolean;
			/**
			 * If true, creates a thumbnail when saving the image in 
			 * Windows. (Requires hardware support.)
			 */
			public windowsThumbnail: boolean;
		}
	}
}